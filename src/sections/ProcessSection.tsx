import { Container, Section } from '../ui'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { process } from '../data/content'

/**
 * Process as a connected vertical timeline, with the section intro sticky
 * alongside it (sticky storytelling). Gradient nodes + line tie it to the brand.
 */
export default function ProcessSection() {
  return (
    <div className="border-y border-border bg-bg-subtle">
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="How I work"
                title="A calm, senior process"
                intro="Direct communication and clear steps — no account managers, no handoffs, no surprises."
              />
            </div>

            <div className="relative">
              {/* connecting gradient line */}
              <div
                className="absolute bottom-5 left-5 top-5 w-px"
                style={{
                  backgroundImage:
                    'linear-gradient(var(--accent-500), var(--violet-500))',
                }}
                aria-hidden
              />
              <ol className="space-y-10">
                {process.map((step, i) => (
                  <ScrollReveal
                    key={step.title}
                    as="li"
                    delay={i * 80}
                    className="relative flex gap-6"
                  >
                    <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface shadow-sm">
                      <span className="text-gradient font-display text-sm font-bold">
                        {i + 1}
                      </span>
                    </span>
                    <div className="pt-1.5">
                      <h3 className="font-display text-lg font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-fg-muted">{step.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
