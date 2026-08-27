import { describe, expect, it } from 'vitest'
import { Chess } from 'chess.js'
import type { MoveNode, Opening } from '../data/types'
import {
  accuracy,
  allLines,
  childrenAfter,
  fenAfter,
  isLineComplete,
  isUserPly,
  judgeUserMove,
  lineEnd,
  mainLine,
  moveLabel,
  moverAt,
  normalizeSan,
  pathKey,
  pickOpponentMove,
  sanEquals,
} from './tree'

const toy: Opening = {
  id: 'toy',
  name: 'Toy opening',
  eco: 'C00',
  side: 'white',
  summary: 'A two-move tree used by the tests.',
  tree: [
    {
      san: 'e4',
      idea: 'Take the centre.',
      hint: 'Play the most direct central pawn move.',
      mistakes: [{ san: 'd4', why: 'This repertoire is a king-pawn one.' }],
      children: [
        {
          san: 'e5',
          label: 'Main line',
          children: [
            {
              san: 'Nf3',
              idea: 'Hit e5.',
              hint: 'Develop with tempo.',
              children: [
                {
                  san: 'Nc6',
                  label: 'Main line',
                  end: { name: 'Toy main line', plans: ['Castle.'] },
                },
              ],
            },
          ],
        },
        {
          san: 'c5',
          label: 'Sicilian',
          children: [
            {
              san: 'Nf3',
              idea: 'Prepare d4.',
              end: { name: 'Toy sideline', plans: ['Play d4.'] },
            },
          ],
        },
      ],
    },
  ],
}

describe('normalizeSan', () => {
  it('strips check, mate and annotation marks', () => {
    expect(normalizeSan('Bb5+')).toBe('Bb5')
    expect(normalizeSan('Qxf7#')).toBe('Qxf7')
    expect(normalizeSan('Nf3!?')).toBe('Nf3')
  })

  it('accepts zeroes for castling', () => {
    expect(normalizeSan('0-0')).toBe('O-O')
    expect(normalizeSan('0-0-0')).toBe('O-O-O')
  })

  it('compares moves ignoring decorations', () => {
    expect(sanEquals('Bb5+', 'Bb5')).toBe(true)
    expect(sanEquals('Nf3', 'Nc3')).toBe(false)
  })
})

describe('turn order', () => {
  it('starts with White', () => {
    expect(moverAt(0)).toBe('white')
    expect(moverAt(1)).toBe('black')
    expect(moverAt(2)).toBe('white')
  })

  it('knows whose turn belongs to the user', () => {
    expect(isUserPly('white', 0)).toBe(true)
    expect(isUserPly('white', 1)).toBe(false)
    expect(isUserPly('black', 0)).toBe(false)
    expect(isUserPly('black', 1)).toBe(true)
  })
})

describe('traversal', () => {
  it('returns the root moves for an empty path', () => {
    expect(childrenAfter(toy, []).map((n) => n.san)).toEqual(['e4'])
  })

  it('walks down the tree', () => {
    const e4 = toy.tree[0]
    expect(childrenAfter(toy, [e4]).map((n) => n.san)).toEqual(['e5', 'c5'])
  })

  it('returns an empty list past a leaf', () => {
    const line = mainLine(toy)
    expect(childrenAfter(toy, line)).toEqual([])
  })

  it('follows the first child for the main line', () => {
    expect(mainLine(toy).map((n) => n.san)).toEqual(['e4', 'e5', 'Nf3', 'Nc6'])
  })

  it('enumerates every root-to-leaf path', () => {
    const lines = allLines(toy).map((line) => line.map((n) => n.san).join(' '))
    expect(lines).toEqual(['e4 e5 Nf3 Nc6', 'e4 c5 Nf3'])
  })

  it('detects the end of a line and reports its summary', () => {
    const line = mainLine(toy)
    expect(isLineComplete(toy, line)).toBe(true)
    expect(lineEnd(line)?.name).toBe('Toy main line')
  })

  it('does not treat a mid-line position as complete', () => {
    const partial = mainLine(toy).slice(0, 2)
    expect(isLineComplete(toy, partial)).toBe(false)
    expect(lineEnd(partial)).toBeUndefined()
  })

  it('treats an empty path as incomplete', () => {
    expect(isLineComplete(toy, [])).toBe(false)
    expect(lineEnd([])).toBeUndefined()
  })
})

describe('judgeUserMove', () => {
  const candidates = childrenAfter(toy, [])

  it('accepts the repertoire move', () => {
    const verdict = judgeUserMove(candidates, 'e4')
    expect(verdict.status).toBe('correct')
    if (verdict.status === 'correct') expect(verdict.node.san).toBe('e4')
  })

  it('accepts a repertoire move written with a check mark', () => {
    const nodes: MoveNode[] = [{ san: 'Bb5+' }]
    expect(judgeUserMove(nodes, 'Bb5').status).toBe('correct')
  })

  it('accepts any listed alternative, not only the first', () => {
    const nodes: MoveNode[] = [{ san: 'Be7' }, { san: 'Bd6' }]
    const verdict = judgeUserMove(nodes, 'Bd6')
    expect(verdict.status).toBe('correct')
    if (verdict.status === 'correct') expect(verdict.node.san).toBe('Bd6')
  })

  it('rejects a move that is not in the repertoire', () => {
    const verdict = judgeUserMove(candidates, 'Nf3')
    expect(verdict.status).toBe('wrong')
    if (verdict.status === 'wrong') expect(verdict.expected.san).toBe('e4')
  })

  it('uses the specific refutation when the wrong move is a known one', () => {
    const verdict = judgeUserMove(candidates, 'd4')
    expect(verdict.status).toBe('wrong')
    if (verdict.status === 'wrong') {
      expect(verdict.reason).toBe('This repertoire is a king-pawn one.')
    }
  })

  it('falls back to the hint for an unlisted wrong move', () => {
    const verdict = judgeUserMove(candidates, 'Nc3')
    expect(verdict.status).toBe('wrong')
    if (verdict.status === 'wrong') {
      expect(verdict.reason).toBe('Play the most direct central pawn move.')
    }
  })

  it('falls back to a generic reason when there is no hint', () => {
    const nodes: MoveNode[] = [{ san: 'e4' }]
    const verdict = judgeUserMove(nodes, 'd4')
    expect(verdict.status).toBe('wrong')
    if (verdict.status === 'wrong') expect(verdict.reason).toMatch(/not the repertoire move/)
  })

  it('never silently accepts a move when the candidate list is empty', () => {
    expect(judgeUserMove([], 'e4').status).toBe('wrong')
  })
})

describe('pickOpponentMove', () => {
  const candidates = childrenAfter(toy, [toy.tree[0]])

  it('always plays the main line in main-line mode', () => {
    for (const r of [0, 0.25, 0.5, 0.75, 0.99]) {
      expect(pickOpponentMove(candidates, 'main-line', () => r)?.san).toBe('e5')
    }
  })

  it('plays the main line half the time in mixed mode', () => {
    expect(pickOpponentMove(candidates, 'mixed', () => 0.1)?.san).toBe('e5')
    expect(pickOpponentMove(candidates, 'mixed', () => 0.9)?.san).toBe('c5')
  })

  it('never runs off the end of the deviation list', () => {
    expect(pickOpponentMove(candidates, 'mixed', () => 0.999999)?.san).toBe('c5')
  })

  it('plays the only move when there is just one', () => {
    const single = childrenAfter(toy, mainLine(toy).slice(0, 2))
    expect(pickOpponentMove(single, 'mixed', () => 0.9)?.san).toBe('Nf3')
  })

  it('returns undefined at the end of a line', () => {
    expect(pickOpponentMove([], 'main-line')).toBeUndefined()
  })
})

describe('replay', () => {
  it('produces the FEN of the position reached', () => {
    const fen = fenAfter(mainLine(toy))
    const chess = new Chess()
    for (const san of ['e4', 'e5', 'Nf3', 'Nc6']) chess.move(san)
    expect(fen).toBe(chess.fen())
  })

  it('throws on an illegal move', () => {
    expect(() => fenAfter([{ san: 'e5' }])).toThrow()
  })
})

describe('labels and keys', () => {
  it('numbers moves the way a scoresheet does', () => {
    expect(moveLabel(0, 'e4')).toBe('1.e4')
    expect(moveLabel(1, 'e5')).toBe('1...e5')
    expect(moveLabel(2, 'Nf3')).toBe('2.Nf3')
    expect(moveLabel(9, 'Be7')).toBe('5...Be7')
  })

  it('keys a decision point by the moves that reached it', () => {
    expect(pathKey(mainLine(toy).slice(0, 2))).toBe('e4 e5')
    expect(pathKey([])).toBe('')
  })
})

describe('accuracy', () => {
  it('is 100 percent with no mistakes', () => {
    expect(accuracy(6, 0)).toBe(100)
  })

  it('counts one mistake per decision point', () => {
    expect(accuracy(6, 1)).toBe(83)
    expect(accuracy(4, 2)).toBe(50)
  })

  it('never goes negative', () => {
    expect(accuracy(2, 5)).toBe(0)
  })

  it('is zero before any move is made', () => {
    expect(accuracy(0, 0)).toBe(0)
  })
})

describe('sound moves outside the repertoire', () => {
  const nodes: MoveNode[] = [
    {
      san: 'e4',
      hint: 'Take the centre.',
      mistakes: [
        { san: 'd4', deliberate: true, why: 'A fine move, but this repertoire is a king-pawn one.' },
        { san: 'f3', why: 'It weakens the king and does nothing for the centre.' },
      ],
    },
  ]

  it('marks a deliberate alternative as sound rather than an error', () => {
    const verdict = judgeUserMove(nodes, 'd4')
    expect(verdict.status).toBe('wrong')
    if (verdict.status === 'wrong') expect(verdict.deliberate).toBe(true)
  })

  it('does not soften a move that is genuinely bad', () => {
    const verdict = judgeUserMove(nodes, 'f3')
    if (verdict.status === 'wrong') expect(verdict.deliberate).toBe(false)
  })

  it('does not soften an unlisted wrong move', () => {
    const verdict = judgeUserMove(nodes, 'a3')
    if (verdict.status === 'wrong') expect(verdict.deliberate).toBe(false)
  })
})
