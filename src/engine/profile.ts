import type { Defence, DefenceFamily, RepertoireEntry, Side } from '../data/types'
import { DEFENCES, OPENINGS, defenceSystems } from '../data/entries'
import type { ProfileInput } from './progress'

/**
 * The setup conversation, as data.
 *
 * The whole thing is a small state machine over plain values so that the
 * wording, the pacing and the going-back can be tested without a browser. The
 * component's only job is to render whatever `currentQuestion` returns.
 */

export type SetupStep =
  | 'white'
  | 'black'
  | 'defence-family'
  | 'defence-system'
  | 'temperament'
  | 'more-defences'
  | 'name'
  | 'review'

export interface SetupState {
  step: SetupStep
  whiteOpeningId: string | null
  blackOpeningId: string | null
  defenceIds: string[]
  /** Set while the user is part way through choosing one defence. */
  pendingFamily: DefenceFamily | null
  pendingSystem: string | null
  name: string
}

export interface SetupSession {
  current: SetupState
  /** Snapshots, so "go back" restores the answer as well as the question. */
  past: SetupState[]
}

/**
 * A one-line pitch per opening, in the language of how it feels to play.
 *
 * The text lives in the interface catalogues under `pitch.<id>.tag` and
 * `pitch.<id>.why`; this list is only here so the tests and the question
 * builder know which openings have one.
 */
export const PITCHED = OPENINGS.map((opening) => opening.id)

/** The one to suggest when the user says "recommend me one". */
export const RECOMMENDED: Record<Side, string> = {
  white: 'italian-game',
  black: 'caro-kann',
}

/** The defence system to suggest per family, and why that one. */
export const RECOMMENDED_DEFENCE: Record<DefenceFamily, string> = {
  d4: 'Catalan',
  e4: 'Scotch',
  flank: 'English',
}

export function startSetup(seed?: Partial<SetupState>): SetupSession {
  return {
    current: {
      step: 'white',
      whiteOpeningId: null,
      blackOpeningId: null,
      defenceIds: [],
      pendingFamily: null,
      pendingSystem: null,
      name: '',
      ...seed,
    },
    past: [],
  }
}

export function canGoBack(session: SetupSession): boolean {
  return session.past.length > 0
}

export function back(session: SetupSession): SetupSession {
  if (session.past.length === 0) return session
  const past = [...session.past]
  const current = past.pop() as SetupState
  return { current, past }
}

function advance(session: SetupSession, next: SetupState): SetupSession {
  return { current: next, past: [...session.past, session.current] }
}

export type SetupAnswer =
  | { kind: 'white'; openingId: string | null }
  | { kind: 'black'; openingId: string | null }
  | { kind: 'family'; family: DefenceFamily }
  | { kind: 'system'; system: string }
  | { kind: 'temperament'; defenceId: string }
  | { kind: 'more'; more: boolean }
  | { kind: 'name'; name: string }

/** Answers for one system, in list order. Two means a temperament choice. */
export function answersFor(system: string, entries: RepertoireEntry[] = DEFENCES): Defence[] {
  return entries.filter(
    (entry): entry is Defence => entry.kind === 'defence' && entry.system === system,
  )
}

/**
 * Apply one answer.
 *
 * Choosing a system with a single answer skips the temperament question
 * entirely, so the conversation never asks something with only one option.
 */
export function answer(session: SetupSession, given: SetupAnswer): SetupSession {
  const state = session.current
  switch (given.kind) {
    case 'white':
      return advance(session, { ...state, whiteOpeningId: given.openingId, step: 'black' })
    case 'black':
      return advance(session, {
        ...state,
        blackOpeningId: given.openingId,
        step: 'defence-family',
      })
    case 'family':
      return advance(session, {
        ...state,
        pendingFamily: given.family,
        pendingSystem: null,
        step: 'defence-system',
      })
    case 'system': {
      const answers = answersFor(given.system)
      if (answers.length === 1) {
        return advance(session, {
          ...state,
          pendingSystem: null,
          pendingFamily: null,
          defenceIds: addOnce(state.defenceIds, answers[0].id),
          step: 'more-defences',
        })
      }
      return advance(session, { ...state, pendingSystem: given.system, step: 'temperament' })
    }
    case 'temperament':
      return advance(session, {
        ...state,
        pendingSystem: null,
        pendingFamily: null,
        defenceIds: addOnce(state.defenceIds, given.defenceId),
        step: 'more-defences',
      })
    case 'more':
      return advance(session, {
        ...state,
        step: given.more ? 'defence-family' : 'name',
        name: given.more ? state.name : state.name || suggestName(state),
      })
    case 'name':
      return advance(session, { ...state, name: given.name.trim(), step: 'review' })
  }
}

function addOnce(ids: string[], id: string): string[] {
  return ids.includes(id) ? ids : [...ids, id]
}

/** A name that says something about the repertoire rather than "Profile 1". */
export function suggestName(
  state: SetupState,
  entries: RepertoireEntry[] = [...OPENINGS, ...DEFENCES],
  words: { and: string; repertoire: string; answersTo: string; mine: string } = {
    and: 'and',
    repertoire: 'repertoire',
    answersTo: 'Answers to',
    mine: 'My repertoire',
  },
): string {
  const parts = [state.whiteOpeningId, state.blackOpeningId]
    .map((id) => (id ? findEntry(id, entries) : undefined))
    .filter((entry) => entry !== undefined)
    .map((entry) => shortName(entry.name))
  if (parts.length === 2) return `${parts[0]} ${words.and} ${parts[1]}`
  if (parts.length === 1) return `${parts[0]} ${words.repertoire}`
  const first = state.defenceIds[0] ? findEntry(state.defenceIds[0], entries) : undefined
  if (first) return `${words.answersTo} ${shortName(first.name)}`
  return words.mine
}

/** "Italian Game (Giuoco Piano)" becomes "Italian Game". */
function shortName(name: string): string {
  return name.replace(/\s*\(.*\)\s*$/, '').split(':')[0].trim()
}

/** Look an entry up in whichever language list the caller is using. */
function findEntry(id: string, entries: RepertoireEntry[]): RepertoireEntry | undefined {
  return entries.find((entry) => entry.id === id)
}

export function toProfileInput(
  state: SetupState,
  fallbackName = suggestName(state),
): ProfileInput {
  return {
    name: state.name.trim() || fallbackName,
    whiteOpeningId: state.whiteOpeningId,
    blackOpeningId: state.blackOpeningId,
    defenceIds: [...state.defenceIds],
  }
}

/** True when there is enough to train: at least one opening or one defence. */
export function isComplete(state: SetupState): boolean {
  return Boolean(state.whiteOpeningId || state.blackOpeningId || state.defenceIds.length > 0)
}

/* ------------------------------------------------------------- questions */

/**
 * An option, as keys rather than sentences.
 *
 * The conversation is the first thing anyone sees, so its wording lives in the
 * interface catalogues where a translator can work on it as prose. Everything
 * here is either a catalogue key or a value taken from the repertoire, which
 * the caller has already localised.
 */
export interface SetupOption {
  /** Value handed back with the answer. */
  value: string
  /** Catalogue key, or a literal when the label comes from the repertoire. */
  labelKey?: string
  label?: string
  /** Catalogue key for two or three words on the character of the choice. */
  tagKey?: string
  /** Catalogue key, or a literal, for why someone would pick it. */
  whyKey?: string
  why?: string
  /** Marks the "recommend me one" answer, which is a real option here. */
  recommended?: boolean
}

export interface SetupQuestion {
  step: SetupStep
  /** Catalogue key for what the coach says. */
  askKey: string
  /** Values for the question, when it names something. */
  askVars?: Record<string, string>
  /** Catalogue key for the aside under the question. */
  noteKey?: string
  noteVars?: Record<string, string>
  options: SetupOption[]
  /** Set on the step that asks for free text rather than a choice. */
  freeText?: { suggestion: string }
}

const SKIP: SetupOption = {
  value: '',
  labelKey: 'setup.skip',
  whyKey: 'setup.skipWhy',
}

function openingOptions(entries: RepertoireEntry[], side: Side): SetupOption[] {
  return entries
    .filter((entry) => entry.kind === 'opening' && entry.side === side)
    .map((opening) => ({
      value: opening.id,
      label: opening.name,
      tagKey: `pitch.${opening.id}.tag`,
      whyKey: `pitch.${opening.id}.why`,
      recommended: RECOMMENDED[side] === opening.id,
    }))
}

const FAMILIES_IN_ORDER: DefenceFamily[] = ['d4', 'e4', 'flank']

/**
 * The current question.
 *
 * `entries` is the repertoire in the reader's language, so the names of
 * openings and systems come out translated without this file knowing anything
 * about languages.
 */
export function currentQuestion(
  state: SetupState,
  entries: RepertoireEntry[] = [...OPENINGS, ...DEFENCES],
): SetupQuestion {
  switch (state.step) {
    case 'white':
      return {
        step: 'white',
        askKey: 'setup.white.ask',
        noteKey: 'setup.white.note',
        options: [...openingOptions(entries, 'white'), SKIP],
      }
    case 'black':
      return {
        step: 'black',
        askKey: 'setup.black.ask',
        noteKey: 'setup.black.note',
        options: [...openingOptions(entries, 'black'), SKIP],
      }
    case 'defence-family':
      return {
        step: 'defence-family',
        askKey:
          state.defenceIds.length === 0 ? 'setup.family.askFirst' : 'setup.family.askMore',
        noteKey: 'setup.family.note',
        options: FAMILIES_IN_ORDER.map((family) => ({
          value: family,
          labelKey: `setup.family.${family}`,
          whyKey: `setup.family.${family}why`,
        })),
      }
    case 'defence-system': {
      const family = state.pendingFamily ?? 'd4'
      const defences = entries.filter(
        (entry): entry is Defence => entry.kind === 'defence' && entry.family === family,
      )
      return {
        step: 'defence-system',
        askKey: 'setup.system.ask',
        noteKey: 'setup.system.note',
        options: defenceSystems(defences).map((group) => ({
          value: group.system,
          label: group.system,
          tagKey: group.answers.length > 1 ? 'setup.system.twoWays' : undefined,
          why: group.answers[0].recognisedBy.tell,
          recommended: RECOMMENDED_DEFENCE[family] === group.system,
        })),
      }
    }
    case 'temperament': {
      const answers = answersFor(state.pendingSystem ?? '', entries)
      return {
        step: 'temperament',
        askKey: 'setup.temperament.ask',
        askVars: { system: state.pendingSystem ?? '' },
        noteKey: 'setup.temperament.note',
        options: answers.map((defence) => ({
          value: defence.id,
          label: defence.temperament?.name ?? defence.name,
          why: defence.temperament?.blurb ?? defence.summary,
          recommended: defence.temperament?.key === 'open',
        })),
      }
    }
    case 'more-defences':
      return {
        step: 'more-defences',
        askKey: 'setup.more.ask',
        noteKey: state.defenceIds.length === 1 ? 'setup.more.noteOne' : 'setup.more.noteMany',
        noteVars: { count: String(state.defenceIds.length) },
        options: [
          { value: 'yes', labelKey: 'setup.more.yes', whyKey: 'setup.more.yesWhy' },
          {
            value: 'no',
            labelKey: 'setup.more.no',
            whyKey: 'setup.more.noWhy',
            recommended: true,
          },
        ],
      }
    case 'name':
      return {
        step: 'name',
        askKey: 'setup.name.ask',
        noteKey: 'setup.name.note',
        options: [],
        freeText: { suggestion: suggestName(state) },
      }
    case 'review':
      return {
        step: 'review',
        askKey: 'setup.review.ask',
        noteKey: 'setup.review.note',
        options: [],
      }
  }
}

/** The recommended answer for a question, if it offers one. */
export function recommendationFor(question: SetupQuestion): SetupOption | undefined {
  return question.options.find((option) => option.recommended)
}

/** The steps, in order, for the progress indicator. */
export const STEP_ORDER: SetupStep[] = [
  'white',
  'black',
  'defence-family',
  'defence-system',
  'temperament',
  'more-defences',
  'name',
  'review',
]

/**
 * Roughly how far through the conversation the user is.
 *
 * The defence loop can repeat, so this is a reassurance rather than a promise -
 * it never goes backwards while answering, which is the thing that matters.
 */
export function stepProgress(state: SetupState): { index: number; total: number } {
  const known: SetupStep[] = ['white', 'black', 'defence-family', 'name', 'review']
  const map: Record<SetupStep, number> = {
    white: 0,
    black: 1,
    'defence-family': 2,
    'defence-system': 2,
    temperament: 2,
    'more-defences': 3,
    name: 3,
    review: 4,
  }
  return { index: map[state.step], total: known.length - 1 }
}
