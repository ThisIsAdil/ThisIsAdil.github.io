import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import { cn } from '../lib/cn'

interface ScrollRevealProps {
  children: ReactNode
  /** Stagger delay in ms (e.g. index * 60). */
  delay?: number
  /** Element to render (default div). */
  as?: ElementType
  className?: string
}

/**
 * Subtle fade + rise as the element enters the viewport (once). Content is
 * visible without JS; motion is disabled under prefers-reduced-motion (both via
 * the .reveal CSS in globals). See MotionSystem: transform/opacity only.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  as: Comp = 'div',
  className,
}: ScrollRevealProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <Comp
      ref={ref}
      className={cn('reveal', inView && 'is-visible', className)}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Comp>
  )
}
