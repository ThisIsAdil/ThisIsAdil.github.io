import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button, Container, Section } from '../ui'
import ScrollReveal from '../components/ScrollReveal'
import Headshot from '../components/Headshot'
import { testimonials } from '../data/content'

// The two real academy partners. Quotes aren't approved to publish yet, so each
// card carries an honest, factual note about the work (not a fabricated opinion)
// plus a link to the case study. Add an approved quote to `testimonials` in
// data/content.ts and it renders in place of the note automatically.
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

// The promise, stated once (it used to be repeated across five sections).
const PROMISES = [
  'The person you talk to is the person who builds it.',
  'One point of contact — no account managers, no handoffs.',
  'I own the outcome from the first call to launch and beyond.',
]

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
}

/**
 * The trust beat: who you're actually hiring, and who has already trusted him
 * with it. Merges the old About snippet + Proof section and says the
 * direct-from-me promise exactly once.
 */
export default function PersonProof() {
  const quoteFor = (slug: string) =>
    testimonials.find((t) => t.role.toLowerCase().includes(slug.split('-')[0]))
      ?.quote ?? null

  return (
    <div className="border-t border-border">
      <Section>
        <Container>
          {/* Who you're hiring */}
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <ScrollReveal>
              <div className="relative mx-auto w-full">
                <div
                  aria-hidden
                  className="absolute -inset-3 -z-10 rounded-2xl border border-border"
                />
                <div className="overflow-hidden rounded-xl border border-border shadow-md">
                  <Headshot className="aspect-[1414/1113]" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <p className="text-sm font-medium text-fg-subtle">
                The person behind the work
              </p>
              <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
                You’re hiring a person, not a pipeline.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-muted">
                I’m Adil Shaikh — a full-stack developer who’s spent the last
                few years building EdTech platforms and fast marketing sites for
                teams around the world. Hiring a developer you’ve never met is a
                leap of faith, especially across time zones. So I keep the deal
                simple and the trust earned:
              </p>
              <ul className="mt-6 grid max-w-xl gap-3">
                {PROMISES.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span className="text-fg">{p}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="secondary" className="mt-8">
                <Link to="/about">More about me</Link>
              </Button>
            </ScrollReveal>
          </div>

          {/* Who's already trusted him */}
          <div className="mt-20 border-t border-border pt-14">
            <h3 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Two academies already trusted me to build the platform their
              business runs on.
            </h3>

            <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
              {partners.map((p, i) => {
                const quote = quoteFor(p.slug)
                return (
                  <ScrollReveal
                    key={p.name}
                    delay={i * 80}
                    className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 shadow-sm sm:p-10"
                  >
                    <p className="flex-1 text-lg leading-relaxed text-fg">
                      {quote ?? p.note}
                    </p>
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
                        <span className="block text-sm text-fg-muted">
                          {p.role}
                        </span>
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
          </div>
        </Container>
      </Section>
    </div>
  )
}
