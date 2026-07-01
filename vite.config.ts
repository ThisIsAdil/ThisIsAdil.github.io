import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import { imagetools } from 'vite-imagetools'
import { fileURLToPath, URL } from 'node:url'
import { copyFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { site } from './src/config/site'
// Loads vite-react-ssg's `ssgOptions` augmentation onto Vite's config type.
import type {} from 'vite-react-ssg'

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
  const urls = routes
    .map((r) => `  <url><loc>${site.url}${r}</loc></url>`)
    .join('\n')
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
    },
  },
})
