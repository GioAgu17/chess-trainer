import { beforeEach, describe, expect, it } from 'vitest'
import {
  clearOpening,
  emptyOpeningProgress,
  linesDrilled,
  loadProgress,
  progressFor,
  recordMistake,
  recordRun,
  saveProgress,
  totalLines,
  troubleSpots,
  type ProgressStore,
  type StorageLike,
} from './progress'
import { italianGame } from '../data/openings/italian'
import { allLines } from './tree'

class FakeStorage implements StorageLike {
  private data = new Map<string, string>()
  getItem(key: string) {
    return this.data.get(key) ?? null
  }
  setItem(key: string, value: string) {
    this.data.set(key, value)
  }
  removeItem(key: string) {
    this.data.delete(key)
  }
}

const run = (over: Partial<Parameters<typeof recordRun>[1]> = {}) => ({
  openingId: 'italian-game',
  lineName: 'Giuoco Pianissimo, main line',
  accuracy: 100,
  at: '2026-01-01T00:00:00.000Z',
  ...over,
})

const miss = (over: Partial<Parameters<typeof recordMistake>[1]> = {}) => ({
  openingId: 'italian-game',
  key: 'italian-game|e4 e5 Nf3 Nc6',
  label: '3.Bc4',
  expected: 'Bc4',
  played: 'Bb5',
  at: '2026-01-01T00:00:00.000Z',
  ...over,
})

describe('recordRun', () => {
  let store: ProgressStore

  beforeEach(() => {
    store = {}
  })

  it('creates a record for an opening played for the first time', () => {
    const next = recordRun(store, run())
    const progress = progressFor(next, 'italian-game')
    expect(progress.runs).toBe(1)
    expect(progress.lines['Giuoco Pianissimo, main line'].runs).toBe(1)
    expect(progress.lines['Giuoco Pianissimo, main line'].bestAccuracy).toBe(100)
    expect(progress.lastPlayedAt).toBe('2026-01-01T00:00:00.000Z')
  })

  it('does not mutate the store it is given', () => {
    recordRun(store, run())
    expect(store).toEqual({})
  })

  it('accumulates runs of the same line', () => {
    let next = recordRun(store, run({ accuracy: 60 }))
    next = recordRun(next, run({ accuracy: 90, at: '2026-01-02T00:00:00.000Z' }))
    const line = progressFor(next, 'italian-game').lines['Giuoco Pianissimo, main line']
    expect(line.runs).toBe(2)
    expect(line.lastAccuracy).toBe(90)
    expect(line.bestAccuracy).toBe(90)
  })

  it('keeps the best accuracy even when the latest run is worse', () => {
    let next = recordRun(store, run({ accuracy: 90 }))
    next = recordRun(next, run({ accuracy: 40, at: '2026-01-02T00:00:00.000Z' }))
    const line = progressFor(next, 'italian-game').lines['Giuoco Pianissimo, main line']
    expect(line.bestAccuracy).toBe(90)
    expect(line.lastAccuracy).toBe(40)
  })

  it('tracks different lines of the same opening separately', () => {
    let next = recordRun(store, run())
    next = recordRun(next, run({ lineName: 'Two Knights Defence, quiet 4.d3' }))
    expect(linesDrilled(progressFor(next, 'italian-game'))).toBe(2)
    expect(progressFor(next, 'italian-game').runs).toBe(2)
  })

  it('keeps openings independent of each other', () => {
    let next = recordRun(store, run())
    next = recordRun(next, run({ openingId: 'french-defence', lineName: 'French main' }))
    expect(progressFor(next, 'italian-game').runs).toBe(1)
    expect(progressFor(next, 'french-defence').runs).toBe(1)
  })

  it('leaves the mistake record alone', () => {
    const next = recordRun(recordMistake({}, miss()), run())
    expect(Object.keys(progressFor(next, 'italian-game').mistakes)).toHaveLength(1)
  })
})

describe('recordMistake', () => {
  it('records which move the user got wrong', () => {
    const record = progressFor(recordMistake({}, miss()), 'italian-game').mistakes[miss().key]
    expect(record.count).toBe(1)
    expect(record.expected).toBe('Bc4')
    expect(record.label).toBe('3.Bc4')
    expect(record.played).toEqual({ Bb5: 1 })
  })

  it('is saved without waiting for the line to be finished', () => {
    // Someone who keeps missing a move often abandons the line; the record has
    // to survive that, otherwise it never captures the moves that matter most.
    const store = recordMistake({}, miss())
    expect(progressFor(store, 'italian-game').runs).toBe(0)
    expect(troubleSpots(progressFor(store, 'italian-game'))).toHaveLength(1)
  })

  it('does not mutate the store it is given', () => {
    const store: ProgressStore = {}
    recordMistake(store, miss())
    expect(store).toEqual({})
  })

  it('counts a repeated mistake at the same point', () => {
    let store = recordMistake({}, miss())
    store = recordMistake(store, miss({ at: '2026-01-02T00:00:00.000Z' }))
    const record = progressFor(store, 'italian-game').mistakes[miss().key]
    expect(record.count).toBe(2)
    expect(record.played).toEqual({ Bb5: 2 })
  })

  it('remembers each different wrong move tried at the same point', () => {
    let store = recordMistake({}, miss())
    store = recordMistake(store, miss({ played: 'd4', at: '2026-01-02T00:00:00.000Z' }))
    const record = progressFor(store, 'italian-game').mistakes[miss().key]
    expect(record.played).toEqual({ Bb5: 1, d4: 1 })
    expect(record.count).toBe(2)
  })

  it('counts a revealed move even though nothing wrong was played', () => {
    const record = progressFor(recordMistake({}, miss({ played: '' })), 'italian-game')
      .mistakes[miss().key]
    expect(record.count).toBe(1)
    expect(record.played).toEqual({})
  })

  it('keeps the run record intact', () => {
    const store = recordMistake(recordRun({}, run()), miss())
    expect(progressFor(store, 'italian-game').runs).toBe(1)
    expect(progressFor(store, 'italian-game').lines['Giuoco Pianissimo, main line']).toBeDefined()
  })
})

describe('troubleSpots', () => {
  it('ranks the most frequent mistakes first', () => {
    let store: ProgressStore = {}
    store = recordMistake(store, miss({ key: 'a' }))
    store = recordMistake(store, miss({ key: 'b', at: '2026-01-02T00:00:00.000Z' }))
    store = recordMistake(store, miss({ key: 'b', at: '2026-01-03T00:00:00.000Z' }))
    expect(troubleSpots(progressFor(store, 'italian-game')).map((s) => s.key)).toEqual(['b', 'a'])
  })

  it('caps the list', () => {
    let store: ProgressStore = {}
    for (let i = 0; i < 8; i += 1) store = recordMistake(store, miss({ key: `k${i}` }))
    expect(troubleSpots(progressFor(store, 'italian-game'), 3)).toHaveLength(3)
  })

  it('is empty for an opening never played', () => {
    expect(troubleSpots(emptyOpeningProgress())).toEqual([])
  })
})

describe('persistence', () => {
  it('survives a round trip through storage', () => {
    const storage = new FakeStorage()
    const store = recordMistake(recordRun({}, run({ accuracy: 75 })), miss())
    saveProgress(store, storage)
    expect(loadProgress(storage)).toEqual(store)
  })

  it('returns an empty store when nothing has been saved', () => {
    expect(loadProgress(new FakeStorage())).toEqual({})
  })

  it('recovers from corrupt data rather than throwing', () => {
    const storage = new FakeStorage()
    storage.setItem('chess-trainer:progress:v1', '{not json')
    expect(loadProgress(storage)).toEqual({})
  })

  it('ignores data of the wrong shape', () => {
    const storage = new FakeStorage()
    storage.setItem('chess-trainer:progress:v1', '[1,2,3]')
    expect(loadProgress(storage)).toEqual({})
  })

  it('does nothing when storage is unavailable', () => {
    expect(loadProgress(null)).toEqual({})
    expect(() => saveProgress({}, null)).not.toThrow()
  })

  it('survives a storage that throws on write', () => {
    const throwing: StorageLike = {
      getItem: () => null,
      setItem: () => {
        throw new Error('quota exceeded')
      },
      removeItem: () => {},
    }
    expect(() => saveProgress(recordRun({}, run()), throwing)).not.toThrow()
  })
})

describe('clearOpening', () => {
  it('removes one opening and leaves the rest', () => {
    let store = recordRun({}, run())
    store = recordRun(store, run({ openingId: 'french-defence', lineName: 'French main' }))
    const next = clearOpening(store, 'italian-game')
    expect(next['italian-game']).toBeUndefined()
    expect(next['french-defence']).toBeDefined()
    expect(store['italian-game']).toBeDefined()
  })
})

describe('totalLines', () => {
  it('counts every root-to-leaf path in an opening', () => {
    expect(totalLines(italianGame)).toBe(allLines(italianGame).length)
    expect(totalLines(italianGame)).toBeGreaterThan(1)
  })
})
