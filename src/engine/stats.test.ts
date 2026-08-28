import { describe, expect, it } from 'vitest'
import { ENTRIES, getEntry } from '../data/entries'
import { emptyStore, migrateV1, recordAttempt, recordRun, type ProgressStore } from './progress'
import {
  accuracyTrend,
  coverageGaps,
  entryStats,
  lineStats,
  rankMove,
  rate,
  summarise,
  weakestMoves,
} from './stats'
import { decisionPoints } from './tree'

const italian = getEntry('italian-game')!
const london = getEntry('vs-london')!

function withAttempts(
  entries: Array<{
    entryId?: string
    key: string
    result: 'correct' | 'error' | 'off-repertoire' | 'revealed'
    played?: string
    at?: string
    label?: string
  }>,
): ProgressStore {
  let store = emptyStore()
  for (const item of entries) {
    store = recordAttempt(store, {
      entryId: item.entryId ?? 'italian-game',
      key: item.key,
      label: item.label ?? '3.Bc4',
      expected: 'Bc4',
      ply: 4,
      result: item.result,
      played: item.played,
      at: item.at ?? '2026-01-01T10:00:00.000Z',
    })
  }
  return store
}

describe('rate', () => {
  it('is a whole-number percentage', () => {
    expect(rate(1, 3)).toBe(33)
    expect(rate(2, 2)).toBe(100)
  })

  it('is zero rather than NaN when nothing has been attempted', () => {
    expect(rate(0, 0)).toBe(0)
  })
})

describe('per-entry statistics', () => {
  it('reports nothing rather than crashing on an untouched entry', () => {
    const stats = entryStats(emptyStore(), italian)
    expect(stats.attempts).toBe(0)
    expect(stats.accuracy).toBe(0)
    expect(stats.coverage).toBe(0)
    expect(stats.lastPlayedAt).toBeNull()
    expect(stats.totalDecisions).toBeGreaterThan(0)
  })

  it('counts attempts, errors and off-repertoire choices separately', () => {
    const store = withAttempts([
      { key: 'italian-game|a', result: 'correct' },
      { key: 'italian-game|a', result: 'error', played: 'Ng5' },
      { key: 'italian-game|b', result: 'off-repertoire', played: 'Bb5' },
      { key: 'italian-game|b', result: 'revealed' },
    ])
    const stats = entryStats(store, italian)
    expect(stats.attempts).toBe(4)
    expect(stats.correct).toBe(1)
    expect(stats.errors).toBe(1)
    expect(stats.offRepertoire).toBe(1)
    expect(stats.revealed).toBe(1)
    expect(stats.accuracy).toBe(25)
  })

  it('does not mix one entry into another', () => {
    const store = withAttempts([
      { key: 'italian-game|a', result: 'correct' },
      { entryId: 'vs-london', key: 'vs-london|a', result: 'error', played: 'e6' },
    ])
    expect(entryStats(store, italian).attempts).toBe(1)
    expect(entryStats(store, london).errors).toBe(1)
  })

  it('measures coverage against decision points that still exist', () => {
    const points = decisionPoints(italian)
    const store = withAttempts([
      { key: points[0].key, result: 'correct' },
      // A key from a line that has since been rewritten out of the tree.
      { key: 'italian-game|e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4', result: 'correct' },
    ])
    const stats = entryStats(store, italian)
    expect(stats.decisionsSeen).toBe(1)
    expect(stats.totalDecisions).toBe(points.length)
    expect(stats.coverage).toBe(rate(1, points.length))
  })

  it('counts finished runs and distinct lines', () => {
    let store = emptyStore()
    store = recordRun(store, {
      entryId: 'italian-game',
      lineName: 'A',
      accuracy: 80,
      decisions: 5,
      errors: 1,
      offRepertoire: 0,
      at: '2026-01-01T10:00:00.000Z',
    })
    store = recordRun(store, {
      entryId: 'italian-game',
      lineName: 'A',
      accuracy: 100,
      decisions: 5,
      errors: 0,
      offRepertoire: 0,
      at: '2026-01-02T10:00:00.000Z',
    })
    const stats = entryStats(store, italian)
    expect(stats.runs).toBe(2)
    expect(stats.linesDrilled).toBe(1)
  })
})

describe('per-line statistics', () => {
  const store = [
    { lineName: 'Quiet line', accuracy: 40, at: '2026-01-01T10:00:00.000Z' },
    { lineName: 'Quiet line', accuracy: 60, at: '2026-01-02T10:00:00.000Z' },
    { lineName: 'Main line', accuracy: 90, at: '2026-01-03T10:00:00.000Z' },
  ].reduce(
    (acc, run) =>
      recordRun(acc, {
        entryId: 'italian-game',
        decisions: 5,
        errors: 0,
        offRepertoire: 0,
        ...run,
      }),
    emptyStore(),
  )

  it('puts the weakest line first', () => {
    expect(lineStats(store, 'italian-game')[0].lineName).toBe('Quiet line')
  })

  it('reports best, last and average for each line', () => {
    const quiet = lineStats(store, 'italian-game')[0]
    expect(quiet.runs).toBe(2)
    expect(quiet.bestAccuracy).toBe(60)
    expect(quiet.lastAccuracy).toBe(60)
    expect(quiet.averageAccuracy).toBe(50)
    expect(quiet.lastPlayedAt).toBe('2026-01-02T10:00:00.000Z')
  })
})

describe('the moves you keep missing', () => {
  it('ranks by how often a move actually goes wrong', () => {
    const store = withAttempts([
      { key: 'italian-game|a', result: 'error', played: 'x', label: '3.Bc4' },
      { key: 'italian-game|a', result: 'error', played: 'x' },
      { key: 'italian-game|a', result: 'error', played: 'y' },
      { key: 'italian-game|b', result: 'error', played: 'z', label: '5.d3' },
    ])
    const ranked = weakestMoves(store)
    expect(ranked[0].key).toBe('italian-game|a')
    expect(ranked[0].misses).toBe(3)
    expect(ranked[0].commonestWrong).toBe('x')
  })

  it('never counts a sound move played off the repertoire as a miss', () => {
    // This is the whole point of splitting the two: someone who plays the Ruy
    // Lopez against an Italian repertoire has not got anything wrong.
    const store = withAttempts([
      { key: 'italian-game|a', result: 'off-repertoire', played: 'Bb5' },
      { key: 'italian-game|a', result: 'off-repertoire', played: 'Bb5' },
      { key: 'italian-game|a', result: 'off-repertoire', played: 'Bb5' },
    ])
    expect(weakestMoves(store)).toEqual([])
    expect(rankMove(store.moves['italian-game|a']).misses).toBe(0)
  })

  it('counts a revealed move as a miss', () => {
    const store = withAttempts([{ key: 'italian-game|a', result: 'revealed' }])
    expect(weakestMoves(store)[0].misses).toBe(1)
  })

  it('can be limited to one profile\'s entries', () => {
    const store = withAttempts([
      { key: 'italian-game|a', result: 'error', played: 'x' },
      { entryId: 'vs-london', key: 'vs-london|a', result: 'error', played: 'y' },
    ])
    expect(weakestMoves(store, ['vs-london'])).toHaveLength(1)
    expect(weakestMoves(store, ['vs-london'])[0].entryId).toBe('vs-london')
  })

  it('honours the limit', () => {
    const store = withAttempts(
      Array.from({ length: 20 }, (_, i) => ({
        key: `italian-game|${i}`,
        result: 'error' as const,
        played: 'x',
      })),
    )
    expect(weakestMoves(store, null, 5)).toHaveLength(5)
  })
})

describe('progress over time', () => {
  it('buckets attempts by day, oldest first', () => {
    const store = withAttempts([
      { key: 'italian-game|a', result: 'error', played: 'x', at: '2026-01-02T10:00:00.000Z' },
      { key: 'italian-game|a', result: 'correct', at: '2026-01-01T10:00:00.000Z' },
      { key: 'italian-game|b', result: 'correct', at: '2026-01-02T12:00:00.000Z' },
    ])
    const trend = accuracyTrend(store)
    expect(trend.map((point) => point.day)).toEqual(['2026-01-01', '2026-01-02'])
    expect(trend[0].accuracy).toBe(100)
    expect(trend[1].accuracy).toBe(50)
  })

  it('shows a repertoire getting better rather than just repeated', () => {
    const store = withAttempts([
      { key: 'italian-game|a', result: 'error', played: 'x', at: '2026-01-01T10:00:00.000Z' },
      { key: 'italian-game|b', result: 'error', played: 'x', at: '2026-01-01T11:00:00.000Z' },
      { key: 'italian-game|a', result: 'correct', at: '2026-02-01T10:00:00.000Z' },
      { key: 'italian-game|b', result: 'correct', at: '2026-02-01T11:00:00.000Z' },
    ])
    const trend = accuracyTrend(store, ['italian-game'])
    expect(trend[0].accuracy).toBe(0)
    expect(trend[trend.length - 1].accuracy).toBe(100)
  })

  it('keeps the error and off-repertoire split in the trend too', () => {
    const store = withAttempts([
      { key: 'italian-game|a', result: 'error', played: 'x' },
      { key: 'italian-game|b', result: 'off-repertoire', played: 'y' },
    ])
    const [point] = accuracyTrend(store)
    expect(point.errors).toBe(1)
    expect(point.offRepertoire).toBe(1)
  })
})

describe('coverage', () => {
  it('lists the decision points never once seen', () => {
    const points = decisionPoints(italian)
    const store = withAttempts([{ key: points[0].key, result: 'correct' }])
    const gaps = coverageGaps(store, italian)
    expect(gaps).toHaveLength(points.length - 1)
    expect(gaps.map((gap) => gap.key)).not.toContain(points[0].key)
  })

  it('gives each gap enough to jump straight to the position', () => {
    const [gap] = coverageGaps(emptyStore(), italian)
    expect(gap.label).toMatch(/^\d+\.{1,3}/)
    expect(gap.expected.length).toBeGreaterThan(0)
    expect(Array.isArray(gap.line)).toBe(true)
  })
})

describe('the summary at the top of the page', () => {
  it('adds up across the whole repertoire', () => {
    const store = withAttempts([
      { key: 'italian-game|a', result: 'correct' },
      { key: 'italian-game|a', result: 'error', played: 'x' },
      { entryId: 'vs-london', key: 'vs-london|a', result: 'off-repertoire', played: 'y' },
    ])
    const summary = summarise(store, [italian, london])
    expect(summary.entries).toBe(2)
    expect(summary.entriesStarted).toBe(2)
    expect(summary.attempts).toBe(3)
    expect(summary.errors).toBe(1)
    expect(summary.offRepertoire).toBe(1)
    expect(summary.accuracy).toBe(33)
    expect(summary.activeDays).toBe(1)
  })

  it('is all zeroes on a fresh install rather than undefined', () => {
    const summary = summarise(emptyStore(), ENTRIES)
    expect(summary.attempts).toBe(0)
    expect(summary.accuracy).toBe(0)
    expect(summary.coverage).toBe(0)
    expect(summary.lastPlayedAt).toBeNull()
  })

  it('reads a migrated version 1 record without pretending it knows more', () => {
    const store = migrateV1({
      'italian-game': {
        mistakes: {
          'italian-game|e4 e5': {
            key: 'italian-game|e4 e5',
            label: '2.Nf3',
            expected: 'Nf3',
            played: { d4: 2 },
            count: 2,
            lastPlayedAt: '2026-01-01T10:00:00.000Z',
          },
        },
      },
    })
    const summary = summarise(store, [italian])
    expect(summary.attempts).toBe(2)
    expect(summary.correct).toBe(0)
    expect(summary.accuracy).toBe(0)
    // No history was recorded in v1, so there is nothing to chart - and the
    // trend says so rather than inventing points.
    expect(accuracyTrend(store)).toEqual([])
  })
})
