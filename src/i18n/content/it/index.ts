import type { ContentDictionary } from '../../keys'
import { openingMeta } from './openings'
import { defenceMeta } from './defences-meta'
import { defenceMeta2 } from './defences-meta-2'
import { italianGameTree } from './italian-game'
import { ruyLopezTree } from './ruy-lopez'
import { qgdTree } from './queens-gambit-declined'
import { londonSystemTree } from './london-system'
import { najdorfTree } from './sicilian-najdorf'
import { frenchTree } from './french-defence'

/**
 * The repertoire in Italian.
 *
 * Split by area so each file stays readable. Keys are derived from the data by
 * `src/i18n/keys.ts`, and `src/i18n/parity.test.ts` fails if this dictionary
 * is missing a string the data has, or carries one the data no longer has.
 */
export const itContent: ContentDictionary = {
  ...openingMeta,
  ...defenceMeta,
  ...defenceMeta2,
  ...italianGameTree,
  ...ruyLopezTree,
  ...qgdTree,
  ...londonSystemTree,
  ...najdorfTree,
  ...frenchTree,
}
