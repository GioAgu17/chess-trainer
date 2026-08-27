/**
 * The repertoire is TypeScript, and these scripts are plain node, so bundle the
 * data (and only the data) to a temporary ESM file with esbuild via Vite.
 */
import { build } from 'vite'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

export async function loadOpenings() {
  const outDir = await mkdtemp(join(tmpdir(), 'chess-trainer-openings-'))
  try {
    await build({
      logLevel: 'silent',
      build: {
        outDir,
        emptyOutDir: true,
        lib: { entry: 'src/data/openings/index.ts', formats: ['es'], fileName: 'openings' },
        rollupOptions: { external: [] },
        minify: false,
      },
    })
    const file = join(outDir, 'openings.mjs')
    const source = await readFile(file, 'utf8').catch(() => null)
    const module = await import(pathToFileURL(source === null ? join(outDir, 'openings.js') : file).href)
    return module.OPENINGS
  } finally {
    await rm(outDir, { recursive: true, force: true })
  }
}
