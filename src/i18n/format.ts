import type { Locale } from './locales'

/**
 * Dates for display.
 *
 * Progress records store ISO strings because that is what sorts and compares
 * correctly; only the rendering is localised, so an English reader gets
 * "28 Aug 2026" and an Italian one "28 ago 2026" from the same stored value.
 */
const day = (iso: string) => new Date(`${iso.slice(0, 10)}T00:00:00`)

/** A full date: for "last trained on ...". */
export function formatDate(iso: string, locale: Locale): string {
  const value = day(iso)
  if (Number.isNaN(value.getTime())) return iso.slice(0, 10)
  return value.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' })
}

/** A short date, for chart ticks and inline ranges where the year is obvious. */
export function formatShortDate(iso: string, locale: Locale): string {
  const value = day(iso)
  if (Number.isNaN(value.getTime())) return iso.slice(5, 10)
  return value.toLocaleDateString(locale, { day: 'numeric', month: 'short' })
}
