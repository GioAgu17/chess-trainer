import { useMemo } from 'react'
import type { RepertoireEntry } from '../data/types'
import type { Route } from '../App'
import type { ProgressStore, RepertoireProfile } from '../engine/progress'
import { entryStats, summarise, weakestMoves } from '../engine/stats'
import { dueCount } from '../engine/scheduler'
import { useI18n } from '../i18n'
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
  const { t, n } = useI18n()
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
        <h2>{t('home.noneTitle')}</h2>
        <p>{t('home.noneBody')}</p>
        <button type="button" className="btn btn--primary" onClick={() => onNavigate({ name: 'profiles' })}>
          {t('home.noneAction')}
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
          <p className="hero__eyebrow">{t('home.eyebrow')}</p>
          <h1 className="hero__title">{profile.name}</h1>
          <p className="hero__sub">
            {summary.attempts === 0
              ? t('home.emptySub')
              : t('home.sub', {
                  accuracy: summary.accuracy,
                  moves: n('common.move', summary.attempts),
                  coverage: summary.coverage,
                })}
          </p>
        </div>
        <div className="hero__actions">
          <button
            type="button"
            className="btn btn--primary btn--lg"
            onClick={() => onNavigate({ name: 'puzzles' })}
          >
            {due > 0 ? t('home.review', { count: due }) : t('home.practise')}
          </button>
          <button type="button" className="btn" onClick={() => onNavigate({ name: 'stats' })}>
            {t('home.seeStats')}
          </button>
        </div>
      </section>

      {weakest.length > 0 && (
        <section className="section">
          <div className="section__head">
            <h2>{t('home.weakest')}</h2>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => onNavigate({ name: 'stats' })}
            >
              {t('home.allOfThem')}
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
                    {t('home.missed', { misses: move.misses, attempts: move.attempts })}
                  </span>
                  <span className="weak-row__accuracy">{move.accuracy}%</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {[
        { title: t('home.yourOpenings'), items: openings, blurb: t('home.yourOpeningsBlurb') },
        { title: t('home.whatYouFace'), items: defences, blurb: t('home.whatYouFaceBlurb') },
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
  const { t, n } = useI18n()
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
          <span>{t('home.seen', { percent: stats.coverage })}</span>
          <span>
            {stats.attempts === 0
              ? t('common.notStarted')
              : t('home.accuracyRuns', {
                  accuracy: stats.accuracy,
                  runs: n('common.run', stats.runs),
                })}
          </span>
        </div>
        <Meter percent={stats.coverage} />
        <div className="card__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => onNavigate({ name: 'train', entryId: entry.id })}
          >
            {t('common.drill')}
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => onNavigate({ name: 'study', entryId: entry.id })}
          >
            {t('common.study')}
          </button>
        </div>
      </div>
    </article>
  )
}
