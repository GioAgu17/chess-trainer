import type { CompletedRun } from '../engine/session'

interface LineSummaryProps {
  run: CompletedRun
  onReplay: () => void
  onChoose: () => void
  /** Fail a move, read why it matters: the link back into the study section. */
  onStudy: () => void
}

const WORDING: Record<CompletedRun['mistakes'][number]['result'], string> = {
  error: 'you played',
  'off-repertoire': 'you played the sound',
  revealed: 'you asked to be shown',
}

export function LineSummary({ run, onReplay, onChoose, onStudy }: LineSummaryProps) {
  const clean = run.mistakes.length === 0
  return (
    <div className="feedback feedback--summary">
      <div className="feedback__status">
        <span className={`feedback__icon feedback__icon--${clean ? 'good' : 'warn'}`}>
          {clean ? '✓' : '!'}
        </span>
        <span>Line complete</span>
      </div>

      <div className="summary__accuracy">
        <b>{run.accuracy}%</b>
        <span>
          accuracy {clean ? 'this run' : `- ${run.mistakes.length} move${run.mistakes.length === 1 ? '' : 's'} missed`}
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
          <div className="summary__missed-title">Moves to review</div>
          {run.mistakes.map((mistake) => (
            <div className="missed-row" key={`${mistake.key}-${mistake.played}`}>
              {/* The label already carries the move, so drop it and let the
                  chips below do the talking. */}
              <span>{mistake.label.replace(mistake.expected, '')}</span>
              <code className="is-right">{mistake.expected}</code>
              {mistake.played && (
                <>
                  <span>{WORDING[mistake.result]}</span>
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
          Drill it again
        </button>
        <button type="button" className="btn" onClick={onStudy}>
          Why these moves?
        </button>
        <button type="button" className="btn btn--ghost" onClick={onChoose}>
          Back to repertoire
        </button>
      </div>
    </div>
  )
}
