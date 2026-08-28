import { describe, expect, it } from 'vitest'
import {
  STEPS,
  dueCount,
  dueLabel,
  intervalFor,
  isDue,
  newCard,
  overdueDays,
  review,
  selectDue,
  type Card,
} from './scheduler'

/** Day 1 is 2026-01-01; higher numbers roll into the following months. */
const AT = (day: number) =>
  new Date(Date.UTC(2026, 0, day, 9, 0, 0)).toISOString()

function drill(times: number, from = AT(1)): Card {
  let card = newCard('x', from)
  let at = from
  for (let i = 0; i < times; i += 1) {
    card = review(card, true, at)
    at = card.dueAt
  }
  return card
}

describe('the interval ladder', () => {
  it('is the ladder the user was promised', () => {
    expect(STEPS).toEqual([1, 2, 5, 12, 30, 75])
  })

  it('brings something nailed five times back in a month', () => {
    expect(intervalFor(5)).toBe(30)
    expect(drill(5).intervalDays).toBe(30)
  })

  it('brings something new back tomorrow', () => {
    expect(intervalFor(1)).toBe(1)
  })

  it('keeps growing past the end of the ladder, but never past a year', () => {
    expect(intervalFor(7)).toBeGreaterThan(intervalFor(6))
    expect(intervalFor(20)).toBeLessThanOrEqual(365)
  })

  it('treats a card with no successes as due now', () => {
    expect(intervalFor(0)).toBe(0)
  })
})

describe('reviewing a card', () => {
  it('starts due immediately', () => {
    expect(isDue(newCard('x', AT(1)), AT(1))).toBe(true)
  })

  it('moves the due date forward on a success', () => {
    const card = review(newCard('x', AT(1)), true, AT(1))
    expect(card.reps).toBe(1)
    expect(card.dueAt).toBe(AT(2))
    expect(isDue(card, AT(1))).toBe(false)
    expect(isDue(card, AT(2))).toBe(true)
  })

  it('brings a missed card straight back', () => {
    // Missed on the 3rd means due on the 3rd, so it is back today and again
    // tomorrow - exactly what was promised.
    const card = review(drill(3), false, AT(3))
    expect(card.reps).toBe(0)
    expect(card.lapses).toBe(1)
    expect(card.dueAt).toBe(AT(3))
    expect(isDue(card, AT(3))).toBe(true)
  })

  it('restarts the ladder after a lapse', () => {
    let card = review(drill(5), false, AT(60))
    card = review(card, true, AT(60))
    expect(card.intervalDays).toBe(1)
    expect(card.lapses).toBe(1)
  })

  it('reports how overdue something is', () => {
    const card = review(newCard('x', AT(1)), true, AT(1))
    expect(overdueDays(card, AT(5))).toBeCloseTo(3, 5)
    expect(overdueDays(card, AT(1))).toBeCloseTo(-1, 5)
  })

  it('says when a card is coming back, as a key the interface can translate', () => {
    expect(dueLabel(newCard('x', AT(1)), AT(1))).toEqual({ key: 'puzzles.dueNow' })
    expect(dueLabel(review(newCard('x', AT(1)), true, AT(1)), AT(1))).toEqual({
      key: 'puzzles.dueTomorrow',
    })
    expect(dueLabel(drill(5), AT(1)).key).toBe('puzzles.dueMonths')
    expect(dueLabel(drill(3), AT(1)).key).toBe('puzzles.dueDays')
  })
})

describe('choosing what to show next', () => {
  const pool = [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }]

  it('shows unseen items when there is no history', () => {
    expect(selectDue({ pool, cards: {}, now: AT(1), count: 2 })).toHaveLength(2)
  })

  it('puts due cards before unseen ones', () => {
    const cards = { c: review(newCard('c', AT(1)), false, AT(1)) }
    const picked = selectDue({ pool, cards, now: AT(2), count: 4 })
    expect(picked[0].id).toBe('c')
  })

  it('puts the most overdue card first', () => {
    const cards = {
      a: review(newCard('a', AT(1)), true, AT(1)),
      b: review(newCard('b', AT(1)), false, AT(1)),
    }
    const picked = selectDue({ pool, cards, now: AT(10), count: 4 })
    expect(picked[0].id).toBe('b')
  })

  it('breaks ties towards the moves the user keeps missing', () => {
    const cards = {
      a: review(newCard('a', AT(1)), true, AT(1)),
      b: review(newCard('b', AT(1)), true, AT(1)),
    }
    const picked = selectDue({
      pool,
      cards,
      missesById: { a: 1, b: 9 },
      now: AT(5),
      count: 2,
    })
    expect(picked[0].id).toBe('b')
  })

  it('weights unseen items towards known weaknesses too', () => {
    const picked = selectDue({
      pool,
      cards: {},
      missesById: { d: 5, b: 2 },
      now: AT(1),
      count: 2,
    })
    expect(picked.map((p) => p.id)).toEqual(['d', 'b'])
  })

  it('still returns something when nothing is due', () => {
    const cards = Object.fromEntries(
      pool.map((item) => [item.id, review(newCard(item.id, AT(1)), true, AT(1))]),
    )
    const picked = selectDue({ pool, cards, now: AT(1), count: 2 })
    expect(picked).toHaveLength(2)
  })

  it('never returns more than asked for', () => {
    expect(selectDue({ pool, cards: {}, now: AT(1), count: 3 })).toHaveLength(3)
  })

  it('is stable for the same inputs', () => {
    const first = selectDue({ pool, cards: {}, now: AT(1), count: 4 }).map((p) => p.id)
    const second = selectDue({ pool, cards: {}, now: AT(1), count: 4 }).map((p) => p.id)
    expect(first).toEqual(second)
  })

  it('counts what is waiting, treating never-seen as due', () => {
    const cards = { a: review(newCard('a', AT(1)), true, AT(1)) }
    expect(dueCount(cards, ['a', 'b', 'c'], AT(1))).toBe(2)
    expect(dueCount(cards, ['a', 'b', 'c'], AT(3))).toBe(3)
  })
})
