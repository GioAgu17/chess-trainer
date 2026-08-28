import type { Defence, DefenceFamily } from '../types'
import { catalanOpen } from './catalan-open'
import { catalanClosed } from './catalan-closed'
import { vsLondon } from './london'
import { vsTrompowsky } from './trompowsky'
import { vsColleZukertort } from './colle-zukertort'
import { vsBlackmarDiemer } from './blackmar-diemer'
import { vsKingsGambit } from './kings-gambit'
import { vsScotch } from './scotch'
import { vsVienna } from './vienna'
import { vsDanishGoring } from './danish-goring'
import { vsEnglish } from './english'
import { vsReti } from './reti'

/**
 * The defence repertoire, indexed by what the *opponent* plays.
 *
 * Adding one is a matter of writing a file in this directory and listing it
 * here - see README.md. Two entries may share a `system` when there is more
 * than one reasonable answer to it (the Catalan has an open and a closed one).
 */
export const DEFENCES: Defence[] = [
  catalanOpen,
  catalanClosed,
  vsLondon,
  vsTrompowsky,
  vsColleZukertort,
  vsBlackmarDiemer,
  vsKingsGambit,
  vsScotch,
  vsVienna,
  vsDanishGoring,
  vsEnglish,
  vsReti,
]

export function getDefence(id: string): Defence | undefined {
  return DEFENCES.find((d) => d.id === id)
}

/** Human name of each family, in the order the picker shows them. */
export const FAMILIES: Array<{ key: DefenceFamily; title: string; blurb: string }> = [
  { key: 'd4', title: 'Against 1.d4', blurb: 'Queen\'s pawn systems and the gambits that come with them.' },
  { key: 'e4', title: 'Against 1.e4', blurb: 'The open-game gambits and sidelines you meet below master level.' },
  { key: 'flank', title: 'Against flank openings', blurb: 'When White refuses to put a pawn in the centre at all.' },
]

export function defencesInFamily(family: DefenceFamily): Defence[] {
  return DEFENCES.filter((d) => d.family === family)
}

/** One entry per opponent system, carrying every answer this repertoire has. */
export interface DefenceSystem {
  system: string
  family: DefenceFamily
  answers: Defence[]
}

/**
 * Group the defences by the opponent's system, preserving list order. A system
 * with more than one answer is one the user picks a temperament for.
 */
export function defenceSystems(defences: Defence[] = DEFENCES): DefenceSystem[] {
  const groups: DefenceSystem[] = []
  for (const defence of defences) {
    const existing = groups.find((g) => g.system === defence.system)
    if (existing) existing.answers.push(defence)
    else groups.push({ system: defence.system, family: defence.family, answers: [defence] })
  }
  return groups
}
