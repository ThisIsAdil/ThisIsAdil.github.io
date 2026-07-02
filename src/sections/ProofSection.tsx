import { ArrowRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, Section } from '../ui'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { testimonials } from '../data/content'

// Two real academy partners. Their quotes aren't approved to publish yet, so
// each card carries an honest, factual note about the work (not a fabricated
// opinion) plus a link to the case study. To publish a real quote, add it to
// `testimonials` in data/content.ts — it renders in place of the note.
const partners = [
  {
    name: 'Future Meds Academy',
    role: 'EdTech · Medical entrance prep',
    slug: 'future-meds-academy',
    note: 'A full-stack learning platform — marketing site, student portal, faculty tools, and an admin CMS the team runs themselves. Built for trust and long-term scale.',
  },
  {
    name: 'Blooms Academy',
    role: 'EdTech · IELTS',
    slug: 'blooms-academy',
    note: 'A multi-role IELTS platform with AI-assisted writing feedback, a timed exam engine, live classes, and integrated payments.',
  },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
}

export default function ProofSection() {
  const quoteFor = (slug: string) =>
    testimonials.find((t) => t.role.toLowerCase().includes(slug.split('-')[0]))
      ?.quote ?? null

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Proof"
          title="Trusted by the founders I build with"
          intro="Two academies I’ve built real education platforms with — from the first call to launch, and beyond."
        />

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
          {partners.map((p, i) => {
            const quote = quoteFor(p.slug)
            return (
              <ScrollReveal
                key={p.name}
                delay={i * 80}
                className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-10"
              >
                {quote ? (
                  <>
                    <Quote className="size-7 text-accent" aria-hidden />
                    <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-fg">
                      {quote}
                    </blockquote>
                  </>
                ) : (
                  <p className="flex-1 text-lg leading-relaxed text-fg">
                    {p.note}
                  </p>
                )}

                <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                  <span
                    className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-bg-subtle font-display text-sm font-semibold text-fg-muted"
                    aria-hidden
                  >
                    {initials(p.name)}
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-medium text-fg">
                      {p.name}
                    </span>
                    <span className="block text-sm text-fg-muted">{p.role}</span>
                  </span>
                  <Link
                    to={`/work/${p.slug}`}
                    aria-label={`Read the ${p.name} case study`}
                    className="group inline-flex items-center gap-1 text-sm font-medium text-fg transition-colors hover:text-accent"
                  >
                    Case study
                    <ArrowRight
                      className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </figcaption>
              </ScrollReveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
