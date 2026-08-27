import type { Opening, Side } from '../data/types'
import { OPENINGS } from '../data/openings'
import { linesDrilled, totalLines, troubleSpots, type ProgressStore, progressFor } from '../engine/progress'

interface OpeningPickerProps {
  store: ProgressStore
  onSelect: (openingId: string) => void
}

const GROUPS: Array<{ side: Side; title: string; blurb: string }> = [
  {
    side: 'white',
    title: 'As White',
    blurb: 'Four ways to start the game, from the sharpest to the most systematic.',
  },
  {
    side: 'black',
    title: 'As Black',
    blurb: 'Four answers to 1.e4 and 1.d4, each with its own kind of counterplay.',
  },
]

export function OpeningPicker({ store, onSelect }: OpeningPickerProps) {
  return (
    <div className="picker">
      <div className="picker__intro">
        <h2>Pick an opening to drill</h2>
        <p>
          Eight openings chosen for club players around 1200 to 1800. The computer plays the
          other side from the repertoire; you play yours until you know it by heart.
        </p>
      </div>

      {GROUPS.map((group) => (
        <section className="picker__group" key={group.side}>
          <div className="picker__group-head">
            <h3>{group.title}</h3>
            <span className="picker__group-rule" />
          </div>
          <div className="picker__grid">
            {OPENINGS.filter((o) => o.side === group.side).map((opening) => (
              <OpeningCard
                key={opening.id}
                opening={opening}
                store={store}
                onSelect={onSelect}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function OpeningCard({
  opening,
  store,
  onSelect,
}: {
  opening: Opening
  store: ProgressStore
  onSelect: (openingId: string) => void
}) {
  const progress = progressFor(store, opening.id)
  const total = totalLines(opening)
  const drilled = linesDrilled(progress)
  const weakest = troubleSpots(progress, 1)[0]
  const percent = total === 0 ? 0 : Math.round((drilled / total) * 100)

  return (
    <button type="button" className="card" onClick={() => onSelect(opening.id)}>
      <div className="card__head">
        <span className="card__name">{opening.name}</span>
        <span className="tag">{opening.eco}</span>
      </div>
      <p className="card__summary">{opening.summary}</p>
      <div className="card__foot">
        <div className="card__stats">
          <span>
            <strong>{drilled}</strong> of {total} lines drilled
          </span>
          <span>
            {progress.runs === 0 ? 'Not started' : `${progress.runs} run${progress.runs === 1 ? '' : 's'}`}
          </span>
        </div>
        <div className="meter">
          <div
            className={`meter__fill${percent === 100 ? ' meter__fill--good' : ''}`}
            style={{ width: `${percent}%` }}
          />
        </div>
        {weakest && (
          <div className="card__weak">
            <span>Keeps missing</span>
            <code>{weakest.label}</code>
            <span style={{ color: 'var(--text-faint)' }}>({weakest.count}×)</span>
          </div>
        )}
      </div>
    </button>
  )
}
