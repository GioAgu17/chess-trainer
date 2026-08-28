/**
 * Flatten the repertoire into a list of unique positions with the candidate
 * moves that need checking at each one. Shared by the verification script.
 *
 * "The repertoire" here is every entry - openings you choose and defences you
 * meet - because both use the same tree shape.
 */
import { Chess } from 'chess.js'

const DECORATION = /[+#!?]/g

export function normalize(san) {
  return san.replace(/0/g, 'O').replace(DECORATION, '').trim()
}

/** Turn a SAN into the UCI move string the engine expects. */
export function sanToUci(fen, san) {
  const chess = new Chess(fen)
  const move = chess.move(normalize(san))
  return move.from + move.to + (move.promotion ?? '')
}

const isUserPly = (side, ply) => (ply % 2 === 0 ? 'white' : 'black') === side

/**
 * @returns {Map<string, {fen: string, contexts: Array}>} keyed by FEN.
 * Each context records one place in one opening where that position is
 * reached, and what is being claimed about it.
 */
export function collectPositions(openings) {
  const positions = new Map()

  const record = (fen, context) => {
    if (!positions.has(fen)) positions.set(fen, { fen, contexts: [] })
    positions.get(fen).contexts.push(context)
  }

  for (const opening of openings) {
    const walk = (nodes, path) => {
      if (nodes.length === 0) return
      const chess = new Chess()
      for (const node of path) chess.move(normalize(node.san))
      const fen = chess.fen()
      const ply = path.length
      const forUser = isUserPly(opening.side, ply)
      const line = path.map((n) => normalize(n.san)).join(' ')

      if (forUser) {
        const taught = nodes[0]
        record(fen, {
          kind: 'user',
          opening: opening.id,
          openingName: opening.name,
          side: opening.side,
          ply,
          line,
          taught: normalize(taught.san),
          alternatives: nodes.slice(1).map((n) => normalize(n.san)),
          mistakes: (taught.mistakes ?? []).map((m) => ({
            san: normalize(m.san),
            why: m.why,
            deliberate: m.deliberate === true,
          })),
        })
      } else {
        record(fen, {
          kind: 'opponent',
          opening: opening.id,
          openingName: opening.name,
          side: opening.side,
          ply,
          line,
          mainLine: normalize(nodes[0].san),
          deviations: nodes.slice(1).map((n) => ({
            san: normalize(n.san),
            label: n.label,
            // A branch marked `punish` is in the tree *because* it loses. The
            // verifier inverts its plausibility check rather than flagging it.
            punish: n.punish === true,
          })),
        })
      }

      for (const node of nodes) walk(node.children ?? [], [...path, node])
    }
    walk(opening.tree, [])
  }

  return positions
}

/** Every move at a position that the repertoire makes a claim about. */
export function candidatesFor(entry) {
  const moves = new Set()
  for (const context of entry.contexts) {
    if (context.kind === 'user') {
      moves.add(context.taught)
      for (const alternative of context.alternatives) moves.add(alternative)
      for (const mistake of context.mistakes) moves.add(mistake.san)
    } else {
      moves.add(context.mainLine)
      for (const deviation of context.deviations) moves.add(deviation.san)
    }
  }
  return [...moves]
}
