import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

// Minimal M0 toggle. The full token-driven useTheme hook lands in M1; this proves
// the [data-theme] swap + persistence work through SSG hydration without a FOUC.
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null)

  // Read the theme the pre-paint script already applied (avoids hydration flicker).
  useEffect(() => {
    const current = (document.documentElement.dataset.theme as Theme) || 'light'
    setTheme(current)
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* ignore write failures (private mode, etc.) */
    }
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="rounded-base border border-border px-3 py-1.5 text-sm hover:text-fg"
    >
      {theme === null ? 'Theme' : theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
