import type { RepertoireEntry } from '../data/types'
import { useI18n } from '../i18n'

/** The coloured pill that says what an entry is. */
export function EntryTag({ entry }: { entry: RepertoireEntry }) {
  const { t } = useI18n()
  return (
    <span className="card__tags">
      <span className="tag">{entry.eco}</span>
      <span className={`tag tag--${entry.kind === 'defence' ? 'defence' : entry.side}`}>
        {entry.kind === 'defence'
          ? t('common.defence')
          : entry.side === 'white'
            ? t('common.white')
            : t('common.black')}
      </span>
    </span>
  )
}

export function Meter({ percent, tone }: { percent: number; tone?: 'good' | 'warn' | 'bad' }) {
  const width = Math.max(0, Math.min(100, percent))
  const modifier = tone ?? (width === 100 ? 'good' : undefined)
  return (
    <div
      className="meter"
      role="img"
      aria-label={`${width} percent`}
    >
      <div
        className={`meter__fill${modifier ? ` meter__fill--${modifier}` : ''}`}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

/** A big number with a caption, used across the statistics page. */
export function Stat({
  value,
  label,
  hint,
  tone,
}: {
  value: string | number
  label: string
  hint?: string
  tone?: 'good' | 'warn' | 'bad'
}) {
  return (
    <div className="stat">
      <div className={`stat__value${tone ? ` stat__value--${tone}` : ''}`}>{value}</div>
      <div className="stat__label">{label}</div>
      {hint && <div className="stat__hint">{hint}</div>}
    </div>
  )
}

/** Shown wherever a list is empty, so a blank area always explains itself. */
export function Empty({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="empty empty--inline">
      <h3>{title}</h3>
      {children}
    </div>
  )
}
