/**
 * The one module components import from.
 *
 * The provider lives in its own file so that this barrel exports only types,
 * constants and a hook - which is what keeps fast refresh working.
 */
export { LocaleProvider } from './LocaleProvider'
export type { Translator, Vars } from './context'
export { useI18n } from './useI18n'
export { LOCALES, SOURCE_LOCALE, detectLocale, isLocale, type Locale } from './locales'
export type { UiKey } from './ui/en'
export type { ContentDictionary, ContentString } from './keys'
export { formatDate, formatShortDate } from './format'
