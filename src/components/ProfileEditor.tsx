import { useState } from 'react'
import { DEFENCES, FAMILIES, OPENINGS, getEntry } from '../data/entries'
import type { ProfileInput, ProgressStore } from '../engine/progress'
import { Empty } from './ui'

interface ProfileEditorProps {
  store: ProgressStore
  onSave: (id: string, input: ProfileInput) => void
  onSelect: (id: string) => void
  onRemove: (id: string) => void
  onNew: () => void
}

/**
 * Managing repertoires: switch between them, edit one in place, or start the
 * conversation again for a new one. Editing is a form rather than a
 * conversation on purpose - the conversation is for deciding, this is for
 * changing your mind about one thing.
 */
export function ProfileEditor({ store, onSave, onSelect, onRemove, onNew }: ProfileEditorProps) {
  const [editing, setEditing] = useState<string | null>(null)

  return (
    <div className="profiles">
      <div className="page-head">
        <div>
          <h1 className="page-head__title">Your repertoires</h1>
          <p className="page-head__sub">
            Keep as many as you like. Switching does not delete anything you have drilled.
          </p>
        </div>
        <button type="button" className="btn btn--primary" onClick={onNew}>
          Build another
        </button>
      </div>

      {store.profiles.length === 0 ? (
        <Empty title="No repertoires yet">
          <p>The setup conversation takes about a minute.</p>
          <button type="button" className="btn btn--primary" onClick={onNew}>
            Start it
          </button>
        </Empty>
      ) : (
        <div className="profile-list">
          {store.profiles.map((profile) =>
            editing === profile.id ? (
              <ProfileForm
                key={profile.id}
                initial={profile}
                onCancel={() => setEditing(null)}
                onSave={(input) => {
                  onSave(profile.id, input)
                  setEditing(null)
                }}
              />
            ) : (
              <article
                className={`profile${store.activeProfileId === profile.id ? ' profile--active' : ''}`}
                key={profile.id}
              >
                <div className="profile__head">
                  <h2 className="profile__name">{profile.name}</h2>
                  {store.activeProfileId === profile.id && <span className="tag tag--pick">active</span>}
                </div>
                <dl className="profile__rows">
                  <ProfileRow label="As White" id={profile.whiteOpeningId} />
                  <ProfileRow label="As Black" id={profile.blackOpeningId} />
                  <div className="profile__row">
                    <dt>Defending against</dt>
                    <dd>
                      {profile.defenceIds.length === 0
                        ? 'Nothing yet'
                        : profile.defenceIds.map((id) => getEntry(id)?.name ?? id).join(', ')}
                    </dd>
                  </div>
                </dl>
                <div className="profile__actions">
                  {store.activeProfileId !== profile.id && (
                    <button type="button" className="btn btn--primary" onClick={() => onSelect(profile.id)}>
                      Use this one
                    </button>
                  )}
                  <button type="button" className="btn" onClick={() => setEditing(profile.id)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={() => onRemove(profile.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ),
          )}
        </div>
      )}
    </div>
  )
}

function ProfileRow({ label, id }: { label: string; id: string | null }) {
  return (
    <div className="profile__row">
      <dt>{label}</dt>
      <dd>{id ? (getEntry(id)?.name ?? id) : <span className="dim">Skipped</span>}</dd>
    </div>
  )
}

function ProfileForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: ProfileInput & { id: string }
  onSave: (input: ProfileInput) => void
  onCancel: () => void
}) {
  const [name, setName] = useState(initial.name)
  const [white, setWhite] = useState(initial.whiteOpeningId ?? '')
  const [black, setBlack] = useState(initial.blackOpeningId ?? '')
  const [defences, setDefences] = useState<string[]>(initial.defenceIds)

  const toggle = (id: string) =>
    setDefences((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )

  return (
    <form
      className="profile profile--editing"
      onSubmit={(event) => {
        event.preventDefault()
        onSave({
          name: name.trim() || initial.name,
          whiteOpeningId: white || null,
          blackOpeningId: black || null,
          defenceIds: defences,
        })
      }}
    >
      <label className="field">
        <span className="field__label">Name</span>
        <input className="input" value={name} onChange={(event) => setName(event.target.value)} />
      </label>

      <div className="field-row">
        <label className="field">
          <span className="field__label">As White</span>
          <select className="input" value={white} onChange={(event) => setWhite(event.target.value)}>
            <option value="">Skipped</option>
            {OPENINGS.filter((opening) => opening.side === 'white').map((opening) => (
              <option key={opening.id} value={opening.id}>
                {opening.name}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span className="field__label">As Black</span>
          <select className="input" value={black} onChange={(event) => setBlack(event.target.value)}>
            <option value="">Skipped</option>
            {OPENINGS.filter((opening) => opening.side === 'black').map((opening) => (
              <option key={opening.id} value={opening.id}>
                {opening.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="field">
        <legend className="field__label">Defending against</legend>
        {FAMILIES.map((family) => (
          <div className="check-group" key={family.key}>
            <span className="check-group__title">{family.title}</span>
            <div className="check-group__items">
              {DEFENCES.filter((defence) => defence.family === family.key).map((defence) => (
                <label className="check" key={defence.id}>
                  <input
                    type="checkbox"
                    checked={defences.includes(defence.id)}
                    onChange={() => toggle(defence.id)}
                  />
                  <span>{defence.name}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </fieldset>

      <div className="profile__actions">
        <button type="submit" className="btn btn--primary">
          Save
        </button>
        <button type="button" className="btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}
