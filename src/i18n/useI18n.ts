import { useContext } from 'react'
import { LocaleContext, type Translator } from './context'

/** The translator for the current language. */
export function useI18n(): Translator {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useI18n used outside a LocaleProvider')
  return value
}
