import type { RouteRecord } from 'vite-react-ssg'
import { workEntries, blogEntries } from './content'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Work from './pages/Work'
import WorkDetail from './pages/WorkDetail'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

// Every known route is prerendered to static HTML (see vite.config ssgOptions).
// Dynamic routes derive their static paths from the MDX content collections.
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
        getStaticPaths: () => workEntries.map((e) => `/work/${e.slug}`),
      },
      { path: 'services', Component: Services },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'blog', Component: Blog },
      {
        path: 'blog/:slug',
        Component: BlogPost,
        getStaticPaths: () => blogEntries.map((e) => `/blog/${e.slug}`),
      },
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
