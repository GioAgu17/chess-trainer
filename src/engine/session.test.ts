import { describe, expect, it } from 'vitest'
import { Chess } from 'chess.js'
import { italianGame } from '../data/openings/italian'
import { caroKann } from '../data/openings/caro-kann'
import { OPENINGS } from '../data/openings'
import {
  applyOpponentMove,
  applyUserMove,
  candidates,
  completedRun,
  expectedMove,
  lastNode,
  newSession,
  phaseOf,
  runAccuracy,
  showMe,
  tryAgain,
  type SessionState,
} from './session'
import { allLines, mainLine, normalizeSan } from './tree'

const always = (n: number) => () => n

/** Play a whole line for both sides, using the main line for the opponent. */
function playMainLine(opening = italianGame): SessionState {
  let state = newSession()
  const line = mainLine(opening)
  for (const node of line) {
    state =
      phaseOf(opening, state) === 'user'
        ? applyUserMove(opening, state, node.san)
        : applyOpponentMove(opening, state, 'main-line', always(0))
  }
  return state
}

describe('phases', () => {
  it('starts with the user when the user has White', () => {
    expect(phaseOf(italianGame, newSession())).toBe('user')
  })

  it('starts with the opponent when the user has Black', () => {
    expect(phaseOf(caroKann, newSession())).toBe('opponent')
  })

  it('alternates as moves are played', () => {
    let state = applyUserMove(italianGame, newSession(), 'e4')
    expect(phaseOf(italianGame, state)).toBe('opponent')
    state = applyOpponentMove(italianGame, state, 'main-line', always(0))
    expect(phaseOf(italianGame, state)).toBe('user')
  })

  it('reports completion at the end of a line', () => {
    expect(phaseOf(italianGame, playMainLine())).toBe('complete')
  })
})

describe('correct moves', () => {
  it('advances the line and counts a decision', () => {
    const state = applyUserMove(italianGame, newSession(), 'e4')
    expect(state.path.map((n) => n.san)).toEqual(['e4'])
    expect(state.decisions).toBe(1)
    expect(state.mistakes).toBe(0)
    expect(state.error).toBeNull()
  })

  it('accepts a move written with a check or annotation mark', () => {
    const state = applyUserMove(italianGame, newSession(), 'e4!')
    expect(state.path).toHaveLength(1)
  })

  it('ignores a user move when it is not the user turn', () => {
    const after = applyUserMove(italianGame, newSession(), 'e4')
    expect(applyUserMove(italianGame, after, 'Nf3')).toBe(after)
  })
})

describe('wrong moves', () => {
  it('never plays the move on the board', () => {
    const state = applyUserMove(italianGame, newSession(), 'd4')
    expect(state.path).toHaveLength(0)
    expect(phaseOf(italianGame, state)).toBe('user')
  })

  it('reports what was played and why it is wrong', () => {
    const state = applyUserMove(italianGame, newSession(), 'd4')
    expect(state.error?.played).toBe('d4')
    expect(state.error?.reason).toContain('king-pawn one')
  })

  it('falls back to the hint when the wrong move is not a named one', () => {
    const state = applyUserMove(italianGame, newSession(), 'Nc3')
    expect(state.error?.reason).toBe('Open the game with the most direct central pawn move.')
  })

  it('counts one mistake even after several wrong tries at the same point', () => {
    let state = applyUserMove(italianGame, newSession(), 'd4')
    state = tryAgain(state)
    state = applyUserMove(italianGame, state, 'Nc3')
    state = tryAgain(state)
    state = applyUserMove(italianGame, state, 'a3')
    expect(state.mistakes).toBe(1)
    expect(state.mistakeLog).toHaveLength(1)
  })

  it('logs the move number, the move played and the move expected', () => {
    let state = applyUserMove(italianGame, newSession(), 'e4')
    state = applyOpponentMove(italianGame, state, 'main-line', always(0))
    state = applyUserMove(italianGame, state, 'Bc4')
    expect(state.mistakeLog[0]).toMatchObject({
      label: '2.Nf3',
      expected: 'Nf3',
      played: 'Bc4',
    })
    expect(state.mistakeLog[0].key).toContain('italian-game|e4 e5')
  })

  it('clears the error on try again without touching the score', () => {
    const wrong = applyUserMove(italianGame, newSession(), 'd4')
    const retry = tryAgain(wrong)
    expect(retry.error).toBeNull()
    expect(retry.mistakes).toBe(1)
    expect(retry.path).toHaveLength(0)
  })

  it('lets the user recover and carry on after a wrong move', () => {
    let state = applyUserMove(italianGame, newSession(), 'd4')
    state = tryAgain(state)
    state = applyUserMove(italianGame, state, 'e4')
    expect(state.path.map((n) => n.san)).toEqual(['e4'])
    expect(state.error).toBeNull()
    expect(state.decisions).toBe(1)
    expect(state.mistakes).toBe(1)
  })

  it('starts a fresh mistake count at the next decision point', () => {
    let state = applyUserMove(italianGame, newSession(), 'd4')
    state = tryAgain(state)
    state = applyUserMove(italianGame, state, 'e4')
    state = applyOpponentMove(italianGame, state, 'main-line', always(0))
    state = applyUserMove(italianGame, state, 'Bc4')
    expect(state.mistakes).toBe(2)
  })
})

describe('show me', () => {
  it('plays the repertoire move and marks the line as revealed', () => {
    let state = applyUserMove(italianGame, newSession(), 'd4')
    state = showMe(italianGame, state)
    expect(state.path.map((n) => n.san)).toEqual(['e4'])
    expect(state.revealed).toBe(true)
    expect(state.error).toBeNull()
  })

  it('counts as a mistake even when asked for straight away', () => {
    const state = showMe(italianGame, newSession())
    expect(state.mistakes).toBe(1)
    expect(state.decisions).toBe(1)
    expect(state.mistakeLog[0].expected).toBe('e4')
  })

  it('does not double count when the user already guessed wrong', () => {
    let state = applyUserMove(italianGame, newSession(), 'd4')
    state = showMe(italianGame, state)
    expect(state.mistakes).toBe(1)
    expect(state.mistakeLog).toHaveLength(1)
  })

  it('does nothing when it is not the user turn', () => {
    const after = applyUserMove(italianGame, newSession(), 'e4')
    expect(showMe(italianGame, after)).toBe(after)
  })
})

describe('the opponent', () => {
  it('plays the main line by default', () => {
    const state = applyOpponentMove(
      italianGame,
      applyUserMove(italianGame, newSession(), 'e4'),
      'main-line',
      always(0.99),
    )
    expect(lastNode(state)?.san).toBe('e5')
  })

  it('plays a deviation in mixed mode', () => {
    let state = newSession()
    for (const san of ['e4']) state = applyUserMove(italianGame, state, san)
    state = applyOpponentMove(italianGame, state, 'main-line', always(0))
    state = applyUserMove(italianGame, state, 'Nf3')
    state = applyOpponentMove(italianGame, state, 'main-line', always(0))
    state = applyUserMove(italianGame, state, 'Bc4')
    const mixed = applyOpponentMove(italianGame, state, 'mixed', always(0.99))
    expect(mixed.path[mixed.path.length - 1].san).not.toBe('Bc5')
  })

  it('moves first when the user has Black', () => {
    const state = applyOpponentMove(caroKann, newSession(), 'main-line', always(0))
    expect(state.path.map((n) => n.san)).toEqual(['e4'])
    expect(phaseOf(caroKann, state)).toBe('user')
  })

  it('does nothing when it is the user turn', () => {
    const start = newSession()
    expect(applyOpponentMove(italianGame, start, 'main-line', always(0))).toBe(start)
  })
})

describe('a completed run', () => {
  it('reports the line, the accuracy and the plans', () => {
    const run = completedRun(italianGame, playMainLine())
    expect(run?.lineName).toBe('Giuoco Pianissimo, main line')
    expect(run?.accuracy).toBe(100)
    expect(run?.plans.length).toBeGreaterThanOrEqual(3)
    expect(run?.mistakes).toEqual([])
  })

  it('is undefined while the line is still running', () => {
    expect(completedRun(italianGame, newSession())).toBeUndefined()
  })

  it('reports accuracy below 100 when moves were missed', () => {
    let state = newSession()
    for (const node of mainLine(italianGame)) {
      if (phaseOf(italianGame, state) === 'user') {
        if (state.path.length === 0) {
          state = applyUserMove(italianGame, state, 'd4')
          state = tryAgain(state)
        }
        state = applyUserMove(italianGame, state, node.san)
      } else {
        state = applyOpponentMove(italianGame, state, 'main-line', always(0))
      }
    }
    const run = completedRun(italianGame, state)
    expect(run?.accuracy).toBe(83)
    expect(run?.mistakes).toHaveLength(1)
  })

  it('plays a full Black repertoire line to the end', () => {
    const state = playMainLine(caroKann)
    const run = completedRun(caroKann, state)
    expect(run?.lineName).toContain('Caro-Kann')
    expect(run?.accuracy).toBe(100)
    expect(state.path).toHaveLength(mainLine(caroKann).length)
  })
})

describe('helpers', () => {
  it('names the move the user has to find', () => {
    expect(expectedMove(italianGame, newSession())?.san).toBe('e4')
  })

  it('has no expected move on the opponent turn', () => {
    expect(expectedMove(caroKann, newSession())).toBeUndefined()
  })

  it('lists the repertoire options at the current point', () => {
    const state = applyUserMove(italianGame, newSession(), 'e4')
    expect(candidates(italianGame, state).map((n) => n.san)).toContain('e5')
  })

  it('reports accuracy mid-run', () => {
    let state = applyUserMove(italianGame, newSession(), 'd4')
    state = tryAgain(state)
    state = applyUserMove(italianGame, state, 'e4')
    expect(runAccuracy(state)).toBe(0)
  })
})

describe.each(OPENINGS.map((o): [string, typeof o] => [o.name, o]))(
  'every line of %s',
  (_name, opening) => {
    it('can be played from the first move to the summary', () => {
      for (const line of allLines(opening)) {
        let state = newSession()
        for (const node of line) {
          if (phaseOf(opening, state) === 'user') {
            state = applyUserMove(opening, state, node.san)
          } else {
            // Force the opponent down this exact branch rather than the main
            // line, so every deviation in the tree is exercised.
            state = { ...state, path: [...state.path, node] }
          }
          expect(
            state.path[state.path.length - 1].san,
            `${opening.name} stalled at ${node.san}`,
          ).toBe(node.san)
        }
        const run = completedRun(opening, state)
        expect(run, `${opening.name}: ${line.map((n) => n.san).join(' ')} has no summary`).toBeDefined()
        expect(run!.accuracy).toBe(100)
      }
    })

    it('plays its main line to the end with the computer on the main line', () => {
      const state = playMainLine(opening)
      expect(phaseOf(opening, state)).toBe('complete')
      expect(completedRun(opening, state)?.accuracy).toBe(100)
      expect(state.path.length).toBe(mainLine(opening).length)
    })

    it('rejects a legal move that is not in the repertoire at every user turn', () => {
      let state = newSession()
      for (const node of mainLine(opening)) {
        if (phaseOf(opening, state) === 'user') {
          const chess = new Chess()
          for (const played of state.path) chess.move(normalizeSan(played.san))
          const wrong = chess
            .moves()
            .find((san) => normalizeSan(san) !== normalizeSan(node.san))
          expect(wrong, 'every position should have an alternative move').toBeDefined()
          const rejected = applyUserMove(opening, state, wrong!)
          expect(rejected.path.length, `${opening.name} accepted ${wrong}`).toBe(state.path.length)
          expect(rejected.error).not.toBeNull()
          expect(rejected.error!.reason.length).toBeGreaterThan(10)
          state = applyUserMove(opening, tryAgain(rejected), node.san)
        } else {
          state = applyOpponentMove(opening, state, 'main-line', always(0))
        }
      }
      expect(phaseOf(opening, state)).toBe('complete')
      expect(completedRun(opening, state)?.accuracy).toBe(0)
    })
  },
)
