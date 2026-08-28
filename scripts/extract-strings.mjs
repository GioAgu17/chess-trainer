/**
 * Dump every translatable string with the key it lives under.
 *
 * Keys are derived from the data, so this is the only reliable way to write a
 * content dictionary by hand without guessing. Output is one JSON object per
 * entry, ready to be turned into a file under `src/i18n/content/<locale>/`.
 *
 *   node scripts/extract-strings.mjs [entryId]
 */
import { loadRepertoire } from './build-openings.mjs'

const only = process.argv[2]
const repertoire = await loadRepertoire()
const { entryStrings, studyStrings } = repertoire

if (only === 'study') {
  for (const guide of repertoire.STUDY_GUIDES) {
    for (const { key, source } of studyStrings(guide)) {
      console.log(`${JSON.stringify(key)}: ${JSON.stringify(source)},`)
    }
  }
} else {
  for (const entry of repertoire.ENTRIES) {
    if (only && entry.id !== only) continue
    console.log(`  /* ---- ${entry.id} ---- */`)
    for (const { key, source } of entryStrings(entry)) {
      console.log(`  ${JSON.stringify(key)}: ${JSON.stringify(source)},`)
    }
  }
}
