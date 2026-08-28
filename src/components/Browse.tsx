import { useState } from 'react'
import type { Route } from '../App'
import { DEFENCES, FAMILIES, OPENINGS, defenceSystems } from '../data/entries'
import type { DefenceFamily } from '../data/types'
import type { ProgressStore } from '../engine/progress'
import { EntryCard } from './Home'

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
  const [tab, setTab] = useState<Tab>('openings')

  return (
    <div className="browse">
      <div className="page-head">
        <div>
          <h1 className="page-head__title">Browse everything</h1>
          <p className="page-head__sub">
            Eight openings and twelve prepared answers, all drillable whether they are in your
            repertoire or not.
          </p>
        </div>
        <div className="segmented" role="group" aria-label="What to show">
          <button type="button" aria-pressed={tab === 'openings'} onClick={() => setTab('openings')}>
            Openings
          </button>
          <button type="button" aria-pressed={tab === 'defences'} onClick={() => setTab('defences')}>
            Defences
          </button>
        </div>
      </div>

      {tab === 'openings' &&
        (['white', 'black'] as const).map((side) => (
          <section className="section" key={side}>
            <div className="section__head">
              <h2>{side === 'white' ? 'As White' : 'As Black'}</h2>
              <span className="section__blurb">
                {side === 'white'
                  ? 'Four ways to start the game, from the sharpest to the most systematic.'
                  : 'Four answers to 1.e4 and 1.d4, each with its own kind of counterplay.'}
              </span>
            </div>
            <div className="grid">
              {OPENINGS.filter((opening) => opening.side === side).map((opening) => (
                <EntryCard key={opening.id} entry={opening} store={store} onNavigate={onNavigate} />
              ))}
            </div>
          </section>
        ))}

      {tab === 'defences' &&
        FAMILIES.map((family) => (
          <section className="section" key={family.key}>
            <div className="section__head">
              <h2>{family.title}</h2>
              <span className="section__blurb">{family.blurb}</span>
            </div>
            <div className="grid">
              {defencesInFamily(family.key).map((group) => (
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
                            Drill
                          </button>
                          <button
                            type="button"
                            className="btn"
                            onClick={() => onNavigate({ name: 'study', entryId: defence.id })}
                          >
                            Study
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

function defencesInFamily(family: DefenceFamily) {
  return defenceSystems(DEFENCES.filter((defence) => defence.family === family))
}
