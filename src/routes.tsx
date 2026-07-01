import type { RouteRecord } from 'vite-react-ssg'
import { projects } from './data/content'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

// Every known route is prerendered to static HTML (see vite.config ssgOptions).
// The dynamic /work/:slug uses getStaticPaths; unknown paths fall back to 404.html.
export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'work', Component: Work },
      {
        path: 'work/:slug',
        Component: WorkDetail,
        // Prerender every real project so /work/<slug> deep-links work.
        getStaticPaths: () => projects.map((p) => `/work/${p.slug}`),
      },
      { path: 'services', Component: Services },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'blog', Component: Blog },
      { path: 'privacy', Component: Privacy },
      // Hidden internal QA surface: noindex + robots-blocked. Lazy-loaded so its
      // demo code never ships in the main (user-facing) bundle.
      {
        path: 'styleguide',
        lazy: () =>
          import('./pages/Styleguide').then((m) => ({ Component: m.default })),
        entry: 'src/pages/Styleguide.tsx',
      },
      { path: '*', Component: NotFound },
    ],
  },
]
