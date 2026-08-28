import type { RepertoireEntry } from '../data/types'
import type { Card } from './scheduler'
import { newCard, review } from './scheduler'

/**
 * The record.
 *
 * Version 2 keeps *attempts*, not just failures: every time the user is asked
 * for a move, what they answered and when. That is what makes accuracy per
 * opening, per line and per move possible, and what lets the statistics tell a
 * genuine error apart from a sound move played off the repertoire. Version 1
 * only ever counted mistakes, so the migration carries across what it knew and
 * is honest about the rest.
 */

export const STORAGE_KEY = 'chess-trainer:progress:v2'
export const LEGACY_KEY = 'chess-trainer:progress:v1'

/** How many attempts per decision point are kept for the trend charts. */
const HISTORY_LIMIT = 40
/** How many finished runs are kept. Enough for a year of daily practice. */
const RUN_LIMIT = 500

/**
 * `error` is a move that is worse; `off-repertoire` is a sound move that is not
 * the one this repertoire plays. Conflating the two would make every number
 * lie, so they are counted separately everywhere.
 */
export type AttemptResult = 'correct' | 'error' | 'off-repertoire' | 'revealed'

export interface MoveStat {
  entryId: string
  /** `${entryId}|${sans joined by spaces}` - the decision point's identity. */
  key: string
  /** `5.d3` style label for display. */
  label: string
  /** The repertoire move. */
  expected: string
  /** How deep into the game this decision is, in plies. */
  ply: number
  attempts: number
  correct: number
  errors: number
  offRepertoire: number
  revealed: number
  /** Wrong moves played here, with counts. */
  wrongMoves: Record<string, number>
  firstSeenAt: string
  lastSeenAt: string
  /** Newest last, capped at `HISTORY_LIMIT`. */
  history: Array<{ at: string; result: AttemptResult }>
}

export interface RunRecord {
  entryId: string
  /** Name from the `LineEnd` the run finished on. */
  lineName: string
  at: string
  accuracy: number
  decisions: number
  errors: number
  offRepertoire: number
}

export interface PuzzleStat {
  puzzleId: string
  attempts: number
  solved: number
  lastResult: 'solved' | 'failed' | null
  lastAt: string | null
}

export interface RepertoireProfile {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  whiteOpeningId: string | null
  blackOpeningId: string | null
  /** Defence entry ids, in the order the user chose them. */
  defenceIds: string[]
}

export interface ProgressStore {
  version: 2
  profiles: RepertoireProfile[]
  activeProfileId: string | null
  moves: Record<string, MoveStat>
  runs: RunRecord[]
  cards: Record<string, Card>
  puzzles: Record<string, PuzzleStat>
  /** Set when this store was upgraded from the v1 format. */
  migratedFrom?: 'v1'
}

export function emptyStore(): ProgressStore {
  return {
    version: 2,
    profiles: [],
    activeProfileId: null,
    moves: {},
    runs: [],
    cards: {},
    puzzles: {},
  }
}

/* --------------------------------------------------------------- storage */

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

function parse(raw: string | null): unknown {
  if (!raw) return null
  try {
    return JSON.parse(raw) as unknown
  } catch {
    return null
  }
}

/* --------------------------------------------------------------- v1 shape */

interface LegacyLineRecord {
  runs?: number
  bestAccuracy?: number
  lastAccuracy?: number
  lastPlayedAt?: string
}

interface LegacyMistakeRecord {
  key?: string
  label?: string
  expected?: string
  played?: Record<string, number>
  count?: number
  lastPlayedAt?: string
}

interface LegacyOpeningProgress {
  runs?: number
  lines?: Record<string, LegacyLineRecord>
  mistakes?: Record<string, LegacyMistakeRecord>
  lastPlayedAt?: string | null
}

const EPOCH = '1970-01-01T00:00:00.000Z'

/**
 * Carry a v1 record forward.
 *
 * v1 stored only what went wrong: how many times each line was finished and
 * with what accuracy, and how often each move was missed. It never counted a
 * correct answer, so the migrated move records show attempts equal to errors -
 * which is exactly what was known, and no more. New attempts land on top and
 * the picture corrects itself within a session or two.
 */
export function migrateV1(legacy: unknown): ProgressStore {
  const store = emptyStore()
  if (!legacy || typeof legacy !== 'object' || Array.isArray(legacy)) return store
  store.migratedFrom = 'v1'

  for (const [entryId, value] of Object.entries(legacy as Record<string, LegacyOpeningProgress>)) {
    if (!value || typeof value !== 'object') continue

    for (const [lineName, line] of Object.entries(value.lines ?? {})) {
      const at = line?.lastPlayedAt ?? value.lastPlayedAt ?? EPOCH
      const accuracy = typeof line?.lastAccuracy === 'number' ? line.lastAccuracy : 0
      // One record per line rather than per run: the old format never stored
      // the individual runs, so inventing them would be worse than not.
      store.runs.push({
        entryId,
        lineName,
        at,
        accuracy,
        decisions: 0,
        errors: 0,
        offRepertoire: 0,
      })
    }

    for (const [key, mistake] of Object.entries(value.mistakes ?? {})) {
      const count = typeof mistake?.count === 'number' ? mistake.count : 0
      if (count <= 0) continue
      const at = mistake?.lastPlayedAt ?? value.lastPlayedAt ?? EPOCH
      store.moves[key] = {
        entryId,
        key,
        label: mistake?.label ?? '',
        expected: mistake?.expected ?? '',
        ply: plyFromKey(key),
        attempts: count,
        correct: 0,
        errors: count,
        offRepertoire: 0,
        revealed: 0,
        wrongMoves: { ...(mistake?.played ?? {}) },
        firstSeenAt: at,
        lastSeenAt: at,
        history: [],
      }
    }
  }

  store.runs.sort((a, b) => a.at.localeCompare(b.at))
  return store
}

/** A key is `entryId|san san san`, so the ply is the number of moves in it. */
function plyFromKey(key: string): number {
  const path = key.split('|')[1] ?? ''
  return path.trim() === '' ? 0 : path.trim().split(/\s+/).length
}

function isV2(value: unknown): value is ProgressStore {
  return Boolean(value) && typeof value === 'object' && (value as ProgressStore).version === 2
}

/** Fill in anything a hand-edited or partial store is missing. */
function normalize(store: ProgressStore): ProgressStore {
  return {
    ...emptyStore(),
    ...store,
    profiles: Array.isArray(store.profiles) ? store.profiles : [],
    runs: Array.isArray(store.runs) ? store.runs : [],
    moves: store.moves ?? {},
    cards: store.cards ?? {},
    puzzles: store.puzzles ?? {},
  }
}

/**
 * Read the record, upgrading a v1 one on the way. The v1 key is left alone so
 * an accidental downgrade does not lose anything.
 */
export function loadProgress(storage: StorageLike | null = defaultStorage()): ProgressStore {
  if (!storage) return emptyStore()
  try {
    const current = parse(storage.getItem(STORAGE_KEY))
    if (isV2(current)) return normalize(current)
    const legacy = parse(storage.getItem(LEGACY_KEY))
    if (legacy) return migrateV1(legacy)
    return emptyStore()
  } catch {
    // Corrupt or unreadable data must never stop the app from starting.
    return emptyStore()
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

/* -------------------------------------------------------------- profiles */

export function makeProfileId(now: string, existing: RepertoireProfile[]): string {
  const base = `profile-${new Date(now).getTime()}`
  if (!existing.some((p) => p.id === base)) return base
  let suffix = 2
  while (existing.some((p) => p.id === `${base}-${suffix}`)) suffix += 1
  return `${base}-${suffix}`
}

export interface ProfileInput {
  name: string
  whiteOpeningId: string | null
  blackOpeningId: string | null
  defenceIds: string[]
}

export function addProfile(
  store: ProgressStore,
  input: ProfileInput,
  now = new Date().toISOString(),
): ProgressStore {
  const profile: RepertoireProfile = {
    id: makeProfileId(now, store.profiles),
    name: input.name,
    createdAt: now,
    updatedAt: now,
    whiteOpeningId: input.whiteOpeningId,
    blackOpeningId: input.blackOpeningId,
    defenceIds: [...input.defenceIds],
  }
  return { ...store, profiles: [...store.profiles, profile], activeProfileId: profile.id }
}

export function updateProfile(
  store: ProgressStore,
  id: string,
  input: ProfileInput,
  now = new Date().toISOString(),
): ProgressStore {
  return {
    ...store,
    profiles: store.profiles.map((profile) =>
      profile.id === id
        ? {
            ...profile,
            ...input,
            defenceIds: [...input.defenceIds],
            updatedAt: now,
          }
        : profile,
    ),
  }
}

export function removeProfile(store: ProgressStore, id: string): ProgressStore {
  const profiles = store.profiles.filter((profile) => profile.id !== id)
  return {
    ...store,
    profiles,
    activeProfileId:
      store.activeProfileId === id ? (profiles[0]?.id ?? null) : store.activeProfileId,
  }
}

export function selectProfile(store: ProgressStore, id: string | null): ProgressStore {
  return { ...store, activeProfileId: id }
}

export function activeProfile(store: ProgressStore): RepertoireProfile | undefined {
  return store.profiles.find((profile) => profile.id === store.activeProfileId)
}

/** Every entry id a profile trains, White opening first. */
export function profileEntryIds(profile: RepertoireProfile | undefined): string[] {
  if (!profile) return []
  return [profile.whiteOpeningId, profile.blackOpeningId, ...profile.defenceIds].filter(
    (id): id is string => Boolean(id),
  )
}

/* --------------------------------------------------------------- attempts */

export interface AttemptInput {
  entryId: string
  /** Stable identity of the decision point: `${entryId}|${pathKey}`. */
  key: string
  label: string
  expected: string
  ply: number
  result: AttemptResult
  /** The wrong move, when there was one. */
  played?: string
  at?: string
}

/**
 * Record one answer at one decision point.
 *
 * Called the moment it happens rather than at the end of a run: a line someone
 * gives up on is exactly the line worth remembering. It also updates the review
 * card, so drilling and puzzles share one schedule.
 */
export function recordAttempt(store: ProgressStore, input: AttemptInput): ProgressStore {
  const at = input.at ?? new Date().toISOString()
  const previous = store.moves[input.key]
  const wrongMoves = { ...(previous?.wrongMoves ?? {}) }
  if (input.played && input.result !== 'correct') {
    wrongMoves[input.played] = (wrongMoves[input.played] ?? 0) + 1
  }

  const stat: MoveStat = {
    entryId: input.entryId,
    key: input.key,
    label: input.label,
    expected: input.expected,
    ply: input.ply,
    attempts: (previous?.attempts ?? 0) + 1,
    correct: (previous?.correct ?? 0) + (input.result === 'correct' ? 1 : 0),
    errors: (previous?.errors ?? 0) + (input.result === 'error' ? 1 : 0),
    offRepertoire: (previous?.offRepertoire ?? 0) + (input.result === 'off-repertoire' ? 1 : 0),
    revealed: (previous?.revealed ?? 0) + (input.result === 'revealed' ? 1 : 0),
    wrongMoves,
    firstSeenAt: previous?.firstSeenAt ?? at,
    lastSeenAt: at,
    history: [...(previous?.history ?? []), { at, result: input.result }].slice(-HISTORY_LIMIT),
  }

  // A sound move played off the repertoire is not a memory failure, so it does
  // not push the card back - the user knew a move, just not this one.
  const scheduled = input.result === 'correct' || input.result === 'off-repertoire'
  const card = store.cards[input.key] ?? newCard(input.key, at)

  return {
    ...store,
    moves: { ...store.moves, [input.key]: stat },
    cards: { ...store.cards, [input.key]: review(card, scheduled, at) },
  }
}

export interface RunInput {
  entryId: string
  lineName: string
  accuracy: number
  decisions: number
  errors: number
  offRepertoire: number
  at?: string
}

/** Fold a finished run into the store. */
export function recordRun(store: ProgressStore, input: RunInput): ProgressStore {
  const at = input.at ?? new Date().toISOString()
  const runs = [...store.runs, { ...input, at }].slice(-RUN_LIMIT)
  return { ...store, runs }
}

export interface PuzzleAttemptInput {
  puzzleId: string
  solved: boolean
  /** Recall puzzles share a card with the same move met while drilling. */
  cardId?: string
  at?: string
}

export function recordPuzzleAttempt(
  store: ProgressStore,
  input: PuzzleAttemptInput,
): ProgressStore {
  const at = input.at ?? new Date().toISOString()
  const previous = store.puzzles[input.puzzleId]
  const stat: PuzzleStat = {
    puzzleId: input.puzzleId,
    attempts: (previous?.attempts ?? 0) + 1,
    solved: (previous?.solved ?? 0) + (input.solved ? 1 : 0),
    lastResult: input.solved ? 'solved' : 'failed',
    lastAt: at,
  }
  const cardId = input.cardId ?? input.puzzleId
  const card = store.cards[cardId] ?? newCard(cardId, at)
  return {
    ...store,
    puzzles: { ...store.puzzles, [input.puzzleId]: stat },
    cards: { ...store.cards, [cardId]: review(card, input.solved, at) },
  }
}

/** Forget everything about one opening or defence. */
export function clearEntry(store: ProgressStore, entryId: string): ProgressStore {
  const moves = Object.fromEntries(
    Object.entries(store.moves).filter(([, stat]) => stat.entryId !== entryId),
  )
  const removed = new Set(
    Object.keys(store.moves).filter((key) => store.moves[key].entryId === entryId),
  )
  const cards = Object.fromEntries(
    Object.entries(store.cards).filter(([id]) => !removed.has(id)),
  )
  return {
    ...store,
    moves,
    cards,
    runs: store.runs.filter((run) => run.entryId !== entryId),
  }
}

/** Total number of root-to-leaf lines an entry contains. */
export function totalLines(entry: RepertoireEntry): number {
  let count = 0
  const walk = (nodes: RepertoireEntry['tree']) => {
    for (const node of nodes) {
      const children = node.children ?? []
      if (children.length === 0) count += 1
      else walk(children)
    }
  }
  walk(entry.tree)
  return count
}
