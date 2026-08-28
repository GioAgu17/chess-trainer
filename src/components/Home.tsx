import { useMemo } from 'react'
import type { RepertoireEntry } from '../data/types'
import type { Route } from '../App'
import type { ProgressStore, RepertoireProfile } from '../engine/progress'
import { entryStats, summarise, weakestMoves } from '../engine/stats'
import { dueCount } from '../engine/scheduler'
import { EntryTag, Meter } from './ui'

interface HomeProps {
  store: ProgressStore
  profile: RepertoireProfile | undefined
  entries: RepertoireEntry[]
  onNavigate: (route: Route) => void
}

/**
 * The front door once a profile exists: what to train, what is due, and what
 * you keep getting wrong - each one a single click from the thing itself.
 */
export function Home({ store, profile, entries, onNavigate }: HomeProps) {
  const summary = useMemo(() => summarise(store, entries), [store, entries])
  const weakest = useMemo(
    () => weakestMoves(store, entries.map((entry) => entry.id), 5),
    [store, entries],
  )
  const due = useMemo(() => {
    const ids = Object.values(store.moves)
      .filter((stat) => entries.some((entry) => entry.id === stat.entryId))
      .map((stat) => stat.key)
    return dueCount(store.cards, ids, new Date().toISOString())
  }, [store, entries])

  if (!profile || entries.length === 0) {
    return (
      <div className="empty">
        <h2>No repertoire yet</h2>
        <p>Build one in a minute and the trainer will know what to show you.</p>
        <button type="button" className="btn btn--primary" onClick={() => onNavigate({ name: 'profiles' })}>
          Set one up
        </button>
      </div>
    )
  }

  const openings = entries.filter((entry) => entry.kind === 'opening')
  const defences = entries.filter((entry) => entry.kind === 'defence')

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__text">
          <p className="hero__eyebrow">Your repertoire</p>
          <h1 className="hero__title">{profile.name}</h1>
          <p className="hero__sub">
            {summary.attempts === 0
              ? 'Nothing drilled yet. Pick a line below and play it to the end.'
              : `${summary.accuracy}% accuracy across ${summary.attempts} move${
                  summary.attempts === 1 ? '' : 's'
                }, ${summary.coverage}% of the repertoire seen.`}
          </p>
        </div>
        <div className="hero__actions">
          <button
            type="button"
            className="btn btn--primary btn--lg"
            onClick={() => onNavigate({ name: 'puzzles' })}
          >
            {due > 0 ? `Review ${due} due` : 'Practise puzzles'}
          </button>
          <button type="button" className="btn" onClick={() => onNavigate({ name: 'stats' })}>
            See statistics
          </button>
        </div>
      </section>

      {weakest.length > 0 && (
        <section className="section">
          <div className="section__head">
            <h2>Weakest moves</h2>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => onNavigate({ name: 'stats' })}
            >
              All of them →
            </button>
          </div>
          <ul className="weak-list">
            {weakest.map((move) => (
              <li key={move.key}>
                <button
                  type="button"
                  className="weak-row"
                  onClick={() => onNavigate({ name: 'stats', entryId: move.entryId })}
                >
                  <code className="weak-row__move">{move.label}</code>
                  <span className="weak-row__entry">{nameOf(entries, move.entryId)}</span>
                  <span className="weak-row__count">
                    missed {move.misses}× of {move.attempts}
                  </span>
                  <span className="weak-row__accuracy">{move.accuracy}%</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {[
        { title: 'Your openings', items: openings, blurb: 'The games you choose to play.' },
        { title: 'What you face', items: defences, blurb: 'The systems you have prepared against.' },
      ]
        .filter((group) => group.items.length > 0)
        .map((group) => (
          <section className="section" key={group.title}>
            <div className="section__head">
              <h2>{group.title}</h2>
              <span className="section__blurb">{group.blurb}</span>
            </div>
            <div className="grid">
              {group.items.map((entry) => (
                <EntryCard key={entry.id} entry={entry} store={store} onNavigate={onNavigate} />
              ))}
            </div>
          </section>
        ))}
    </div>
  )
}

function nameOf(entries: RepertoireEntry[], id: string): string {
  return entries.find((entry) => entry.id === id)?.name ?? id
}

export function EntryCard({
  entry,
  store,
  onNavigate,
}: {
  entry: RepertoireEntry
  store: ProgressStore
  onNavigate: (route: Route) => void
}) {
  const stats = entryStats(store, entry)
  return (
    <article className="card">
      <div className="card__head">
        <h3 className="card__name">{entry.name}</h3>
        <EntryTag entry={entry} />
      </div>
      <p className="card__summary">
        {entry.kind === 'defence' ? entry.theirPlan : entry.summary}
      </p>
      <div className="card__foot">
        <div className="card__stats">
          <span>
            <strong>{stats.coverage}%</strong> seen
          </span>
          <span>
            {stats.attempts === 0
              ? 'Not started'
              : `${stats.accuracy}% accuracy · ${stats.runs} run${stats.runs === 1 ? '' : 's'}`}
          </span>
        </div>
        <Meter percent={stats.coverage} />
        <div className="card__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => onNavigate({ name: 'train', entryId: entry.id })}
          >
            Drill
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => onNavigate({ name: 'study', entryId: entry.id })}
          >
            Study
          </button>
        </div>
      </div>
    </article>
  )
}
