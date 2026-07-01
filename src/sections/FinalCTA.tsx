import { Link } from 'react-router-dom'
import { CalendarClock } from 'lucide-react'
import { Button, Container, Section } from '../ui'
import ScrollReveal from '../components/ScrollReveal'
import { site } from '../config/site'

export default function FinalCTA() {
  return (
    <div className="border-t border-border bg-bg-subtle">
      <Section>
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Let’s build something fast, findable, and built to convert.
              </h2>
              <p className="mt-5 text-lg text-fg-muted">
                Tell me about your project. No obligation — I usually reply
                within a day.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Start a project</Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  iconLeft={<CalendarClock size={18} />}
                >
                  <a
                    href={site.contact.calcom}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a call
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </div>
  )
}
