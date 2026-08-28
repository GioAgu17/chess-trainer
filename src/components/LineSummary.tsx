import type { CompletedRun } from '../engine/session'
import { useI18n, type UiKey } from '../i18n'

interface LineSummaryProps {
  run: CompletedRun
  onReplay: () => void
  onChoose: () => void
  /** Fail a move, read why it matters: the link back into the study section. */
  onStudy: () => void
}

const WORDING: Record<CompletedRun['mistakes'][number]['result'], UiKey> = {
  error: 'summary.youPlayed',
  'off-repertoire': 'summary.youPlayedSound',
  revealed: 'summary.youAsked',
}

export function LineSummary({ run, onReplay, onChoose, onStudy }: LineSummaryProps) {
  const { t } = useI18n()
  const clean = run.mistakes.length === 0
  return (
    <div className="feedback feedback--summary">
      <div className="feedback__status">
        <span className={`feedback__icon feedback__icon--${clean ? 'good' : 'warn'}`}>
          {clean ? '✓' : '!'}
        </span>
        <span>{t('summary.complete')}</span>
      </div>

      <div className="summary__accuracy">
        <b>{run.accuracy}%</b>
        <span>
          {clean
            ? t('summary.accuracyClean')
            : t('summary.accuracyMissed', { count: run.mistakes.length })}
        </span>
      </div>

      <div className="summary__line">{run.lineName}</div>

      <ul className="summary__plans">
        {run.plans.map((plan) => (
          <li key={plan}>{plan}</li>
        ))}
      </ul>

      {!clean && (
        <div className="summary__missed">
          <div className="summary__missed-title">{t('summary.review')}</div>
          {run.mistakes.map((mistake) => (
            <div className="missed-row" key={`${mistake.key}-${mistake.played}`}>
              {/* The label already carries the move, so drop it and let the
                  chips below do the talking. */}
              <span>{mistake.label.replace(mistake.expected, '')}</span>
              <code className="is-right">{mistake.expected}</code>
              {mistake.played && (
                <>
                  <span>{t(WORDING[mistake.result])}</span>
                  {/* A sound move played off the repertoire is not an error, so
                      it is not shown in the colour errors are shown in. */}
                  <code className={mistake.result === 'off-repertoire' ? 'is-off' : 'is-wrong'}>
                    {mistake.played}
                  </code>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="feedback__actions">
        <button type="button" className="btn btn--primary" onClick={onReplay}>
          {t('summary.again')}
        </button>
        <button type="button" className="btn" onClick={onStudy}>
          {t('summary.why')}
        </button>
        <button type="button" className="btn btn--ghost" onClick={onChoose}>
          {t('summary.back')}
        </button>
      </div>
    </div>
  )
}
