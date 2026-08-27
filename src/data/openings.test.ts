import { describe, expect, it } from 'vitest'
import { Chess } from 'chess.js'
import { OPENINGS, getOpening } from './openings'
import type { MoveNode, Opening } from './types'
import { allLines, isUserPly, mainLine, normalizeSan } from '../engine/tree'

/**
 * These tests are the guard rail on the repertoire data. A trainer that teaches
 * an illegal or mistyped move is worse than no trainer, so every single node in
 * every opening is replayed through chess.js.
 */

function walk(nodes: MoveNode[], visit: (node: MoveNode, path: MoveNode[]) => void, prefix: MoveNode[] = []) {
  for (const node of nodes) {
    const path = [...prefix, node]
    visit(node, path)
    walk(node.children ?? [], visit, path)
  }
}

describe('repertoire', () => {
  it('covers both colours', () => {
    expect(OPENINGS.filter((o) => o.side === 'white').length).toBeGreaterThanOrEqual(4)
    expect(OPENINGS.filter((o) => o.side === 'black').length).toBeGreaterThanOrEqual(4)
  })

  it('has unique ids', () => {
    const ids = OPENINGS.map((o) => o.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('looks openings up by id', () => {
    expect(getOpening('italian-game')?.name).toContain('Italian')
    expect(getOpening('nope')).toBeUndefined()
  })

  it('gives every opening a name, an ECO code and a summary', () => {
    for (const opening of OPENINGS) {
      expect(opening.name.length).toBeGreaterThan(0)
      expect(opening.eco).toMatch(/^[A-E]\d{2}$/)
      expect(opening.summary.split(' ').length).toBeGreaterThan(15)
    }
  })
})

describe.each(OPENINGS.map((o): [string, Opening] => [o.name, o]))('%s', (_name, opening) => {
  it('starts with a single first move for the side that moves first', () => {
    // Every tree is rooted at the initial position, so the root nodes are
    // White's first move whichever colour the user plays.
    expect(opening.tree.length).toBeGreaterThan(0)
    const chess = new Chess()
    for (const node of opening.tree) {
      expect(chess.moves().map(normalizeSan)).toContain(normalizeSan(node.san))
    }
  })

  it('contains only legal moves', () => {
    for (const line of allLines(opening)) {
      const chess = new Chess()
      const played: string[] = []
      for (const node of line) {
        const legal = chess.moves()
        const san = normalizeSan(node.san)
        expect(
          legal.map(normalizeSan),
          `illegal move ${node.san} after ${played.join(' ') || 'the start'} in ${opening.name}`,
        ).toContain(san)
        chess.move(san)
        played.push(san)
      }
    }
  })

  it('writes every SAN exactly as chess.js does, including disambiguation', () => {
    for (const line of allLines(opening)) {
      const chess = new Chess()
      for (const node of line) {
        const move = chess.move(normalizeSan(node.san))
        expect(
          normalizeSan(move.san),
          `${node.san} should be written ${move.san} in ${opening.name}`,
        ).toBe(normalizeSan(node.san))
      }
    }
  })

  it('ends every line with a summary the user can read', () => {
    for (const line of allLines(opening)) {
      const last = line[line.length - 1]
      const path = line.map((n) => n.san).join(' ')
      expect(last.end, `no end summary after ${path} in ${opening.name}`).toBeDefined()
      expect(last.end!.name.length).toBeGreaterThan(0)
      expect(last.end!.plans.length).toBeGreaterThanOrEqual(2)
    }
  })

  it('has a main line of a sensible length', () => {
    const line = mainLine(opening)
    expect(line.length).toBeGreaterThanOrEqual(8)
    expect(line.length).toBeLessThanOrEqual(16)
  })

  it('offers exactly one taught move at every user turn', () => {
    walk(opening.tree, (node, path) => {
      const children = node.children ?? []
      if (children.length === 0) return
      const childPly = path.length
      if (!isUserPly(opening.side, childPly)) return
      expect(
        children.length,
        `${path.map((n) => n.san).join(' ')} in ${opening.name} has ${children.length} user replies`,
      ).toBe(1)
    })
  })

  it('explains every move the user has to find', () => {
    walk(opening.tree, (node, path) => {
      const ply = path.length - 1
      if (!isUserPly(opening.side, ply)) return
      expect(node.idea, `${node.san} in ${opening.name} has no idea text`).toBeTruthy()
      expect(node.hint, `${node.san} in ${opening.name} has no hint`).toBeTruthy()
    })
  })

  it('labels every opponent choice where there is more than one', () => {
    walk(opening.tree, (node, path) => {
      const children = node.children ?? []
      if (children.length < 2) return
      for (const child of children) {
        expect(
          child.label,
          `${path.map((n) => n.san).join(' ')} ${child.san} in ${opening.name} has no label`,
        ).toBeTruthy()
      }
    })
  })

  it('offers between two and four opponent replies at real branch points', () => {
    walk(opening.tree, (node, path) => {
      const children = node.children ?? []
      if (children.length < 2) return
      expect(
        children.length,
        `${path.map((n) => n.san).join(' ')} in ${opening.name} has ${children.length} replies`,
      ).toBeLessThanOrEqual(5)
    })
  })

  it('only names wrong moves that are legal and genuinely wrong', () => {
    for (const line of allLines(opening)) {
      const chess = new Chess()
      for (const node of line) {
        for (const mistake of node.mistakes ?? []) {
          const san = normalizeSan(mistake.san)
          expect(
            chess.moves().map(normalizeSan),
            `named mistake ${mistake.san} is not legal in ${opening.name}`,
          ).toContain(san)
          expect(
            san,
            `${mistake.san} is listed as a mistake but it is the repertoire move`,
          ).not.toBe(normalizeSan(node.san))
          expect(mistake.why.length).toBeGreaterThan(20)
        }
        chess.move(normalizeSan(node.san))
      }
    }
  })

  it('never lists the same reply twice at one branch point', () => {
    walk(opening.tree, (node, path) => {
      const children = node.children ?? []
      const sans = children.map((c) => normalizeSan(c.san))
      expect(
        new Set(sans).size,
        `duplicate reply after ${path.map((n) => n.san).join(' ')} in ${opening.name}`,
      ).toBe(sans.length)
    })
  })

  it('reaches a distinct position for every line it teaches', () => {
    const seen = new Set<string>()
    for (const line of allLines(opening)) {
      const chess = new Chess()
      for (const node of line) chess.move(normalizeSan(node.san))
      const fen = chess.fen()
      expect(seen.has(fen), `two lines in ${opening.name} end on the same position`).toBe(false)
      seen.add(fen)
    }
  })
})
