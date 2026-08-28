import { useCallback, useEffect, useMemo, useState } from 'react'
import { ENTRIES, getEntry } from './data/entries'
import {
  activeProfile,
  addProfile,
  loadProgress,
  profileEntryIds,
  recordAttempt,
  recordPuzzleAttempt,
  recordRun,
  removeProfile,
  saveProgress,
  selectProfile,
  updateProfile,
  type ProfileInput,
  type ProgressStore,
} from './engine/progress'
import type { CompletedRun, LoggedAttempt } from './engine/session'
import { dueCount } from './engine/scheduler'
import { Browse } from './components/Browse'
import { Home } from './components/Home'
import { ProfileEditor } from './components/ProfileEditor'
import { Puzzles } from './components/Puzzles'
import { SetupConversation } from './components/SetupConversation'
import { Statistics } from './components/Statistics'
import { Study } from './components/Study'
import { Trainer } from './components/Trainer'
import './styles/index.css'

/**
 * Where the user is. A discriminated union rather than a router: there are
 * seven places to be and no URLs to keep in sync, so a real router would be
 * more moving parts than the app has states.
 */
export type Route =
  | { name: 'setup' }
  | { name: 'home' }
  | { name: 'browse' }
  | { name: 'train'; entryId: string }
  | { name: 'stats'; entryId?: string }
  | { name: 'puzzles' }
  | { name: 'study'; entryId?: string }
  | { name: 'profiles' }

const NAV: Array<{ name: Route['name']; label: string }> = [
  { name: 'home', label: 'Train' },
  { name: 'puzzles', label: 'Puzzles' },
  { name: 'stats', label: 'Statistics' },
  { name: 'study', label: 'Study' },
  { name: 'browse', label: 'Browse' },
]

export default function App() {
  // Read once on mount so a reload restores whatever the last session saved,
  // upgrading a version 1 record on the way. The first route is derived from
  // that same read - a second load could disagree with it.
  const [store, setStore] = useState<ProgressStore>(loadProgress)
  const [route, setRoute] = useState<Route>(() =>
    store.profiles.length === 0 ? { name: 'setup' } : { name: 'home' },
  )

  useEffect(() => {
    saveProgress(store)
  }, [store])

  const profile = activeProfile(store)
  const entryIds = useMemo(() => profileEntryIds(profile), [profile])
  const entries = useMemo(
    () => entryIds.map((id) => getEntry(id)).filter((entry) => entry !== undefined),
    [entryIds],
  )

  const due = useMemo(() => {
    const ids = entries.flatMap((entry) =>
      Object.values(store.moves)
        .filter((stat) => stat.entryId === entry.id)
        .map((stat) => stat.key),
    )
    return dueCount(store.cards, ids, new Date().toISOString())
  }, [entries, store.cards, store.moves])

  const handleAttempt = useCallback((entryId: string, attempt: LoggedAttempt) => {
    setStore((current) =>
      recordAttempt(current, {
        entryId,
        key: attempt.key,
        label: attempt.label,
        expected: attempt.expected,
        ply: attempt.ply,
        result: attempt.result,
        played: attempt.played,
      }),
    )
  }, [])

  const handleRunComplete = useCallback((entryId: string, run: CompletedRun) => {
    setStore((current) =>
      recordRun(current, {
        entryId,
        lineName: run.lineName,
        accuracy: run.accuracy,
        decisions: run.decisions,
        errors: run.errors,
        offRepertoire: run.offRepertoire,
      }),
    )
  }, [])

  const handlePuzzle = useCallback((puzzleId: string, solved: boolean, cardId?: string) => {
    setStore((current) => recordPuzzleAttempt(current, { puzzleId, solved, cardId }))
  }, [])

  const handleCreateProfile = useCallback((input: ProfileInput) => {
    setStore((current) => addProfile(current, input))
    setRoute({ name: 'home' })
  }, [])

  const handleSaveProfile = useCallback((id: string, input: ProfileInput) => {
    setStore((current) => updateProfile(current, id, input))
    setRoute({ name: 'home' })
  }, [])

  const trained = route.name === 'train' ? getEntry(route.entryId) : undefined

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-inner">
          <button
            type="button"
            className="app__brand"
            onClick={() => setRoute(store.profiles.length === 0 ? { name: 'setup' } : { name: 'home' })}
          >
            <span className="app__mark" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
            <span className="app__brand-text">
              <span className="app__title">Chess Trainer</span>
              <span className="app__tagline">
                {profile ? profile.name : 'Learn an opening by playing it, move by move.'}
              </span>
            </span>
          </button>

          {store.profiles.length > 0 && (
            <nav className="app__nav" aria-label="Sections">
              {NAV.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className="app__nav-item"
                  aria-current={route.name === item.name ? 'page' : undefined}
                  onClick={() => setRoute({ name: item.name } as Route)}
                >
                  {item.label}
                  {item.name === 'puzzles' && due > 0 && (
                    <span className="app__nav-badge">{due}</span>
                  )}
                </button>
              ))}
              <button
                type="button"
                className="app__nav-item"
                aria-current={route.name === 'profiles' ? 'page' : undefined}
                onClick={() => setRoute({ name: 'profiles' })}
              >
                Repertoire
              </button>
            </nav>
          )}
        </div>
      </header>

      <main className="app__main">
        {route.name === 'setup' && (
          <SetupConversation
            onDone={handleCreateProfile}
            onCancel={store.profiles.length > 0 ? () => setRoute({ name: 'home' }) : undefined}
          />
        )}

        {route.name === 'home' && (
          <Home
            store={store}
            profile={profile}
            entries={entries}
            onNavigate={setRoute}
          />
        )}

        {route.name === 'browse' && <Browse store={store} onNavigate={setRoute} />}

        {route.name === 'train' && trained && (
          <Trainer
            key={trained.id}
            entry={trained}
            store={store}
            onRunComplete={(run) => handleRunComplete(trained.id, run)}
            onAttempt={(attempt) => handleAttempt(trained.id, attempt)}
            onNavigate={setRoute}
          />
        )}

        {route.name === 'stats' && (
          <Statistics store={store} profile={profile} focusId={route.entryId} onNavigate={setRoute} />
        )}

        {route.name === 'puzzles' && (
          <Puzzles store={store} entries={entries} onAnswer={handlePuzzle} onNavigate={setRoute} />
        )}

        {route.name === 'study' && (
          <Study mine={entries} all={ENTRIES} focusId={route.entryId} onNavigate={setRoute} />
        )}

        {route.name === 'profiles' && (
          <ProfileEditor
            store={store}
            onSave={handleSaveProfile}
            onSelect={(id) => {
              setStore((current) => selectProfile(current, id))
              setRoute({ name: 'home' })
            }}
            onRemove={(id) => setStore((current) => removeProfile(current, id))}
            onNew={() => setRoute({ name: 'setup' })}
          />
        )}
      </main>

      <footer className="app__footer">
        Progress is stored in this browser only. Nothing is sent anywhere.
      </footer>
    </div>
  )
}
