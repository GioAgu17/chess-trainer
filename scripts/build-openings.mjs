/**
 * The repertoire is TypeScript, and these scripts are plain node, so bundle the
 * data (and only the data) to a temporary ESM file with esbuild via Vite.
 *
 * `src/data/verify-entry.ts` exists purely as that bundle entry point: it
 * re-exports the repertoire and the puzzle generator, and nothing else, so the
 * dev scripts never pull a React component into node.
 */
import { build } from 'vite'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

export async function loadRepertoire() {
  const outDir = await mkdtemp(join(tmpdir(), 'chess-trainer-openings-'))
  try {
    await build({
      logLevel: 'silent',
      build: {
        outDir,
        emptyOutDir: true,
        lib: { entry: 'src/data/verify-entry.ts', formats: ['es'], fileName: 'repertoire' },
        rollupOptions: { external: [] },
        minify: false,
      },
    })
    const file = join(outDir, 'repertoire.mjs')
    const source = await readFile(file, 'utf8').catch(() => null)
    return await import(
      pathToFileURL(source === null ? join(outDir, 'repertoire.js') : file).href
    )
  } finally {
    await rm(outDir, { recursive: true, force: true })
  }
}
