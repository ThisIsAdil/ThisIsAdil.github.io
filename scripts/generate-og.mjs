// Generates the default social-share (Open Graph) image → public/og/default.png.
// Run with: node scripts/generate-og.mjs
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0a0a0b"/>
  <circle cx="1080" cy="70" r="640" fill="#ffffff" opacity="0.04"/>
  <g font-family="Helvetica, Arial, sans-serif" fill="#fafafa">
    <text x="90" y="150" font-size="26" letter-spacing="6" fill="#a1a1aa">ADIL SHAIKH</text>
    <text x="86" y="330" font-size="88" font-weight="700" letter-spacing="-2">Websites and platforms,</text>
    <text x="86" y="440" font-size="88" font-weight="700" letter-spacing="-2">engineered to perform.</text>
    <text x="90" y="545" font-size="34" fill="#a1a1aa">Freelance Full-Stack Web Developer</text>
  </g>
</svg>`

await mkdir('public/og', { recursive: true })
await sharp(Buffer.from(svg)).png().toFile('public/og/default.png')
console.log('Wrote public/og/default.png')
