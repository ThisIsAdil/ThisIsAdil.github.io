import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow'
import { Button, Container, Section } from '../ui'
import ScrollReveal from '../components/ScrollReveal'
import Headshot from '../components/Headshot'

export default function AboutSnippet() {
  return (
    <div className="border-t border-border">
      <Section>
        <Container>
          <div className="grid gap-12 md:grid-cols-[minmax(0,300px)_1fr] md:items-center md:gap-16">
            <ScrollReveal>
              <div className="relative mx-auto w-full max-w-[280px]">
                {/* layered offset frame — a small crafted detail */}
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
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Senior engineering, direct from the developer.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-fg-muted">
                  I’m Adil Shaikh, a full-stack developer focused on fast,
                  SEO-strong websites and platforms. I’ve built full-stack
                  EdTech systems — student portals, admin tools, AI-assisted
                  features — and marketing sites for businesses and professional
                  services. I care about performance, clarity, and work that
                  holds up over time.
                </p>
                <Button asChild variant="secondary" className="mt-7">
                  <Link to="/about">More about me</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </div>
  )
}
