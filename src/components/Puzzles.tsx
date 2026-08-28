import { useCallback, useState } from 'react'
import { Chess } from 'chess.js'
import type { Route } from '../App'
import { getEntry } from '../data/entries'
import { VERIFIED_PUZZLES } from '../data/puzzles.generated'
import type { Puzzle, RepertoireEntry } from '../data/types'
import type { ProgressStore } from '../engine/progress'
import { KIND_LABEL, describeLine, isSolution, puzzlePool } from '../engine/puzzles'
import { dueLabel, selectDue } from '../engine/scheduler'
import { normalizeSan } from '../engine/tree'
import { Board, type BoardMove } from './Board'
import { Empty } from './ui'

interface PuzzlesProps {
  store: ProgressStore
  entries: RepertoireEntry[]
  onAnswer: (puzzleId: string, solved: boolean, cardId?: string) => void
  onNavigate: (route: Route) => void
}

const SESSION_SIZE = 12

type Verdict =
  | { status: 'solved' }
  | { status: 'failed'; played: string; square?: string }
  | null

/**
 * The puzzle session.
 *
 * Everything shown here was either generated from the repertoire (recall) or
 * signed off by Stockfish offline (punish and trap). Nothing is evaluated at
 * runtime; the answer was decided before the page loaded.
 */
export function Puzzles({ store, entries, onAnswer, onNavigate }: PuzzlesProps) {
  /**
   * Choose a session's worth of puzzles.
   *
   * Deliberately *not* a memo over the record: answering a puzzle updates the
   * schedule, and a queue derived from the schedule would reorder itself under
   * the user's hands the moment they answered. The queue is picked once and
   * held until the session ends.
   */
  const buildQueue = useCallback(() => {
    const misses: Record<string, number> = {}
    for (const stat of Object.values(store.moves)) {
      misses[stat.key] = stat.errors + stat.revealed
    }
    const pool = puzzlePool(entries, VERIFIED_PUZZLES)
    // Recall puzzles share a card with the same move met while drilling, so the
    // schedule is keyed on that rather than on the puzzle id.
    const cardId = (puzzle: Puzzle) => puzzle.moveKey ?? puzzle.id
    const withCards = pool.map((puzzle) => ({ ...puzzle, id: cardId(puzzle), puzzle }))
    return selectDue({
      pool: withCards,
      cards: store.cards,
      missesById: misses,
      now: new Date().toISOString(),
      count: SESSION_SIZE,
    }).map((item) => item.puzzle)
    // The store is read when a session starts and deliberately not tracked.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries])

  const [queue, setQueue] = useState<Puzzle[]>(buildQueue)
  const [index, setIndex] = useState(0)
  const [solvedCount, setSolvedCount] = useState(0)
  const [answered, setAnswered] = useState(0)

  const puzzle = queue[index]

  // The verdict belongs to one puzzle. Storing which puzzle it was for, rather
  // than clearing it in an effect, means a recomputed queue can never show the
  // previous answer against the next position, even for one frame.
  const [given, setGiven] = useState<{ id: string; verdict: Verdict }>({ id: '', verdict: null })
  const verdict = given.id === puzzle?.id ? given.verdict : null
  const setVerdict = (next: Verdict) => setGiven({ id: puzzle?.id ?? '', verdict: next })

  const handleMove = (move: BoardMove): boolean => {
    if (!puzzle || verdict) return false
    const correct = isSolution(puzzle, move.san)
    setVerdict(
      correct
        ? { status: 'solved' }
        : { status: 'failed', played: normalizeSan(move.san), square: move.to },
    )
    setAnswered((n) => n + 1)
    if (correct) setSolvedCount((n) => n + 1)
    onAnswer(puzzle.id, correct, puzzle.moveKey)
    // Never leave a wrong move on the board: the position has to stay the one
    // the explanation is about.
    return correct
  }

  if (entries.length === 0) {
    return (
      <div className="puzzles">
        <div className="page-head">
          <div>
            <h1 className="page-head__title">Puzzles</h1>
          </div>
        </div>
        <Empty title="No repertoire to build puzzles from">
          <p>Set up a repertoire and the exercises are generated from it and from your record.</p>
          <button type="button" className="btn btn--primary" onClick={() => onNavigate({ name: 'profiles' })}>
            Set one up
          </button>
        </Empty>
      </div>
    )
  }

  if (!puzzle) {
    return (
      <div className="puzzles">
        <div className="page-head">
          <div>
            <h1 className="page-head__title">Puzzles</h1>
          </div>
        </div>
        <Empty title="Nothing to solve right now">
          <p>Drill a line first - the exercises are generated from the positions you have met.</p>
        </Empty>
      </div>
    )
  }

  const entry = getEntry(puzzle.entryId)
  const card = store.cards[puzzle.moveKey ?? puzzle.id]
  const fenAfterAnswer = () => {
    const chess = new Chess(puzzle.fen)
    try {
      chess.move(normalizeSan(puzzle.solution))
    } catch {
      return puzzle.fen
    }
    return chess.fen()
  }

  const last = index >= queue.length - 1

  return (
    <div className="puzzles">
      <div className="page-head">
        <div>
          <h1 className="page-head__title">Puzzles</h1>
          <p className="page-head__sub">
            Generated from your repertoire and weighted towards the moves you keep missing.
          </p>
        </div>
        <div className="puzzles__score">
          <span>
            {index + 1} / {queue.length}
          </span>
          {answered > 0 && (
            <span className="dim">
              {solvedCount} solved
            </span>
          )}
        </div>
      </div>

      <div className="puzzle">
        <div className="puzzle__board">
          <Board
            fen={verdict?.status === 'solved' ? fenAfterAnswer() : puzzle.fen}
            orientation={puzzle.solver}
            interactive={!verdict}
            lastMove={null}
            errorSquare={
              verdict?.status === 'failed' && verdict.square
                ? { square: verdict.square, tone: 'wrong' }
                : null
            }
            onMove={handleMove}
          />
        </div>

        <aside className="puzzle__side">
          <div className="pane">
            <header className="pane__head">
              <span>{KIND_LABEL[puzzle.kind]}</span>
              <span className="pane__head-note">{entry?.name}</span>
            </header>
            <div className="pane__body puzzle__prompt-body">
              <p className="puzzle__prompt">{puzzle.prompt}</p>
              <p className="puzzle__line">
                <code className="mono">{describeLine(puzzle.line) || 'From the start'}</code>
              </p>

              {verdict === null && (
                <p className="puzzle__hint">
                  Play the move on the board. There is one answer and it has been checked by an
                  engine.
                </p>
              )}

              {verdict?.status === 'solved' && (
                <div className="verdict verdict--good">
                  <span className="feedback__icon feedback__icon--good" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <strong>{normalizeSan(puzzle.solution)} is right.</strong>
                    <p>{puzzle.explanation}</p>
                  </div>
                </div>
              )}

              {verdict?.status === 'failed' && (
                <div className="verdict verdict--bad">
                  <span className="feedback__icon feedback__icon--bad" aria-hidden="true">
                    ✕
                  </span>
                  <div>
                    <strong>
                      {verdict.played} is not it. The move is {normalizeSan(puzzle.solution)}.
                    </strong>
                    <p>{puzzle.explanation}</p>
                  </div>
                </div>
              )}

              <div className="puzzle__actions">
                {verdict === null ? (
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      setVerdict({ status: 'failed', played: 'nothing' })
                      setAnswered((n) => n + 1)
                      onAnswer(puzzle.id, false, puzzle.moveKey)
                    }}
                  >
                    Show me
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn--primary"
                    onClick={() => {
                      if (!last) {
                        setIndex(index + 1)
                        return
                      }
                      // A fresh session re-reads the schedule, so the next batch
                      // reflects everything just answered.
                      setQueue(buildQueue())
                      setIndex(0)
                      setSolvedCount(0)
                      setAnswered(0)
                    }}
                  >
                    {last ? 'New session' : 'Next puzzle'}
                  </button>
                )}
                {entry && (
                  <button
                    type="button"
                    className="btn"
                    onClick={() => onNavigate({ name: 'train', entryId: entry.id })}
                  >
                    Drill the line
                  </button>
                )}
              </div>

              {card && <p className="puzzle__due">This one is {dueLabel(card, new Date().toISOString())}.</p>}
            </div>
          </div>

          <div className="pane">
            <header className="pane__head">
              <span>How these are made</span>
            </header>
            <div className="pane__body puzzle__note">
              <p>
                <strong>Recall</strong> drills come from your repertoire, out of sequence, weighted
                towards the moves you keep missing.
              </p>
              <p>
                <strong>Punish</strong> and <strong>trap</strong> puzzles were each checked by
                Stockfish before they shipped: the answer has to be the engine's first choice and
                clear of the next move, or the puzzle is dropped rather than guessed at.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
