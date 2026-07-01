import { Container, Section } from '../ui'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { process } from '../data/content'

export default function ProcessSection() {
  return (
    <div className="border-y border-border bg-bg-subtle">
      <Section>
        <Container>
          <SectionHeading
            eyebrow="How I work"
            title="A calm, senior process"
            intro="Direct communication and clear steps — no account managers, no handoffs, no surprises."
          />

          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <ScrollReveal key={step.title} as="li" delay={i * 60}>
                <span className="font-display text-sm font-semibold text-fg-subtle">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-fg-muted">{step.description}</p>
              </ScrollReveal>
            ))}
          </ol>
        </Container>
      </Section>
    </div>
  )
}
