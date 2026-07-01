import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

/** Styling wrapper for rendered MDX (case studies, blog posts). */
export default function Prose({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn('prose', className)}>{children}</div>
}
