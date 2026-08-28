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
import { caroKannTree } from './caro-kann'
import { kingsIndianTree } from './kings-indian'
import { vsCatalanTrees } from './vs-catalan'
import { vsLondonTrompTrees } from './vs-london-tromp'
import { vsColleBdgTrees } from './vs-colle-bdg'
import { vsKingsGambitTrees } from './vs-kings-gambit'
import { vsScotchTrees } from './vs-scotch'
import { vsViennaTrees } from './vs-vienna'
import { vsDanishGoringTrees } from './vs-danish-goring'
import { vsEnglishTrees } from './vs-english'
import { vsRetiTrees } from './vs-reti'
import { studyItalianRuy } from './study-italian-ruy'
import { studyQgdLondon } from './study-qgd-london'
import { studyNajdorfFrench } from './study-najdorf-french'
import { studyCaroKannKid } from './study-carokann-kid'
import { studyVsCatalanLondon } from './study-vs-catalan-london'
import { studyVsTrompColleBdg } from './study-vs-tromp-colle-bdg'
import { studyVsKgScotchVienna } from './study-vs-kg-scotch-vienna'

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
  ...caroKannTree,
  ...kingsIndianTree,
  ...vsCatalanTrees,
  ...vsLondonTrompTrees,
  ...vsColleBdgTrees,
  ...vsKingsGambitTrees,
  ...vsScotchTrees,
  ...vsViennaTrees,
  ...vsDanishGoringTrees,
  ...vsEnglishTrees,
  ...vsRetiTrees,
  ...studyItalianRuy,
  ...studyQgdLondon,
  ...studyNajdorfFrench,
  ...studyCaroKannKid,
  ...studyVsCatalanLondon,
  ...studyVsTrompColleBdg,
  ...studyVsKgScotchVienna,
}
