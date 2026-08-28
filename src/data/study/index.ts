import type { StudyGuide } from '../types'
import { OPENING_STUDY } from './openings'
import { DEFENCE_STUDY } from './defences'

/**
 * The study section: one long-read guide per entry, keyed by the entry's id.
 *
 * These are deliberately not part of the `RepertoireEntry` objects. Every file
 * in `openings/` and `defences/` is already a large move tree, and the prose
 * belongs where it can be read and edited as prose.
 */
export const STUDY_GUIDES: StudyGuide[] = [...OPENING_STUDY, ...DEFENCE_STUDY]

const BY_ID = new Map(STUDY_GUIDES.map((guide) => [guide.id, guide]))

export function getStudy(entryId: string): StudyGuide | undefined {
  return BY_ID.get(entryId)
}
