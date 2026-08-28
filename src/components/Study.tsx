import { useMemo, useState } from 'react'
import type { Route } from '../App'
import type { RepertoireEntry, StudyGuide } from '../data/types'
import { isDefence } from '../data/types'
import { useI18n } from '../i18n'
import { Empty } from './ui'

interface StudyProps {
  /** The entries in the active repertoire. */
  mine: RepertoireEntry[]
  /** Everything, for someone who wants to read outside their repertoire. */
  all: RepertoireEntry[]
  focusId?: string
  onNavigate: (route: Route) => void
}

/**
 * The study section: the long read.
 *
 * Deliberately not a wall of variations. It is what the position is about,
 * aimed at a 1200-1800 player, with links in both directions - study a line and
 * drill it, or fail a move and read why it matters.
 */
export function Study({ mine, all, focusId, onNavigate }: StudyProps) {
  const { t, guides } = useI18n()
  // Someone asked to read about a line outside their repertoire gets the whole
  // list, so the link from Browse never lands on an empty page.
  const [scope, setScope] = useState<'mine' | 'all'>(
    mine.length === 0 || (focusId && !mine.some((item) => item.id === focusId)) ? 'all' : 'mine',
  )
  const entries = scope === 'mine' ? mine : all
  const [selected, setSelected] = useState<string | null>(focusId ?? mine[0]?.id ?? all[0]?.id ?? null)
  const entry = useMemo(
    () => entries.find((item) => item.id === selected) ?? entries[0],
    [entries, selected],
  )
  const guide = entry ? guides.find((item) => item.id === entry.id) : undefined

  if (!entry) {
    return (
      <div className="study">
        <Empty title={t('study.emptyTitle')}>
          <p>{t('study.emptyBody')}</p>
        </Empty>
      </div>
    )
  }

  return (
    <div className="study">
      <div className="page-head">
        <div>
          <h1 className="page-head__title">{t('study.title')}</h1>
          <p className="page-head__sub">{t('study.sub')}</p>
        </div>
        {mine.length > 0 && (
          <div className="segmented" role="group" aria-label={t('study.scope')}>
            <button type="button" aria-pressed={scope === 'mine'} onClick={() => setScope('mine')}>
              {t('study.mine')}
            </button>
            <button type="button" aria-pressed={scope === 'all'} onClick={() => setScope('all')}>
              {t('study.all')}
            </button>
          </div>
        )}
      </div>

      <div className="study__layout">
        <nav className="study__nav" aria-label={t('study.openings')}>
          {entries.map((item) => (
            <button
              type="button"
              key={item.id}
              className="study__nav-item"
              aria-current={item.id === entry.id ? 'true' : undefined}
              onClick={() => setSelected(item.id)}
            >
              <span className="study__nav-name">{item.name}</span>
              <span className="study__nav-kind">
                {item.kind === 'defence'
                  ? t('common.defence')
                  : item.side === 'white'
                    ? t('common.white')
                    : t('common.black')}
              </span>
            </button>
          ))}
        </nav>

        <article className="study__body">
          <header className="study__head">
            <div>
              <p className="study__eyebrow">
                {entry.kind === 'defence'
                  ? t('study.against', { system: entry.system })
                  : t('study.opening')}{' '}
                · {entry.eco}
              </p>
              <h2 className="study__title">{entry.name}</h2>
            </div>
            <div className="study__head-actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => onNavigate({ name: 'train', entryId: entry.id })}
              >
                {t('study.drillLine')}
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => onNavigate({ name: 'stats', entryId: entry.id })}
              >
                {t('study.myResults')}
              </button>
            </div>
          </header>

          {isDefence(entry) && (
            <section className="study__section study__section--callout">
              <h3>{t('study.spot')}</h3>
              <p className="study__moves">
                <code className="mono">{entry.recognisedBy.moves}</code>
              </p>
              <p>{entry.recognisedBy.tell}</p>
              <h3>{t('study.theirPlan')}</h3>
              <p>{entry.theirPlan}</p>
              <h3>{t('study.recipe')}</h3>
              <ol className="study__recipe">
                {entry.recipe.map((step, i) => (
                  <li key={step}>
                    <span className="study__recipe-no">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {guide ? <Guide guide={guide} /> : <Empty title={t('study.noGuide')} />}

          {(entry.traps ?? []).length > 0 && (
            <section className="study__section">
              <h3>{t('study.traps')}</h3>
              <div className="trap-list">
                {(entry.traps ?? []).map((trap) => (
                  <div className="trap" key={trap.id}>
                    <div className="trap__head">
                      <span className={`tag tag--${trap.owner === 'ours' ? 'ours' : 'theirs'}`}>
                        {trap.owner === 'ours' ? t('study.trapOurs') : t('study.trapTheirs')}
                      </span>
                      <strong>{trap.name}</strong>
                    </div>
                    <p className="trap__moves">
                      <code className="mono">{formatTrap(trap.moves)}</code>
                    </p>
                    <p>{trap.point}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="study__foot">
            <button
              type="button"
              className="btn btn--primary btn--lg"
              onClick={() => onNavigate({ name: 'train', entryId: entry.id })}
            >
              {t('study.drillNamed', { name: entry.name })}
            </button>
            <button
              type="button"
              className="btn btn--lg"
              onClick={() => onNavigate({ name: 'puzzles' })}
            >
              {t('study.practise')}
            </button>
          </div>
        </article>
      </div>
    </div>
  )
}

function Guide({ guide }: { guide: StudyGuide }) {
  const { t } = useI18n()
  return (
    <>
      <section className="study__section">
        <h3>{t('study.bigIdea')}</h3>
        <p className="study__lead">{guide.bigIdea}</p>
      </section>

      <section className="study__section">
        <h3>{t('study.structures')}</h3>
        {guide.structures.map((structure) => (
          <div className="structure" key={structure.name}>
            <h4>{structure.name}</h4>
            <p className="structure__shape">{structure.shape}</p>
            <div className="structure__sides">
              <div>
                <span className="structure__who">{t('study.youWant')}</span>
                <p>{structure.yourPlay}</p>
              </div>
              <div>
                <span className="structure__who">{t('study.theyWant')}</span>
                <p>{structure.theirPlay}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="study__section">
        <h3>{t('study.plans')}</h3>
        <ol className="plan-list">
          {guide.plans.map((plan, i) => (
            <li key={plan.title}>
              <span className="plan-list__no">{i + 1}</span>
              <div>
                <strong>{plan.title}</strong>
                <p>{plan.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="study__section study__section--split">
        <div>
          <h3>{t('study.keySquares')}</h3>
          <ul className="square-list">
            {guide.keySquares.map((square) => (
              <li key={square.square}>
                <code className="mono square-list__square">{square.square}</code>
                <span>{square.why}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{t('study.breaks')}</h3>
          <ul className="square-list">
            {guide.breaks.map((item) => (
              <li key={item.move}>
                <code className="mono square-list__square square-list__square--break">{item.move}</code>
                <span>{item.when}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="study__section">
        <h3>{t('study.feel')}</h3>
        <p className="study__lead">{guide.middlegameFeel}</p>
      </section>

      <section className="study__section">
        <h3>{t('study.pitfalls')}</h3>
        <div className="pitfall-list">
          {guide.pitfalls.map((pitfall) => (
            <div className="pitfall" key={pitfall.title}>
              <strong>{pitfall.title}</strong>
              <p>{pitfall.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

/** `1.e4 e5 2.f4 Bc5` from a plain list of moves. */
function formatTrap(moves: string[]): string {
  return moves
    .map((san, ply) => (ply % 2 === 0 ? `${Math.floor(ply / 2) + 1}.${san}` : san))
    .join(' ')
}
