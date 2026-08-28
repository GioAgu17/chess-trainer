/**
 * Languages.
 *
 * Adding a third is meant to be cheap: add it to `LOCALES`, add one UI
 * catalogue under `ui/`, and add one content dictionary under `content/`. The
 * parity tests will then tell you exactly which strings are missing, so there
 * is no way to half-add a language and not notice.
 */
export const LOCALES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'it', label: 'Italiano', short: 'IT' },
] as const

export type Locale = (typeof LOCALES)[number]['code']

/** The language the content is authored in, and the fallback for everything. */
export const SOURCE_LOCALE: Locale = 'en'

export const STORAGE_KEY = 'chess-trainer:locale'

export function isLocale(value: unknown): value is Locale {
  return LOCALES.some((locale) => locale.code === value)
}

/**
 * Pick a starting language: what the user chose last, else what the browser
 * asks for, else the source language.
 */
export function detectLocale(
  stored: string | null,
  languages: readonly string[] = [],
): Locale {
  if (isLocale(stored)) return stored
  for (const language of languages) {
    const base = language.toLowerCase().split('-')[0]
    if (isLocale(base)) return base
  }
  return SOURCE_LOCALE
}
