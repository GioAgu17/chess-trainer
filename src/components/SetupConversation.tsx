import { useEffect, useRef, useState } from 'react'
import type { ProfileInput } from '../engine/progress'
import {
  answer,
  back,
  canGoBack,
  currentQuestion,
  isComplete,
  recommendationFor,
  startSetup,
  stepProgress,
  suggestName,
  toProfileInput,
  type SetupAnswer,
  type SetupOption,
  type SetupSession,
} from '../engine/profile'
import { getEntry } from '../data/entries'

interface SetupConversationProps {
  onDone: (input: ProfileInput) => void
  /** Absent on the very first run, when there is nothing to go back to. */
  onCancel?: () => void
}

/**
 * The guided setup.
 *
 * One question at a time, the answers staying on screen above it as a
 * transcript. The whole thing is driven by `src/engine/profile.ts`, so the
 * wording, the branching and the going-back are all testable without a browser
 * and this component only has to render and animate.
 */
export function SetupConversation({ onDone, onCancel }: SetupConversationProps) {
  const [session, setSession] = useState<SetupSession>(() => startSetup())
  const [name, setName] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  const question = currentQuestion(session.current)
  const { index, total } = stepProgress(session.current)

  // Remounting the question on this key is what replays the entrance
  // animation, so the conversation reads as one thing arriving rather than a
  // form redrawing. It is derived, so going back animates too.
  const asked = `${question.step}:${session.past.length}`

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [asked])

  const give = (given: SetupAnswer) => setSession((current) => answer(current, given))

  const choose = (option: SetupOption) => {
    switch (question.step) {
      case 'white':
        return give({ kind: 'white', openingId: option.value || null })
      case 'black':
        return give({ kind: 'black', openingId: option.value || null })
      case 'defence-family':
        return give({ kind: 'family', family: option.value as 'd4' | 'e4' | 'flank' })
      case 'defence-system':
        return give({ kind: 'system', system: option.value })
      case 'temperament':
        return give({ kind: 'temperament', defenceId: option.value })
      case 'more-defences':
        return give({ kind: 'more', more: option.value === 'yes' })
      default:
        return
    }
  }

  const transcript = buildTranscript(session)
  const recommended = recommendationFor(question)

  return (
    <div className="setup">
      <div className="setup__head">
        <div className="setup__progress" aria-hidden="true">
          {Array.from({ length: total + 1 }, (_, i) => (
            <span key={i} className={`setup__dot${i <= index ? ' setup__dot--done' : ''}`} />
          ))}
        </div>
        <p className="setup__step">
          Step {index + 1} of {total + 1}
        </p>
        {onCancel && (
          <button type="button" className="btn btn--ghost setup__cancel" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>

      <div className="setup__thread">
        <div className="bubble bubble--coach bubble--intro">
          <p>
            Let us build you a repertoire. Three questions, and you can change any of it later.
          </p>
        </div>

        {transcript.map((line) => (
          <div className="bubble bubble--answer" key={line.key}>
            <span className="bubble__label">{line.label}</span>
            <span className="bubble__value">{line.value}</span>
          </div>
        ))}

        <div className="bubble bubble--coach" key={asked}>
          <h2 className="bubble__ask">{question.ask}</h2>
          {question.note && <p className="bubble__note">{question.note}</p>}
        </div>

        {question.options.length > 0 && (
          <div className="setup__options" role="group" aria-label={question.ask}>
            {question.options.map((option) => (
              <button
                type="button"
                key={option.value || 'skip'}
                className={`choice${option.recommended ? ' choice--recommended' : ''}${
                  option.value === '' ? ' choice--quiet' : ''
                }`}
                onClick={() => choose(option)}
              >
                <span className="choice__head">
                  <span className="choice__label">{option.label}</span>
                  {option.tag && <span className="tag tag--word">{option.tag}</span>}
                  {option.recommended && <span className="tag tag--pick">suggested</span>}
                </span>
                <span className="choice__why">{option.why}</span>
              </button>
            ))}
            {recommended && (
              <button
                type="button"
                className="choice choice--quiet"
                onClick={() => choose(recommended)}
              >
                <span className="choice__head">
                  <span className="choice__label">Not sure - recommend me one</span>
                </span>
                <span className="choice__why">
                  I will pick {recommended.label} for you. It is the safest choice here and you can
                  change it in a click.
                </span>
              </button>
            )}
          </div>
        )}

        {question.step === 'name' && (
          <form
            className="setup__name"
            onSubmit={(event) => {
              event.preventDefault()
              give({ kind: 'name', name: name || question.freeText!.suggestion })
            }}
          >
            <label className="setup__name-label" htmlFor="profile-name">
              Repertoire name
            </label>
            <div className="setup__name-row">
              <input
                id="profile-name"
                className="input"
                value={name}
                placeholder={question.freeText?.placeholder}
                onChange={(event) => setName(event.target.value)}
                autoComplete="off"
              />
              <button type="submit" className="btn btn--primary">
                Continue
              </button>
            </div>
          </form>
        )}

        {question.step === 'review' && (
          <div className="setup__review">
            <ReviewRow label="As White" value={nameOf(session.current.whiteOpeningId)} />
            <ReviewRow label="As Black" value={nameOf(session.current.blackOpeningId)} />
            <ReviewRow
              label="Defending against"
              value={
                session.current.defenceIds.length === 0
                  ? 'Nothing yet'
                  : session.current.defenceIds.map((id) => nameOf(id)).join(', ')
              }
            />
            <div className="setup__review-actions">
              <button
                type="button"
                className="btn btn--primary btn--lg"
                disabled={!isComplete(session.current)}
                onClick={() => onDone(toProfileInput(session.current))}
              >
                Start training
              </button>
              {!isComplete(session.current) && (
                <p className="setup__warn">
                  Pick at least one opening or one defence and we can begin.
                </p>
              )}
            </div>
          </div>
        )}

        <div ref={endRef} />
      </div>

      {canGoBack(session) && (
        <div className="setup__foot">
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              setSession((current) => back(current))
              setName('')
            }}
          >
            ← Change my last answer
          </button>
        </div>
      )}
    </div>
  )
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="review-row">
      <span className="review-row__label">{label}</span>
      <span className="review-row__value">{value}</span>
    </div>
  )
}

function nameOf(id: string | null | undefined): string {
  if (!id) return 'Skipped'
  return getEntry(id)?.name ?? 'Skipped'
}

interface TranscriptLine {
  key: string
  label: string
  value: string
}

/** The answers so far, as a short transcript above the live question. */
function buildTranscript(session: SetupSession): TranscriptLine[] {
  const state = session.current
  const lines: TranscriptLine[] = []
  const answered = (step: string) => session.past.some((past) => past.step === step)

  if (answered('white')) {
    lines.push({ key: 'white', label: 'As White', value: nameOf(state.whiteOpeningId) })
  }
  if (answered('black')) {
    lines.push({ key: 'black', label: 'As Black', value: nameOf(state.blackOpeningId) })
  }
  for (const id of state.defenceIds) {
    lines.push({ key: id, label: 'Defending against', value: nameOf(id) })
  }
  if (state.step === 'review') {
    lines.push({ key: 'name', label: 'Called', value: state.name || suggestName(state) })
  }
  return lines
}
