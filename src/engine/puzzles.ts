import { Chess } from 'chess.js'
import type { Puzzle, PuzzleKind, RepertoireEntry, Side, VerifiedPuzzle } from '../data/types'
import { isUserPly, moveLabel, normalizeSan, pathKey } from './tree'

/**
 * Puzzle generation.
 *
 * Everything here is a pure function of the repertoire. Recall puzzles are
 * safe to build at runtime, because their answer *is* the repertoire move and
 * `npm run verify:theory` has already put every one of those positions through
 * Stockfish. Punish and trap puzzles claim something the repertoire data does
 * not state - "this refutation is the move" - so they are generated offline,
 * checked by the engine, and shipped as `src/data/puzzles.generated.ts`.
 * Nothing evaluates a position at runtime.
 */

/** A puzzle the verifier still has to check, and possibly solve. */
export interface PuzzleCandidate {
  id: string
  kind: PuzzleKind
  entryId: string
  fen: string
  solver: Side
  line: string[]
  prompt: string
  explanation: string
  /** Set when the data already knows the answer; absent means the engine finds it. */
  expected?: string
  /** Filled in by the verifier for a punish candidate, to build the explanation. */
  flaw?: string
}

/** `1.e4 e5 2.Nf3 Nc6` from a list of SAN moves. */
export function describeLine(sans: string[]): string {
  const parts: string[] = []
  sans.forEach((san, ply) => {
    const number = Math.floor(ply / 2) + 1
    parts.push(ply % 2 === 0 ? `${number}.${normalizeSan(san)}` : normalizeSan(san))
  })
  return parts.join(' ')
}

function fenOf(sans: string[]): string {
  const chess = new Chess()
  for (const san of sans) chess.move(normalizeSan(san))
  return chess.fen()
}

const other = (side: Side): Side => (side === 'white' ? 'black' : 'white')

/** Walk one entry's tree, calling `visit` with every node and its full path. */
function walk(
  entry: RepertoireEntry,
  visit: (node: RepertoireEntry['tree'][number], path: RepertoireEntry['tree']) => void,
) {
  const recurse = (nodes: RepertoireEntry['tree'], prefix: RepertoireEntry['tree']) => {
    for (const node of nodes) {
      const path = [...prefix, node]
      visit(node, path)
      recurse(node.children ?? [], path)
    }
  }
  recurse(entry.tree, [])
}

const SIDE_NAME: Record<Side, string> = { white: 'White', black: 'Black' }

/**
 * One recall puzzle per decision point in the repertoire: the position, out of
 * sequence, and the question "what is the move?".
 */
export function recallPuzzles(entries: RepertoireEntry[]): Puzzle[] {
  const puzzles: Puzzle[] = []
  for (const entry of entries) {
    const seen = new Set<string>()
    walk(entry, (node, path) => {
      const ply = path.length - 1
      if (!isUserPly(entry.side, ply)) return
      const before = path.slice(0, -1)
      const key = pathKey(before)
      // The same decision point is reached by one path only, but a transposed
      // move order would produce the same key - keep the first.
      if (seen.has(key)) return
      seen.add(key)
      const sans = before.map((n) => normalizeSan(n.san))
      puzzles.push({
        id: `recall:${entry.id}:${key.replace(/\s+/g, '-') || 'start'}`,
        kind: 'recall',
        entryId: entry.id,
        fen: fenOf(sans),
        solver: entry.side,
        solution: normalizeSan(node.san),
        prompt:
          sans.length === 0
            ? `${SIDE_NAME[entry.side]} to play the first move of the repertoire.`
            : `${SIDE_NAME[entry.side]} to play. What does the repertoire play here?`,
        explanation: node.idea ?? 'The repertoire move.',
        line: sans,
        moveKey: `${entry.id}|${key}`,
      })
    })
  }
  return puzzles
}

/**
 * Punish puzzles from the tempting wrong moves already in the data.
 *
 * A named mistake is a move the user is tempted by, so the exercise puts the
 * *opponent* in that seat: they have just played it, and the solver has to show
 * why it fails. The engine supplies the refutation - the repertoire never
 * states one - which is why these are verified offline.
 */
export function punishCandidates(entries: RepertoireEntry[]): PuzzleCandidate[] {
  const candidates: PuzzleCandidate[] = []
  for (const entry of entries) {
    walk(entry, (node, path) => {
      const ply = path.length - 1
      if (!isUserPly(entry.side, ply)) return
      for (const mistake of node.mistakes ?? []) {
        // A `deliberate` move is sound; there is nothing to punish.
        if (mistake.deliberate) continue
        const sans = [...path.slice(0, -1).map((n) => normalizeSan(n.san)), normalizeSan(mistake.san)]
        const chess = new Chess()
        let legal = true
        for (const san of sans) {
          try {
            chess.move(san)
          } catch {
            legal = false
            break
          }
        }
        if (!legal) continue
        const solver = other(entry.side)
        candidates.push({
          id: `punish:${entry.id}:${sans.join('-')}`,
          kind: 'punish',
          entryId: entry.id,
          fen: chess.fen(),
          solver,
          line: sans,
          prompt: `Your opponent has just played ${moveLabel(sans.length - 1, normalizeSan(mistake.san))}. Show why it does not work.`,
          explanation: mistake.why,
          flaw: mistake.why,
        })
      }
    })
  }
  return candidates
}

/**
 * Punish puzzles from opponent branches the repertoire marks `punish`: moves
 * included precisely because they lose, with the refutation already in the
 * tree as the next node. The engine still has to agree that it is *the* move.
 */
export function punishBranchCandidates(entries: RepertoireEntry[]): PuzzleCandidate[] {
  const candidates: PuzzleCandidate[] = []
  for (const entry of entries) {
    walk(entry, (node, path) => {
      if (!node.punish) return
      const answer = (node.children ?? [])[0]
      if (!answer) return
      const sans = path.map((n) => normalizeSan(n.san))
      candidates.push({
        id: `punish:${entry.id}:${sans.join('-')}`,
        kind: 'punish',
        entryId: entry.id,
        fen: fenOf(sans),
        solver: entry.side,
        line: sans,
        expected: normalizeSan(answer.san),
        prompt: `Your opponent has just played ${moveLabel(sans.length - 1, normalizeSan(node.san))}. Punish it.`,
        explanation: answer.idea ?? 'The refutation.',
      })
    })
  }
  return candidates
}

/** One puzzle per trap: the position just before the point, and the point. */
export function trapCandidates(entries: RepertoireEntry[]): PuzzleCandidate[] {
  const candidates: PuzzleCandidate[] = []
  for (const entry of entries) {
    for (const trap of entry.traps ?? []) {
      // A trap that teaches a habit has no single engine-best answer, so it is
      // study material rather than an exercise.
      if (trap.drillable === false) continue
      const sans = trap.moves.slice(0, trap.setup).map(normalizeSan)
      const answer = normalizeSan(trap.moves[trap.setup])
      const solver: Side = sans.length % 2 === 0 ? 'white' : 'black'
      candidates.push({
        id: `trap:${entry.id}:${trap.id}`,
        kind: 'trap',
        entryId: entry.id,
        fen: fenOf(sans),
        solver,
        line: sans,
        expected: answer,
        prompt:
          trap.owner === 'ours'
            ? `${trap.name}. ${SIDE_NAME[solver]} to play - find the move that makes it work.`
            : `${trap.name}. ${SIDE_NAME[solver]} to play - find the move you need to see coming.`,
        explanation: trap.point,
      })
    }
  }
  return candidates
}

/** Every candidate that needs Stockfish before it can ship. */
export function engineCandidates(entries: RepertoireEntry[]): PuzzleCandidate[] {
  return [
    ...punishBranchCandidates(entries),
    ...punishCandidates(entries),
    ...trapCandidates(entries),
  ]
}

/**
 * The pool a user actually sees: recall puzzles built from the repertoire plus
 * the verified punish and trap puzzles, restricted to the entries they train.
 */
export function puzzlePool(
  entries: RepertoireEntry[],
  verified: VerifiedPuzzle[],
): Puzzle[] {
  const ids = new Set(entries.map((entry) => entry.id))
  return [
    ...recallPuzzles(entries),
    ...verified.filter((puzzle) => ids.has(puzzle.entryId)),
  ]
}

/** True when `san` answers the puzzle. Decorations are ignored. */
export function isSolution(puzzle: Puzzle, san: string): boolean {
  const played = normalizeSan(san)
  if (played === normalizeSan(puzzle.solution)) return true
  return (puzzle.alsoAccepted ?? []).some((alt) => normalizeSan(alt) === played)
}

export const KIND_LABEL: Record<PuzzleKind, string> = {
  recall: 'Recall',
  punish: 'Punish the mistake',
  trap: 'Trap',
}
