import {
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import { Container, Section } from '../ui'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { cn } from '../lib/cn'

interface Cell {
  icon: LucideIcon
  title: string
  body: string
  span?: string
  feature?: boolean
}

const cells: Cell[] = [
  {
    icon: Target,
    title: 'Business-first thinking',
    body: 'I start with what you’re actually trying to achieve — more enquiries, more enrolments, growth — and build toward it. The technology is a means, never the point. That’s the difference between a website and a result.',
    span: 'md:col-span-2 md:row-span-2',
    feature: true,
  },
  {
    icon: MessageSquare,
    title: 'Clear communication',
    body: 'Regular, jargon-free updates. You always know where things stand and what happens next.',
  },
  {
    icon: TrendingUp,
    title: 'Built to grow',
    body: 'Structured to scale with you — add pages, features, and traffic without a rebuild.',
  },
  {
    icon: ShieldCheck,
    title: 'Ownership, end to end',
    body: 'I take responsibility for the outcome — from the first call to launch and beyond — not just my slice of it.',
    span: 'md:col-span-2',
  },
  {
    icon: Sparkles,
    title: 'Attention to detail',
    body: 'The small, considered touches that make a product feel trustworthy and premium.',
  },
]

export default function Principles() {
  return (
    <div className="border-t border-border bg-bg-subtle">
      <Section>
        <Container>
          <SectionHeading
            eyebrow="How I work with you"
            title="Why clients keep working with me"
            intro="Not the frameworks — the things that actually decide whether a project succeeds."
          />

          <div className="mt-12 grid auto-rows-[minmax(180px,1fr)] grid-cols-1 gap-4 md:grid-cols-3">
            {cells.map((cell, i) => (
              <ScrollReveal
                key={cell.title}
                delay={i * 60}
                className={cell.span}
              >
                <div
                  className={cn(
                    'group relative flex h-full flex-col overflow-hidden rounded-xl border border-border p-7 shadow-sm transition-[transform,border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-border-strong hover:shadow-md',
                    cell.feature ? 'bg-bg-subtle' : 'bg-surface',
                  )}
                >
                  <span className="grid size-11 place-items-center rounded-lg border border-border bg-surface text-fg">
                    <cell.icon className="size-5" aria-hidden />
                  </span>
                  <h3
                    className={cn(
                      'font-display font-semibold',
                      cell.feature
                        ? 'mt-6 text-2xl sm:text-3xl'
                        : 'mt-5 text-lg',
                    )}
                  >
                    {cell.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-2 leading-relaxed text-fg-muted',
                      cell.feature ? 'max-w-md text-base' : 'text-sm',
                    )}
                  >
                    {cell.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
