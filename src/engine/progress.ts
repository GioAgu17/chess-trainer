import type { Opening } from '../data/types'

const STORAGE_KEY = 'chess-trainer:progress:v1'

export interface LineRecord {
  /** How many times this line has been reached. */
  runs: number
  bestAccuracy: number
  lastAccuracy: number
  /** ISO timestamp. */
  lastPlayedAt: string
}

export interface MistakeRecord {
  /** SAN path leading to the decision point, e.g. `e4 e5 Nf3`. */
  key: string
  /** `5.d3` style label for display. */
  label: string
  /** The repertoire move the user should have found. */
  expected: string
  /** Wrong moves played here, most recent first, with counts. */
  played: Record<string, number>
  count: number
  lastPlayedAt: string
}

export interface OpeningProgress {
  runs: number
  lines: Record<string, LineRecord>
  mistakes: Record<string, MistakeRecord>
  lastPlayedAt: string | null
}

export type ProgressStore = Record<string, OpeningProgress>

export function emptyOpeningProgress(): OpeningProgress {
  return { runs: 0, lines: {}, mistakes: {}, lastPlayedAt: null }
}

/** Minimal storage surface, so tests can pass a fake. */
export interface StorageLike {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
}

function defaultStorage(): StorageLike | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage
  } catch {
    // Private-mode browsers can throw on access rather than return null.
    return null
  }
}

export function loadProgress(storage: StorageLike | null = defaultStorage()): ProgressStore {
  if (!storage) return {}
  try {
    const raw = storage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {}
    return parsed as ProgressStore
  } catch {
    // Corrupt or unreadable data must never stop the app from starting.
    return {}
  }
}

export function saveProgress(
  store: ProgressStore,
  storage: StorageLike | null = defaultStorage(),
): void {
  if (!storage) return
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(store))
  } catch {
    // Quota or private mode: progress is a convenience, not a requirement.
  }
}

export function progressFor(store: ProgressStore, openingId: string): OpeningProgress {
  return store[openingId] ?? emptyOpeningProgress()
}

export interface RunResult {
  openingId: string
  /** Name from the `LineEnd` the run finished on. */
  lineName: string
  accuracy: number
  /** Injected so the caller controls the clock; defaults to now. */
  at?: string
}

/** Fold a finished run into the store. Pure: returns a new store. */
export function recordRun(store: ProgressStore, result: RunResult): ProgressStore {
  const at = result.at ?? new Date().toISOString()
  const previous = progressFor(store, result.openingId)

  const previousLine = previous.lines[result.lineName]
  const lines: Record<string, LineRecord> = {
    ...previous.lines,
    [result.lineName]: {
      runs: (previousLine?.runs ?? 0) + 1,
      bestAccuracy: Math.max(previousLine?.bestAccuracy ?? 0, result.accuracy),
      lastAccuracy: result.accuracy,
      lastPlayedAt: at,
    },
  }

  return {
    ...store,
    [result.openingId]: {
      ...previous,
      runs: previous.runs + 1,
      lines,
      lastPlayedAt: at,
    },
  }
}

export interface MistakeInput {
  openingId: string
  /** Stable identity of the decision point. */
  key: string
  /** `5.d3` style label for display. */
  label: string
  expected: string
  played: string
  at?: string
}

/**
 * Record a wrong move the moment it happens rather than at the end of the run.
 * Someone who keeps missing a move often gives up on the line, and that is
 * exactly the person the "moves you keep getting wrong" list is for.
 */
export function recordMistake(store: ProgressStore, input: MistakeInput): ProgressStore {
  const at = input.at ?? new Date().toISOString()
  const previous = progressFor(store, input.openingId)
  const existing = previous.mistakes[input.key]
  const played = { ...(existing?.played ?? {}) }
  if (input.played) played[input.played] = (played[input.played] ?? 0) + 1

  return {
    ...store,
    [input.openingId]: {
      ...previous,
      mistakes: {
        ...previous.mistakes,
        [input.key]: {
          key: input.key,
          label: input.label,
          expected: input.expected,
          played,
          count: (existing?.count ?? 0) + 1,
          lastPlayedAt: at,
        },
      },
      lastPlayedAt: at,
    },
  }
}

export function clearOpening(store: ProgressStore, openingId: string): ProgressStore {
  const next = { ...store }
  delete next[openingId]
  return next
}

/** The mistakes the user makes most often, worst first. */
export function troubleSpots(progress: OpeningProgress, limit = 5): MistakeRecord[] {
  return Object.values(progress.mistakes)
    .sort((a, b) => b.count - a.count || b.lastPlayedAt.localeCompare(a.lastPlayedAt))
    .slice(0, limit)
}

/** How many distinct lines of an opening have been completed at least once. */
export function linesDrilled(progress: OpeningProgress): number {
  return Object.keys(progress.lines).length
}

/** Total number of root-to-leaf lines an opening contains. */
export function totalLines(opening: Opening): number {
  let count = 0
  const walk = (nodes: NonNullable<Opening['tree']>) => {
    for (const node of nodes) {
      const children = node.children ?? []
      if (children.length === 0) count += 1
      else walk(children)
    }
  }
  walk(opening.tree)
  return count
}
