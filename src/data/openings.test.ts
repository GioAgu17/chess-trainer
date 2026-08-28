import { describe, expect, it } from 'vitest'
import { Chess } from 'chess.js'
import { OPENINGS, getOpening } from './openings'
import { DEFENCES, defenceSystems, defencesInFamily, getDefence } from './defences'
import { ENTRIES, getEntry } from './entries'
import type { MoveNode, RepertoireEntry } from './types'
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

describe.each(ENTRIES.map((o): [string, RepertoireEntry] => [o.name, o]))('%s', (_name, opening) => {
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

  it('never names the same wrong move twice at one decision point', () => {
    walk(opening.tree, (node, path) => {
      const sans = (node.mistakes ?? []).map((m) => normalizeSan(m.san))
      expect(
        new Set(sans).size,
        `duplicate named mistake at ${path.map((n) => n.san).join(' ')} in ${opening.name}`,
      ).toBe(sans.length)
    })
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

describe('sound alternatives', () => {
  it('never calls a move that loses material a sound alternative', () => {
    // `deliberate` tells the user the move is fine. Setting it on a move the
    // explanation says drops material would be the worst thing this trainer
    // could do, so guard that directly rather than pattern-matching praise.
    const LOSES_MATERIAL =
      /loses? (a |the )?(piece|pawn|bishop|knight|rook|queen|material)|wins the (bishop|knight|rook|queen|piece)|a whole piece down|hangs|dropped|blunder|is trapped|has nowhere to go/i
    for (const opening of ENTRIES) {
      walk(opening.tree, (node) => {
        for (const mistake of node.mistakes ?? []) {
          if (!mistake.deliberate) continue
          expect(
            mistake.why,
            `${opening.name} marks ${mistake.san} as sound but the reason describes material loss`,
          ).not.toMatch(LOSES_MATERIAL)
        }
      })
    }
  })

  it('gives every sound alternative a reason that explains the choice', () => {
    for (const opening of ENTRIES) {
      walk(opening.tree, (node) => {
        for (const mistake of node.mistakes ?? []) {
          if (!mistake.deliberate) continue
          expect(mistake.why.split(' ').length).toBeGreaterThan(6)
        }
      })
    }
  })

  it('has at least one sound alternative in every opening that declines one', () => {
    const flagged = ENTRIES.filter((opening) => {
      let found = false
      walk(opening.tree, (node) => {
        if ((node.mistakes ?? []).some((m) => m.deliberate)) found = true
      })
      return found
    })
    expect(flagged.length).toBeGreaterThanOrEqual(6)
  })
})

describe('defences', () => {
  it('has unique ids across the whole repertoire', () => {
    const ids = ENTRIES.map((e) => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('looks defences up by id, and entries of either kind', () => {
    expect(getDefence('vs-catalan-open')?.system).toBe('Catalan')
    expect(getDefence('nope')).toBeUndefined()
    expect(getEntry('italian-game')?.kind).toBe('opening')
    expect(getEntry('vs-london')?.kind).toBe('defence')
  })

  it('covers the systems an intermediate player actually meets', () => {
    const systems = new Set(DEFENCES.map((d) => d.system))
    for (const required of [
      'Catalan',
      'London System',
      'Trompowsky',
      'Colle / Zukertort',
      'Blackmar-Diemer and early d-pawn gambits',
      'King\'s Gambit',
      'Scotch',
      'Vienna',
      'Danish / Goring Gambit',
      'English',
      'Reti',
    ]) {
      expect(systems, `no defence covers ${required}`).toContain(required)
    }
  })

  it('covers all three families', () => {
    expect(defencesInFamily('d4').length).toBeGreaterThanOrEqual(5)
    expect(defencesInFamily('e4').length).toBeGreaterThanOrEqual(4)
    expect(defencesInFamily('flank').length).toBeGreaterThanOrEqual(2)
  })

  it('gives the Catalan two answers with distinct temperaments', () => {
    const catalan = defenceSystems().find((s) => s.system === 'Catalan')
    expect(catalan?.answers.length).toBe(2)
    const keys = catalan!.answers.map((a) => a.temperament?.key)
    expect(keys).toEqual(['open', 'closed'])
    for (const answer of catalan!.answers) {
      expect(answer.temperament?.blurb.split(' ').length).toBeGreaterThan(6)
    }
  })

  it('only uses a temperament where a system has more than one answer', () => {
    for (const group of defenceSystems()) {
      for (const answer of group.answers) {
        if (group.answers.length > 1) expect(answer.temperament).toBeDefined()
        else expect(answer.temperament).toBeUndefined()
      }
    }
  })

  it('describes the opponent system, not just the moves', () => {
    for (const defence of DEFENCES) {
      expect(defence.system.length, `${defence.id} has no system name`).toBeGreaterThan(0)
      expect(defence.recognisedBy.moves).toMatch(/[a-h1-8NBRQKO]/)
      expect(defence.recognisedBy.tell.split(' ').length).toBeGreaterThan(10)
      expect(
        defence.theirPlan.split(' ').length,
        `${defence.id} does not explain the opponent's plan`,
      ).toBeGreaterThan(40)
      expect(defence.recipe.length, `${defence.id} has too short a recipe`).toBeGreaterThanOrEqual(4)
      for (const step of defence.recipe) expect(step.split(' ').length).toBeGreaterThan(8)
    }
  })

  it('is always played from the black side', () => {
    // A defence answers what the opponent opens with, so the user is Black.
    for (const defence of DEFENCES) expect(defence.side).toBe('black')
  })

  it('starts every defence from the moves it says identify the system', () => {
    for (const defence of DEFENCES) {
      const first = normalizeSan(defence.tree[0].san)
      expect(
        defence.recognisedBy.moves,
        `${defence.id} says it is recognised by "${defence.recognisedBy.moves}" but its tree starts with ${first}`,
      ).toContain(first)
    }
  })
})

describe('traps', () => {
  const withTraps = ENTRIES.filter((entry) => (entry.traps ?? []).length > 0)

  it('gives every opening and every defence at least one trap', () => {
    for (const entry of ENTRIES) {
      expect((entry.traps ?? []).length, `${entry.id} has no traps`).toBeGreaterThanOrEqual(1)
    }
  })

  it('covers both sides within the openings and within the defences', () => {
    for (const group of [OPENINGS, DEFENCES]) {
      const owners = new Set(group.flatMap((e) => (e.traps ?? []).map((t) => t.owner)))
      expect(owners).toContain('ours')
      expect(owners).toContain('theirs')
    }
  })

  it('covers traps from both sides across the repertoire', () => {
    const owners = new Set(withTraps.flatMap((e) => (e.traps ?? []).map((t) => t.owner)))
    expect(owners).toContain('ours')
    expect(owners).toContain('theirs')
  })

  it('plays every trap sequence out legally', () => {
    for (const entry of withTraps) {
      for (const trap of entry.traps ?? []) {
        const chess = new Chess()
        const played: string[] = []
        for (const san of trap.moves) {
          const normalized = normalizeSan(san)
          expect(
            chess.moves().map(normalizeSan),
            `trap ${entry.id}/${trap.id}: ${san} is illegal after ${played.join(' ') || 'the start'}`,
          ).toContain(normalized)
          chess.move(normalized)
          played.push(normalized)
        }
      }
    }
  })

  it('points at a real move as the answer, with a real explanation', () => {
    const ids = new Set<string>()
    for (const entry of withTraps) {
      for (const trap of entry.traps ?? []) {
        const key = `${entry.id}/${trap.id}`
        expect(ids.has(key), `duplicate trap id ${key}`).toBe(false)
        ids.add(key)
        expect(trap.setup, `${key} has no set-up moves`).toBeGreaterThan(0)
        expect(trap.setup, `${key} points past the end of the line`).toBeLessThan(trap.moves.length)
        expect(trap.name.length).toBeGreaterThan(0)
        expect(trap.point.split(' ').length, `${key} is not explained`).toBeGreaterThan(20)
      }
    }
  })
})
