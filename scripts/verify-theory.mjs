/**
 * Engine-backed check of the repertoire, and of the puzzles generated from it.
 *
 * The unit tests prove every line is *legal* and spelled correctly. They cannot
 * tell you whether a move is *good*. This script asks Stockfish, at every point
 * in every tree - openings and defences alike - where the repertoire makes a
 * claim:
 *
 *   1. Is the move we teach objectively sound, or does it drop material or the
 *      evaluation compared with the engine's choice?
 *   2. Is each move we call a mistake actually worse than the move we teach?
 *   3. Are the opponent deviations we drill against moves anyone would play?
 *      A branch marked `punish` is checked the other way round: it has to be
 *      genuinely losing, or it does not belong in the tree.
 *
 * It then generates every punish and trap puzzle from the same data and checks
 * that each one has a single clear best answer, writing the ones that pass to
 * `src/data/puzzles.generated.ts`. A puzzle with an ambiguous or wrong answer
 * is worse than no puzzle, so one that fails is dropped and reported.
 *
 * Dev tooling. Nothing here ships with the app.
 *
 *   node scripts/verify-theory.mjs [--depth 24] [--threads 6] [--out report.json]
 *                                  [--skip-puzzles] [--only-puzzles]
 */
import { writeFile } from 'node:fs/promises'
import { Chess } from 'chess.js'
import { startEngine } from './engine.mjs'
import { loadRepertoire } from './build-openings.mjs'
import { candidatesFor, collectPositions, sanToUci } from './collect-positions.mjs'

const args = new Map()
const flags = new Set()
for (let i = 2; i < process.argv.length; i += 1) {
  const arg = process.argv[i]
  if (!arg.startsWith('--')) continue
  const name = arg.replace(/^--/, '')
  const next = process.argv[i + 1]
  if (next && !next.startsWith('--')) {
    args.set(name, next)
    i += 1
  } else {
    flags.add(name)
  }
}
const DEPTH = Number(args.get('depth') ?? 24)
const THREADS = Number(args.get('threads') ?? 6)
const OUT = args.get('out') ?? 'theory-report.json'
const PUZZLE_OUT = args.get('puzzles-out') ?? 'src/data/puzzles.generated.ts'

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

/** A branch marked `punish` has to be at least this bad, or it is mislabelled. */
const PUNISH_MUST_LOSE = 150

/**
 * A puzzle ships only if its answer is this far ahead of the next best move.
 * Below that the "one right answer" claim is not honest, and a puzzle that
 * rejects a move just as good as the solution teaches the wrong lesson.
 */
const PUZZLE_MARGIN = 90

/** ...and a punish puzzle also has to have something to punish. */
const PUZZLE_MIN_ADVANTAGE = 70

const uciToSan = (fen, uci) => {
  const chess = new Chess(fen)
  const move = chess.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] })
  return move.san.replace(/[+#]/g, '')
}

const repertoire = await loadRepertoire()
const entries = repertoire.ENTRIES
const engine = await startEngine({ threads: THREADS, multiThreaded: THREADS > 1, hash: 512 })

const findings = []
const evaluations = []
const started = Date.now()

const progress = (label, index, total) => {
  const elapsed = ((Date.now() - started) / 1000).toFixed(0)
  const eta = (((Date.now() - started) / Math.max(index, 1)) * (total - index) / 1000).toFixed(0)
  process.stderr.write(`\r${label} [${index}/${total}] ${elapsed}s elapsed, ~${eta}s left        `)
}

/* ------------------------------------------------------------------ theory */

let positions = new Map()
if (!flags.has('only-puzzles')) {
  positions = collectPositions(entries)
  let index = 0

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

    progress('theory', index, positions.size)

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
          if (deviation.punish) {
            // The claim here is the opposite one: this branch exists because
            // the move loses, so a *sound* move is the bug.
            if (loss < PUNISH_MUST_LOSE) {
              findings.push({
                severity: 'high',
                type: 'punish-branch-is-not-losing',
                where,
                fen: entry.fen,
                detail: `drills ${deviation.san} as a move to punish, but it only loses ${loss}cp against best play - the trainer would be teaching a refutation that is not there`,
              })
            }
          } else if (loss >= DEVIATION_IMPLAUSIBLE) {
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
  process.stderr.write('\n')
}

/* ----------------------------------------------------------------- puzzles */

const puzzles = []
const rejected = []

if (!flags.has('skip-puzzles')) {
  const candidates = repertoire.engineCandidates(entries)
  const at = new Date().toISOString().slice(0, 10)
  let index = 0

  for (const candidate of candidates) {
    index += 1
    progress('puzzles', index, candidates.length)

    // Two lines is enough: the best move and whatever comes closest to it.
    const lines = await engine.analyse(candidate.fen, { depth: DEPTH, multipv: 2 })
    if (lines.length === 0) {
      rejected.push({ id: candidate.id, reason: 'engine returned nothing' })
      continue
    }
    const bestSan = uciToSan(candidate.fen, lines[0].move)
    const margin = lines.length > 1 ? lines[0].cp - lines[1].cp : Infinity

    if (candidate.expected && bestSan !== candidate.expected) {
      // The data claimed an answer and the engine disagrees. That is worth
      // looking at by hand, so it is always listed rather than counted.
      rejected.push({
        kind: 'disputed',
        id: candidate.id,
        reason: `data says the answer is ${candidate.expected}, the engine plays ${bestSan}`,
        fen: candidate.fen,
      })
      continue
    }
    if (margin < PUZZLE_MARGIN) {
      rejected.push({
        kind: 'not-unique',
        id: candidate.id,
        reason: `answer ${bestSan} is only ${Number.isFinite(margin) ? margin : 0}cp better than the next move`,
        fen: candidate.fen,
      })
      continue
    }
    if (candidate.kind === 'punish' && lines[0].cp < PUZZLE_MIN_ADVANTAGE) {
      rejected.push({
        kind: 'nothing-to-punish',
        id: candidate.id,
        reason: `after the refutation the position is only ${lines[0].cp}cp`,
        fen: candidate.fen,
      })
      continue
    }

    const explanation =
      candidate.kind === 'punish' && candidate.flaw
        ? `${candidate.flaw} The move that shows it is ${bestSan}.`
        : candidate.explanation

    puzzles.push({
      id: candidate.id,
      kind: candidate.kind,
      entryId: candidate.entryId,
      fen: candidate.fen,
      solver: candidate.solver,
      solution: bestSan,
      prompt: candidate.prompt,
      explanation,
      line: candidate.line,
      verified: { depth: DEPTH, marginCp: Number.isFinite(margin) ? margin : 9999, at },
    })
  }
  process.stderr.write('\n')

  const header = `/**
 * GENERATED FILE - do not edit by hand.
 *
 * Written by \`npm run verify:theory\`. Every puzzle here has been through
 * Stockfish at depth ${DEPTH}: the answer is the engine's first choice and it is at
 * least ${PUZZLE_MARGIN} centipawns clear of the next move, so "there is one right answer"
 * is a claim the data can actually back. Candidates that failed either test are
 * dropped rather than shipped - see the run's console output for which.
 *
 * Recall puzzles are not here: their answer is the repertoire move itself, and
 * those positions are checked by the theory half of the same run.
 */
import type { VerifiedPuzzle } from './types'

export const VERIFIED_PUZZLES: VerifiedPuzzle[] = ${JSON.stringify(puzzles, null, 2)}

/** Depth every puzzle above was verified at. */
export const PUZZLE_VERIFY_DEPTH = ${DEPTH}
`
  await writeFile(PUZZLE_OUT, header)
}

engine.quit()

/* ------------------------------------------------------------------ report */

const order = { high: 0, medium: 1, low: 2 }
findings.sort((a, b) => order[a.severity] - order[b.severity] || a.where.localeCompare(b.where))

await writeFile(
  OUT,
  JSON.stringify(
    { depth: DEPTH, positions: positions.size, findings, evaluations, puzzles: { shipped: puzzles.length, rejected } },
    null,
    2,
  ),
)

console.log(`\nStockfish depth ${DEPTH}, ${positions.size} positions, ${findings.length} findings\n`)
for (const finding of findings) {
  console.log(`[${finding.severity}] ${finding.type}`)
  console.log(`  ${finding.where}`)
  console.log(`  ${finding.detail}`)
  if (finding.why) console.log(`  reason given: ${finding.why}`)
  if (finding.enginePv) console.log(`  engine line: ${finding.enginePv}`)
  console.log()
}

if (!flags.has('skip-puzzles')) {
  const disputed = rejected.filter((entry) => entry.kind === 'disputed')
  const notUnique = rejected.filter((entry) => entry.kind === 'not-unique').length
  const nothingToPunish = rejected.filter((entry) => entry.kind === 'nothing-to-punish').length
  console.log(`Puzzles: ${puzzles.length} verified and written to ${PUZZLE_OUT}`)
  console.log(`  dropped: ${notUnique} with no single clear answer, ${nothingToPunish} with nothing to punish`)
  // A candidate whose answer came from the data is the only kind worth
  // reading one by one: the engine is contradicting something we wrote down.
  console.log(`  disputed by the engine: ${disputed.length}`)
  for (const entry of disputed) console.log(`    - ${entry.id}: ${entry.reason}`)
  console.log()
}
console.log(`Full report written to ${OUT}`)
