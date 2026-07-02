import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

/** Section/page label with the signature gradient tick. Used site-wide. */
export default function Eyebrow({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-2.5 text-sm font-medium uppercase tracking-widest text-fg-subtle',
        className,
      )}
    >
      <span className="h-px w-7 rounded-full bg-accent" aria-hidden />
      {children}
    </p>
  )
}
