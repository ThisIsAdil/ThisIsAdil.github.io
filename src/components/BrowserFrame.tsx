import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

/**
 * Fake browser chrome around a screenshot/placeholder so project imagery reads
 * as an intentional product shot rather than a bare box.
 */
export default function BrowserFrame({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-border bg-surface shadow-lg',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-bg-subtle px-4 py-3">
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="ml-3 hidden h-4 flex-1 rounded bg-border/70 sm:block" />
      </div>
      {children}
    </div>
  )
}
