import { createContext } from 'react'
import type { RepertoireEntry, StudyGuide } from '../data/types'
import type { Locale } from './locales'
import type { UiKey } from './ui/en'

export type Vars = Record<string, string | number>

export interface Translator {
  locale: Locale
  /** A UI string. */
  t: (key: UiKey, vars?: Vars) => string
  /**
   * A UI string chosen by count. Looks up `key_one` or `key_other` and always
   * passes `count` through, so the number can be used in the sentence.
   */
  n: (key: string, count: number, vars?: Vars) => string
  /**
   * A repertoire string by content key, falling back to the English source.
   * Used where a key is decided outside the component - a puzzle generated
   * offline, for instance - rather than by rendering translated data.
   */
  content: (key: string, source: string) => string
  setLocale: (locale: Locale) => void
  /** The repertoire, rebuilt in the current language. */
  entries: RepertoireEntry[]
  guides: StudyGuide[]
}

/** Set by `LocaleProvider`. */
export const LocaleContext = createContext<Translator | null>(null)
