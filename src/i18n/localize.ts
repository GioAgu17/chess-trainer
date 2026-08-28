import type {
  Defence,
  MoveNode,
  Opening,
  RepertoireEntry,
  StudyGuide,
} from '../data/types'
import { normalizeSan, pathKey } from '../engine/tree'
import type { ContentDictionary } from './keys'
import { SOURCE_LOCALE, type Locale } from './locales'

/**
 * Translate the data, not the components.
 *
 * Every component takes a `RepertoireEntry` or a `StudyGuide` and renders its
 * strings. Rather than teaching each of them about languages, the entry itself
 * is rebuilt in the chosen language once and handed down. Components stay
 * language-agnostic, and there is exactly one place where a missing
 * translation falls back to the English source.
 */

const translator = (dictionary: ContentDictionary) => (key: string, source: string) =>
  dictionary[key] ?? source

function localizeNodes(
  entryId: string,
  nodes: MoveNode[],
  prefix: MoveNode[],
  t: (key: string, source: string) => string,
): MoveNode[] {
  return nodes.map((node) => {
    const path = [...prefix, node]
    const at = `${entryId}.n.${pathKey(path)}`
    return {
      ...node,
      label: node.label === undefined ? undefined : t(`${at}.label`, node.label),
      idea: node.idea === undefined ? undefined : t(`${at}.idea`, node.idea),
      hint: node.hint === undefined ? undefined : t(`${at}.hint`, node.hint),
      mistakes: node.mistakes?.map((mistake) => ({
        ...mistake,
        why: t(`${at}.m.${normalizeSan(mistake.san)}`, mistake.why),
      })),
      end: node.end && {
        name: t(`${at}.end.name`, node.end.name),
        plans: node.end.plans.map((plan, i) => t(`${at}.end.p.${i}`, plan)),
      },
      children: node.children && localizeNodes(entryId, node.children, path, t),
    }
  })
}

export function localizeEntry(
  entry: RepertoireEntry,
  dictionary: ContentDictionary,
): RepertoireEntry {
  const t = translator(dictionary)
  const base = {
    ...entry,
    name: t(`${entry.id}.name`, entry.name),
    summary: t(`${entry.id}.summary`, entry.summary),
    traps: entry.traps?.map((trap) => ({
      ...trap,
      name: t(`${entry.id}.trap.${trap.id}.name`, trap.name),
      point: t(`${entry.id}.trap.${trap.id}.point`, trap.point),
    })),
    tree: localizeNodes(entry.id, entry.tree, [], t),
  }

  if (base.kind === 'opening') return base as Opening

  const defence = entry as Defence
  return {
    ...(base as Defence),
    system: t(`${entry.id}.system`, defence.system),
    recognisedBy: {
      // The moves that identify a system are notation, not prose.
      moves: defence.recognisedBy.moves,
      tell: t(`${entry.id}.tell`, defence.recognisedBy.tell),
    },
    theirPlan: t(`${entry.id}.theirPlan`, defence.theirPlan),
    recipe: defence.recipe.map((step, i) => t(`${entry.id}.recipe.${i}`, step)),
    temperament: defence.temperament && {
      key: defence.temperament.key,
      name: t(`${entry.id}.temperament.name`, defence.temperament.name),
      blurb: t(`${entry.id}.temperament.blurb`, defence.temperament.blurb),
    },
  }
}

export function localizeStudy(
  guide: StudyGuide,
  dictionary: ContentDictionary,
): StudyGuide {
  const t = translator(dictionary)
  const at = `study.${guide.id}`
  return {
    id: guide.id,
    bigIdea: t(`${at}.bigIdea`, guide.bigIdea),
    middlegameFeel: t(`${at}.feel`, guide.middlegameFeel),
    structures: guide.structures.map((structure, i) => ({
      name: t(`${at}.s.${i}.name`, structure.name),
      shape: t(`${at}.s.${i}.shape`, structure.shape),
      yourPlay: t(`${at}.s.${i}.you`, structure.yourPlay),
      theirPlay: t(`${at}.s.${i}.them`, structure.theirPlay),
    })),
    plans: guide.plans.map((plan, i) => ({
      title: t(`${at}.p.${i}.title`, plan.title),
      detail: t(`${at}.p.${i}.detail`, plan.detail),
    })),
    keySquares: guide.keySquares.map((square, i) => ({
      square: square.square,
      why: t(`${at}.k.${i}.why`, square.why),
    })),
    breaks: guide.breaks.map((item, i) => ({
      move: item.move,
      when: t(`${at}.b.${i}.when`, item.when),
    })),
    pitfalls: guide.pitfalls.map((pitfall, i) => ({
      title: t(`${at}.f.${i}.title`, pitfall.title),
      detail: t(`${at}.f.${i}.detail`, pitfall.detail),
    })),
  }
}

/** Rebuilding twenty trees is not free, so each language is built once. */
const entryCache = new Map<string, RepertoireEntry[]>()
const studyCache = new Map<string, StudyGuide[]>()

export function localizeEntries(
  entries: RepertoireEntry[],
  locale: Locale,
  dictionary: ContentDictionary,
): RepertoireEntry[] {
  if (locale === SOURCE_LOCALE) return entries
  const cached = entryCache.get(locale)
  if (cached) return cached
  const localized = entries.map((entry) => localizeEntry(entry, dictionary))
  entryCache.set(locale, localized)
  return localized
}

export function localizeGuides(
  guides: StudyGuide[],
  locale: Locale,
  dictionary: ContentDictionary,
): StudyGuide[] {
  if (locale === SOURCE_LOCALE) return guides
  const cached = studyCache.get(locale)
  if (cached) return cached
  const localized = guides.map((guide) => localizeStudy(guide, dictionary))
  studyCache.set(locale, localized)
  return localized
}
