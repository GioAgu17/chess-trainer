import { Chess } from 'chess.js'
import type { LineEnd, MoveNode, Opening, Side } from '../data/types'

/**
 * Strip SAN decorations so that data written as `Bb5+` matches what chess.js
 * emits, and vice versa. Also accepts `0-0` for castling.
 */
export function normalizeSan(san: string): string {
  return san
    .replace(/0/g, 'O')
    .replace(/[+#!?]/g, '')
    .trim()
}

export function sanEquals(a: string, b: string): boolean {
  return normalizeSan(a) === normalizeSan(b)
}

/**
 * Whose move is it after `plyCount` plies have been played?
 * Ply 0 is White's first move.
 */
export function moverAt(plyCount: number): Side {
  return plyCount % 2 === 0 ? 'white' : 'black'
}

/** True when the user (playing `side`) is to move after `plyCount` plies. */
export function isUserPly(side: Side, plyCount: number): boolean {
  return moverAt(plyCount) === side
}

/** The nodes reachable from the position at the end of `path`. */
export function childrenAfter(opening: Opening, path: MoveNode[]): MoveNode[] {
  if (path.length === 0) return opening.tree
  return path[path.length - 1].children ?? []
}

/** A line is over when the last node played has no continuation. */
export function lineEnd(path: MoveNode[]): LineEnd | undefined {
  if (path.length === 0) return undefined
  const last = path[path.length - 1]
  if (last.children && last.children.length > 0) return undefined
  return last.end
}

export function isLineComplete(opening: Opening, path: MoveNode[]): boolean {
  return path.length > 0 && childrenAfter(opening, path).length === 0
}

export type Judgement =
  | { status: 'correct'; node: MoveNode }
  | {
      status: 'wrong'
      expected: MoveNode
      reason: string
      /** The move is sound but outside this repertoire - see `Mistake`. */
      deliberate: boolean
    }

const GENERIC_WRONG =
  'That is not the repertoire move here. Look again at what the position needs before anything else.'

/**
 * Judge a user move against the repertoire.
 *
 * `candidates` are the nodes available at this point in the tree. The first is
 * the move that is taught; any other listed node is also accepted as correct.
 */
export function judgeUserMove(candidates: MoveNode[], san: string): Judgement {
  const match = candidates.find((c) => sanEquals(c.san, san))
  if (match) return { status: 'correct', node: match }

  const expected = candidates[0]
  const named = expected?.mistakes?.find((m) => sanEquals(m.san, san))
  return {
    status: 'wrong',
    expected,
    reason: named?.why ?? expected?.hint ?? GENERIC_WRONG,
    deliberate: named?.deliberate === true,
  }
}

export type OpponentMode = 'main-line' | 'mixed'

/**
 * Choose the opponent's reply.
 *
 * `main-line` always plays the first child, which is the move the opening is
 * named after. `mixed` plays the main line about half the time and otherwise
 * picks one of the listed deviations, so the user meets real sidelines too.
 */
export function pickOpponentMove(
  candidates: MoveNode[],
  mode: OpponentMode,
  random: () => number = Math.random,
): MoveNode | undefined {
  if (candidates.length === 0) return undefined
  if (mode === 'main-line' || candidates.length === 1) return candidates[0]
  if (random() < 0.5) return candidates[0]
  const deviations = candidates.slice(1)
  const index = Math.min(deviations.length - 1, Math.floor(random() * deviations.length))
  return deviations[index]
}

/** The principal variation: follow the first child all the way down. */
export function mainLine(opening: Opening): MoveNode[] {
  const path: MoveNode[] = []
  let nodes = opening.tree
  while (nodes.length > 0) {
    const node = nodes[0]
    path.push(node)
    nodes = node.children ?? []
  }
  return path
}

/** Every root-to-leaf path in the tree. Used by the data-integrity tests. */
export function allLines(opening: Opening): MoveNode[][] {
  const lines: MoveNode[][] = []
  const walk = (nodes: MoveNode[], prefix: MoveNode[]) => {
    for (const node of nodes) {
      const path = [...prefix, node]
      const children = node.children ?? []
      if (children.length === 0) lines.push(path)
      else walk(children, path)
    }
  }
  walk(opening.tree, [])
  return lines
}

/** Replay a path and return the resulting FEN. Throws on an illegal move. */
export function fenAfter(path: MoveNode[]): string {
  const chess = new Chess()
  for (const node of path) {
    const move = chess.move(normalizeSan(node.san))
    if (!move) throw new Error(`illegal move ${node.san}`)
  }
  return chess.fen()
}

/**
 * A stable identity for a decision point, used as the key for the
 * "moves you keep getting wrong" record. The SAN path is enough: the same
 * sequence of moves always reaches the same position.
 */
export function pathKey(path: MoveNode[]): string {
  return path.map((n) => normalizeSan(n.san)).join(' ')
}

/** `1.e4` / `1...e5` style label for the move at index `ply` (0-based). */
export function moveLabel(ply: number, san: string): string {
  const moveNumber = Math.floor(ply / 2) + 1
  return ply % 2 === 0 ? `${moveNumber}.${san}` : `${moveNumber}...${san}`
}

/** Accuracy for a run: correct first attempts over total decision points. */
export function accuracy(userMoves: number, mistakes: number): number {
  if (userMoves === 0) return 0
  return Math.max(0, Math.round(((userMoves - mistakes) / userMoves) * 100))
}

/** Length of the main line in plies. Used for the progress read-out. */
export function totalPlies(opening: Opening): number {
  return mainLine(opening).length
}
