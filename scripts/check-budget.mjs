// Fails the build if the homepage's initial JS (app + client chunks) exceeds the
// gzip budget. Run after `npm run build`.
import { readdir, readFile } from 'node:fs/promises'
import { gzipSync } from 'node:zlib'

const DIR = 'dist/assets'
const LIMIT = 125 * 1024 // gzip bytes; current ~119KB, headroom to catch bloat

const files = await readdir(DIR)
const initial = files.filter((f) => /^(app|client)-.*\.js$/.test(f))

let total = 0
for (const f of initial) {
  total += gzipSync(await readFile(`${DIR}/${f}`)).length
}

const kb = (n) => `${(n / 1024).toFixed(1)}KB`
console.log(`Initial JS (gzip): ${kb(total)} — budget ${kb(LIMIT)}`)
for (const f of initial) {
  console.log(`  ${f}: ${kb(gzipSync(await readFile(`${DIR}/${f}`)).length)}`)
}

if (total > LIMIT) {
  console.error(`\n❌ Over budget by ${kb(total - LIMIT)}`)
  process.exit(1)
}
console.log('\n✅ Within budget')
