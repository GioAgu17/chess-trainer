/**
 * A small UCI wrapper around the bundled Stockfish WASM build.
 *
 * Dev tooling only: nothing here is imported by the app, which ships without
 * an engine and works offline.
 */
import { spawn } from 'node:child_process'
import { createInterface } from 'node:readline'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

/** Convert a UCI score, which is relative to the side to move, to centipawns. */
export function scoreToCp(type, value) {
  if (type === 'mate') return value > 0 ? 100000 - value * 100 : -100000 - value * 100
  return value
}

export async function startEngine({ threads = 1, hash = 256, multiThreaded = false } = {}) {
  // Run the WASM build as a child process speaking plain UCI on stdio. Its own
  // in-process API is awkward to drive, and a pipe is the transport every
  // other chess tool already uses.
  let enginePath
  try {
    enginePath = require.resolve(
      multiThreaded ? 'stockfish/bin/stockfish-18.js' : 'stockfish/bin/stockfish-18-single.js',
    )
  } catch {
    throw new Error(
      'Stockfish is not installed. It is ~240 MB of WASM, so it is deliberately not a\n' +
        'dependency of this app. Install it just for this run:\n\n' +
        '  npm install --no-save stockfish\n',
    )
  }

  // The engine is a child process that can wedge - under heavy load the WASM
  // build has been seen to stop answering entirely. Everything below is
  // written so that a wedged engine costs one position, not the whole run.
  let child
  let listeners

  const spawnEngine = () => {
    child = spawn(process.execPath, [enginePath], { stdio: ['pipe', 'pipe', 'pipe'] })
    child.stderr.resume()
    listeners = new Set()
    createInterface({ input: child.stdout }).on('line', (line) => {
      const trimmed = line.trim()
      if (!trimmed) return
      for (const listener of [...listeners]) listener(trimmed)
    })
  }
  spawnEngine()

  const send = (command) => child.stdin.write(`${command}\n`)

  /**
   * Run `command` and collect output until `isDone` says we are finished.
   *
   * `budgetMs` is a backstop, not the search limit - searches are bounded by
   * `movetime` below. If this fires, the engine is genuinely wedged.
   */
  const run = (command, isDone, budgetMs = 5 * 60 * 1000) =>
    new Promise((resolve, reject) => {
      const lines = []
      const timer = setTimeout(() => {
        listeners.delete(listener)
        reject(new Error(`engine timed out on: ${command}`))
      }, budgetMs)
      const listener = (line) => {
        lines.push(line)
        if (!isDone(line)) return
        clearTimeout(timer)
        listeners.delete(listener)
        resolve(lines)
      }
      listeners.add(listener)
      send(command)
    })

  /** Bring a freshly spawned engine up to the settings this run wants. */
  const configure = async () => {
    await run('uci', (line) => line === 'uciok')
    send(`setoption name Threads value ${threads}`)
    send(`setoption name Hash value ${hash}`)
    await run('isready', (line) => line === 'readyok')
  }
  await configure()

  /** Kill a wedged engine and start a clean one. */
  const restart = async () => {
    try {
      child.kill('SIGKILL')
    } catch {
      // Already gone; that is the outcome we wanted anyway.
    }
    spawnEngine()
    await configure()
  }

  /**
   * Search one position and return an eval per line, best first.
   *
   * `searchmoves` restricts the search to exactly those moves, which is what
   * makes checking a handful of specific candidates cheap.
   *
   * `movetime` caps how long any one search may take. Without it a single
   * awkward position can run for many minutes and take a whole verification
   * run down with it; with it, a hard position returns the deepest line it
   * reached instead. The returned entries carry the depth actually reached, so
   * a capped search is visible rather than silently passed off as a full one.
   */
  async function search(fen, { depth, searchmoves, multipv, movetime }) {
    send(`setoption name MultiPV value ${multipv}`)
    await run('isready', (line) => line === 'readyok')
    send(`position fen ${fen}`)
    const restriction = searchmoves.length ? ` searchmoves ${searchmoves.join(' ')}` : ''
    const limit = movetime > 0 ? ` movetime ${movetime}` : ''
    return run(
      `go depth ${depth}${limit}${restriction}`,
      (line) => line.startsWith('bestmove'),
      movetime > 0 ? movetime + 60 * 1000 : 5 * 60 * 1000,
    )
  }

  async function analyse(fen, { depth, searchmoves = [], multipv = 1, movetime = 0 }) {
    let lines
    try {
      lines = await search(fen, { depth, searchmoves, multipv, movetime })
    } catch (error) {
      // A wedged engine is recoverable: kill it, start a clean one, and give
      // the position one more go. Losing an hour of work to one position is
      // not.
      process.stderr.write(`\nengine wedged (${error.message}); restarting\n`)
      await restart()
      lines = await search(fen, { depth, searchmoves, multipv, movetime })
    }

    // Keep only the deepest `info` line seen for each multipv slot.
    const best = new Map()
    for (const line of lines) {
      if (!line.startsWith('info ') || !line.includes(' pv ')) continue
      const depthMatch = line.match(/ depth (\d+) /)
      const pvIndex = Number(line.match(/ multipv (\d+) /)?.[1] ?? 1)
      const score = line.match(/ score (cp|mate) (-?\d+)/)
      const pv = line.match(/ pv (.+)$/)
      if (!depthMatch || !score || !pv) continue
      const entry = {
        depth: Number(depthMatch[1]),
        cp: scoreToCp(score[1], Number(score[2])),
        mate: score[1] === 'mate' ? Number(score[2]) : null,
        move: pv[1].split(' ')[0],
        pv: pv[1].split(' ').slice(0, 8).join(' '),
      }
      const previous = best.get(pvIndex)
      if (!previous || entry.depth >= previous.depth) best.set(pvIndex, entry)
    }
    return [...best.values()].sort((a, b) => b.cp - a.cp)
  }

  return {
    analyse,
    quit: () => {
      try {
        send('quit')
        child.kill()
      } catch {
        // Already gone.
      }
    },
  }
}
