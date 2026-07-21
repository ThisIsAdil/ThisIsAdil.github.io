import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import { imagetools } from 'vite-imagetools'
import { fileURLToPath, URL } from 'node:url'
import {
  access,
  copyFile,
  readFile,
  readdir,
  writeFile,
} from 'node:fs/promises'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { join } from 'node:path'
import { site } from './src/config/site'

const run = promisify(execFile)

// react-helmet injects <title>/<meta> at the very start of <head>, pushing the
// static charset past the first 1KB (a Lighthouse best-practice failure). Move
// charset to be the first head element in every prerendered HTML file.
async function fixCharset(dir: string) {
  const files = ((await readdir(dir, { recursive: true })) as string[]).filter(
    (f) => f.endsWith('.html'),
  )
  for (const f of files) {
    const p = join(dir, f)
    let html = await readFile(p, 'utf8')
    html = html.replace(/\s*<meta charset="[^"]*"\s*\/?>/i, '')
    html = html.replace('<head>', '<head><meta charset="utf-8" />')
    await writeFile(p, html)
  }
}
// Loads vite-react-ssg's `ssgOptions` augmentation onto Vite's config type.
import type {} from 'vite-react-ssg'

// The source file whose history actually governs a route's content. Content
// routes come from their MDX; everything else from the matching page component.
function sourceForRoute(route: string) {
  const entry = route.match(/^\/(blog|work)\/(.+)$/)
  if (entry) return `content/${entry[1]}/${entry[2]}.mdx`
  if (route === '/') return 'src/pages/Home.tsx'
  const name = route.slice(1)
  if (!name || name.includes('/')) return null
  return `src/pages/${name[0].toUpperCase()}${name.slice(1)}.tsx`
}

// Last commit date for a path, as the <lastmod> signal. Returns null when git
// history isn't available (shallow clone, tarball build) — an omitted lastmod
// is better than stamping every page with build time, which Google learns to
// ignore. The deploy workflow checks out full history so this resolves there.
async function lastModified(path: string | null) {
  if (!path) return null
  try {
    await access(path)
    const { stdout } = await run('git', [
      'log',
      '-1',
      '--format=%cI',
      '--',
      path,
    ])
    return stdout.trim() || null
  } catch {
    return null
  }
}

// Build a sitemap.xml from the prerendered pages (excluding 404 + styleguide).
async function writeSitemap(dir: string) {
  const files = (await readdir(dir, { recursive: true })) as string[]
  const routes = [
    ...new Set(
      files
        .filter((f) => f.endsWith('index.html'))
        .map((f) => '/' + f.split(/[\\/]/).slice(0, -1).join('/'))
        .map((r) => (r === '/' ? '/' : r.replace(/\/$/, '')))
        .filter((r) => !r.startsWith('/styleguide') && !r.startsWith('/404')),
    ),
  ].sort()
  const urls = (
    await Promise.all(
      routes.map(async (r) => {
        const mod = await lastModified(sourceForRoute(r))
        const lastmod = mod ? `<lastmod>${mod}</lastmod>` : ''
        return `  <url><loc>${site.url}${r}</loc>${lastmod}</url>`
      }),
    )
  ).join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  await writeFile(join(dir, 'sitemap.xml'), xml)
}

// User-page deploy (username.github.io) serves at root, so base is '/'.
// When a custom domain is added later, this stays '/'.
export default defineConfig({
  base: '/',
  plugins: [
    // MDX must run before the React plugin. Frontmatter is exposed as a named
    // `frontmatter` export and validated with zod in src/content.
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [
          remarkFrontmatter,
          [remarkMdxFrontmatter, { name: 'frontmatter' }],
          remarkGfm,
        ],
      }),
    },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    tailwindcss(),
    imagetools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    // Emit clean nested directories: /work/slug/index.html
    dirStyle: 'nested',
    // Also render the catch-all route at a concrete path so we get real HTML.
    includedRoutes: (paths) => [...paths, '/404'],
    // GitHub Pages serves /404.html for any unknown path. Mirror the rendered
    // NotFound page to the dist root so deep-link misses show our branded 404
    // (and the client router then takes over). Known routes are fully
    // prerendered, so this only fires for genuine misses.
    onFinished: async (dir) => {
      await copyFile(join(dir, '404', 'index.html'), join(dir, '404.html'))
      await writeSitemap(dir)
      await fixCharset(dir)
    },
  },
})
