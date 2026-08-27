/**
 * Engine-backed check of the repertoire.
 *
 * The unit tests prove every line is *legal* and spelled correctly. They cannot
 * tell you whether a move is *good*. This script asks Stockfish, at every point
 * in the tree where the repertoire makes a claim:
 *
 *   1. Is the move we teach objectively sound, or does it drop material or the
 *      evaluation compared with the engine's choice?
 *   2. Is each move we call a mistake actually worse than the move we teach?
 *   3. Are the opponent deviations we drill against moves anyone would play?
 *
 * Dev tooling. Nothing here ships with the app.
 *
 *   node scripts/verify-theory.mjs [--depth 24] [--threads 6] [--out report.json]
 */
import { writeFile } from 'node:fs/promises'
import { Chess } from 'chess.js'
import { startEngine } from './engine.mjs'
import { loadOpenings } from './build-openings.mjs'
import { candidatesFor, collectPositions, sanToUci } from './collect-positions.mjs'

const args = new Map()
for (let i = 2; i < process.argv.length; i += 2) {
  args.set(process.argv[i].replace(/^--/, ''), process.argv[i + 1])
}
const DEPTH = Number(args.get('depth') ?? 24)
const THREADS = Number(args.get('threads') ?? 6)
const OUT = args.get('out') ?? 'theory-report.json'

/**
 * How far a move may fall short of the engine's choice before we call it out.
 * Opening theory is full of moves 20-40cp "worse" than the engine's pick that
 * are perfectly good practical choices, so only a real gap is interesting.
 */
const TAUGHT_SUSPECT = 60
const TAUGHT_SERIOUS = 110

/** A named mistake this much better than the move we teach is not a mistake. */
const MISTAKE_TOLERANCE = 15

/** An opponent deviation worse than this is not a move a human would play. */
const DEVIATION_IMPLAUSIBLE = 220

const uciToSan = (fen, uci) => {
  const chess = new Chess(fen)
  const move = chess.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] })
  return move.san.replace(/[+#]/g, '')
}

const openings = await loadOpenings()
const positions = collectPositions(openings)
const engine = await startEngine({ threads: THREADS, multiThreaded: THREADS > 1, hash: 512 })

const findings = []
const evaluations = []
let index = 0
const started = Date.now()

for (const entry of positions.values()) {
  index += 1
  const candidates = candidatesFor(entry)
  const uciBySan = new Map(candidates.map((san) => [san, sanToUci(entry.fen, san)]))

  const [best] = await engine.analyse(entry.fen, { depth: DEPTH, multipv: 1 })
  const restricted = await engine.analyse(entry.fen, {
    depth: DEPTH,
    multipv: candidates.length,
    searchmoves: [...uciBySan.values()],
  })
  const cpByUci = new Map(restricted.map((line) => [line.move, line.cp]))
  const cpOf = (san) => cpByUci.get(uciBySan.get(san))

  const elapsed = ((Date.now() - started) / 1000).toFixed(0)
  const eta = (((Date.now() - started) / index) * (positions.size - index) / 1000).toFixed(0)
  process.stderr.write(
    `\r[${index}/${positions.size}] ${elapsed}s elapsed, ~${eta}s left        `,
  )

  evaluations.push({
    fen: entry.fen,
    best: { san: uciToSan(entry.fen, best.move), cp: best.cp, pv: best.pv },
    candidates: candidates.map((san) => ({ san, cp: cpOf(san) ?? null })),
    contexts: entry.contexts,
  })

  for (const context of entry.contexts) {
    const where = `${context.openingName}: after ${context.line || 'the start'}`

    if (context.kind === 'user') {
      const taughtCp = cpOf(context.taught)
      if (taughtCp === undefined) continue
      const loss = best.cp - taughtCp
      if (loss >= TAUGHT_SUSPECT) {
        findings.push({
          severity: loss >= TAUGHT_SERIOUS ? 'high' : 'medium',
          type: 'taught-move-worse-than-engine',
          where,
          fen: entry.fen,
          detail: `teaches ${context.taught} (${taughtCp}cp) but the engine prefers ${uciToSan(entry.fen, best.move)} (${best.cp}cp), a gap of ${loss}cp`,
          enginePv: best.pv,
        })
      }

      for (const mistake of context.mistakes) {
        const mistakeCp = cpOf(mistake.san)
        if (mistakeCp === undefined) continue
        const delta = mistakeCp - taughtCp
        // A move flagged `deliberate` is declined on repertoire grounds, not
        // because it is bad, so it is allowed to evaluate at least as well.
        if (delta > MISTAKE_TOLERANCE && !mistake.deliberate) {
          findings.push({
            severity: delta > 60 ? 'high' : 'medium',
            type: 'named-mistake-is-not-worse',
            where,
            fen: entry.fen,
            detail: `calls ${mistake.san} (${mistakeCp}cp) a mistake, but it evaluates ${delta}cp better than the taught ${context.taught} (${taughtCp}cp)`,
            why: mistake.why,
          })
        }
      }
    } else {
      for (const deviation of context.deviations) {
        const deviationCp = cpOf(deviation.san)
        if (deviationCp === undefined) continue
        const loss = best.cp - deviationCp
        if (loss >= DEVIATION_IMPLAUSIBLE) {
          findings.push({
            severity: 'low',
            type: 'deviation-implausible',
            where,
            fen: entry.fen,
            detail: `drills against ${deviation.san} (${deviation.label ?? 'unlabelled'}), which loses ${loss}cp against best play - is it worth a branch?`,
          })
        }
      }
    }
  }
}

engine.quit()
process.stderr.write('\n')

const order = { high: 0, medium: 1, low: 2 }
findings.sort((a, b) => order[a.severity] - order[b.severity] || a.where.localeCompare(b.where))

await writeFile(OUT, JSON.stringify({ depth: DEPTH, positions: positions.size, findings, evaluations }, null, 2))

console.log(`\nStockfish depth ${DEPTH}, ${positions.size} positions, ${findings.length} findings\n`)
for (const finding of findings) {
  console.log(`[${finding.severity}] ${finding.type}`)
  console.log(`  ${finding.where}`)
  console.log(`  ${finding.detail}`)
  if (finding.why) console.log(`  reason given: ${finding.why}`)
  if (finding.enginePv) console.log(`  engine line: ${finding.enginePv}`)
  console.log()
}
console.log(`Full report written to ${OUT}`)
