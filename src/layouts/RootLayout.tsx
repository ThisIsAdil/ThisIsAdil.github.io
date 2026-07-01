import { Link, Outlet } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'
import { site } from '../config/site'

// The frame every page hangs in. Fuller header/footer/skip-link arrive in M3;
// this M0 version proves the layout + routing + theming shell works end to end.
export default function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-base focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      <header className="border-b border-border">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-semibold tracking-tight">
            {site.name}
          </Link>
          <div className="flex items-center gap-6 text-sm text-muted">
            <Link to="/work" className="hover:text-fg">
              Work
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <Outlet />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted">
          © {site.name} · Fast, findable, built to convert.
        </div>
      </footer>
    </div>
  )
}
