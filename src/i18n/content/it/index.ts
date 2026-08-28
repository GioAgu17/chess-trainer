import type { ContentDictionary } from '../../keys'

/**
 * The repertoire in Italian.
 *
 * Split by area so each file stays readable. Keys are derived from the data by
 * `src/i18n/keys.ts`, and `src/i18n/parity.test.ts` fails if this dictionary
 * is missing a string the data has, or carries one the data no longer has.
 */
export const itContent: ContentDictionary = {}
