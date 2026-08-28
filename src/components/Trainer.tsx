import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Chess } from 'chess.js'
import type { Route } from '../App'
import type { RepertoireEntry } from '../data/types'
import { isDefence } from '../data/types'
import {
  applyOpponentMove,
  applyUserMove,
  completedRun,
  newSession,
  phaseOf,
  runAccuracy,
  showMe,
  tryAgain,
  type LoggedAttempt,
  type SessionState,
} from '../engine/session'
import { isUserPly, moveLabel, normalizeSan, totalPlies, type OpponentMode } from '../engine/tree'
import type { ProgressStore } from '../engine/progress'
import { entryStats, movesFor, rankMove } from '../engine/stats'
import { useI18n } from '../i18n'
import { Board, type BoardMove } from './Board'
import { FeedbackPanel } from './FeedbackPanel'
import { LineSummary } from './LineSummary'
import { MoveList } from './MoveList'
import { EntryTag } from './ui'

/** How long the computer "thinks" before answering, in milliseconds. */
const REPLY_DELAY = 520

interface TrainerProps {
  entry: RepertoireEntry
  store: ProgressStore
  onRunComplete: (run: NonNullable<ReturnType<typeof completedRun>>) => void
  onAttempt: (attempt: LoggedAttempt) => void
  onNavigate: (route: Route) => void
}

export function Trainer({ entry, store, onRunComplete, onAttempt, onNavigate }: TrainerProps) {
  const { t, n } = useI18n()
  const [state, setState] = useState<SessionState>(newSession)
  const [mode, setMode] = useState<OpponentMode>('main-line')
  const [errorSquare, setErrorSquare] = useState<
    { square: string; tone: 'wrong' | 'off-line' } | null
  >(null)
  const recorded = useRef(false)

  // Switching entry remounts this component (App keys it by entry id), so a
  // restart only ever has to reset the session in place.
  const restart = useCallback(() => {
    setState(newSession())
    setErrorSquare(null)
    recorded.current = false
  }, [])

  const phase = phaseOf(entry, state)

  const { fen, lastMove } = useMemo(() => {
    const chess = new Chess()
    let move: { from: string; to: string } | null = null
    for (const node of state.path) {
      const played = chess.move(normalizeSan(node.san))
      move = { from: played.from, to: played.to }
    }
    return { fen: chess.fen(), lastMove: move }
  }, [state.path])

  // The computer answers from the repertoire tree after a short pause, so the
  // user has a moment to read the feedback on their own move.
  useEffect(() => {
    if (phase !== 'opponent') return
    const timer = setTimeout(() => {
      setState((current) => applyOpponentMove(entry, current, mode))
    }, REPLY_DELAY)
    return () => clearTimeout(timer)
  }, [phase, entry, mode, state.path])

  const run = completedRun(entry, state)

  useEffect(() => {
    if (!run || recorded.current) return
    recorded.current = true
    onRunComplete(run)
  }, [run, onRunComplete])

  /** Report any attempt the transition just logged, then commit the state. */
  const commit = useCallback(
    (next: SessionState) => {
      if (next.attemptLog.length > state.attemptLog.length) {
        onAttempt(next.attemptLog[next.attemptLog.length - 1])
      }
      setState(next)
    },
    [onAttempt, state.attemptLog],
  )

  const handleMove = useCallback(
    (move: BoardMove): boolean => {
      const next = applyUserMove(entry, state, move.san)
      const accepted = next.path.length > state.path.length
      commit(next)
      setErrorSquare(
        accepted
          ? null
          : { square: move.to, tone: next.error?.deliberate ? 'off-line' : 'wrong' },
      )
      return accepted
    },
    [commit, entry, state],
  )

  const handleTryAgain = useCallback(() => {
    setErrorSquare(null)
    setState((current) => tryAgain(current))
  }, [])

  const handleShowMe = useCallback(() => {
    setErrorSquare(null)
    commit(showMe(entry, state))
  }, [commit, entry, state])

  const stats = entryStats(store, entry)
  const spots = useMemo(
    () =>
      movesFor(store, entry.id)
        .map(rankMove)
        .filter((move) => move.misses > 0)
        .sort((a, b) => b.misses - a.misses)
        .slice(0, 3),
    [store, entry.id],
  )
  const plies = totalPlies(entry)
  const turnColour = state.path.length % 2 === 0 ? 'white' : 'black'

  const announcement = (() => {
    if (state.error) {
      return `${state.error.played}: ${t('coach.wrong')}. ${state.error.reason}`
    }
    if (run) return `${t('trainer.complete')}: ${run.lineName}. ${run.accuracy}%.`
    const played = state.path[state.path.length - 1]
    if (!played) return t('coach.yourMove')
    const mover = isUserPly(entry.side, state.path.length - 1) ? t('coach.you') : t('coach.computer')
    const label = moveLabel(state.path.length - 1, normalizeSan(played.san))
    return `${mover} ${label}. ${played.idea ?? ''} ${phase === 'user' ? t('coach.yourMove') : ''}`.trim()
  })()

  return (
    <div className="trainer">
      <div className="trainer__bar">
        <button type="button" className="btn btn--ghost" onClick={() => onNavigate({ name: 'home' })}>
          {t('trainer.back')}
        </button>
        <div className="trainer__bar-title">
          <h2>{entry.name}</h2>
          <EntryTag entry={entry} />
        </div>
        <div className="trainer__bar-spacer" />
        <div className="segmented" role="group" aria-label={t('trainer.mode')}>
          <button
            type="button"
            aria-pressed={mode === 'main-line'}
            onClick={() => setMode('main-line')}
          >
            {t('trainer.mainLine')}
          </button>
          <button type="button" aria-pressed={mode === 'mixed'} onClick={() => setMode('mixed')}>
            {t('trainer.sidelines')}
          </button>
        </div>
        <button type="button" className="btn" onClick={restart}>
          {t('trainer.restart')}
        </button>
      </div>

      {/* Shown for the whole run, not just before the first move: it is useful
          context, and a strip that vanishes on move one moves the board. */}
      {isDefence(entry) && (
        <div className="trainer__brief">
          <p className="trainer__brief-tell">
            <strong>{entry.recognisedBy.moves}</strong> {entry.recognisedBy.tell}
          </p>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => onNavigate({ name: 'study', entryId: entry.id })}
          >
            {t('trainer.readPlan')}
          </button>
        </div>
      )}

      <div className="board-column">
        {/* The board itself is a grid of styled divs with no readable text, so
            this is what a screen reader actually follows. */}
        <p className="visually-hidden" role="status" aria-live="polite">
          {announcement}
        </p>
        <Board
          fen={fen}
          orientation={entry.side}
          interactive={phase === 'user' && !state.error}
          lastMove={lastMove}
          errorSquare={errorSquare}
          onMove={handleMove}
        />
        <div className="board-meta">
          <span className="board-meta__turn">
            <span
              className={`turn-dot turn-dot--${turnColour}${
                phase === 'opponent' ? ' turn-dot--thinking' : ''
              }`}
            />
            {phase === 'complete'
              ? t('trainer.complete')
              : phase === 'opponent'
                ? t('trainer.computerToMove')
                : t('trainer.yourMove')}
          </span>
          <span className="board-meta__score">
            <span>
              {t('trainer.ply', { played: state.path.length })}
              {/* Only the main line has a known length; a sideline can end
                  anywhere, so quoting a total there would be wrong. */}
              {mode === 'main-line' && <span className="dim"> / {plies}</span>}
            </span>
            {state.decisions > 0 && (
              <span>
                {t('trainer.accuracy')}{' '}
                <strong className="board-meta__value">{runAccuracy(state)}%</strong>
              </span>
            )}
          </span>
        </div>
      </div>

      <div className="panel">
        <section className="pane">
          <header className="pane__head">
            <span>{t('trainer.moves')}</span>
            <span className="pane__head-note">
              {state.mistakes === 0 ? t('trainer.noMistakes') : n('common.mistake', state.mistakes)}
            </span>
          </header>
          <MoveList path={state.path} side={entry.side} />
        </section>

        <section className="pane">
          <header className="pane__head">
            <span>{run ? t('trainer.summary') : t('trainer.coach')}</span>
          </header>
          <div className="pane__body">
            {run ? (
              <LineSummary
                run={run}
                onReplay={restart}
                onChoose={() => onNavigate({ name: 'home' })}
                onStudy={() => onNavigate({ name: 'study', entryId: entry.id })}
              />
            ) : (
              <FeedbackPanel
                side={entry.side}
                phase={phase}
                error={state.error}
                revealed={state.revealed}
                path={state.path}
                openingSummary={entry.summary}
                onTryAgain={handleTryAgain}
                onShowMe={handleShowMe}
                onStudy={() => onNavigate({ name: 'study', entryId: entry.id })}
              />
            )}
          </div>
        </section>

        <section className="pane">
          <header className="pane__head">
            <span>{t('trainer.record')}</span>
            <span className="pane__head-note">{n('common.run', stats.runs)}</span>
          </header>
          <div className="progress-list">
            <div className="progress-row">
              <span className="progress-row__name">{t('trainer.seen')}</span>
              <span className="progress-row__value">
                {stats.decisionsSeen} / {stats.totalDecisions}
              </span>
            </div>
            <div className="progress-row">
              <span className="progress-row__name">{t('trainer.accuracy')}</span>
              <span className="progress-row__value">
                {stats.attempts === 0 ? <span className="dim">-</span> : `${stats.accuracy}%`}
              </span>
            </div>
            {spots.length === 0 ? (
              <div className="progress-empty">
                {stats.attempts === 0 ? t('trainer.nothingYet') : t('trainer.noRecurring')}
              </div>
            ) : (
              spots.map((spot) => (
                <div className="progress-row" key={spot.key}>
                  <span className="progress-row__name">
                    {t('trainer.keepsMissing')}{' '}
                    <code className="mono is-warn">{spot.label}</code>
                  </span>
                  <span className="progress-row__value">{spot.misses}×</span>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
