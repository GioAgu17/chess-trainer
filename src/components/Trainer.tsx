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
      return `${state.error.played} is not the repertoire move. ${state.error.reason}`
    }
    if (run) return `Line complete: ${run.lineName}. Accuracy ${run.accuracy} percent.`
    const played = state.path[state.path.length - 1]
    if (!played) return 'Your move.'
    const mover = isUserPly(entry.side, state.path.length - 1) ? 'You played' : 'The computer played'
    const label = moveLabel(state.path.length - 1, normalizeSan(played.san))
    return `${mover} ${label}. ${played.idea ?? ''} ${phase === 'user' ? 'Your move.' : ''}`.trim()
  })()

  return (
    <div className="trainer">
      <div className="trainer__bar">
        <button type="button" className="btn btn--ghost" onClick={() => onNavigate({ name: 'home' })}>
          ← Repertoire
        </button>
        <div className="trainer__bar-title">
          <h2>{entry.name}</h2>
          <EntryTag entry={entry} />
        </div>
        <div className="trainer__bar-spacer" />
        <div className="segmented" role="group" aria-label="Which replies the computer plays">
          <button
            type="button"
            aria-pressed={mode === 'main-line'}
            onClick={() => setMode('main-line')}
          >
            Main line
          </button>
          <button type="button" aria-pressed={mode === 'mixed'} onClick={() => setMode('mixed')}>
            Add sidelines
          </button>
        </div>
        <button type="button" className="btn" onClick={restart}>
          Restart
        </button>
      </div>

      {isDefence(entry) && state.path.length === 0 && (
        <div className="trainer__brief">
          <p className="trainer__brief-tell">
            <strong>{entry.recognisedBy.moves}</strong> {entry.recognisedBy.tell}
          </p>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => onNavigate({ name: 'study', entryId: entry.id })}
          >
            Read the plan first →
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
              ? 'Line complete'
              : phase === 'opponent'
                ? 'Computer to move'
                : 'Your move'}
          </span>
          <span className="board-meta__score">
            <span>
              Ply {state.path.length}
              {/* Only the main line has a known length; a sideline can end
                  anywhere, so quoting a total there would be wrong. */}
              {mode === 'main-line' && <span className="dim"> / {plies}</span>}
            </span>
            {state.decisions > 0 && (
              <span>
                Accuracy <strong className="board-meta__value">{runAccuracy(state)}%</strong>
              </span>
            )}
          </span>
        </div>
      </div>

      <div className="panel">
        <section className="pane">
          <header className="pane__head">
            <span>Moves</span>
            <span className="pane__head-note">
              {state.mistakes === 0
                ? 'no mistakes'
                : `${state.mistakes} mistake${state.mistakes === 1 ? '' : 's'}`}
            </span>
          </header>
          <MoveList path={state.path} side={entry.side} />
        </section>

        <section className="pane">
          <header className="pane__head">
            <span>{run ? 'Summary' : 'Coach'}</span>
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
              />
            )}
          </div>
        </section>

        <section className="pane">
          <header className="pane__head">
            <span>Your record</span>
            <span className="pane__head-note">
              {stats.runs} run{stats.runs === 1 ? '' : 's'}
            </span>
          </header>
          <div className="progress-list">
            <div className="progress-row">
              <span className="progress-row__name">Repertoire seen</span>
              <span className="progress-row__value">
                {stats.decisionsSeen} / {stats.totalDecisions}
              </span>
            </div>
            <div className="progress-row">
              <span className="progress-row__name">Accuracy</span>
              <span className="progress-row__value">
                {stats.attempts === 0 ? <span className="dim">-</span> : `${stats.accuracy}%`}
              </span>
            </div>
            {spots.length === 0 ? (
              <div className="progress-empty">
                {stats.attempts === 0
                  ? 'Nothing recorded yet. Play a line to the end and it will show up here.'
                  : 'No recurring mistakes here. Keep it that way.'}
              </div>
            ) : (
              spots.map((spot) => (
                <div className="progress-row" key={spot.key}>
                  <span className="progress-row__name">
                    Keeps missing <code className="mono is-warn">{spot.label}</code>
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
