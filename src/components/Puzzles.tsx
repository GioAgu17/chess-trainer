import { useCallback, useState } from 'react'
import { Chess } from 'chess.js'
import type { Route } from '../App'
import { VERIFIED_PUZZLES } from '../data/puzzles.generated'
import type { Puzzle, RepertoireEntry } from '../data/types'
import type { ProgressStore } from '../engine/progress'
import { KIND_KEY, describeLine, isSolution, puzzlePool } from '../engine/puzzles'
import { dueLabel, selectDue } from '../engine/scheduler'
import { normalizeSan } from '../engine/tree'
import { useI18n, type UiKey } from '../i18n'
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
  const { t, n, content } = useI18n()
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
            <h1 className="page-head__title">{t('puzzles.title')}</h1>
          </div>
        </div>
        <Empty title={t('puzzles.noRepertoireTitle')}>
          <p>{t('puzzles.noRepertoireBody')}</p>
          <button type="button" className="btn btn--primary" onClick={() => onNavigate({ name: 'profiles' })}>
            {t('home.noneAction')}
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
            <h1 className="page-head__title">{t('puzzles.title')}</h1>
          </div>
        </div>
        <Empty title={t('puzzles.noneTitle')}>
          <p>{t('puzzles.noneBody')}</p>
        </Empty>
      </div>
    )
  }

  const entry = entries.find((item) => item.id === puzzle.entryId)
  const card = store.cards[puzzle.moveKey ?? puzzle.id]

  // A prompt is a catalogue key plus values, and some of those values are keys
  // themselves - the side to move, or a trap's name. Resolve them first.
  const promptVars = Object.fromEntries(
    Object.entries(puzzle.prompt.vars ?? {}).map(([name, value]) => [
      name,
      value.includes('.') ? content(value, value) : value,
    ]),
  )
  const prompt = t(puzzle.prompt.key as UiKey, promptVars)
  const explanation = [
    puzzle.explanationKey
      ? content(puzzle.explanationKey, puzzle.explanation)
      : puzzle.explanation,
    puzzle.answerNamed ? t('puzzles.punishSuffix', { san: puzzle.answerNamed }) : '',
  ]
    .filter(Boolean)
    .join(' ')
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
          <h1 className="page-head__title">{t('puzzles.title')}</h1>
          <p className="page-head__sub">{t('puzzles.sub')}</p>
        </div>
        <div className="puzzles__score">
          <span>
            {index + 1} / {queue.length}
          </span>
          {answered > 0 && (
            <span className="dim">{t('puzzles.solved', { count: solvedCount })}</span>
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
              <span>{t(KIND_KEY[puzzle.kind] as UiKey)}</span>
              <span className="pane__head-note">{entry?.name}</span>
            </header>
            <div className="pane__body puzzle__prompt-body">
              <p className="puzzle__prompt">{prompt}</p>
              <p className="puzzle__line">
                <code className="mono">{describeLine(puzzle.line) || t('puzzles.fromStart')}</code>
              </p>

              {verdict === null && <p className="puzzle__hint">{t('puzzles.hint')}</p>}

              {verdict?.status === 'solved' && (
                <div className="verdict verdict--good">
                  <span className="feedback__icon feedback__icon--good" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <strong>{t('puzzles.rightAnswer', { san: normalizeSan(puzzle.solution) })}</strong>
                    <p>{explanation}</p>
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
                      {t('puzzles.wrongAnswer', {
                        played: verdict.played,
                        san: normalizeSan(puzzle.solution),
                      })}
                    </strong>
                    <p>{explanation}</p>
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
                    {t('puzzles.showMe')}
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
                    {last ? t('puzzles.newSession') : t('puzzles.next')}
                  </button>
                )}
                {entry && (
                  <button
                    type="button"
                    className="btn"
                    onClick={() => onNavigate({ name: 'train', entryId: entry.id })}
                  >
                    {t('puzzles.drillLine')}
                  </button>
                )}
              </div>

              {card && (
                <p className="puzzle__due">
                  {t('puzzles.due', {
                    when: (() => {
                      const due = dueLabel(card, new Date().toISOString())
                      return due.vars && 'count' in due.vars
                        ? n(due.key, due.vars.count)
                        : t(due.key as UiKey)
                    })(),
                  })}
                </p>
              )}
            </div>
          </div>

          <div className="pane">
            <header className="pane__head">
              <span>{t('puzzles.howTitle')}</span>
            </header>
            <div className="pane__body puzzle__note">
              {/* The catalogue marks the emphasised words with <b>, which is
                  the one bit of markup a translator needs to keep. */}
              <p dangerouslySetInnerHTML={{ __html: t('puzzles.howRecall') }} />
              <p dangerouslySetInnerHTML={{ __html: t('puzzles.howVerified') }} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
