import { MessageSquare, Search, Wrench, Zap } from 'lucide-react'
import Eyebrow from '../components/Eyebrow'
import { Container, Section } from '../ui'
import SeoHead from '../components/SeoHead'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import Headshot from '../components/Headshot'
import FinalCTA from '../sections/FinalCTA'
import { personLd } from '../lib/seo'
import { site } from '../config/site'

const principles = [
  {
    icon: MessageSquare,
    title: 'Direct and senior',
    body: 'You work with me, not a middle layer — clearer communication and faster decisions.',
  },
  {
    icon: Zap,
    title: 'Performance-obsessed',
    body: 'Fast load times and strong Core Web Vitals, treated as a default, not an add-on.',
  },
  {
    icon: Search,
    title: 'Findable by design',
    body: 'SEO and clean, semantic structure built in from the first line — not bolted on later.',
  },
  {
    icon: Wrench,
    title: 'Built to last',
    body: 'Maintainable, well-structured code you and your team can grow with over time.',
  },
]

export default function About() {
  return (
    <>
      <SeoHead
        title="About"
        description="Adil Shaikh — freelance full-stack developer helping academies and ambitious teams ship fast, findable, high-converting websites and platforms."
        path="/about"
        jsonLd={personLd()}
      />

      {/* Intro */}
      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-[minmax(0,320px)_1fr] md:items-start md:gap-16">
          <ScrollReveal>
            <div className="relative mx-auto w-full max-w-[300px]">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-2xl border border-border"
              />
              <div className="overflow-hidden rounded-xl border border-border shadow-md">
                <Headshot />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="max-w-2xl">
              <Eyebrow>About</Eyebrow>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                A full-stack developer who cares about the details.
              </h1>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-fg-muted">
                <p>
                  I’m Adil Shaikh, a freelance full-stack developer based in{' '}
                  {site.location}, working with clients worldwide. Since 2022
                  I’ve built websites and platforms for academies, educational
                  institutes, and businesses.
                </p>
                <p>
                  My focus is full-stack work that performs — student portals,
                  admin systems, and AI-assisted tools for education, alongside
                  fast marketing sites for professional services. I care about
                  the parts that compound: performance, SEO, and code that stays
                  maintainable as you grow.
                </p>
                <p>
                  I work directly with every client. No account managers, no
                  handoffs — just clear communication and someone genuinely
                  invested in the outcome.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Principles */}
      <div className="border-t border-border bg-bg-subtle">
        <Section>
          <Container>
            <SectionHeading eyebrow="How I work" title="What you can expect" />
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {principles.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 60}>
                  <div className="flex gap-4">
                    <span
                      className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-surface text-fg"
                      aria-hidden
                    >
                      <p.icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-fg-muted">{p.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </Section>
      </div>

      <FinalCTA />
    </>
  )
}
