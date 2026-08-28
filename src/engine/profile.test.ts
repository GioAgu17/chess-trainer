import { describe, expect, it } from 'vitest'
import { DEFENCES, OPENINGS, getEntry } from '../data/entries'
import {
  PITCHED,
  RECOMMENDED,
  RECOMMENDED_DEFENCE,
  answer,
  answersFor,
  back,
  canGoBack,
  currentQuestion,
  isComplete,
  recommendationFor,
  startSetup,
  stepProgress,
  suggestName,
  toProfileInput,
  type SetupSession,
} from './profile'

function run(session: SetupSession, ...answers: Parameters<typeof answer>[1][]): SetupSession {
  return answers.reduce((acc, given) => answer(acc, given), session)
}

const full = () =>
  run(
    startSetup(),
    { kind: 'white', openingId: 'italian-game' },
    { kind: 'black', openingId: 'caro-kann' },
    { kind: 'family', family: 'd4' },
    { kind: 'system', system: 'Catalan' },
    { kind: 'temperament', defenceId: 'vs-catalan-open' },
    { kind: 'more', more: false },
    { kind: 'name', name: 'Main' },
  )

describe('the conversation', () => {
  it('starts by asking about White', () => {
    const question = currentQuestion(startSetup().current)
    expect(question.step).toBe('white')
    expect(question.askKey).toBe('setup.white.ask')
  })

  it('asks one question at a time', () => {
    let session = startSetup()
    const asked: string[] = []
    for (const given of [
      { kind: 'white', openingId: 'italian-game' } as const,
      { kind: 'black', openingId: 'caro-kann' } as const,
      { kind: 'family', family: 'd4' } as const,
    ]) {
      asked.push(currentQuestion(session.current).step)
      session = answer(session, given)
    }
    expect(asked).toEqual(['white', 'black', 'defence-family'])
  })

  it('offers every opening for the right colour, plus a way out', () => {
    const question = currentQuestion(startSetup().current)
    const values = question.options.map((option) => option.value)
    for (const opening of OPENINGS.filter((o) => o.side === 'white')) {
      expect(values).toContain(opening.id)
    }
    expect(values).toContain('')
  })

  it('gives a reason for every choice, as a key or as text from the repertoire', () => {
    let session = startSetup()
    for (const given of [
      { kind: 'white', openingId: 'italian-game' } as const,
      { kind: 'black', openingId: 'caro-kann' } as const,
      { kind: 'family', family: 'd4' } as const,
      { kind: 'system', system: 'Catalan' } as const,
    ]) {
      for (const option of currentQuestion(session.current).options) {
        const reason = option.whyKey ?? option.why ?? ''
        expect(reason.length, `${option.label ?? option.labelKey} has no reason`).toBeGreaterThan(0)
        if (option.why) expect(option.why.split(' ').length).toBeGreaterThan(6)
      }
      session = answer(session, given)
    }
  })

  it('offers a recommendation on every question that has one', () => {
    for (const step of ['white', 'black'] as const) {
      const question = currentQuestion({ ...startSetup().current, step })
      const recommended = recommendationFor(question)
      expect(recommended, `no recommendation on ${step}`).toBeDefined()
      expect(recommended!.value).toBe(RECOMMENDED[step === 'white' ? 'white' : 'black'])
    }
  })

  it('lets the user skip a colour entirely', () => {
    const session = run(
      startSetup(),
      { kind: 'white', openingId: null },
      { kind: 'black', openingId: 'caro-kann' },
    )
    expect(session.current.whiteOpeningId).toBeNull()
    expect(session.current.blackOpeningId).toBe('caro-kann')
  })
})

describe('choosing a defence', () => {
  it('narrows from a family to a system', () => {
    const session = run(startSetup(), { kind: 'white', openingId: null }, { kind: 'black', openingId: null }, { kind: 'family', family: 'e4' })
    const question = currentQuestion(session.current)
    expect(question.step).toBe('defence-system')
    expect(question.options.map((o) => o.value)).toContain('King\'s Gambit')
    expect(question.options.map((o) => o.value)).not.toContain('Catalan')
  })

  it('recommends one system per family', () => {
    for (const family of ['d4', 'e4', 'flank'] as const) {
      const session = run(startSetup(), { kind: 'white', openingId: null }, { kind: 'black', openingId: null }, { kind: 'family', family })
      const recommended = recommendationFor(currentQuestion(session.current))
      expect(recommended?.value).toBe(RECOMMENDED_DEFENCE[family])
    }
  })

  it('asks for a temperament only where there is a real choice', () => {
    const catalan = run(
      startSetup(),
      { kind: 'white', openingId: null },
      { kind: 'black', openingId: null },
      { kind: 'family', family: 'd4' },
      { kind: 'system', system: 'Catalan' },
    )
    expect(catalan.current.step).toBe('temperament')
    expect(currentQuestion(catalan.current).options).toHaveLength(2)

    const london = run(
      startSetup(),
      { kind: 'white', openingId: null },
      { kind: 'black', openingId: null },
      { kind: 'family', family: 'd4' },
      { kind: 'system', system: 'London System' },
    )
    // One answer means no question worth asking - it goes straight on.
    expect(london.current.step).toBe('more-defences')
    expect(london.current.defenceIds).toEqual(['vs-london'])
  })

  it('loops so more than one defence can be added', () => {
    const session = run(
      startSetup(),
      { kind: 'white', openingId: null },
      { kind: 'black', openingId: null },
      { kind: 'family', family: 'd4' },
      { kind: 'system', system: 'London System' },
      { kind: 'more', more: true },
      { kind: 'family', family: 'e4' },
      { kind: 'system', system: 'Scotch' },
      { kind: 'more', more: false },
    )
    expect(session.current.defenceIds).toEqual(['vs-london', 'vs-scotch'])
    expect(session.current.step).toBe('name')
  })

  it('never adds the same defence twice', () => {
    const session = run(
      startSetup(),
      { kind: 'white', openingId: null },
      { kind: 'black', openingId: null },
      { kind: 'family', family: 'd4' },
      { kind: 'system', system: 'London System' },
      { kind: 'more', more: true },
      { kind: 'family', family: 'd4' },
      { kind: 'system', system: 'London System' },
      { kind: 'more', more: false },
    )
    expect(session.current.defenceIds).toEqual(['vs-london'])
  })

  it('knows which answers a system has', () => {
    expect(answersFor('Catalan').map((d) => d.id)).toEqual([
      'vs-catalan-open',
      'vs-catalan-closed',
    ])
    expect(answersFor('London System')).toHaveLength(1)
    expect(answersFor('nothing')).toEqual([])
  })
})

describe('going back', () => {
  it('is not offered on the first question', () => {
    expect(canGoBack(startSetup())).toBe(false)
  })

  it('restores the previous question and un-answers it', () => {
    const session = run(
      startSetup(),
      { kind: 'white', openingId: 'italian-game' },
      { kind: 'black', openingId: 'caro-kann' },
    )
    const stepped = back(session)
    expect(stepped.current.step).toBe('black')
    expect(stepped.current.blackOpeningId).toBeNull()
    expect(stepped.current.whiteOpeningId).toBe('italian-game')
  })

  it('undoes a defence that was added', () => {
    const session = run(
      startSetup(),
      { kind: 'white', openingId: null },
      { kind: 'black', openingId: null },
      { kind: 'family', family: 'd4' },
      { kind: 'system', system: 'London System' },
    )
    expect(session.current.defenceIds).toEqual(['vs-london'])
    expect(back(session).current.defenceIds).toEqual([])
  })

  it('walks all the way back to the start', () => {
    let session = full()
    while (canGoBack(session)) session = back(session)
    expect(session.current.step).toBe('white')
    expect(session.current.whiteOpeningId).toBeNull()
    expect(session.current.defenceIds).toEqual([])
  })

  it('does nothing at the start rather than throwing', () => {
    const session = startSetup()
    expect(back(session)).toBe(session)
  })
})

describe('finishing', () => {
  it('suggests a name that says what the repertoire is', () => {
    expect(suggestName(full().current)).toContain('Italian Game')
    expect(suggestName(full().current)).toContain('Caro-Kann')
  })

  it('suggests something sensible when only defences were chosen', () => {
    const session = run(
      startSetup(),
      { kind: 'white', openingId: null },
      { kind: 'black', openingId: null },
      { kind: 'family', family: 'd4' },
      { kind: 'system', system: 'London System' },
      { kind: 'more', more: false },
    )
    expect(suggestName(session.current)).toContain('London')
  })

  it('falls back to something rather than an empty name', () => {
    expect(suggestName(startSetup().current)).toBe('My repertoire')
  })

  it('turns the answers into a profile', () => {
    const input = toProfileInput(full().current)
    expect(input).toEqual({
      name: 'Main',
      whiteOpeningId: 'italian-game',
      blackOpeningId: 'caro-kann',
      defenceIds: ['vs-catalan-open'],
    })
  })

  it('uses the suggested name when the user leaves it blank', () => {
    const session = run(
      startSetup(),
      { kind: 'white', openingId: 'italian-game' },
      { kind: 'black', openingId: null },
      { kind: 'family', family: 'd4' },
      { kind: 'system', system: 'London System' },
      { kind: 'more', more: false },
      { kind: 'name', name: '   ' },
    )
    expect(toProfileInput(session.current).name).toBe('Italian Game repertoire')
  })

  it('only calls a profile complete when there is something to train', () => {
    expect(isComplete(startSetup().current)).toBe(false)
    expect(isComplete(full().current)).toBe(true)
  })

  it('names only entries that exist', () => {
    const input = toProfileInput(full().current)
    for (const id of [input.whiteOpeningId, input.blackOpeningId, ...input.defenceIds]) {
      if (id) expect(getEntry(id), `${id} is not a real entry`).toBeDefined()
    }
  })
})

describe('the copy', () => {
  it('offers a pitch for every opening in the picker', () => {
    for (const opening of OPENINGS) {
      expect(PITCHED, `${opening.id} has no pitch`).toContain(opening.id)
    }
    // The words themselves live in the interface catalogues, where the parity
    // test checks that both languages have them.
    for (const option of currentQuestion(startSetup().current).options) {
      if (option.value === '') continue
      expect(option.tagKey).toBe(`pitch.${option.value}.tag`)
      expect(option.whyKey).toBe(`pitch.${option.value}.why`)
    }
  })

  it('recommends real entries', () => {
    expect(getEntry(RECOMMENDED.white)).toBeDefined()
    expect(getEntry(RECOMMENDED.black)).toBeDefined()
    for (const system of Object.values(RECOMMENDED_DEFENCE)) {
      expect(DEFENCES.some((d) => d.system === system), `${system} is not a real system`).toBe(true)
    }
  })

  it('never asks a question with nothing to choose from', () => {
    let session = startSetup()
    const answers: Parameters<typeof answer>[1][] = [
      { kind: 'white', openingId: 'italian-game' },
      { kind: 'black', openingId: 'caro-kann' },
      { kind: 'family', family: 'd4' },
      { kind: 'system', system: 'Catalan' },
      { kind: 'temperament', defenceId: 'vs-catalan-open' },
      { kind: 'more', more: false },
    ]
    for (const given of answers) {
      const question = currentQuestion(session.current)
      expect(question.options.length, `${question.step} has no options`).toBeGreaterThan(1)
      session = answer(session, given)
    }
  })

  it('never goes backwards in the progress indicator while answering', () => {
    let session = startSetup()
    let last = -1
    for (const given of [
      { kind: 'white', openingId: 'italian-game' } as const,
      { kind: 'black', openingId: 'caro-kann' } as const,
      { kind: 'family', family: 'd4' } as const,
      { kind: 'system', system: 'Catalan' } as const,
      { kind: 'temperament', defenceId: 'vs-catalan-open' } as const,
      { kind: 'more', more: false } as const,
      { kind: 'name', name: 'x' } as const,
    ]) {
      const { index, total } = stepProgress(session.current)
      expect(index).toBeGreaterThanOrEqual(last)
      expect(index).toBeLessThanOrEqual(total)
      last = index
      session = answer(session, given)
    }
  })
})
