import type { ContentDictionary } from '../keys'

/**
 * A small builder for tree translations.
 *
 * The derived keys are long - they carry the whole move path - so writing them
 * out by hand would be both unreadable and easy to mistype. `tree('vs-london')`
 * gives you a function that takes the path and the strings that live at it.
 *
 *   const n = tree('italian-game')
 *   ...n('e4 e5', { label: 'Partita aperta', idea: 'Il Nero rivendica il centro.' })
 *
 * A key that does not exist in the data is reported as an orphan by
 * `src/i18n/parity.test.ts`, so a typo cannot pass unnoticed.
 */
export interface NodeStrings {
  label?: string
  idea?: string
  hint?: string
  /** Named mistakes, keyed by the SAN exactly as the data spells it. */
  m?: Record<string, string>
  end?: { name: string; plans: string[] }
}

export function tree(entryId: string) {
  return (path: string, strings: NodeStrings): ContentDictionary => {
    const at = `${entryId}.n.${path}`
    const out: ContentDictionary = {}
    if (strings.label !== undefined) out[`${at}.label`] = strings.label
    if (strings.idea !== undefined) out[`${at}.idea`] = strings.idea
    if (strings.hint !== undefined) out[`${at}.hint`] = strings.hint
    for (const [san, why] of Object.entries(strings.m ?? {})) out[`${at}.m.${san}`] = why
    if (strings.end) {
      out[`${at}.end.name`] = strings.end.name
      strings.end.plans.forEach((plan, i) => {
        out[`${at}.end.p.${i}`] = plan
      })
    }
    return out
  }
}

/** Merge a list of node dictionaries into one. */
export function nodes(...parts: ContentDictionary[]): ContentDictionary {
  return Object.assign({}, ...parts)
}
