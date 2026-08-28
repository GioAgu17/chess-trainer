import { LOCALES, useI18n } from '../i18n'

/**
 * The language switch.
 *
 * Two short codes rather than a dropdown: there are two languages, the choice
 * is one click, and a select would be a bigger control for a smaller job.
 */
export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()
  return (
    <div className="segmented segmented--tight" role="group" aria-label={t('app.language')}>
      {LOCALES.map((item) => (
        <button
          key={item.code}
          type="button"
          lang={item.code}
          aria-pressed={locale === item.code}
          title={item.label}
          onClick={() => setLocale(item.code)}
        >
          {item.short}
        </button>
      ))}
    </div>
  )
}
