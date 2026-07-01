import type { RouteRecord } from 'vite-react-ssg'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import NotFound from './pages/NotFound'

// M0 spike: a handful of routes to prove SSG emits real HTML per route,
// including a DYNAMIC slug route (the key risk for GitHub Pages deep-linking).
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
        // Prerender one dynamic path so we can verify /work/<slug>/index.html
        // is generated and deep-linkable without a client-only fallback.
        getStaticPaths: () => ['/work/sample-academy'],
      },
      { path: '*', Component: NotFound },
    ],
  },
]
