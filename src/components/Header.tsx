import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button, Container } from '../ui'
import { cn } from '../lib/cn'
import { site } from '../config/site'
import ThemeToggle from './ThemeToggle'

const iconButton =
  'inline-flex size-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors duration-[var(--duration-fast)] hover:border-fg hover:text-fg'

/**
 * Sticky, minimal header. On desktop: nav + theme toggle + primary CTA. On
 * mobile: the name and hamburger stay fixed in the top bar while the nav
 * smoothly unrolls in a panel directly beneath it (animated via
 * grid-template-rows 0fr→1fr — no layout jank, no Radix dialog in the bundle).
 */
export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close on navigation.
  useEffect(() => setOpen(false), [pathname])

  // Close on Escape, and lock body scroll while the panel is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      {/* Backdrop over page content while the mobile panel is open. */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={cn(
          'fixed inset-x-0 bottom-0 top-16 z-10 bg-fg/10 backdrop-blur-sm transition-opacity duration-[var(--duration-base)] md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      <Container className="relative z-20">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            to="/"
            className="font-display text-lg font-semibold tracking-tight"
          >
            {site.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'text-sm transition-colors duration-[var(--duration-fast)] hover:text-fg',
                    isActive ? 'text-fg' : 'text-fg-muted',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link to={site.primaryCta.href}>{site.primaryCta.label}</Link>
            </Button>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((o) => !o)}
              className={cn(iconButton, 'md:hidden')}
            >
              {open ? (
                <X size={18} strokeWidth={1.75} aria-hidden />
              ) : (
                <Menu size={18} strokeWidth={1.75} aria-hidden />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile nav panel — unrolls from under the top bar. */}
      <div
        id="mobile-nav"
        className={cn(
          'absolute inset-x-0 top-full z-10 grid bg-bg transition-[grid-template-rows] duration-[var(--duration-base)] ease-[var(--ease-out-expo)] md:hidden',
          open
            ? 'grid-rows-[1fr] border-b border-border shadow-lg'
            : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <Container className="pb-6 pt-2">
            <nav className="flex flex-col">
              {site.nav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'border-b border-border py-4 font-display text-xl font-medium transition-colors',
                      isActive ? 'text-accent' : 'text-fg hover:text-fg-muted',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <Button asChild size="lg" className="mt-6 w-full">
              <Link to={site.primaryCta.href}>{site.primaryCta.label}</Link>
            </Button>
          </Container>
        </div>
      </div>
    </header>
  )
}
