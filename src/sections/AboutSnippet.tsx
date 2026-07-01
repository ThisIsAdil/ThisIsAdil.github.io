import { Link } from 'react-router-dom'
import { Button, Container, Section } from '../ui'
import ScrollReveal from '../components/ScrollReveal'

export default function AboutSnippet() {
  return (
    <div className="border-t border-border">
      <Section>
        <Container>
          <ScrollReveal>
            <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
              {/* Monogram placeholder until a real photo is provided. */}
              <div
                className="grid size-24 shrink-0 place-items-center rounded-xl border border-border bg-bg-subtle font-display text-2xl font-semibold text-fg-muted"
                aria-hidden
              >
                AS
              </div>
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight">
                  Senior engineering, direct from the developer.
                </h2>
                <p className="mt-4 text-fg-muted">
                  I’m Adil Shaikh, a full-stack developer focused on fast,
                  SEO-strong websites and platforms. I’ve built full-stack
                  EdTech systems — student portals, admin tools, AI-assisted
                  features — and marketing sites for businesses and professional
                  services. I care about performance, clarity, and work that
                  holds up over time.
                </p>
                <Button asChild variant="secondary" className="mt-6">
                  <Link to="/about">More about me</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </div>
  )
}
