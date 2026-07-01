import type { RouteRecord } from 'vite-react-ssg'
import { workEntries, blogEntries } from './content'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

// Home + shell load eagerly (the landing payload). Every other route is a lazy
// chunk so it stays out of the homepage bundle — still fully SSG-prerendered
// (vite-react-ssg awaits each import during the build), so SEO is unaffected.
const lazy =
  (importer: () => Promise<{ default: React.ComponentType }>) => () =>
    importer().then((m) => ({ Component: m.default }))

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: 'work',
        lazy: lazy(() => import('./pages/Work')),
        entry: 'src/pages/Work.tsx',
      },
      {
        path: 'work/:slug',
        lazy: lazy(() => import('./pages/WorkDetail')),
        entry: 'src/pages/WorkDetail.tsx',
        getStaticPaths: () => workEntries.map((e) => `/work/${e.slug}`),
      },
      {
        path: 'services',
        lazy: lazy(() => import('./pages/Services')),
        entry: 'src/pages/Services.tsx',
      },
      {
        path: 'about',
        lazy: lazy(() => import('./pages/About')),
        entry: 'src/pages/About.tsx',
      },
      {
        path: 'contact',
        lazy: lazy(() => import('./pages/Contact')),
        entry: 'src/pages/Contact.tsx',
      },
      {
        path: 'blog',
        lazy: lazy(() => import('./pages/Blog')),
        entry: 'src/pages/Blog.tsx',
      },
      {
        path: 'blog/:slug',
        lazy: lazy(() => import('./pages/BlogPost')),
        entry: 'src/pages/BlogPost.tsx',
        getStaticPaths: () => blogEntries.map((e) => `/blog/${e.slug}`),
      },
      {
        path: 'privacy',
        lazy: lazy(() => import('./pages/Privacy')),
        entry: 'src/pages/Privacy.tsx',
      },
      // Hidden internal QA surface: noindex + robots-blocked.
      {
        path: 'styleguide',
        lazy: lazy(() => import('./pages/Styleguide')),
        entry: 'src/pages/Styleguide.tsx',
      },
      { path: '*', Component: NotFound },
    ],
  },
]
