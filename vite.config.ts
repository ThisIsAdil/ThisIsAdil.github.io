import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import { copyFile } from 'node:fs/promises'
import { join } from 'node:path'
// Loads vite-react-ssg's `ssgOptions` augmentation onto Vite's config type.
import type {} from 'vite-react-ssg'

// User-page deploy (username.github.io) serves at root, so base is '/'.
// When a custom domain is added later, this stays '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
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
    },
  },
})
