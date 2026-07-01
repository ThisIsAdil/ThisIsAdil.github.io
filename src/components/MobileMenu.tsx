import { Menu } from 'lucide-react'
import { useCallback, useState, type ComponentType } from 'react'

type DialogProps = { open: boolean; onOpenChange: (open: boolean) => void }

/**
 * Mobile nav trigger. The Radix Dialog is dynamically imported on first tap, so
 * it never ships in the initial bundle (SSG renders just this button — no
 * React.lazy, so no SSR/Suspense issues).
 */
export default function MobileMenu() {
  const [Dialog, setDialog] = useState<ComponentType<DialogProps> | null>(null)
  const [open, setOpen] = useState(false)

  const openMenu = useCallback(async () => {
    if (!Dialog) {
      const mod = await import('./MobileMenuDialog')
      setDialog(() => mod.default)
    }
    setOpen(true)
  }, [Dialog])

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={openMenu}
        className="inline-flex size-9 items-center justify-center rounded-md border border-border text-fg-muted transition-colors duration-[var(--duration-fast)] hover:border-border-strong hover:text-fg md:hidden"
      >
        <Menu size={18} strokeWidth={1.75} aria-hidden="true" />
      </button>
      {Dialog && <Dialog open={open} onOpenChange={setOpen} />}
    </>
  )
}
