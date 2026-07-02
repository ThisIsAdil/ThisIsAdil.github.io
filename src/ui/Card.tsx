import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Add a subtle hover lift + border emphasis (for linked/clickable cards). */
  interactive?: boolean
}

/**
 * Surface container: token-driven background, hairline border, medium-soft
 * radius. Composes freely — pass any padding/layout via `className`.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, interactive = false, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border border-border bg-surface shadow-sm',
        interactive &&
          'transition-[border-color,box-shadow,transform] duration-[var(--duration-base)] ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-border-strong hover:shadow-lg',
        className,
      )}
      {...props}
    />
  )
})
