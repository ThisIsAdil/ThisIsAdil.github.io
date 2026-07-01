import { Container, Section } from '../ui'
import ScrollReveal from '../components/ScrollReveal'
import { proofNote } from '../data/content'
import { site } from '../config/site'

/**
 * Stands in for testimonials until real, attributed quotes exist. A genuine
 * first-person commitment in Adil's voice — honest, not fabricated proof.
 */
export default function ProofSection() {
  return (
    <Section>
      <Container>
        <ScrollReveal>
          <figure className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-fg-subtle">
              Why work with me
            </p>
            <blockquote className="mt-6 text-balance font-display text-2xl font-medium leading-snug sm:text-3xl">
              {proofNote}
            </blockquote>
            <figcaption className="mt-6 text-sm text-fg-muted">
              — {site.author}, {site.title}
            </figcaption>
          </figure>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
