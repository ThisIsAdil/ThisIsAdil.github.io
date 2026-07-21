// Generates the favicon set from a monogram SVG → public/.
// Run with: node scripts/generate-icons.mjs
import sharp from 'sharp'
import { writeFile } from 'node:fs/promises'

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="24" fill="#0a0a0b"/>
  <text x="50" y="67" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="700" letter-spacing="-1" fill="#ffffff" text-anchor="middle">AS</text>
</svg>`

// Wrap PNGs in an ICO container. sharp can't emit .ico, but the format has
// allowed embedded PNG frames since Vista, so the header is all we need:
// a 6-byte ICONDIR, one 16-byte ICONDIRENTRY per frame, then the PNG bytes.
function buildIco(frames) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // 1 = icon
  header.writeUInt16LE(frames.length, 4)

  const dir = Buffer.alloc(16 * frames.length)
  let offset = header.length + dir.length
  frames.forEach(({ size, data }, i) => {
    const at = i * 16
    dir.writeUInt8(size >= 256 ? 0 : size, at) // 0 means 256
    dir.writeUInt8(size >= 256 ? 0 : size, at + 1)
    dir.writeUInt8(0, at + 2) // palette colors
    dir.writeUInt8(0, at + 3) // reserved
    dir.writeUInt16LE(1, at + 4) // color planes
    dir.writeUInt16LE(32, at + 6) // bits per pixel
    dir.writeUInt32LE(data.length, at + 8)
    dir.writeUInt32LE(offset, at + 12)
    offset += data.length
  })

  return Buffer.concat([header, dir, ...frames.map((f) => f.data)])
}

await writeFile('public/favicon.svg', svg)
const buf = Buffer.from(svg)
await sharp(buf).resize(180, 180).png().toFile('public/apple-touch-icon.png')
await sharp(buf).resize(192, 192).png().toFile('public/icon-192.png')
await sharp(buf).resize(512, 512).png().toFile('public/icon-512.png')
await sharp(buf).resize(32, 32).png().toFile('public/favicon-32.png')

// Browsers and crawlers request /favicon.ico by path regardless of <link>.
const icoSizes = [16, 32, 48]
const frames = await Promise.all(
  icoSizes.map(async (size) => ({
    size,
    data: await sharp(buf).resize(size, size).png().toBuffer(),
  })),
)
await writeFile('public/favicon.ico', buildIco(frames))

console.log('Wrote favicon set to public/')
