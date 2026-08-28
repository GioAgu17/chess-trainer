import { describe, expect, it } from 'vitest'
import { ENTRIES } from '../entries'
import { STUDY_GUIDES, getStudy } from './index'

/**
 * The study section is prose, so the tests are about coverage and substance
 * rather than correctness: every entry has a guide, no guide is a stub, and
 * nothing points at an opening that does not exist.
 */

describe('study guides', () => {
  it('covers every opening and every defence', () => {
    for (const entry of ENTRIES) {
      expect(getStudy(entry.id), `${entry.id} has no study guide`).toBeDefined()
    }
    expect(STUDY_GUIDES).toHaveLength(ENTRIES.length)
  })

  it('has no guide for an entry that does not exist', () => {
    const ids = new Set(ENTRIES.map((entry) => entry.id))
    for (const guide of STUDY_GUIDES) {
      expect(ids, `${guide.id} is not a real entry`).toContain(guide.id)
    }
  })

  it('has unique ids', () => {
    const ids = STUDY_GUIDES.map((guide) => guide.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})

describe.each(STUDY_GUIDES.map((guide): [string, typeof guide] => [guide.id, guide]))(
  '%s',
  (_id, guide) => {
    it('opens with a real explanation, not a stub', () => {
      expect(guide.bigIdea.split(' ').length).toBeGreaterThan(40)
    })

    it('describes at least one pawn structure from both sides', () => {
      expect(guide.structures.length).toBeGreaterThanOrEqual(1)
      for (const structure of guide.structures) {
        expect(structure.name.length).toBeGreaterThan(0)
        expect(structure.shape.split(' ').length).toBeGreaterThan(10)
        expect(structure.yourPlay.split(' ').length).toBeGreaterThan(10)
        expect(structure.theirPlay.split(' ').length).toBeGreaterThan(10)
      }
    })

    it('gives at least three standard plans, each explained', () => {
      expect(guide.plans.length).toBeGreaterThanOrEqual(3)
      for (const plan of guide.plans) {
        expect(plan.title.length).toBeGreaterThan(0)
        expect(plan.detail.split(' ').length).toBeGreaterThan(12)
      }
    })

    it('names the key squares and says why they matter', () => {
      expect(guide.keySquares.length).toBeGreaterThanOrEqual(2)
      for (const square of guide.keySquares) {
        expect(square.square).toMatch(/^[a-h][1-8]$/)
        expect(square.why.split(' ').length).toBeGreaterThan(6)
      }
    })

    it('names the pawn breaks and when to play them', () => {
      expect(guide.breaks.length).toBeGreaterThanOrEqual(1)
      for (const item of guide.breaks) {
        expect(item.move.length).toBeGreaterThan(0)
        expect(item.when.split(' ').length).toBeGreaterThan(5)
      }
    })

    it('says what the middlegame actually feels like', () => {
      expect(guide.middlegameFeel.split(' ').length).toBeGreaterThan(20)
    })

    it('warns about at least two ways club players go wrong', () => {
      expect(guide.pitfalls.length).toBeGreaterThanOrEqual(2)
      for (const pitfall of guide.pitfalls) {
        expect(pitfall.title.length).toBeGreaterThan(0)
        expect(pitfall.detail.split(' ').length).toBeGreaterThan(12)
      }
    })

    it('is written in English rather than in engine notation', () => {
      // A guide made of nothing but move lists is not a study guide. Every
      // long field has to read as prose.
      const prose = [guide.bigIdea, guide.middlegameFeel, ...guide.plans.map((p) => p.detail)]
      for (const text of prose) {
        const words = text.split(/\s+/)
        const notation = words.filter((word) => /^[0-9]*\.{0,3}[NBRQK]?[a-h]?[1-8]?x?[a-h][1-8]/.test(word))
        expect(
          notation.length / words.length,
          `${guide.id} reads like a game score rather than an explanation`,
        ).toBeLessThan(0.25)
      }
    })
  },
)
