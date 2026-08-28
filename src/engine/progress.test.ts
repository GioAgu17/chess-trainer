import { describe, expect, it } from 'vitest'
import {
  LEGACY_KEY,
  STORAGE_KEY,
  activeProfile,
  addProfile,
  clearEntry,
  emptyStore,
  loadProgress,
  migrateV1,
  profileEntryIds,
  recordAttempt,
  recordPuzzleAttempt,
  recordRun,
  removeProfile,
  saveProgress,
  selectProfile,
  totalLines,
  updateProfile,
  type ProgressStore,
  type StorageLike,
} from './progress'
import { getEntry } from '../data/entries'

function fakeStorage(seed: Record<string, string> = {}): StorageLike & { data: Record<string, string> } {
  const data = { ...seed }
  return {
    data,
    getItem: (key) => data[key] ?? null,
    setItem: (key, value) => {
      data[key] = value
    },
    removeItem: (key) => {
      delete data[key]
    },
  }
}

const attempt = (over: Partial<Parameters<typeof recordAttempt>[1]> = {}) => ({
  entryId: 'italian-game',
  key: 'italian-game|e4 e5 Nf3',
  label: '3.Bc4',
  expected: 'Bc4',
  ply: 4,
  result: 'correct' as const,
  at: '2026-01-01T10:00:00.000Z',
  ...over,
})

describe('the record', () => {
  it('starts empty', () => {
    const store = emptyStore()
    expect(store.version).toBe(2)
    expect(store.profiles).toEqual([])
    expect(Object.keys(store.moves)).toHaveLength(0)
  })

  it('counts a correct answer', () => {
    const store = recordAttempt(emptyStore(), attempt())
    const stat = store.moves['italian-game|e4 e5 Nf3']
    expect(stat.attempts).toBe(1)
    expect(stat.correct).toBe(1)
    expect(stat.errors).toBe(0)
    expect(stat.history).toEqual([{ at: '2026-01-01T10:00:00.000Z', result: 'correct' }])
  })

  it('keeps errors and off-repertoire choices apart', () => {
    let store = recordAttempt(emptyStore(), attempt({ result: 'error', played: 'Ng5' }))
    store = recordAttempt(store, attempt({ result: 'off-repertoire', played: 'Bb5' }))
    const stat = store.moves['italian-game|e4 e5 Nf3']
    expect(stat.attempts).toBe(2)
    expect(stat.errors).toBe(1)
    expect(stat.offRepertoire).toBe(1)
    expect(stat.wrongMoves).toEqual({ Ng5: 1, Bb5: 1 })
  })

  it('remembers when a move was first and last seen', () => {
    let store = recordAttempt(emptyStore(), attempt({ at: '2026-01-01T10:00:00.000Z' }))
    store = recordAttempt(store, attempt({ at: '2026-02-01T10:00:00.000Z' }))
    const stat = store.moves['italian-game|e4 e5 Nf3']
    expect(stat.firstSeenAt).toBe('2026-01-01T10:00:00.000Z')
    expect(stat.lastSeenAt).toBe('2026-02-01T10:00:00.000Z')
  })

  it('schedules a card the first time a move is answered', () => {
    const store = recordAttempt(emptyStore(), attempt())
    const card = store.cards['italian-game|e4 e5 Nf3']
    expect(card.reps).toBe(1)
    expect(card.intervalDays).toBe(1)
  })

  it('sends a missed move back to the front of the queue', () => {
    let store = recordAttempt(emptyStore(), attempt())
    store = recordAttempt(store, attempt({ at: '2026-01-02T10:00:00.000Z' }))
    expect(store.cards['italian-game|e4 e5 Nf3'].reps).toBe(2)
    store = recordAttempt(
      store,
      attempt({ result: 'error', played: 'Ng5', at: '2026-01-03T10:00:00.000Z' }),
    )
    const card = store.cards['italian-game|e4 e5 Nf3']
    expect(card.reps).toBe(0)
    expect(card.lapses).toBe(1)
    expect(card.dueAt).toBe('2026-01-03T10:00:00.000Z')
  })

  it('does not punish the review schedule for a sound move off the repertoire', () => {
    // Playing the Ruy Lopez against an Italian repertoire is a preference, not
    // a memory failure, so the card keeps moving forward.
    let store = recordAttempt(emptyStore(), attempt())
    store = recordAttempt(
      store,
      attempt({ result: 'off-repertoire', played: 'Bb5', at: '2026-01-02T10:00:00.000Z' }),
    )
    expect(store.cards['italian-game|e4 e5 Nf3'].reps).toBe(2)
    expect(store.cards['italian-game|e4 e5 Nf3'].lapses).toBe(0)
  })

  it('caps the per-move history', () => {
    let store = emptyStore()
    for (let i = 0; i < 60; i += 1) {
      store = recordAttempt(store, attempt({ at: `2026-01-01T10:00:${String(i).padStart(2, '0')}.000Z` }))
    }
    expect(store.moves['italian-game|e4 e5 Nf3'].history).toHaveLength(40)
    expect(store.moves['italian-game|e4 e5 Nf3'].attempts).toBe(60)
  })

  it('records finished runs', () => {
    const store = recordRun(emptyStore(), {
      entryId: 'italian-game',
      lineName: 'Giuoco Pianissimo, main line',
      accuracy: 80,
      decisions: 5,
      errors: 1,
      offRepertoire: 0,
      at: '2026-01-01T10:00:00.000Z',
    })
    expect(store.runs).toHaveLength(1)
    expect(store.runs[0].accuracy).toBe(80)
  })

  it('records puzzle attempts against a shared card when one is given', () => {
    const store = recordPuzzleAttempt(emptyStore(), {
      puzzleId: 'recall:italian-game:e4-e5-Nf3',
      cardId: 'italian-game|e4 e5 Nf3',
      solved: true,
      at: '2026-01-01T10:00:00.000Z',
    })
    expect(store.puzzles['recall:italian-game:e4-e5-Nf3'].solved).toBe(1)
    // The same card the drill would have moved: one move, one schedule.
    expect(store.cards['italian-game|e4 e5 Nf3'].reps).toBe(1)
  })

  it('forgets one entry without touching the others', () => {
    let store = recordAttempt(emptyStore(), attempt())
    store = recordAttempt(store, attempt({ entryId: 'vs-london', key: 'vs-london|d4 Nf6 Bf4' }))
    store = recordRun(store, {
      entryId: 'italian-game',
      lineName: 'x',
      accuracy: 50,
      decisions: 2,
      errors: 1,
      offRepertoire: 0,
    })
    const cleared = clearEntry(store, 'italian-game')
    expect(Object.keys(cleared.moves)).toEqual(['vs-london|d4 Nf6 Bf4'])
    expect(Object.keys(cleared.cards)).toEqual(['vs-london|d4 Nf6 Bf4'])
    expect(cleared.runs).toHaveLength(0)
  })
})

describe('profiles', () => {
  const input = {
    name: 'Main',
    whiteOpeningId: 'italian-game',
    blackOpeningId: 'caro-kann',
    defenceIds: ['vs-catalan-open'],
  }

  it('adds a profile and makes it active', () => {
    const store = addProfile(emptyStore(), input, '2026-01-01T10:00:00.000Z')
    expect(store.profiles).toHaveLength(1)
    expect(activeProfile(store)?.name).toBe('Main')
  })

  it('keeps more than one profile', () => {
    let store = addProfile(emptyStore(), input, '2026-01-01T10:00:00.000Z')
    store = addProfile(store, { ...input, name: 'Sharp' }, '2026-01-02T10:00:00.000Z')
    expect(store.profiles.map((p) => p.name)).toEqual(['Main', 'Sharp'])
    expect(new Set(store.profiles.map((p) => p.id)).size).toBe(2)
  })

  it('never collides ids even when two profiles are made in the same millisecond', () => {
    let store = addProfile(emptyStore(), input, '2026-01-01T10:00:00.000Z')
    store = addProfile(store, input, '2026-01-01T10:00:00.000Z')
    store = addProfile(store, input, '2026-01-01T10:00:00.000Z')
    expect(new Set(store.profiles.map((p) => p.id)).size).toBe(3)
  })

  it('edits a profile in place and stamps it', () => {
    const store = addProfile(emptyStore(), input, '2026-01-01T10:00:00.000Z')
    const id = store.profiles[0].id
    const edited = updateProfile(
      store,
      id,
      { ...input, name: 'Renamed', defenceIds: ['vs-london', 'vs-scotch'] },
      '2026-03-01T10:00:00.000Z',
    )
    expect(edited.profiles[0].name).toBe('Renamed')
    expect(edited.profiles[0].defenceIds).toEqual(['vs-london', 'vs-scotch'])
    expect(edited.profiles[0].createdAt).toBe('2026-01-01T10:00:00.000Z')
    expect(edited.profiles[0].updatedAt).toBe('2026-03-01T10:00:00.000Z')
  })

  it('picks a new active profile when the active one is deleted', () => {
    let store = addProfile(emptyStore(), input, '2026-01-01T10:00:00.000Z')
    store = addProfile(store, { ...input, name: 'Second' }, '2026-01-02T10:00:00.000Z')
    const second = store.profiles[1].id
    const after = removeProfile(store, second)
    expect(after.profiles).toHaveLength(1)
    expect(after.activeProfileId).toBe(after.profiles[0].id)
  })

  it('lists the entries a profile trains, skipping the ones left blank', () => {
    const store = addProfile(
      emptyStore(),
      { ...input, blackOpeningId: null },
      '2026-01-01T10:00:00.000Z',
    )
    expect(profileEntryIds(activeProfile(store))).toEqual(['italian-game', 'vs-catalan-open'])
    expect(profileEntryIds(undefined)).toEqual([])
  })

  it('can be switched and cleared', () => {
    const store = addProfile(emptyStore(), input, '2026-01-01T10:00:00.000Z')
    expect(activeProfile(selectProfile(store, null))).toBeUndefined()
  })

  it('only names entries that exist', () => {
    const store = addProfile(emptyStore(), input, '2026-01-01T10:00:00.000Z')
    for (const id of profileEntryIds(activeProfile(store))) {
      expect(getEntry(id), `${id} is not a real entry`).toBeDefined()
    }
  })
})

describe('storage', () => {
  it('round-trips through storage', () => {
    const storage = fakeStorage()
    const store = recordAttempt(emptyStore(), attempt())
    saveProgress(store, storage)
    expect(loadProgress(storage)).toEqual(store)
  })

  it('survives no storage at all', () => {
    expect(loadProgress(null)).toEqual(emptyStore())
    expect(() => saveProgress(emptyStore(), null)).not.toThrow()
  })

  it('survives corrupt data', () => {
    expect(loadProgress(fakeStorage({ [STORAGE_KEY]: 'not json' }))).toEqual(emptyStore())
    expect(loadProgress(fakeStorage({ [STORAGE_KEY]: '[1,2,3]' }))).toEqual(emptyStore())
  })

  it('fills in fields a partial store is missing', () => {
    const partial = JSON.stringify({ version: 2, moves: {} })
    const loaded = loadProgress(fakeStorage({ [STORAGE_KEY]: partial }))
    expect(loaded.profiles).toEqual([])
    expect(loaded.runs).toEqual([])
    expect(loaded.cards).toEqual({})
  })
})

describe('migrating a version 1 record', () => {
  const legacy = {
    'italian-game': {
      runs: 3,
      lines: {
        'Giuoco Pianissimo, main line': {
          runs: 2,
          bestAccuracy: 100,
          lastAccuracy: 80,
          lastPlayedAt: '2026-01-05T10:00:00.000Z',
        },
        'Two Knights Defence, quiet 4.d3': {
          runs: 1,
          bestAccuracy: 60,
          lastAccuracy: 60,
          lastPlayedAt: '2026-01-04T10:00:00.000Z',
        },
      },
      mistakes: {
        'italian-game|e4 e5 Nf3 Nc6 Bc4 Bc5': {
          key: 'italian-game|e4 e5 Nf3 Nc6 Bc4 Bc5',
          label: '4.c3',
          expected: 'c3',
          played: { d4: 2, Ng5: 1 },
          count: 3,
          lastPlayedAt: '2026-01-05T10:00:00.000Z',
        },
      },
      lastPlayedAt: '2026-01-05T10:00:00.000Z',
    },
  }

  it('is used automatically when there is no version 2 record', () => {
    const storage = fakeStorage({ [LEGACY_KEY]: JSON.stringify(legacy) })
    const store = loadProgress(storage)
    expect(store.version).toBe(2)
    expect(store.migratedFrom).toBe('v1')
  })

  it('prefers a version 2 record when both are present', () => {
    const current = recordAttempt(emptyStore(), attempt())
    const storage = fakeStorage({
      [LEGACY_KEY]: JSON.stringify(legacy),
      [STORAGE_KEY]: JSON.stringify(current),
    })
    expect(loadProgress(storage).migratedFrom).toBeUndefined()
  })

  it('leaves the old record in place so a downgrade loses nothing', () => {
    const storage = fakeStorage({ [LEGACY_KEY]: JSON.stringify(legacy) })
    saveProgress(loadProgress(storage), storage)
    expect(storage.data[LEGACY_KEY]).toBeDefined()
  })

  it('carries the finished lines across as runs', () => {
    const store = migrateV1(legacy)
    expect(store.runs).toHaveLength(2)
    expect(store.runs.map((run) => run.lineName)).toContain('Giuoco Pianissimo, main line')
    expect(store.runs.every((run) => run.entryId === 'italian-game')).toBe(true)
    // Sorted oldest first so the trend reads correctly.
    expect(store.runs[0].at <= store.runs[1].at).toBe(true)
  })

  it('carries the missed moves across without inventing successes', () => {
    // Version 1 only ever counted failures, so attempts equal errors. That is
    // exactly what was known; claiming any correct answers would be a fiction.
    const store = migrateV1(legacy)
    const stat = store.moves['italian-game|e4 e5 Nf3 Nc6 Bc4 Bc5']
    expect(stat.attempts).toBe(3)
    expect(stat.errors).toBe(3)
    expect(stat.correct).toBe(0)
    expect(stat.wrongMoves).toEqual({ d4: 2, Ng5: 1 })
    expect(stat.ply).toBe(6)
  })

  it('accepts new attempts on top of migrated data', () => {
    let store = migrateV1(legacy)
    store = recordAttempt(store, {
      entryId: 'italian-game',
      key: 'italian-game|e4 e5 Nf3 Nc6 Bc4 Bc5',
      label: '4.c3',
      expected: 'c3',
      ply: 6,
      result: 'correct',
      at: '2026-02-01T10:00:00.000Z',
    })
    const stat = store.moves['italian-game|e4 e5 Nf3 Nc6 Bc4 Bc5']
    expect(stat.attempts).toBe(4)
    expect(stat.correct).toBe(1)
  })

  it('ignores rubbish rather than throwing', () => {
    expect(migrateV1(null).moves).toEqual({})
    expect(migrateV1('nonsense').moves).toEqual({})
    expect(migrateV1([1, 2, 3]).moves).toEqual({})
    expect(migrateV1({ 'x': { mistakes: { a: { count: 0 } } } }).moves).toEqual({})
  })
})

describe('counting lines', () => {
  it('counts every root-to-leaf path', () => {
    const italian = getEntry('italian-game')!
    expect(totalLines(italian)).toBeGreaterThan(1)
  })
})

describe('a store used across a session', () => {
  it('keeps profiles, moves, runs and cards independent', () => {
    let store: ProgressStore = addProfile(
      emptyStore(),
      {
        name: 'Main',
        whiteOpeningId: 'italian-game',
        blackOpeningId: null,
        defenceIds: ['vs-london'],
      },
      '2026-01-01T10:00:00.000Z',
    )
    store = recordAttempt(store, attempt())
    store = recordRun(store, {
      entryId: 'italian-game',
      lineName: 'x',
      accuracy: 100,
      decisions: 1,
      errors: 0,
      offRepertoire: 0,
    })
    expect(store.profiles).toHaveLength(1)
    expect(Object.keys(store.moves)).toHaveLength(1)
    expect(store.runs).toHaveLength(1)
    expect(Object.keys(store.cards)).toHaveLength(1)
  })
})
