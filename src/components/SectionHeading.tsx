import type { ReactNode } from 'react'
import { cn } from '../lib/cn'
import Eyebrow from './Eyebrow'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  className?: string
}

/** Consistent section header: eyebrow → title → intro. Keeps rhythm uniform. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-4xl font-semibold tracking-tight">{title}</h2>
      {intro && <p className="measure mt-4 text-lg text-fg-muted">{intro}</p>}
    </div>
  )
}
