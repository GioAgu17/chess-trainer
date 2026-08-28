import type { Defence, DefenceFamily, Side } from '../data/types'
import { DEFENCES, OPENINGS, defenceSystems, getEntry } from '../data/entries'
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

/** A one-line pitch per opening, in the language of how it feels to play. */
export const OPENING_PITCH: Record<string, { tag: string; why: string }> = {
  'italian-game': {
    tag: 'Slow and safe',
    why: 'Low memorisation and a plan you can follow every game: build up quietly, then break in the centre when you are ready.',
  },
  'ruy-lopez': {
    tag: 'The classical choice',
    why: 'The most respected opening in chess. More to learn than the Italian, but every idea you pick up here works everywhere else.',
  },
  'queens-gambit-declined': {
    tag: 'Positional squeeze',
    why: 'You get a small, permanent edge and a clear plan on the queenside. Very few sharp lines to memorise, and almost nothing can go wrong early.',
  },
  'london-system': {
    tag: 'One set-up, every game',
    why: 'The same six moves against almost anything. The least memorisation of any opening here, at the cost of the smallest edge.',
  },
  'sicilian-najdorf': {
    tag: 'Sharp and double-edged',
    why: 'You will get attacking positions and you will be attacked. The most theory of anything here, and the most winning chances.',
  },
  'french-defence': {
    tag: 'Solid, with a plan',
    why: 'A closed centre and a clear plan every game: hit d4 with ...c5 and pile up on it. You will get very few surprises.',
  },
  'caro-kann': {
    tag: 'Solid and low-risk',
    why: 'A sound structure with no early weaknesses and a good bishop outside the pawn chain. Hard to lose quickly with it.',
  },
  'kings-indian-defence': {
    tag: 'Attacking, on purpose',
    why: 'You give up space and then throw everything at the enemy king. Sharp, one-sided games where knowing the plan matters more than knowing the moves.',
  },
}

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
export function answersFor(system: string): Defence[] {
  return DEFENCES.filter((defence) => defence.system === system)
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
export function suggestName(state: SetupState): string {
  const parts = [state.whiteOpeningId, state.blackOpeningId]
    .map((id) => (id ? getEntry(id) : undefined))
    .filter((entry) => entry !== undefined)
    .map((entry) => shortName(entry.name))
  if (parts.length === 2) return `${parts[0]} and ${parts[1]}`
  if (parts.length === 1) return `${parts[0]} repertoire`
  const first = state.defenceIds[0] ? getEntry(state.defenceIds[0]) : undefined
  if (first) return `Answers to ${shortName(first.name)}`
  return 'My repertoire'
}

/** "Italian Game (Giuoco Piano)" becomes "Italian Game". */
function shortName(name: string): string {
  return name.replace(/\s*\(.*\)\s*$/, '').split(':')[0].trim()
}

export function toProfileInput(state: SetupState): ProfileInput {
  return {
    name: state.name.trim() || suggestName(state),
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

export interface SetupOption {
  /** Value handed back with the answer. */
  value: string
  label: string
  /** Two or three words on the character of the choice. */
  tag?: string
  /** One sentence on why someone would pick it. */
  why: string
  /** Marks the "recommend me one" answer, which is a real option here. */
  recommended?: boolean
}

export interface SetupQuestion {
  step: SetupStep
  /** What the coach says, in the second person. */
  ask: string
  /** An optional aside under the question. */
  note?: string
  options: SetupOption[]
  /** Set on the step that asks for free text rather than a choice. */
  freeText?: { placeholder: string; suggestion: string }
}

const SKIP: SetupOption = {
  value: '',
  label: 'Skip this for now',
  why: 'You can add one later - the profile is editable and nothing here is final.',
}

function openingOptions(side: Side): SetupOption[] {
  return OPENINGS.filter((opening) => opening.side === side).map((opening) => ({
    value: opening.id,
    label: opening.name,
    tag: OPENING_PITCH[opening.id]?.tag,
    why: OPENING_PITCH[opening.id]?.why ?? opening.summary,
    recommended: RECOMMENDED[side] === opening.id,
  }))
}

const FAMILY_QUESTIONS: Record<DefenceFamily, { label: string; why: string }> = {
  d4: {
    label: 'Someone who plays 1.d4',
    why: 'The Catalan, the London, the Trompowsky and the queen\'s pawn gambits - the slow systems that grind you down if you have no plan.',
  },
  e4: {
    label: 'Someone who plays 1.e4',
    why: 'The King\'s Gambit, the Scotch, the Vienna and the Danish - open games and gambits where one wrong move early is fatal.',
  },
  flank: {
    label: 'Someone who avoids the centre',
    why: 'The English and the Reti. Nothing to attack, nothing obvious to do, and the game is somehow worse by move twenty.',
  },
}

export function currentQuestion(state: SetupState): SetupQuestion {
  switch (state.step) {
    case 'white':
      return {
        step: 'white',
        ask: 'What do you want to play as White?',
        note: 'Pick the one that sounds like the game you enjoy. There is no wrong answer here.',
        options: [...openingOptions('white'), SKIP],
      }
    case 'black':
      return {
        step: 'black',
        ask: 'And as Black?',
        note: 'Against 1.e4 and 1.d4 both. Solid and sharp are equally respectable choices.',
        options: [...openingOptions('black'), SKIP],
      }
    case 'defence-family':
      return {
        step: 'defence-family',
        ask:
          state.defenceIds.length === 0
            ? 'Now the useful part: who keeps beating you?'
            : 'Who else gives you trouble?',
        note: 'This is the half most repertoires skip. Knowing what to do against the opening you keep facing is worth more than another line of your own.',
        options: (['d4', 'e4', 'flank'] as DefenceFamily[]).map((family) => ({
          value: family,
          label: FAMILY_QUESTIONS[family].label,
          why: FAMILY_QUESTIONS[family].why,
        })),
      }
    case 'defence-system': {
      const family = state.pendingFamily ?? 'd4'
      const groups = defenceSystems().filter((group) => group.family === family)
      return {
        step: 'defence-system',
        ask: 'Which one, specifically?',
        note: 'Each of these comes with the plan behind it and the traps that actually catch people.',
        options: groups.map((group) => ({
          value: group.system,
          label: group.system,
          tag: group.answers.length > 1 ? 'two ways to meet it' : undefined,
          why: group.answers[0].recognisedBy.tell,
          recommended: RECOMMENDED_DEFENCE[family] === group.system,
        })),
      }
    }
    case 'temperament': {
      const answers = answersFor(state.pendingSystem ?? '')
      return {
        step: 'temperament',
        ask: `There are two good ways to meet the ${state.pendingSystem}. Which suits you?`,
        note: 'Both are sound. This is a question about temperament, not about theory.',
        options: answers.map((defence) => ({
          value: defence.id,
          label: defence.temperament?.name ?? defence.name,
          tag: defence.temperament?.name,
          why: defence.temperament?.blurb ?? defence.summary,
          recommended: defence.temperament?.key === 'open',
        })),
      }
    }
    case 'more-defences':
      return {
        step: 'more-defences',
        ask: 'Add another opening to defend against?',
        note:
          state.defenceIds.length === 1
            ? 'One is plenty to start with. You can always come back.'
            : `${state.defenceIds.length} so far.`,
        options: [
          { value: 'yes', label: 'Yes, there is another one', why: 'Pick a second system to prepare against.' },
          {
            value: 'no',
            label: 'No, that is enough for now',
            why: 'Start training. You can add more to this profile at any time.',
            recommended: true,
          },
        ],
      }
    case 'name':
      return {
        step: 'name',
        ask: 'Last thing - what should I call this repertoire?',
        note: 'You can keep more than one, so a name that says what it is helps.',
        options: [],
        freeText: { placeholder: suggestName(state), suggestion: suggestName(state) },
      }
    case 'review':
      return {
        step: 'review',
        ask: 'Here is your repertoire.',
        note: 'Everything here is editable later, and nothing is deleted when you change it.',
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
