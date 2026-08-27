import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Chess } from 'chess.js'
import type { Opening } from '../data/types'
import {
  applyOpponentMove,
  applyUserMove,
  completedRun,
  newSession,
  phaseOf,
  runAccuracy,
  showMe,
  tryAgain,
  type LoggedMistake,
  type SessionState,
} from '../engine/session'
import { isUserPly, moveLabel, normalizeSan, totalPlies, type OpponentMode } from '../engine/tree'
import type { OpeningProgress } from '../engine/progress'
import { linesDrilled, totalLines, troubleSpots } from '../engine/progress'
import { Board, type BoardMove } from './Board'
import { FeedbackPanel } from './FeedbackPanel'
import { LineSummary } from './LineSummary'
import { MoveList } from './MoveList'

/** How long the computer "thinks" before answering, in milliseconds. */
const REPLY_DELAY = 520

interface TrainerProps {
  opening: Opening
  progress: OpeningProgress
  onRunComplete: (run: NonNullable<ReturnType<typeof completedRun>>) => void
  onMistake: (mistake: LoggedMistake) => void
  onBack: () => void
}

export function Trainer({ opening, progress, onRunComplete, onMistake, onBack }: TrainerProps) {
  const [state, setState] = useState<SessionState>(newSession)
  const [mode, setMode] = useState<OpponentMode>('main-line')
  const [errorSquare, setErrorSquare] = useState<
    { square: string; tone: 'wrong' | 'off-line' } | null
  >(null)
  const recorded = useRef(false)

  // Switching opening remounts this component (App keys it by opening id), so
  // a restart only ever has to reset the session in place.
  const restart = useCallback(() => {
    setState(newSession())
    setErrorSquare(null)
    recorded.current = false
  }, [])

  const phase = phaseOf(opening, state)

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
      setState((current) => applyOpponentMove(opening, current, mode))
    }, REPLY_DELAY)
    return () => clearTimeout(timer)
  }, [phase, opening, mode, state.path])

  const run = completedRun(opening, state)

  useEffect(() => {
    if (!run || recorded.current) return
    recorded.current = true
    onRunComplete(run)
  }, [run, onRunComplete])

  /** Report any mistake the transition just logged, then commit the state. */
  const commit = useCallback(
    (next: SessionState) => {
      if (next.mistakeLog.length > state.mistakeLog.length) {
        onMistake(next.mistakeLog[next.mistakeLog.length - 1])
      }
      setState(next)
    },
    [onMistake, state.mistakeLog],
  )

  const handleMove = useCallback(
    (move: BoardMove): boolean => {
      const next = applyUserMove(opening, state, move.san)
      const accepted = next.path.length > state.path.length
      commit(next)
      setErrorSquare(
        accepted
          ? null
          : { square: move.to, tone: next.error?.deliberate ? 'off-line' : 'wrong' },
      )
      return accepted
    },
    [commit, opening, state],
  )

  const handleTryAgain = useCallback(() => {
    setErrorSquare(null)
    setState((current) => tryAgain(current))
  }, [])

  const handleShowMe = useCallback(() => {
    setErrorSquare(null)
    commit(showMe(opening, state))
  }, [commit, opening, state])

  const spots = troubleSpots(progress, 3)
  const drilled = linesDrilled(progress)
  const total = totalLines(opening)
  const plies = totalPlies(opening)

  const turnColour = state.path.length % 2 === 0 ? 'white' : 'black'

  const announcement = (() => {
    if (state.error) {
      return `${state.error.played} is not the repertoire move. ${state.error.reason}`
    }
    if (run) return `Line complete: ${run.lineName}. Accuracy ${run.accuracy} percent.`
    const played = state.path[state.path.length - 1]
    if (!played) return 'Your move.'
    const mover = isUserPly(opening.side, state.path.length - 1) ? 'You played' : 'The computer played'
    const label = moveLabel(state.path.length - 1, normalizeSan(played.san))
    return `${mover} ${label}. ${played.idea ?? ''} ${phase === 'user' ? 'Your move.' : ''}`.trim()
  })()

  return (
    <div className="trainer">
      <div className="trainer__bar">
        <button type="button" className="btn btn--ghost" onClick={onBack}>
          ← All openings
        </button>
        <div className="trainer__bar-title">
          <h2>{opening.name}</h2>
          <span className="tag">{opening.eco}</span>
          <span className={`tag tag--${opening.side}`}>
            {opening.side === 'white' ? 'White' : 'Black'}
          </span>
        </div>
        <div className="trainer__bar-spacer" />
        <div
          className="segmented"
          role="group"
          aria-label="Which replies the computer plays"
        >
          <button
            type="button"
            aria-pressed={mode === 'main-line'}
            onClick={() => setMode('main-line')}
          >
            Main line
          </button>
          <button
            type="button"
            aria-pressed={mode === 'mixed'}
            onClick={() => setMode('mixed')}
          >
            Add sidelines
          </button>
        </div>
        <button type="button" className="btn" onClick={restart}>
          Restart
        </button>
      </div>

      <div className="board-column">
        {/* The board itself is a grid of styled divs with no readable text, so
            this is what a screen reader actually follows. */}
        <p className="visually-hidden" role="status" aria-live="polite">
          {announcement}
        </p>
        <Board
          fen={fen}
          orientation={opening.side}
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
              {mode === 'main-line' && (
                <span style={{ color: 'var(--text-faint)' }}> / {plies}</span>
              )}
            </span>
            {state.decisions > 0 && (
              <span>
                Accuracy{' '}
                <strong style={{ color: 'var(--text)' }}>{runAccuracy(state)}%</strong>
              </span>
            )}
          </span>
        </div>
      </div>

      <div className="panel">
        <section className="pane">
          <header className="pane__head">
            <span>Moves</span>
            <span style={{ textTransform: 'none', letterSpacing: 0 }}>
              {state.mistakes === 0
                ? 'no mistakes'
                : `${state.mistakes} mistake${state.mistakes === 1 ? '' : 's'}`}
            </span>
          </header>
          <MoveList path={state.path} side={opening.side} />
        </section>

        <section className="pane">
          <header className="pane__head">
            <span>{run ? 'Summary' : 'Coach'}</span>
          </header>
          <div className="pane__body">
            {run ? (
              <LineSummary run={run} onReplay={restart} onChoose={onBack} />
            ) : (
              <FeedbackPanel
                side={opening.side}
                phase={phase}
                error={state.error}
                revealed={state.revealed}
                path={state.path}
                openingSummary={opening.summary}
                onTryAgain={handleTryAgain}
                onShowMe={handleShowMe}
              />
            )}
          </div>
        </section>

        <section className="pane">
          <header className="pane__head">
            <span>Your record</span>
            <span style={{ textTransform: 'none', letterSpacing: 0 }}>
              {progress.runs} run{progress.runs === 1 ? '' : 's'}
            </span>
          </header>
          <div className="progress-list">
            <div className="progress-row">
              <span className="progress-row__name">Lines drilled</span>
              <span className="progress-row__value">
                {drilled} / {total}
              </span>
            </div>
            {spots.length === 0 ? (
              <div className="progress-empty">
                {progress.runs === 0
                  ? 'Nothing recorded yet. Play a line to the end and it will show up here.'
                  : 'No recurring mistakes in this opening. Keep it that way.'}
              </div>
            ) : (
              spots.map((spot) => (
                <div className="progress-row" key={spot.key}>
                  <span className="progress-row__name">
                    Keeps missing{' '}
                    <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--warn)' }}>
                      {spot.label}
                    </code>
                  </span>
                  <span className="progress-row__value">
                    {spot.count}×
                  </span>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
