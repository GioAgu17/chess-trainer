import { describe, expect, it } from 'vitest'
import { Chess } from 'chess.js'
import { DEFENCES, ENTRIES, getEntry } from '../data/entries'
import { VERIFIED_PUZZLES } from '../data/puzzles.generated'
import {
  describeLine,
  engineCandidates,
  isSolution,
  punishBranchCandidates,
  punishCandidates,
  puzzlePool,
  recallPuzzles,
  trapCandidates,
} from './puzzles'
import { decisionPoints, normalizeSan } from './tree'
import { STUDY_GUIDES } from '../data/study'
import { allContentStrings } from '../i18n/keys'
import { en } from '../i18n/ui/en'

const italian = getEntry('italian-game')!
const kingsGambit = getEntry('vs-kings-gambit')!

describe('describing a line', () => {
  it('numbers the moves the way a player writes them', () => {
    expect(describeLine(['e4', 'e5', 'Nf3'])).toBe('1.e4 e5 2.Nf3')
    expect(describeLine([])).toBe('')
  })
})

describe('recall puzzles', () => {
  const puzzles = recallPuzzles(ENTRIES)

  it('makes one for every decision point in the repertoire', () => {
    const expected = ENTRIES.reduce((sum, entry) => sum + decisionPoints(entry).length, 0)
    expect(puzzles).toHaveLength(expected)
  })

  it('gives every one a legal answer in its own position', () => {
    for (const puzzle of puzzles) {
      const chess = new Chess(puzzle.fen)
      expect(
        chess.moves().map(normalizeSan),
        `${puzzle.id}: ${puzzle.solution} is not legal`,
      ).toContain(normalizeSan(puzzle.solution))
    }
  })

  it('asks the side whose repertoire it is', () => {
    for (const puzzle of puzzles) {
      const entry = getEntry(puzzle.entryId)!
      expect(puzzle.solver).toBe(entry.side)
      const turn = new Chess(puzzle.fen).turn() === 'w' ? 'white' : 'black'
      expect(turn, `${puzzle.id} asks the wrong side to move`).toBe(puzzle.solver)
    }
  })

  it('reaches the position it claims by playing its own line', () => {
    for (const puzzle of puzzles) {
      const chess = new Chess()
      for (const san of puzzle.line) chess.move(normalizeSan(san))
      expect(chess.fen(), `${puzzle.id} has a line that does not reach its position`).toBe(puzzle.fen)
    }
  })

  it('shares its identity with the drilling record', () => {
    const keys = new Set(ENTRIES.flatMap((entry) => decisionPoints(entry).map((p) => p.key)))
    for (const puzzle of puzzles) {
      expect(puzzle.moveKey, `${puzzle.id} has no move key`).toBeDefined()
      expect(keys, `${puzzle.moveKey} is not a real decision point`).toContain(puzzle.moveKey)
    }
  })

  it('has unique ids', () => {
    const ids = puzzles.map((puzzle) => puzzle.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('explains itself once answered', () => {
    for (const puzzle of puzzles) {
      expect(puzzle.explanation.length, `${puzzle.id} has no explanation`).toBeGreaterThan(0)
      expect(puzzle.prompt.key, `${puzzle.id} has no prompt key`).toMatch(/^puzzles\./)
    }
  })
})

describe('punish candidates', () => {
  const candidates = punishCandidates(ENTRIES)

  it('comes from the tempting wrong moves already in the data', () => {
    expect(candidates.length).toBeGreaterThan(50)
  })

  it('never builds one from a move the repertoire calls sound', () => {
    // A `deliberate` move is declined on repertoire grounds, so there is
    // nothing to refute and a "punish this" puzzle would be a lie.
    const deliberate = new Set<string>()
    for (const entry of ENTRIES) {
      const walk = (nodes: typeof entry.tree, path: typeof entry.tree) => {
        for (const node of nodes) {
          for (const mistake of node.mistakes ?? []) {
            if (!mistake.deliberate) continue
            const sans = [...path.map((n) => normalizeSan(n.san)), normalizeSan(mistake.san)]
            deliberate.add(`punish:${entry.id}:${sans.join('-')}`)
          }
          walk(node.children ?? [], [...path, node])
        }
      }
      walk(entry.tree, [])
    }
    expect(deliberate.size).toBeGreaterThan(20)
    for (const candidate of candidates) {
      expect(deliberate, `${candidate.id} punishes a sound move`).not.toContain(candidate.id)
    }
  })

  it('puts the opponent in the seat of the tempting move', () => {
    for (const candidate of candidates) {
      const entry = getEntry(candidate.entryId)!
      expect(candidate.solver).not.toBe(entry.side)
      const turn = new Chess(candidate.fen).turn() === 'w' ? 'white' : 'black'
      expect(turn).toBe(candidate.solver)
    }
  })

  it('reaches a legal position for every one', () => {
    for (const candidate of candidates) {
      const chess = new Chess()
      for (const san of candidate.line) chess.move(normalizeSan(san))
      expect(chess.fen()).toBe(candidate.fen)
    }
  })

  it('leaves the answer to the engine', () => {
    for (const candidate of candidates) expect(candidate.expected).toBeUndefined()
  })
})

describe('punish branches', () => {
  const candidates = punishBranchCandidates(ENTRIES)

  it('picks up the branches the repertoire marks as losing', () => {
    expect(candidates.length).toBeGreaterThanOrEqual(1)
    expect(candidates.some((c) => c.entryId === 'vs-kings-gambit')).toBe(true)
  })

  it('takes the answer from the tree and asks the user\'s own colour', () => {
    for (const candidate of candidates) {
      const entry = getEntry(candidate.entryId)!
      expect(candidate.solver).toBe(entry.side)
      expect(candidate.expected).toBeDefined()
      const chess = new Chess(candidate.fen)
      expect(chess.moves().map(normalizeSan)).toContain(normalizeSan(candidate.expected!))
    }
  })

  it('marks the branch in the tree, so the verifier can check it really loses', () => {
    const marked: string[] = []
    const walk = (nodes: typeof kingsGambit.tree) => {
      for (const node of nodes) {
        if (node.punish) marked.push(normalizeSan(node.san))
        walk(node.children ?? [])
      }
    }
    walk(kingsGambit.tree)
    expect(marked).toContain('fxe5')
  })
})

describe('trap candidates', () => {
  const candidates = trapCandidates(ENTRIES)

  it('makes one per trap that is meant to be drilled', () => {
    const drillable = ENTRIES.reduce(
      (sum, entry) => sum + (entry.traps ?? []).filter((t) => t.drillable !== false).length,
      0,
    )
    expect(candidates).toHaveLength(drillable)
    // The floor is what survives the engine pass, not what the data happens to
    // contain: twelve named patterns - Legal's mate, the Greek gift, the
    // Schlechter defence and the rest - turned out to have an equally good
    // engine alternative, so they are study material rather than exercises.
    expect(drillable).toBeGreaterThan(12)
  })

  it('leaves the habit-teaching traps out of the engine queue', () => {
    // A trap like "take on d3 the moment the bishop lands there" has no single
    // engine-best answer. It belongs in the study section, not in a puzzle.
    const studyOnly = ENTRIES.flatMap((entry) =>
      (entry.traps ?? []).filter((t) => t.drillable === false).map((t) => `trap:${entry.id}:${t.id}`),
    )
    expect(studyOnly.length).toBeGreaterThan(0)
    for (const id of studyOnly) {
      expect(candidates.map((c) => c.id)).not.toContain(id)
    }
  })

  it('asks whichever side is to move, from both directions across the set', () => {
    const solvers = new Set(candidates.map((candidate) => candidate.solver))
    expect(solvers.has('white')).toBe(true)
    expect(solvers.has('black')).toBe(true)
    for (const candidate of candidates) {
      const turn = new Chess(candidate.fen).turn() === 'w' ? 'white' : 'black'
      expect(turn, `${candidate.id} asks the wrong side`).toBe(candidate.solver)
    }
  })

  it('names a legal answer taken from the trap itself', () => {
    for (const candidate of candidates) {
      const chess = new Chess(candidate.fen)
      expect(
        chess.moves().map(normalizeSan),
        `${candidate.id}: ${candidate.expected} is not legal`,
      ).toContain(normalizeSan(candidate.expected!))
    }
  })

  it('gives every entry at least one trap to read about', () => {
    // This is the coverage that has to hold. Whether a trap can also be *posed*
    // depends on the engine agreeing there is one answer, and for a third of
    // them it does not - but every opening and every defence still explains at
    // least one thing that catches people at this level.
    const without = ENTRIES.filter((entry) => (entry.traps ?? []).length === 0)
    expect(without.map((entry) => entry.id)).toEqual([])
  })

  it('covers over half the defences with a drillable trap', () => {
    // Not every system has a tactic worth testing on - the Closed Catalan is a
    // squeeze, and inventing a trap for it would be inventing theory.
    const covered = new Set(candidates.map((candidate) => candidate.entryId))
    const missing = DEFENCES.filter((defence) => !covered.has(defence.id))
    expect(
      missing.length,
      `no drillable trap in ${missing.map((d) => d.id).join(', ')}`,
    ).toBeLessThan(DEFENCES.length / 2)
  })
})

describe('prompt variables', () => {
  // A prompt value that looks like a key has to be findable in one of the two
  // dictionaries. When the side to move was looked up in the content dictionary
  // alone, the puzzle read "common.white to play" on the page and nothing failed.
  it('every key-shaped value resolves in the interface or the content catalogue', () => {
    const puzzles = [...recallPuzzles(ENTRIES), ...trapCandidates(ENTRIES)]
    const contentKeys = new Set(allContentStrings(ENTRIES, STUDY_GUIDES).map((item) => item.key))
    for (const puzzle of puzzles) {
      for (const [name, value] of Object.entries(puzzle.prompt.vars ?? {})) {
        if (!value.includes('.')) continue
        const known = value in en || contentKeys.has(value)
        expect(known, `${puzzle.id}: prompt variable "${name}" is "${value}", which is in neither catalogue`).toBe(true)
      }
    }
  })
})

describe('what goes to the engine', () => {
  it('is everything whose answer the repertoire does not already prove', () => {
    const candidates = engineCandidates(ENTRIES)
    expect(candidates.length).toBe(
      punishBranchCandidates(ENTRIES).length +
        punishCandidates(ENTRIES).length +
        trapCandidates(ENTRIES).length,
    )
  })

  it('has unique ids', () => {
    const ids = engineCandidates(ENTRIES).map((candidate) => candidate.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('never includes a recall puzzle - those are proven by the theory check', () => {
    for (const candidate of engineCandidates(ENTRIES)) {
      expect(candidate.kind).not.toBe('recall')
    }
  })
})

describe('the pool a user sees', () => {
  it('only contains puzzles from the entries they train', () => {
    const pool = puzzlePool([italian], VERIFIED_PUZZLES)
    for (const puzzle of pool) expect(puzzle.entryId).toBe('italian-game')
  })

  it('is empty for an empty repertoire', () => {
    expect(puzzlePool([], VERIFIED_PUZZLES)).toEqual([])
  })

  it('only ships generated puzzles that carry engine evidence', () => {
    for (const puzzle of VERIFIED_PUZZLES) {
      expect(puzzle.verified.depth, `${puzzle.id} was not verified`).toBeGreaterThanOrEqual(20)
      expect(puzzle.verified.marginCp).toBeGreaterThanOrEqual(90)
      expect(puzzle.kind).not.toBe('recall')
    }
  })

  it('gives every generated puzzle a legal answer in its own position', () => {
    for (const puzzle of VERIFIED_PUZZLES) {
      const chess = new Chess(puzzle.fen)
      expect(
        chess.moves().map(normalizeSan),
        `${puzzle.id}: ${puzzle.solution} is not legal`,
      ).toContain(normalizeSan(puzzle.solution))
    }
  })

  it('only ships generated puzzles for entries that exist', () => {
    for (const puzzle of VERIFIED_PUZZLES) {
      expect(getEntry(puzzle.entryId), `${puzzle.entryId} is not a real entry`).toBeDefined()
    }
  })
})

describe('answering', () => {
  const puzzle = recallPuzzles([italian])[0]

  it('accepts the solution however it is decorated', () => {
    expect(isSolution(puzzle, puzzle.solution)).toBe(true)
    expect(isSolution(puzzle, `${puzzle.solution}!`)).toBe(true)
  })

  it('rejects anything else', () => {
    expect(isSolution(puzzle, 'Nh3')).toBe(false)
  })

  it('accepts a listed alternative', () => {
    expect(isSolution({ ...puzzle, alsoAccepted: ['Nh3'] }, 'Nh3')).toBe(true)
  })
})
