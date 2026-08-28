import { useMemo, useState } from 'react'
import { Chess } from 'chess.js'
import type { Route } from '../App'
import { ENTRIES, getEntry } from '../data/entries'
import type { RepertoireEntry } from '../data/types'
import { profileEntryIds, type ProgressStore, type RepertoireProfile } from '../engine/progress'
import {
  accuracyTrend,
  coverageGaps,
  entryStats,
  lineStats,
  movesFor,
  rankMove,
  summarise,
  weakestMoves,
  type RankedMove,
} from '../engine/stats'
import { describeLine } from '../engine/puzzles'
import { MiniBoard } from './MiniBoard'
import { Empty, Meter, Stat } from './ui'

interface StatisticsProps {
  store: ProgressStore
  profile: RepertoireProfile | undefined
  focusId?: string
  onNavigate: (route: Route) => void
}

/**
 * The statistics page.
 *
 * A summary you can read in three seconds at the top, then detail underneath,
 * and every number leads back to the position behind it. Errors and
 * off-repertoire choices are shown separately throughout - adding them together
 * would make the accuracy figure meaningless.
 */
export function Statistics({ store, profile, focusId, onNavigate }: StatisticsProps) {
  const scoped = useMemo(() => {
    const ids = profileEntryIds(profile)
    const entries = ids.map((id) => getEntry(id)).filter((entry) => entry !== undefined)
    return entries.length > 0 ? entries : ENTRIES
  }, [profile])

  const [selected, setSelected] = useState<string | null>(focusId ?? null)
  const focus = selected ? getEntry(selected) : undefined

  const summary = useMemo(() => summarise(store, scoped), [store, scoped])
  const trend = useMemo(
    () => accuracyTrend(store, scoped.map((entry) => entry.id)),
    [store, scoped],
  )
  const worst = useMemo(
    () => weakestMoves(store, scoped.map((entry) => entry.id), 12),
    [store, scoped],
  )

  if (summary.attempts === 0) {
    return (
      <div className="stats">
        <div className="page-head">
          <div>
            <h1 className="page-head__title">Statistics</h1>
            <p className="page-head__sub">Drawn from the moves you actually play, not from counters.</p>
          </div>
        </div>
        <Empty title="Nothing to measure yet">
          <p>
            Play a line to the end and this page fills up: accuracy per opening, per line and per
            move, what you keep missing, and how much of the repertoire you have seen.
          </p>
          <button type="button" className="btn btn--primary" onClick={() => onNavigate({ name: 'home' })}>
            Go and drill something
          </button>
        </Empty>
      </div>
    )
  }

  return (
    <div className="stats">
      <div className="page-head">
        <div>
          <h1 className="page-head__title">Statistics</h1>
          <p className="page-head__sub">
            Every number here comes from a move you played. Click one to see the position.
          </p>
        </div>
      </div>

      <section className="stat-row">
        <Stat
          value={`${summary.accuracy}%`}
          label="Accuracy"
          hint={`${summary.correct} right of ${summary.attempts}`}
          tone={summary.accuracy >= 85 ? 'good' : summary.accuracy >= 60 ? 'warn' : 'bad'}
        />
        <Stat
          value={summary.errors}
          label="Real mistakes"
          hint="Moves that were worse"
          tone={summary.errors > 0 ? 'bad' : undefined}
        />
        <Stat
          value={summary.offRepertoire}
          label="Off repertoire"
          hint="Sound, just not this line"
          tone={summary.offRepertoire > 0 ? 'warn' : undefined}
        />
        <Stat
          value={`${summary.coverage}%`}
          label="Repertoire seen"
          hint={`${summary.runs} finished run${summary.runs === 1 ? '' : 's'}`}
        />
        <Stat value={summary.activeDays} label="Days practised" hint={lastPlayed(summary.lastPlayedAt)} />
      </section>

      {trend.length > 1 && (
        <section className="section">
          <div className="section__head">
            <h2>Progress over time</h2>
            <span className="section__blurb">
              Accuracy per day. Are you getting better, or just repeating it?
            </span>
          </div>
          <TrendChart trend={trend} />
        </section>
      )}

      <section className="section">
        <div className="section__head">
          <h2>By opening</h2>
          <span className="section__blurb">Click one to open the detail below.</span>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Opening</th>
                <th className="num">Accuracy</th>
                <th className="num">Errors</th>
                <th className="num">Off rep.</th>
                <th className="num">Seen</th>
                <th className="num">Runs</th>
              </tr>
            </thead>
            <tbody>
              {scoped.map((entry) => {
                const stats = entryStats(store, entry)
                return (
                  <tr
                    key={entry.id}
                    className={`table__row${selected === entry.id ? ' table__row--on' : ''}`}
                    onClick={() => setSelected(selected === entry.id ? null : entry.id)}
                  >
                    <td>
                      <button type="button" className="table__link">
                        {entry.name}
                      </button>
                    </td>
                    <td className="num">
                      {stats.attempts === 0 ? <span className="dim">-</span> : `${stats.accuracy}%`}
                    </td>
                    <td className="num">{stats.errors || <span className="dim">0</span>}</td>
                    <td className="num">{stats.offRepertoire || <span className="dim">0</span>}</td>
                    <td className="num">
                      <span className="cell-meter">
                        <Meter percent={stats.coverage} />
                        <span>{stats.coverage}%</span>
                      </span>
                    </td>
                    <td className="num">{stats.runs}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {focus && <EntryDetail entry={focus} store={store} onNavigate={onNavigate} />}

      <section className="section">
        <div className="section__head">
          <h2>The moves you miss most</h2>
          <span className="section__blurb">
            Ranked by how often they actually go wrong. Sound moves played off the repertoire are
            not counted.
          </span>
        </div>
        {worst.length === 0 ? (
          <Empty title="No recurring mistakes">
            <p>Nothing in your repertoire has gone wrong more than once. Keep it that way.</p>
          </Empty>
        ) : (
          <div className="miss-list">
            {worst.map((move) => (
              <MissCard key={move.key} move={move} onNavigate={onNavigate} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

function lastPlayed(at: string | null): string {
  if (!at) return 'never'
  return `last on ${at.slice(0, 10)}`
}

function EntryDetail({
  entry,
  store,
  onNavigate,
}: {
  entry: RepertoireEntry
  store: ProgressStore
  onNavigate: (route: Route) => void
}) {
  const lines = lineStats(store, entry.id)
  const moves = movesFor(store, entry.id).map(rankMove).sort((a, b) => a.accuracy - b.accuracy)
  const gaps = coverageGaps(store, entry, 8)
  // The question this answers is "am I getting better at *this*", which the
  // repertoire-wide trend above cannot tell you.
  const trend = accuracyTrend(store, [entry.id])

  return (
    <section className="section detail">
      <div className="section__head">
        <h2>{entry.name}</h2>
        <div className="section__actions">
          <button
            type="button"
            className="btn"
            onClick={() => onNavigate({ name: 'study', entryId: entry.id })}
          >
            Read the theory
          </button>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => onNavigate({ name: 'train', entryId: entry.id })}
          >
            Drill it
          </button>
        </div>
      </div>

      {trend.length > 1 && (
        <div className="detail__trend">
          <p className="detail__trend-label">
            Accuracy per day in this line - {trend[0].accuracy}% on {trend[0].day} to{' '}
            {trend[trend.length - 1].accuracy}% on {trend[trend.length - 1].day}
          </p>
          <TrendChart trend={trend} />
        </div>
      )}

      <div className="detail__cols">
        <div className="pane">
          <header className="pane__head">
            <span>By line</span>
            <span className="pane__head-note">weakest first</span>
          </header>
          {lines.length === 0 ? (
            <div className="progress-empty">No line finished yet.</div>
          ) : (
            <div className="progress-list">
              {lines.map((line) => (
                <div className="progress-row" key={line.lineName}>
                  <span className="progress-row__name">{line.lineName}</span>
                  <span className="progress-row__value">
                    {line.averageAccuracy}%
                    <span className="dim"> · {line.runs}×</span>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pane">
          <header className="pane__head">
            <span>By move</span>
            <span className="pane__head-note">weakest first</span>
          </header>
          {moves.length === 0 ? (
            <div className="progress-empty">Nothing recorded yet.</div>
          ) : (
            <div className="progress-list">
              {moves.slice(0, 12).map((move) => (
                <div className="progress-row" key={move.key}>
                  <span className="progress-row__name">
                    <code className="mono">{move.label}</code>
                    {move.commonestWrong && (
                      <span className="dim"> you play {move.commonestWrong}</span>
                    )}
                  </span>
                  <span className="progress-row__value">
                    {move.accuracy}%
                    <span className="dim"> · {move.attempts}×</span>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pane">
          <header className="pane__head">
            <span>Never seen</span>
            <span className="pane__head-note">{gaps.length === 0 ? 'none' : `${gaps.length}+`}</span>
          </header>
          {gaps.length === 0 ? (
            <div className="progress-empty">You have been asked for every move in this line.</div>
          ) : (
            <div className="progress-list">
              {gaps.map((gap) => (
                <div className="gap-row" key={gap.key}>
                  <code className="mono">{gap.label}</code>
                  <span className="gap-row__line">{describeLine(gap.line) || 'from the start'}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/** One weak move, with the position and the answer one click away. */
function MissCard({ move, onNavigate }: { move: RankedMove; onNavigate: (route: Route) => void }) {
  const [open, setOpen] = useState(false)
  const entry = getEntry(move.entryId)
  const line = move.key.split('|')[1] ?? ''
  const fen = useMemo(() => {
    const chess = new Chess()
    for (const san of line.trim() ? line.trim().split(/\s+/) : []) {
      try {
        chess.move(san)
      } catch {
        return null
      }
    }
    return chess.fen()
  }, [line])

  return (
    <div className={`miss${open ? ' miss--open' : ''}`}>
      <button type="button" className="miss__head" onClick={() => setOpen(!open)} aria-expanded={open}>
        <code className="miss__move">{move.label}</code>
        <span className="miss__entry">{entry?.name ?? move.entryId}</span>
        <span className="miss__count">
          {move.misses}× wrong of {move.attempts}
        </span>
        <span className="miss__accuracy">{move.accuracy}%</span>
        <span className="miss__chevron" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="miss__body">
          {fen && entry && <MiniBoard fen={fen} orientation={entry.side} />}
          <div className="miss__facts">
            <p className="miss__line">
              After <code className="mono">{describeLine(line.trim() ? line.trim().split(/\s+/) : []) || 'the start'}</code>
            </p>
            <p className="miss__answer">
              The move is <code className="mono is-right">{move.expected}</code>
            </p>
            {Object.keys(move.wrongMoves).length > 0 && (
              <p className="miss__wrong">
                You have played{' '}
                {Object.entries(move.wrongMoves)
                  .sort((a, b) => b[1] - a[1])
                  .map(([san, count]) => (
                    <span key={san}>
                      <code className="mono is-wrong">{san}</code>
                      <span className="dim"> ×{count} </span>
                    </span>
                  ))}
              </p>
            )}
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => onNavigate({ name: 'train', entryId: move.entryId })}
            >
              Drill this opening
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

/** Accuracy per day, as a bar chart. No library: it is fifteen rectangles. */
function TrendChart({ trend }: { trend: Array<{ day: string; accuracy: number; attempts: number }> }) {
  const points = trend.slice(-30)
  return (
    <div className="trend">
      <div className="trend__bars">
        {points.map((point) => (
          <div className="trend__col" key={point.day} title={`${point.day}: ${point.accuracy}% of ${point.attempts}`}>
            <div className="trend__bar-track">
              <div
                className={`trend__bar${point.accuracy >= 85 ? ' trend__bar--good' : point.accuracy < 60 ? ' trend__bar--bad' : ''}`}
                style={{ height: `${Math.max(3, point.accuracy)}%` }}
              />
            </div>
            <span className="trend__label">{point.day.slice(5)}</span>
          </div>
        ))}
      </div>
      <div className="trend__axis">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  )
}
