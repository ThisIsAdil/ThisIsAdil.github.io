import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme
}

/**
 * Theme controller. The pre-paint script in index.html has already applied the
 * correct theme before React runs (no FOUC); this hook reads that value, lets
 * the user toggle it, persists an explicit choice, and — while the user has NOT
 * made an explicit choice — follows the OS preference live.
 *
 * Returns `theme: null` until mounted so SSG markup and first client render
 * agree (no hydration mismatch).
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme | null>(null)

  useEffect(() => {
    const current =
      (document.documentElement.dataset.theme as Theme | undefined) ??
      systemTheme()
    setThemeState(current)

    // Follow the OS only when the user hasn't pinned a preference.
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (localStorage.getItem(STORAGE_KEY)) return
      const next = systemTheme()
      apply(next)
      setThemeState(next)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const setTheme = useCallback((next: Theme) => {
    apply(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore (private mode / disabled storage) */
    }
    setThemeState(next)
  }, [])

  const toggle = useCallback(() => {
    setTheme(
      (document.documentElement.dataset.theme as Theme) === 'dark'
        ? 'light'
        : 'dark',
    )
  }, [setTheme])

  return { theme, setTheme, toggle }
}
