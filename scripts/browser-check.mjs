/**
 * Walk the whole app in a real browser and write screenshots.
 *
 * Not part of the app or the test suite. It drives the running dev server
 * through the path a new user takes - the setup conversation, a drill, a
 * defence drill, the statistics page, a puzzle, a study page - and fails loudly
 * on a console error or on the document scrolling sideways, which is the class
 * of defect a unit test cannot see.
 *
 * Puppeteer is a large download and is only needed for this, so like Stockfish
 * it is deliberately not a dependency:
 *
 *   npm install --no-save puppeteer
 *   npm run dev                                    # in another terminal
 *   node scripts/browser-check.mjs docs/screenshots
 *   node scripts/browser-check.mjs docs/screenshots --phone
 */
import puppeteer from 'puppeteer'
import { mkdir } from 'node:fs/promises'

const OUT = process.argv[2] ?? 'docs/screenshots'
const PHONE = process.argv.includes('--phone')
const W = PHONE ? 390 : 1440
const H = PHONE ? 844 : 900
const URL = 'http://localhost:5173/'
await mkdir(OUT, { recursive: true })

const browser = await puppeteer.launch({ headless: 'new' })
const page = await browser.newPage()
await page.setViewport({ width: W, height: H, deviceScaleFactor: 2 })
const errors = []
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(m.text())
})
page.on('pageerror', (e) => errors.push(String(e)))

const wait = (ms) => new Promise((r) => setTimeout(r, ms))
const shot = async (name, full = false) => {
  await wait(500)
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: full })
  console.log(`  shot ${name}`)
}

const clickText = async (sel, text) => {
  const ok = await page.evaluate(
    (sel, text) => {
      const el = [...document.querySelectorAll(sel)].find((n) =>
        n.textContent.toLowerCase().includes(text.toLowerCase()),
      )
      if (!el) return false
      ;(el.closest('button') ?? el).click()
      return true
    },
    sel,
    text,
  )
  if (!ok) throw new Error(`no ${sel} matching "${text}"`)
  await wait(260)
}

/** Click a button inside the card whose title matches, not the first on the page. */
const clickInCard = async (cardText, buttonText) => {
  const ok = await page.evaluate(
    (cardText, buttonText) => {
      const card = [...document.querySelectorAll('.card, .system')].find((n) =>
        n.textContent.toLowerCase().includes(cardText.toLowerCase()),
      )
      if (!card) return false
      const button = [...card.querySelectorAll('button')].find((n) =>
        n.textContent.toLowerCase().includes(buttonText.toLowerCase()),
      )
      if (!button) return false
      button.click()
      return true
    },
    cardText,
    buttonText,
  )
  if (!ok) throw new Error(`no "${buttonText}" in a card matching "${cardText}"`)
  await wait(300)
}

const square = async (name) => {
  const el = await page.$(`[data-square="${name}"]`)
  if (!el) throw new Error(`no square ${name}`)
  await el.click()
  await wait(120)
}

const move = async (from, to) => {
  await square(from)
  await square(to)
  await wait(700)
}

const problems = []
const check = async (label) => {
  const found = await page.evaluate(() => {
    const w = document.documentElement.clientWidth
    const out = []
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) continue
      // A sideways-scrolling container is allowed to hold wider content, and
      // so is anything inside one - only the page itself must never scroll.
      let scroller = false
      for (let n = el; n && n !== document.body; n = n.parentElement) {
        const ox = getComputedStyle(n).overflowX
        if (ox === 'auto' || ox === 'scroll') {
          scroller = true
          break
        }
      }
      if (scroller) continue
      if (r.right > w + 1) out.push(`${el.tagName}.${String(el.className).slice(0, 48)} right=${Math.round(r.right)}`)
    }
    return {
      overflow: [...new Set(out)].slice(0, 6),
      bodyScroll: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    }
  })
  if (found.bodyScroll > 1 || found.overflow.length) {
    problems.push(`${label}: bodyScroll=${found.bodyScroll} ${found.overflow.join(' | ')}`)
  }
}

const label = PHONE ? 'phone' : 'desktop'
console.log(`=== ${label} ${W}x${H} ===`)

await page.goto(URL, { waitUntil: 'networkidle0' })
await page.evaluate(() => localStorage.clear())
await page.reload({ waitUntil: 'networkidle0' })

console.log('1. setup conversation')
await shot(`${label}-01-setup`)
await check('setup/white')
await clickText('.choice__label', 'Italian Game')
await check('setup/black')
await clickText('.choice__label', 'Caro-Kann')
await clickText('.choice__label', 'Someone who plays 1.d4')
await shot(`${label}-02-setup-defence`)
await check('setup/system')
await clickText('.choice__label', 'Catalan')
await shot(`${label}-03-setup-temperament`)
await clickText('.choice__label', 'Open')
await clickText('.choice__label', 'Yes, there is another')
await clickText('.choice__label', 'Someone who plays 1.e4')
await clickText('.choice__label', "King's Gambit")
await clickText('.choice__label', 'No, that is enough')
await page.type('#profile-name', 'Club repertoire')
await clickText('button', 'Continue')
await shot(`${label}-04-setup-review`)
await check('setup/review')
await clickText('.btn', 'Start training')
await wait(400)

console.log('2. home')
await shot(`${label}-05-home`, true)
await check('home')

console.log('3. drill the Italian, one move wrong')
await clickInCard('Italian Game', 'Drill')
await wait(500)
await check('trainer')
// A sound move that is not this repertoire: 1.d4.
await move('d2', 'd4')
await shot(`${label}-06-off-repertoire`)
await clickText('.btn--primary', 'Try again')
await move('e2', 'e4')
await move('g1', 'f3')
// A real mistake at move three: 3.Nc3 instead of 3.Bc4.
await move('b1', 'c3')
await shot(`${label}-07-wrong-move`)
await clickText('.btn--primary', 'Try again')
for (const [from, to] of [
  ['f1', 'c4'],
  ['c2', 'c3'],
  ['d2', 'd3'],
  ['e1', 'g1'],
]) {
  await move(from, to)
}
await shot(`${label}-08-line-complete`)
await check('trainer/summary')

console.log('4. drill a defence')
await clickText('.app__nav-item', 'Train')
await wait(300)
await clickInCard('Catalan', 'Drill')
await wait(700)
await check('defence')
await move('g8', 'f6')
await shot(`${label}-09-defence`)

console.log('5. statistics')
await clickText('.app__nav-item', 'Statistics')
await wait(400)
await shot(`${label}-10-stats`, true)
await check('stats')
const row = await page.evaluate(() => {
  const r = [...document.querySelectorAll('.table__row')][0]
  if (!r) return false
  r.click()
  return true
})
if (row) {
  await wait(300)
  await shot(`${label}-11-stats-detail`, true)
  await check('stats/detail')
}
const miss = await page.evaluate(() => {
  const m = document.querySelector('.miss__head')
  if (!m) return false
  m.click()
  return true
})
if (miss) {
  await wait(400)
  await shot(`${label}-12-stats-miss`)
  await check('stats/miss')
}

console.log('6. puzzles')
await clickText('.app__nav-item', 'Puzzles')
await wait(600)
await shot(`${label}-13-puzzle`)
await check('puzzles')
const solved = await page.evaluate(() => {
  const b = [...document.querySelectorAll('.btn')].find((n) => n.textContent.includes('Show me'))
  if (!b) return false
  b.click()
  return true
})
if (solved) {
  await wait(400)
  await shot(`${label}-14-puzzle-answer`)
  await check('puzzles/answer')
}

console.log('7. study')
await clickText('.app__nav-item', 'Study')
await wait(400)
await shot(`${label}-15-study`, true)
await check('study')

console.log('8. browse')
await clickText('.app__nav-item', 'Browse')
await wait(400)
await check('browse/openings')
await clickText('.segmented button', 'Defences')
await wait(300)
await shot(`${label}-16-browse-defences`, true)
await check('browse/defences')

console.log('9. repertoire editor')
await clickText('.app__nav-item', 'Repertoire')
await wait(400)
await shot(`${label}-17-profiles`, true)
await check('profiles')

console.log('10. language switch')
await clickText('.segmented--tight button', 'IT')
await wait(500)
const italian = await page.evaluate(() => ({
  lang: document.documentElement.lang,
  nav: [...document.querySelectorAll('.app__nav-item')].map((n) => n.textContent.trim()),
  body: document.body.innerText.slice(0, 4000),
}))
if (italian.lang !== 'it') problems.push(`language: <html lang> is "${italian.lang}", expected "it"`)
if (!italian.nav.some((n) => n === 'Allenati' || n === 'Statistiche'))
  problems.push(`language: navigation still reads ${JSON.stringify(italian.nav)}`)
await shot(`${label}-18-italian-profiles`, true)
await check('italian/profiles')

await clickText('.app__nav-item', 'Teoria')
await wait(400)
await shot(`${label}-19-italian-study`, true)
await check('italian/study')

await clickText('.app__nav-item', 'Allenati')
await wait(500)
await check('italian/train')

await clickText('.app__nav-item', 'Statistiche')
await wait(400)
await shot(`${label}-20-italian-stats`, true)
await check('italian/stats')

// And back, so the stored locale does not leak into the next run.
await clickText('.segmented--tight button', 'EN')
await wait(400)
const backToEnglish = await page.evaluate(() => document.documentElement.lang)
if (backToEnglish !== 'en') problems.push(`language: switching back left <html lang> as "${backToEnglish}"`)

await browser.close()
console.log(errors.length ? `\nCONSOLE ERRORS:\n${errors.join('\n')}` : '\nno console errors')
console.log(problems.length ? `\nLAYOUT PROBLEMS:\n${problems.join('\n')}` : 'no layout overflow')
