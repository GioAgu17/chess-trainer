import type { Locale } from '../locales'
import type { ContentDictionary } from '../keys'
import { itContent } from './it'

/**
 * Content dictionaries, one per language. English is the source, so it needs
 * no dictionary - `localize.ts` falls back to the string in the data.
 */
export const CONTENT: Record<Locale, ContentDictionary> = {
  en: {},
  it: itContent,
}
