import type { Opening } from '../types'
import { italianGame } from './italian'
import { ruyLopez } from './ruy-lopez'
import { queensGambitDeclined } from './queens-gambit-declined'
import { londonSystem } from './london-system'
import { sicilianNajdorf } from './sicilian-najdorf'
import { frenchDefence } from './french-defence'
import { caroKann } from './caro-kann'
import { kingsIndianDefence } from './kings-indian'

/**
 * The repertoire. Adding an opening is a matter of writing one more file in
 * this directory and listing it here - see README.md for the full recipe.
 */
export const OPENINGS: Opening[] = [
  italianGame,
  ruyLopez,
  queensGambitDeclined,
  londonSystem,
  sicilianNajdorf,
  frenchDefence,
  caroKann,
  kingsIndianDefence,
]

export function getOpening(id: string): Opening | undefined {
  return OPENINGS.find((o) => o.id === id)
}
