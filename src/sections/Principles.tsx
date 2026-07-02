import {
  Check,
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

// The lead promise — the reason the rest matters.
const featurePoints = [
  'Built around your goals, not my toolkit',
  'Every decision has a reason you can see',
  'Measured against outcomes, not opinions',
]

interface Principle {
  icon: LucideIcon
  title: string
  body: string
}

const principles: Principle[] = [
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
    body: 'I take responsibility for the outcome — first call to launch and beyond — not just my slice.',
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
            eyebrow="Why me"
            title="Why clients keep working with me"
            intro="Not the frameworks — the things that actually decide whether a project succeeds."
          />

          {/* Lead feature card */}
          <ScrollReveal className="mt-12">
            <div className="grid gap-8 rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:p-12">
              <div>
                <span className="grid size-12 place-items-center rounded-xl border border-border bg-bg-subtle text-accent">
                  <Target className="size-6" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  Business-first thinking
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-fg-muted">
                  I start with what you’re actually trying to achieve — more
                  enquiries, more enrolments, growth — and build toward it. The
                  technology is a means, never the point.
                </p>
                <p className="mt-3 max-w-md text-lg font-medium text-fg">
                  That’s the difference between a website and a result.
                </p>
              </div>

              <ul className="grid gap-3 rounded-xl border border-border bg-bg-subtle p-6 sm:p-7">
                {featurePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    <span className="text-fg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Supporting principles */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <ScrollReveal
                key={p.title}
                delay={i * 60}
                className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7 shadow-sm transition-[transform,border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-border-strong hover:shadow-md"
              >
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-bg-subtle text-fg">
                  <p.icon className="size-5" aria-hidden />
                </span>
                <h4 className="mt-5 font-display text-lg font-semibold">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {p.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
