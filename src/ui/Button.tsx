import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../lib/cn'

const buttonVariants = cva(
  // Base: layout, shape, motion, and disabled/focus behaviour shared by all.
  'relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-[color,background-color,border-color,opacity] duration-[var(--duration-fast)] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Solid crimson accent — the primary CTA.
        primary:
          'text-white shadow-sm [background-color:var(--color-accent-solid)] hover:opacity-90 active:opacity-100',
        // Solid ink — a quieter strong action.
        ink: 'bg-fg text-bg hover:opacity-90 active:opacity-100',
        secondary:
          'border border-border-strong bg-transparent text-fg hover:border-fg hover:bg-bg-subtle',
        ghost: 'text-fg-muted hover:bg-bg-subtle hover:text-fg',
        // Inline text action; the reserved accent + underline signal it.
        link: 'text-accent underline underline-offset-4 hover:opacity-80',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'size-11',
      },
    },
    // `link` should not carry button box metrics.
    compoundVariants: [{ variant: 'link', class: 'h-auto rounded-none px-0' }],
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as the child element (e.g. an <a> or React Router <Link>). */
  asChild?: boolean
  /** Show a spinner and block interaction. */
  loading?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      iconLeft,
      iconRight,
      disabled,
      children,
      ...props
    },
    ref,
  ) {
    const Comp = asChild ? Slot : 'button'
    // With asChild the single child must remain a single element, so we don't
    // inject spinner/icon wrappers in that mode.
    const content = asChild ? (
      children
    ) : (
      <>
        {loading && (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        )}
        {!loading && iconLeft}
        {children}
        {!loading && iconRight}
      </>
    )

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {content}
      </Comp>
    )
  },
)
