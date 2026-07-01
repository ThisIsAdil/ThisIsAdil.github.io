import type { CSSProperties } from 'react'
import { Container, Section } from '../ui'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { cn } from '../lib/cn'
import { testimonials } from '../data/content'

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
}

const wash: CSSProperties = {
  backgroundImage:
    'radial-gradient(110% 90% at 0% 0%, color-mix(in srgb, var(--accent-500) 12%, transparent) 0%, transparent 55%)',
}

/** Social proof — education-led, editorial asymmetric layout. */
export default function ProofSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by the founders I build with"
          intro="Partners on real education platforms — in their words."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {testimonials.map((t, i) => {
            const featured = i === 0
            return (
              <ScrollReveal
                key={t.name}
                delay={i * 80}
                className={cn(
                  'relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-10',
                  featured ? 'lg:col-span-3' : 'lg:col-span-2',
                )}
              >
                {featured && (
                  <div className="absolute inset-0" style={wash} aria-hidden />
                )}
                <span
                  className="text-gradient relative font-display text-6xl leading-none"
                  aria-hidden
                >
                  &ldquo;
                </span>

                {import.meta.env.DEV && t.temporary && (
                  <span className="relative mt-4 w-fit rounded-full border border-dashed border-border-strong px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-fg-subtle">
                    Temporary — replace before launch
                  </span>
                )}

                <blockquote
                  className={cn(
                    'relative mt-4 flex-1 text-fg',
                    featured
                      ? 'text-xl leading-relaxed sm:text-2xl'
                      : 'text-lg leading-relaxed',
                  )}
                >
                  {t.quote}
                </blockquote>

                <figcaption className="relative mt-8 flex items-center gap-3">
                  <span
                    className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-bg-subtle font-display text-sm font-semibold text-fg-muted"
                    aria-hidden
                  >
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-fg">
                      {t.name}
                    </span>
                    <span className="block text-sm text-fg-muted">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </ScrollReveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
