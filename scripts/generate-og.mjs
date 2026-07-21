// Generates the default social-share (Open Graph) image → public/og/default.png.
// The card is the favicon mark itself, scaled up on a light surface so the
// link preview matches the browser-tab icon. Run with: node scripts/generate-og.mjs
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

// Favicon geometry (public/favicon.svg) is a 100×100 box with rx 24; scaled ×2.2
// here and centred so the preview reads as the same mark, just larger.
const MARK = 220
const MARK_X = (1200 - MARK) / 2
const MARK_Y = 170

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#fafafa"/>
  <circle cx="1080" cy="70" r="640" fill="#0a0a0b" opacity="0.03"/>
  <g transform="translate(${MARK_X} ${MARK_Y})">
    <rect width="${MARK}" height="${MARK}" rx="${MARK * 0.24}" fill="#0a0a0b"/>
    <text x="${MARK / 2}" y="${MARK * 0.67}" font-family="Helvetica, Arial, sans-serif" font-size="${MARK * 0.4}" font-weight="700" letter-spacing="-2" fill="#ffffff" text-anchor="middle">AS</text>
  </g>
  <text x="603" y="470" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="700" letter-spacing="6" fill="#0a0a0b" text-anchor="middle">ADIL SHAIKH</text>
</svg>`

await mkdir('public/og', { recursive: true })
await sharp(Buffer.from(svg)).png().toFile('public/og/default.png')
console.log('Wrote public/og/default.png')
