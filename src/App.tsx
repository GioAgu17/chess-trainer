import { useCallback, useEffect, useState } from 'react'
import { getOpening } from './data/openings'
import {
  loadProgress,
  progressFor,
  recordMistake,
  recordRun,
  saveProgress,
  type ProgressStore,
} from './engine/progress'
import type { CompletedRun, LoggedMistake } from './engine/session'
import { OpeningPicker } from './components/OpeningPicker'
import { Trainer } from './components/Trainer'
import './styles/index.css'

export default function App() {
  // Read once on mount so a reload restores whatever the last session saved.
  const [store, setStore] = useState<ProgressStore>(() => loadProgress())
  const [openingId, setOpeningId] = useState<string | null>(null)

  useEffect(() => {
    saveProgress(store)
  }, [store])

  const opening = openingId ? getOpening(openingId) : undefined

  const handleRunComplete = useCallback(
    (run: CompletedRun) => {
      if (!openingId) return
      setStore((current) =>
        recordRun(current, {
          openingId,
          lineName: run.lineName,
          accuracy: run.accuracy,
        }),
      )
    },
    [openingId],
  )

  // Wrong moves are saved as they happen, not at the end of the run: a line
  // someone gives up on is exactly the line worth remembering.
  const handleMistake = useCallback(
    (mistake: LoggedMistake) => {
      if (!openingId) return
      setStore((current) => recordMistake(current, { openingId, ...mistake }))
    },
    [openingId],
  )

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-inner">
          <span className="app__mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <div>
            <div className="app__title">Chess Trainer</div>
            <div className="app__tagline">Learn an opening by playing it, move by move.</div>
          </div>
        </div>
      </header>

      <main className="app__main">
        {opening ? (
          <Trainer
            key={opening.id}
            opening={opening}
            progress={progressFor(store, opening.id)}
            onRunComplete={handleRunComplete}
            onMistake={handleMistake}
            onBack={() => setOpeningId(null)}
          />
        ) : (
          <OpeningPicker store={store} onSelect={setOpeningId} />
        )}
      </main>

      <footer className="app__footer">
        Progress is stored in this browser only. Nothing is sent anywhere.
      </footer>
    </div>
  )
}
