import { describe, expect, it } from 'vitest'
import { ENTRIES } from '../data/entries'
import { STUDY_GUIDES } from '../data/study'
import { CONTENT } from './content'
import { allContentStrings } from './keys'
import { LOCALES, SOURCE_LOCALE, detectLocale, isLocale } from './locales'
import { en } from './ui/en'
import { it as itCatalogue } from './ui/it'

/**
 * Language parity.
 *
 * A half-translated app is worse than an untranslated one: the reader cannot
 * tell whether the English they are looking at is an oversight or a term of
 * art. These tests make "every string exists in every language" a build
 * failure rather than something you notice in production.
 */

const CATALOGUES = { en, it: itCatalogue }
const placeholders = (value: string) => [...value.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort()

describe('languages', () => {
  it('lists a source language and at least one more', () => {
    expect(LOCALES.length).toBeGreaterThanOrEqual(2)
    expect(LOCALES.map((locale) => locale.code)).toContain(SOURCE_LOCALE)
  })

  it('gives every language a label and a short code', () => {
    for (const locale of LOCALES) {
      expect(locale.label.length).toBeGreaterThan(0)
      expect(locale.short).toMatch(/^[A-Z]{2}$/)
    }
  })

  it('recognises its own codes and nothing else', () => {
    expect(isLocale('en')).toBe(true)
    expect(isLocale('it')).toBe(true)
    expect(isLocale('de')).toBe(false)
    expect(isLocale(null)).toBe(false)
  })

  it('prefers a stored choice over the browser', () => {
    expect(detectLocale('it', ['en-GB'])).toBe('it')
  })

  it('falls back to the browser, ignoring the region', () => {
    expect(detectLocale(null, ['it-CH', 'en-GB'])).toBe('it')
    expect(detectLocale(null, ['en-US'])).toBe('en')
  })

  it('falls back to the source language when it recognises nothing', () => {
    expect(detectLocale(null, ['de-DE', 'fr'])).toBe(SOURCE_LOCALE)
    expect(detectLocale('nonsense', [])).toBe(SOURCE_LOCALE)
  })
})

describe('the interface catalogues', () => {
  const keys = Object.keys(en)

  it('has the same keys in every language', () => {
    for (const [code, catalogue] of Object.entries(CATALOGUES)) {
      const missing = keys.filter((key) => !(key in catalogue))
      const extra = Object.keys(catalogue).filter((key) => !keys.includes(key))
      expect(missing, `${code} is missing ${missing.length} interface strings`).toEqual([])
      expect(extra, `${code} has strings the source does not`).toEqual([])
    }
  })

  it('never leaves a string empty', () => {
    for (const [code, catalogue] of Object.entries(CATALOGUES)) {
      for (const key of keys) {
        expect((catalogue as Record<string, string>)[key].trim().length, `${code}: ${key}`).toBeGreaterThan(0)
      }
    }
  })

  it('keeps the same placeholders in every language', () => {
    for (const [code, catalogue] of Object.entries(CATALOGUES)) {
      for (const key of keys) {
        expect(
          placeholders((catalogue as Record<string, string>)[key]),
          `${code}: ${key} does not take the same values as the source`,
        ).toEqual(placeholders((en as Record<string, string>)[key]))
      }
    }
  })

  it('translates rather than copying the source', () => {
    // A handful of strings are legitimately identical - a brand name, a code -
    // but a language that mostly matches the English is not translated.
    const same = Object.keys(en).filter(
      (key) => (itCatalogue as Record<string, string>)[key] === (en as Record<string, string>)[key],
    )
    expect(same.length / Object.keys(en).length).toBeLessThan(0.05)
  })

  it('gives every plural a one and an other form', () => {
    for (const key of keys) {
      if (key.endsWith('_one')) expect(keys).toContain(key.replace('_one', '_other'))
      if (key.endsWith('_other')) expect(keys).toContain(key.replace('_other', '_one'))
    }
  })
})

describe('the repertoire content', () => {
  const strings = allContentStrings(ENTRIES, STUDY_GUIDES)
  const keys = new Set(strings.map((entry) => entry.key))

  it('derives a key for every piece of prose', () => {
    expect(strings.length).toBeGreaterThan(3000)
    expect(keys.size, 'two strings share a key').toBe(strings.length)
  })

  it('has a translation for every string in every language', () => {
    for (const locale of LOCALES) {
      if (locale.code === SOURCE_LOCALE) continue
      const dictionary = CONTENT[locale.code]
      const missing = strings.filter((entry) => !(entry.key in dictionary))
      expect(
        missing.length,
        `${locale.code} is missing ${missing.length} of ${strings.length} strings, first: ${missing[0]?.key}`,
      ).toBe(0)
    }
  })

  it('carries no translation for a string the data no longer has', () => {
    for (const locale of LOCALES) {
      if (locale.code === SOURCE_LOCALE) continue
      const orphans = Object.keys(CONTENT[locale.code]).filter((key) => !keys.has(key))
      expect(orphans, `${locale.code} has ${orphans.length} orphaned strings`).toEqual([])
    }
  })

  it('never leaves a translation empty or identical to the English', () => {
    for (const locale of LOCALES) {
      if (locale.code === SOURCE_LOCALE) continue
      const dictionary = CONTENT[locale.code]
      const copies: string[] = []
      for (const entry of strings) {
        const translated = dictionary[entry.key]
        if (translated === undefined) continue
        expect(translated.trim().length, `${locale.code}: ${entry.key} is empty`).toBeGreaterThan(0)
        // Opening names and short labels can legitimately match; a paragraph
        // that matches has not been translated.
        if (translated === entry.source && entry.source.split(' ').length > 8) {
          copies.push(entry.key)
        }
      }
      expect(copies, `${locale.code} left ${copies.length} paragraphs in English`).toEqual([])
    }
  })
})
