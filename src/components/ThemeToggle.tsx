import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      }
      className="inline-flex size-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors duration-[var(--duration-fast)] hover:border-fg hover:text-fg"
    >
      {/* Placeholder until mounted keeps SSG markup and first render identical. */}
      {theme === null ? (
        <span className="size-[18px]" aria-hidden />
      ) : theme === 'dark' ? (
        <Sun size={18} strokeWidth={1.75} aria-hidden />
      ) : (
        <Moon size={18} strokeWidth={1.75} aria-hidden />
      )}
    </button>
  )
}
