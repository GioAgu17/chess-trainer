import { useState } from 'react'
import type { Defence, DefenceFamily, Opening } from '../data/types'
import type { ProfileInput, ProgressStore } from '../engine/progress'
import { useI18n, type UiKey } from '../i18n'
import { Empty } from './ui'

const FAMILY_KEYS: Array<{ key: DefenceFamily; title: UiKey }> = [
  { key: 'd4', title: 'browse.family.d4' },
  { key: 'e4', title: 'browse.family.e4' },
  { key: 'flank', title: 'browse.family.flank' },
]

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
  const { t, entries } = useI18n()
  const [editing, setEditing] = useState<string | null>(null)
  const nameOf = (id: string) => entries.find((entry) => entry.id === id)?.name ?? id

  return (
    <div className="profiles">
      <div className="page-head">
        <div>
          <h1 className="page-head__title">{t('profiles.title')}</h1>
          <p className="page-head__sub">{t('profiles.sub')}</p>
        </div>
        <button type="button" className="btn btn--primary" onClick={onNew}>
          {t('profiles.build')}
        </button>
      </div>

      {store.profiles.length === 0 ? (
        <Empty title={t('profiles.emptyTitle')}>
          <p>{t('profiles.emptyBody')}</p>
          <button type="button" className="btn btn--primary" onClick={onNew}>
            {t('profiles.emptyAction')}
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
                  {store.activeProfileId === profile.id && (
                    <span className="tag tag--pick">{t('common.active')}</span>
                  )}
                </div>
                <dl className="profile__rows">
                  <ProfileRow label={t('setup.asWhite')} id={profile.whiteOpeningId} name={nameOf} />
                  <ProfileRow label={t('setup.asBlack')} id={profile.blackOpeningId} name={nameOf} />
                  <div className="profile__row">
                    <dt>{t('profiles.defending')}</dt>
                    <dd>
                      {profile.defenceIds.length === 0
                        ? t('profiles.nothingYet')
                        : profile.defenceIds.map(nameOf).join(', ')}
                    </dd>
                  </div>
                </dl>
                <div className="profile__actions">
                  {store.activeProfileId !== profile.id && (
                    <button type="button" className="btn btn--primary" onClick={() => onSelect(profile.id)}>
                      {t('profiles.use')}
                    </button>
                  )}
                  <button type="button" className="btn" onClick={() => setEditing(profile.id)}>
                    {t('common.edit')}
                  </button>
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={() => onRemove(profile.id)}
                  >
                    {t('common.delete')}
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

function ProfileRow({
  label,
  id,
  name,
}: {
  label: string
  id: string | null
  name: (id: string) => string
}) {
  const { t } = useI18n()
  return (
    <div className="profile__row">
      <dt>{label}</dt>
      <dd>{id ? name(id) : <span className="dim">{t('common.skipped')}</span>}</dd>
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
  const { t, entries } = useI18n()
  const openings = entries.filter((entry): entry is Opening => entry.kind === 'opening')
  const allDefences = entries.filter((entry): entry is Defence => entry.kind === 'defence')
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
        <span className="field__label">{t('profiles.name')}</span>
        <input className="input" value={name} onChange={(event) => setName(event.target.value)} />
      </label>

      <div className="field-row">
        <label className="field">
          <span className="field__label">{t('setup.asWhite')}</span>
          <select className="input" value={white} onChange={(event) => setWhite(event.target.value)}>
            <option value="">{t('common.skipped')}</option>
            {openings.filter((opening) => opening.side === 'white').map((opening) => (
              <option key={opening.id} value={opening.id}>
                {opening.name}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span className="field__label">{t('setup.asBlack')}</span>
          <select className="input" value={black} onChange={(event) => setBlack(event.target.value)}>
            <option value="">{t('common.skipped')}</option>
            {openings.filter((opening) => opening.side === 'black').map((opening) => (
              <option key={opening.id} value={opening.id}>
                {opening.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="field">
        <legend className="field__label">{t('profiles.defending')}</legend>
        {FAMILY_KEYS.map((family) => (
          <div className="check-group" key={family.key}>
            <span className="check-group__title">{t(family.title)}</span>
            <div className="check-group__items">
              {allDefences.filter((defence) => defence.family === family.key).map((defence) => (
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
          {t('common.save')}
        </button>
        <button type="button" className="btn" onClick={onCancel}>
          {t('common.cancel')}
        </button>
      </div>
    </form>
  )
}
