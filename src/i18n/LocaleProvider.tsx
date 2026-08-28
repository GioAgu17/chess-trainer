import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { ENTRIES } from '../data/entries'
import { STUDY_GUIDES } from '../data/study'
import { CONTENT } from './content'
import { localizeEntries, localizeGuides } from './localize'
import { STORAGE_KEY, detectLocale, type Locale } from './locales'
import { LocaleContext, type Translator, type Vars } from './context'
import { en, type UiKey } from './ui/en'
import { it } from './ui/it'

const CATALOGUES: Record<Locale, Record<UiKey, string>> = { en, it }

/**
 * Fill `{name}` placeholders. Deliberately not a template engine: every
 * placeholder in this app is a plain value, and anything cleverer would make
 * the catalogues harder to translate rather than easier.
 */
function fill(template: string, vars?: Vars): string {
  if (!vars) return template
  return template.replace(/\{(\w+)\}/g, (whole, name: string) =>
    name in vars ? String(vars[name]) : whole,
  )
}



function readStored(): string | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function writeStored(locale: Locale) {
  try {
    localStorage?.setItem(STORAGE_KEY, locale)
  } catch {
    // A browser that refuses storage still gets a working language switch for
    // the session; it just will not remember it.
  }
}

export function LocaleProvider({
  children,
  initial,
}: {
  children: ReactNode
  /** Tests pass this; the app detects it from storage and the browser. */
  initial?: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(
    () => initial ?? detectLocale(readStored(), typeof navigator === 'undefined' ? [] : navigator.languages),
  )

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    writeStored(next)
    if (typeof document !== 'undefined') document.documentElement.lang = next
  }, [])

  const value = useMemo<Translator>(() => {
    const catalogue = CATALOGUES[locale]
    const t = (key: UiKey, vars?: Vars) => fill(catalogue[key] ?? en[key] ?? key, vars)
    return {
      locale,
      t,
      n: (key, count, vars) => {
        const form = `${key}_${count === 1 ? 'one' : 'other'}` as UiKey
        return fill(catalogue[form] ?? en[form] ?? key, { count, ...vars })
      },
      content: (key, source) => CONTENT[locale][key] ?? source,
      setLocale,
      entries: localizeEntries(ENTRIES, locale, CONTENT[locale]),
      guides: localizeGuides(STUDY_GUIDES, locale, CONTENT[locale]),
    }
  }, [locale, setLocale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}


