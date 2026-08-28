import type { Defence, Opening, RepertoireEntry } from './types'
import { OPENINGS } from './openings'
import { DEFENCES } from './defences'

export { OPENINGS } from './openings'
export { DEFENCES, FAMILIES, defenceSystems, defencesInFamily, getDefence } from './defences'
export type { DefenceSystem } from './defences'

/** Everything the trainer can drill: openings you choose, defences you meet. */
export const ENTRIES: RepertoireEntry[] = [...OPENINGS, ...DEFENCES]

export function getEntry(id: string): RepertoireEntry | undefined {
  return ENTRIES.find((entry) => entry.id === id)
}

export function openingsForSide(side: Opening['side']): Opening[] {
  return OPENINGS.filter((opening) => opening.side === side)
}

/** Defence entries only, keyed by id, for the profile builder. */
export function defenceById(id: string): Defence | undefined {
  return DEFENCES.find((defence) => defence.id === id)
}
