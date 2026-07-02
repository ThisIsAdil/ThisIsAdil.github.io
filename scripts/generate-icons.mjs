// Generates the favicon set from a monogram SVG → public/.
// Run with: node scripts/generate-icons.mjs
import sharp from 'sharp'
import { writeFile } from 'node:fs/promises'

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="24" fill="#0a0a0b"/>
  <text x="50" y="67" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="700" letter-spacing="-1" fill="#ffffff" text-anchor="middle">AS</text>
</svg>`

await writeFile('public/favicon.svg', svg)
const buf = Buffer.from(svg)
await sharp(buf).resize(180, 180).png().toFile('public/apple-touch-icon.png')
await sharp(buf).resize(192, 192).png().toFile('public/icon-192.png')
await sharp(buf).resize(512, 512).png().toFile('public/icon-512.png')
await sharp(buf).resize(32, 32).png().toFile('public/favicon-32.png')
console.log('Wrote favicon set to public/')
