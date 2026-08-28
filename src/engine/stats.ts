import type { RepertoireEntry } from '../data/types'
import { decisionPoints, totalPlies } from './tree'
import { totalLines, type MoveStat, type ProgressStore, type RunRecord } from './progress'

/**
 * Statistics.
 *
 * Everything here is derived from recorded attempts rather than kept as a
 * counter, so a number the user sees can always be traced back to the
 * positions behind it. The one rule that runs through the whole file: an
 * *error* (a move that is worse) and an *off-repertoire* choice (a sound move
 * this repertoire does not play) are never added together. Conflating them
 * would make the accuracy figure a lie.
 */

/** Correct answers over attempts, as a whole-number percentage. */
export function rate(correct: number, attempts: number): number {
  if (attempts <= 0) return 0
  return Math.round((correct / attempts) * 100)
}

export interface EntryStats {
  entryId: string
  name: string
  kind: RepertoireEntry['kind']
  /** Finished runs through a line. */
  runs: number
  attempts: number
  correct: number
  errors: number
  offRepertoire: number
  revealed: number
  /** correct / attempts. Off-repertoire choices count against it - they are
   *  still not the move being taught - but they are reported separately. */
  accuracy: number
  /** Distinct lines finished at least once. */
  linesDrilled: number
  totalLines: number
  /** Distinct decision points the user has ever been asked for. */
  decisionsSeen: number
  totalDecisions: number
  /** decisionsSeen / totalDecisions. */
  coverage: number
  mainLinePlies: number
  lastPlayedAt: string | null
}

export function movesFor(store: ProgressStore, entryId: string): MoveStat[] {
  return Object.values(store.moves).filter((stat) => stat.entryId === entryId)
}

export function runsFor(store: ProgressStore, entryId: string): RunRecord[] {
  return store.runs.filter((run) => run.entryId === entryId)
}

export function entryStats(store: ProgressStore, entry: RepertoireEntry): EntryStats {
  const moves = movesFor(store, entry.id)
  const runs = runsFor(store, entry.id)
  const points = decisionPoints(entry)
  const known = new Set(points.map((point) => point.key))

  const totals = moves.reduce(
    (acc, stat) => ({
      attempts: acc.attempts + stat.attempts,
      correct: acc.correct + stat.correct,
      errors: acc.errors + stat.errors,
      offRepertoire: acc.offRepertoire + stat.offRepertoire,
      revealed: acc.revealed + stat.revealed,
    }),
    { attempts: 0, correct: 0, errors: 0, offRepertoire: 0, revealed: 0 },
  )

  const lastMove = moves.reduce<string | null>(
    (latest, stat) => (latest === null || stat.lastSeenAt > latest ? stat.lastSeenAt : latest),
    null,
  )
  const lastRun = runs.reduce<string | null>(
    (latest, run) => (latest === null || run.at > latest ? run.at : latest),
    null,
  )

  // Only count decision points that still exist in the tree: a repertoire line
  // that has been rewritten should not inflate coverage forever.
  const decisionsSeen = moves.filter((stat) => known.has(stat.key)).length

  return {
    entryId: entry.id,
    name: entry.name,
    kind: entry.kind,
    runs: runs.length,
    ...totals,
    accuracy: rate(totals.correct, totals.attempts),
    linesDrilled: new Set(runs.map((run) => run.lineName)).size,
    totalLines: totalLines(entry),
    decisionsSeen,
    totalDecisions: points.length,
    coverage: rate(decisionsSeen, points.length),
    mainLinePlies: totalPlies(entry),
    lastPlayedAt: [lastMove, lastRun].filter(Boolean).sort().pop() ?? null,
  }
}

export interface LineStats {
  lineName: string
  runs: number
  bestAccuracy: number
  lastAccuracy: number
  averageAccuracy: number
  lastPlayedAt: string
}

/** Per-line accuracy, worst first, so the weakest link is at the top. */
export function lineStats(store: ProgressStore, entryId: string): LineStats[] {
  const byLine = new Map<string, RunRecord[]>()
  for (const run of runsFor(store, entryId)) {
    const list = byLine.get(run.lineName) ?? []
    list.push(run)
    byLine.set(run.lineName, list)
  }
  return [...byLine.entries()]
    .map(([lineName, runs]) => {
      const sorted = [...runs].sort((a, b) => a.at.localeCompare(b.at))
      const total = sorted.reduce((sum, run) => sum + run.accuracy, 0)
      return {
        lineName,
        runs: sorted.length,
        bestAccuracy: Math.max(...sorted.map((run) => run.accuracy)),
        lastAccuracy: sorted[sorted.length - 1].accuracy,
        averageAccuracy: Math.round(total / sorted.length),
        lastPlayedAt: sorted[sorted.length - 1].at,
      }
    })
    .sort((a, b) => a.averageAccuracy - b.averageAccuracy || a.lineName.localeCompare(b.lineName))
}

/** A move statistic with the derived numbers the UI wants. */
export interface RankedMove extends MoveStat {
  accuracy: number
  /** Errors and reveals only. An off-repertoire choice is not a miss. */
  misses: number
  /** The wrong move played most often here, if any. */
  commonestWrong: string | null
}

export function rankMove(stat: MoveStat): RankedMove {
  const wrong = Object.entries(stat.wrongMoves).sort((a, b) => b[1] - a[1])[0]
  return {
    ...stat,
    accuracy: rate(stat.correct, stat.attempts),
    misses: stat.errors + stat.revealed,
    commonestWrong: wrong ? wrong[0] : null,
  }
}

/**
 * The moves the user misses most, worst first.
 *
 * Ranked by how many times a move has actually gone wrong, with accuracy as
 * the tie-break, so a move missed six times out of ten outranks one missed
 * once out of one. Off-repertoire choices never contribute: choosing a sound
 * move outside the repertoire is a preference, not a weakness.
 */
export function weakestMoves(
  store: ProgressStore,
  entryIds: string[] | null = null,
  limit = 10,
  minimumAttempts = 1,
): RankedMove[] {
  const ids = entryIds ? new Set(entryIds) : null
  return Object.values(store.moves)
    .filter((stat) => (ids ? ids.has(stat.entryId) : true))
    .filter((stat) => stat.attempts >= minimumAttempts)
    .map(rankMove)
    .filter((stat) => stat.misses > 0)
    .sort(
      (a, b) =>
        b.misses - a.misses ||
        a.accuracy - b.accuracy ||
        b.lastSeenAt.localeCompare(a.lastSeenAt),
    )
    .slice(0, limit)
}

export interface TrendPoint {
  /** `YYYY-MM-DD`. */
  day: string
  attempts: number
  correct: number
  errors: number
  offRepertoire: number
  accuracy: number
}

/**
 * Accuracy per day, oldest first.
 *
 * Built from the per-attempt history rather than from run summaries, so it
 * answers "am I actually getting better at this" rather than "how often have I
 * opened it".
 */
export function accuracyTrend(
  store: ProgressStore,
  entryIds: string[] | null = null,
): TrendPoint[] {
  const ids = entryIds ? new Set(entryIds) : null
  const byDay = new Map<string, TrendPoint>()

  for (const stat of Object.values(store.moves)) {
    if (ids && !ids.has(stat.entryId)) continue
    for (const attempt of stat.history) {
      const day = attempt.at.slice(0, 10)
      const point =
        byDay.get(day) ??
        { day, attempts: 0, correct: 0, errors: 0, offRepertoire: 0, accuracy: 0 }
      point.attempts += 1
      if (attempt.result === 'correct') point.correct += 1
      if (attempt.result === 'error') point.errors += 1
      if (attempt.result === 'off-repertoire') point.offRepertoire += 1
      byDay.set(day, point)
    }
  }

  return [...byDay.values()]
    .map((point) => ({ ...point, accuracy: rate(point.correct, point.attempts) }))
    .sort((a, b) => a.day.localeCompare(b.day))
}

export interface CoverageGap {
  key: string
  label: string
  expected: string
  ply: number
  line: string[]
}

/** Decision points in an entry the user has never once been asked for. */
export function coverageGaps(
  store: ProgressStore,
  entry: RepertoireEntry,
  limit = 50,
): CoverageGap[] {
  return decisionPoints(entry)
    .filter((point) => !store.moves[point.key])
    .slice(0, limit)
}

export interface Summary {
  entries: number
  entriesStarted: number
  attempts: number
  correct: number
  errors: number
  offRepertoire: number
  accuracy: number
  runs: number
  coverage: number
  /** Days on which anything at all was drilled. */
  activeDays: number
  lastPlayedAt: string | null
}

/** The one-glance figure at the top of the statistics page. */
export function summarise(store: ProgressStore, entries: RepertoireEntry[]): Summary {
  const perEntry = entries.map((entry) => entryStats(store, entry))
  const totals = perEntry.reduce(
    (acc, stat) => ({
      attempts: acc.attempts + stat.attempts,
      correct: acc.correct + stat.correct,
      errors: acc.errors + stat.errors,
      offRepertoire: acc.offRepertoire + stat.offRepertoire,
      runs: acc.runs + stat.runs,
      seen: acc.seen + stat.decisionsSeen,
      total: acc.total + stat.totalDecisions,
    }),
    { attempts: 0, correct: 0, errors: 0, offRepertoire: 0, runs: 0, seen: 0, total: 0 },
  )
  const days = new Set(accuracyTrend(store, entries.map((entry) => entry.id)).map((p) => p.day))
  const last = perEntry
    .map((stat) => stat.lastPlayedAt)
    .filter((at): at is string => Boolean(at))
    .sort()
    .pop()

  return {
    entries: entries.length,
    entriesStarted: perEntry.filter((stat) => stat.attempts > 0).length,
    attempts: totals.attempts,
    correct: totals.correct,
    errors: totals.errors,
    offRepertoire: totals.offRepertoire,
    accuracy: rate(totals.correct, totals.attempts),
    runs: totals.runs,
    coverage: rate(totals.seen, totals.total),
    activeDays: days.size,
    lastPlayedAt: last ?? null,
  }
}
