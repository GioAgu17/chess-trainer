/**
 * Spaced repetition.
 *
 * Deliberately small: a fixed interval ladder rather than a full SM-2. The
 * ladder is what the user was promised - something missed yesterday comes back
 * today, something answered right five times in a row comes back in a month -
 * and a scheme you can state in one sentence is one a user can trust.
 */

/** Days until the next review, indexed by the number of successes in a row. */
export const STEPS = [1, 2, 5, 12, 30, 75] as const

/** Beyond the ladder, intervals keep growing by this factor. */
const GROWTH = 2.5

/** No card ever disappears for more than a year. */
const MAX_INTERVAL = 365

export interface Card {
  /** The puzzle or decision-point id this schedules. */
  id: string
  /** Correct answers in a row. Reset to zero by any miss. */
  reps: number
  /** How many times it has been forgotten after being learned. */
  lapses: number
  intervalDays: number
  /** ISO timestamp. A card is due when this is in the past. */
  dueAt: string
  lastReviewedAt: string | null
}

const DAY_MS = 24 * 60 * 60 * 1000

function addDays(iso: string, days: number): string {
  return new Date(new Date(iso).getTime() + days * DAY_MS).toISOString()
}

/** A brand new card is due immediately. */
export function newCard(id: string, now: string): Card {
  return { id, reps: 0, lapses: 0, intervalDays: 0, dueAt: now, lastReviewedAt: null }
}

/** The interval after `reps` successes in a row. */
export function intervalFor(reps: number): number {
  if (reps <= 0) return 0
  if (reps <= STEPS.length) return STEPS[reps - 1]
  const extra = reps - STEPS.length
  return Math.min(MAX_INTERVAL, Math.round(STEPS[STEPS.length - 1] * GROWTH ** extra))
}

/**
 * Fold one answer into a card.
 *
 * A miss sends the card straight back to the front of the queue: it is due now,
 * which in practice means later in the same session and again tomorrow.
 */
export function review(card: Card, correct: boolean, now: string): Card {
  if (!correct) {
    return {
      ...card,
      reps: 0,
      lapses: card.lapses + 1,
      intervalDays: 0,
      dueAt: now,
      lastReviewedAt: now,
    }
  }
  const reps = card.reps + 1
  const intervalDays = intervalFor(reps)
  return {
    ...card,
    reps,
    intervalDays,
    dueAt: addDays(now, intervalDays),
    lastReviewedAt: now,
  }
}

export function isDue(card: Card, now: string): boolean {
  return new Date(card.dueAt).getTime() <= new Date(now).getTime()
}

/** How overdue a card is, in days. Negative for one that is not due yet. */
export function overdueDays(card: Card, now: string): number {
  return (new Date(now).getTime() - new Date(card.dueAt).getTime()) / DAY_MS
}

/**
 * When the card comes back, as a catalogue key and its values rather than a
 * sentence - the scheduler has no business knowing what language the user
 * reads.
 */
export function dueLabel(
  card: Card,
  now: string,
): { key: string; vars?: Record<string, number> } {
  const days = -overdueDays(card, now)
  if (days <= 0) return { key: 'puzzles.dueNow' }
  if (days < 1) return { key: 'puzzles.dueToday' }
  if (days < 2) return { key: 'puzzles.dueTomorrow' }
  if (days < 30) return { key: 'puzzles.dueDays', vars: { count: Math.round(days) } }
  return { key: 'puzzles.dueMonths', vars: { count: Math.round(days / 30) } }
}

export interface SelectionInput<T> {
  /** Everything the user could be shown. */
  pool: T[]
  /** Existing schedule, keyed by item id. */
  cards: Record<string, Card>
  /** How often each item has been got wrong. Drives the tie-break. */
  missesById?: Record<string, number>
  now: string
  count: number
}

/**
 * Choose the next batch.
 *
 * Due cards come first, most overdue first, with the moves the user misses most
 * winning ties. Anything left over is filled with items they have never seen,
 * again weighted towards the ones they get wrong when drilling - which is what
 * makes this a set of exercises about *their* weaknesses rather than a list.
 */
export function selectDue<T extends { id: string }>({
  pool,
  cards,
  missesById = {},
  now,
  count,
}: SelectionInput<T>): T[] {
  const misses = (item: T) => missesById[item.id] ?? 0

  const due: T[] = []
  const unseen: T[] = []
  const rest: T[] = []
  for (const item of pool) {
    const card = cards[item.id]
    if (!card) unseen.push(item)
    else if (isDue(card, now)) due.push(item)
    else rest.push(item)
  }

  due.sort(
    (a, b) =>
      overdueDays(cards[b.id], now) - overdueDays(cards[a.id], now) ||
      misses(b) - misses(a) ||
      a.id.localeCompare(b.id),
  )
  unseen.sort((a, b) => misses(b) - misses(a) || a.id.localeCompare(b.id))
  // Nothing is due and nothing is new: show whatever comes back soonest, so a
  // user who wants to keep going always can.
  rest.sort(
    (a, b) =>
      new Date(cards[a.id].dueAt).getTime() - new Date(cards[b.id].dueAt).getTime() ||
      a.id.localeCompare(b.id),
  )

  return [...due, ...unseen, ...rest].slice(0, count)
}

/** How many cards are waiting right now. */
export function dueCount(cards: Record<string, Card>, ids: string[], now: string): number {
  return ids.filter((id) => {
    const card = cards[id]
    return !card || isDue(card, now)
  }).length
}
