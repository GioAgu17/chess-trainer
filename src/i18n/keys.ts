import type { MoveNode, RepertoireEntry, StudyGuide } from '../data/types'
import { normalizeSan, pathKey } from '../engine/tree'

/**
 * The translation key for every piece of prose in the repertoire.
 *
 * Keys are derived from where a string lives rather than stored, so they
 * cannot drift out of step with the data: a line that is rewritten changes its
 * keys, and the parity test then reports the Italian for the old line as an
 * orphan and the new line as missing. That is exactly the signal you want.
 *
 * Notation is never keyed. Move text, ECO codes, square names and the moves
 * that identify a system are the same in every language.
 */
export interface ContentString {
  key: string
  /** The English source, used as the fallback and by the parity test. */
  source: string
}

function walkNodes(
  entryId: string,
  nodes: MoveNode[],
  prefix: MoveNode[],
  out: ContentString[],
) {
  for (const node of nodes) {
    const path = [...prefix, node]
    const at = `${entryId}.n.${pathKey(path)}`
    if (node.label) out.push({ key: `${at}.label`, source: node.label })
    if (node.idea) out.push({ key: `${at}.idea`, source: node.idea })
    if (node.hint) out.push({ key: `${at}.hint`, source: node.hint })
    for (const mistake of node.mistakes ?? []) {
      out.push({ key: `${at}.m.${normalizeSan(mistake.san)}`, source: mistake.why })
    }
    if (node.end) {
      out.push({ key: `${at}.end.name`, source: node.end.name })
      node.end.plans.forEach((plan, i) => {
        out.push({ key: `${at}.end.p.${i}`, source: plan })
      })
    }
    walkNodes(entryId, node.children ?? [], path, out)
  }
}

/** Every translatable string in one opening or defence. */
export function entryStrings(entry: RepertoireEntry): ContentString[] {
  const out: ContentString[] = [
    { key: `${entry.id}.name`, source: entry.name },
    { key: `${entry.id}.summary`, source: entry.summary },
  ]
  if (entry.kind === 'defence') {
    out.push({ key: `${entry.id}.system`, source: entry.system })
    out.push({ key: `${entry.id}.tell`, source: entry.recognisedBy.tell })
    out.push({ key: `${entry.id}.theirPlan`, source: entry.theirPlan })
    entry.recipe.forEach((step, i) => out.push({ key: `${entry.id}.recipe.${i}`, source: step }))
    if (entry.temperament) {
      out.push({ key: `${entry.id}.temperament.name`, source: entry.temperament.name })
      out.push({ key: `${entry.id}.temperament.blurb`, source: entry.temperament.blurb })
    }
  }
  for (const trap of entry.traps ?? []) {
    out.push({ key: `${entry.id}.trap.${trap.id}.name`, source: trap.name })
    out.push({ key: `${entry.id}.trap.${trap.id}.point`, source: trap.point })
  }
  walkNodes(entry.id, entry.tree, [], out)
  return out
}

/** Every translatable string in one study guide. */
export function studyStrings(guide: StudyGuide): ContentString[] {
  const at = `study.${guide.id}`
  const out: ContentString[] = [
    { key: `${at}.bigIdea`, source: guide.bigIdea },
    { key: `${at}.feel`, source: guide.middlegameFeel },
  ]
  guide.structures.forEach((structure, i) => {
    out.push({ key: `${at}.s.${i}.name`, source: structure.name })
    out.push({ key: `${at}.s.${i}.shape`, source: structure.shape })
    out.push({ key: `${at}.s.${i}.you`, source: structure.yourPlay })
    out.push({ key: `${at}.s.${i}.them`, source: structure.theirPlay })
  })
  guide.plans.forEach((plan, i) => {
    out.push({ key: `${at}.p.${i}.title`, source: plan.title })
    out.push({ key: `${at}.p.${i}.detail`, source: plan.detail })
  })
  guide.keySquares.forEach((square, i) => {
    out.push({ key: `${at}.k.${i}.why`, source: square.why })
  })
  guide.breaks.forEach((item, i) => {
    out.push({ key: `${at}.b.${i}.when`, source: item.when })
  })
  guide.pitfalls.forEach((pitfall, i) => {
    out.push({ key: `${at}.f.${i}.title`, source: pitfall.title })
    out.push({ key: `${at}.f.${i}.detail`, source: pitfall.detail })
  })
  return out
}

/** Every translatable string in the repertoire and the study section. */
export function allContentStrings(
  entries: RepertoireEntry[],
  guides: StudyGuide[],
): ContentString[] {
  return [...entries.flatMap(entryStrings), ...guides.flatMap(studyStrings)]
}

/** A dictionary is a flat map from content key to translated string. */
export type ContentDictionary = Record<string, string>
