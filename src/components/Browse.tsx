import { useState } from 'react'
import type { Route } from '../App'
import { defenceSystems } from '../data/entries'
import type { Defence, DefenceFamily, Opening } from '../data/types'
import type { ProgressStore } from '../engine/progress'
import { useI18n, type UiKey } from '../i18n'
import { EntryCard } from './Home'

const FAMILY_KEYS: Array<{ key: DefenceFamily; title: UiKey; blurb: UiKey }> = [
  { key: 'd4', title: 'browse.family.d4', blurb: 'browse.family.d4blurb' },
  { key: 'e4', title: 'browse.family.e4', blurb: 'browse.family.e4blurb' },
  { key: 'flank', title: 'browse.family.flank', blurb: 'browse.family.flankblurb' },
]

interface BrowseProps {
  store: ProgressStore
  onNavigate: (route: Route) => void
}

type Tab = 'openings' | 'defences'

/**
 * The everything-at-once view. No longer the front door, but still here for
 * anyone who wants to poke around outside their own repertoire.
 */
export function Browse({ store, onNavigate }: BrowseProps) {
  const { t, entries } = useI18n()
  const [tab, setTab] = useState<Tab>('openings')
  const openings = entries.filter((entry): entry is Opening => entry.kind === 'opening')
  const defences = entries.filter((entry): entry is Defence => entry.kind === 'defence')

  return (
    <div className="browse">
      <div className="page-head">
        <div>
          <h1 className="page-head__title">{t('browse.title')}</h1>
          <p className="page-head__sub">{t('browse.sub')}</p>
        </div>
        <div className="segmented" role="group" aria-label={t('browse.what')}>
          <button type="button" aria-pressed={tab === 'openings'} onClick={() => setTab('openings')}>
            {t('browse.openings')}
          </button>
          <button type="button" aria-pressed={tab === 'defences'} onClick={() => setTab('defences')}>
            {t('browse.defences')}
          </button>
        </div>
      </div>

      {tab === 'openings' &&
        (['white', 'black'] as const).map((side) => (
          <section className="section" key={side}>
            <div className="section__head">
              <h2>{side === 'white' ? t('setup.asWhite') : t('setup.asBlack')}</h2>
              <span className="section__blurb">
                {side === 'white' ? t('browse.asWhiteBlurb') : t('browse.asBlackBlurb')}
              </span>
            </div>
            <div className="grid">
              {openings.filter((opening) => opening.side === side).map((opening) => (
                <EntryCard key={opening.id} entry={opening} store={store} onNavigate={onNavigate} />
              ))}
            </div>
          </section>
        ))}

      {tab === 'defences' &&
        FAMILY_KEYS.map((family) => (
          <section className="section" key={family.key}>
            <div className="section__head">
              <h2>{t(family.title)}</h2>
              <span className="section__blurb">{t(family.blurb)}</span>
            </div>
            <div className="grid">
              {defenceSystems(defences.filter((d) => d.family === family.key)).map((group) => (
                <div className="system" key={group.system}>
                  <div className="system__head">
                    <h3 className="system__name">{group.system}</h3>
                    <code className="system__moves">{group.answers[0].recognisedBy.moves}</code>
                  </div>
                  <p className="system__tell">{group.answers[0].recognisedBy.tell}</p>
                  <div className="system__answers">
                    {group.answers.map((defence) => (
                      <div className="system__answer" key={defence.id}>
                        {group.answers.length > 1 && defence.temperament && (
                          <span className="tag tag--pick">{defence.temperament.name}</span>
                        )}
                        <span className="system__answer-name">{defence.name}</span>
                        <span className="system__answer-actions">
                          <button
                            type="button"
                            className="btn btn--primary"
                            onClick={() => onNavigate({ name: 'train', entryId: defence.id })}
                          >
                            {t('common.drill')}
                          </button>
                          <button
                            type="button"
                            className="btn"
                            onClick={() => onNavigate({ name: 'study', entryId: defence.id })}
                          >
                            {t('common.study')}
                          </button>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
    </div>
  )
}
