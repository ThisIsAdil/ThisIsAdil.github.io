import { Container } from '../ui'
import ScrollReveal from '../components/ScrollReveal'

/**
 * A single large statement on open space — the Apple "let the sentence breathe"
 * beat. Sets the positioning right after the hero, before the work makes the
 * case. One accent phrase; everything else quiet.
 */
export default function StatementSection() {
  return (
    <section className="border-t border-border">
      <Container className="py-28 lg:py-40">
        <ScrollReveal>
          <p className="mx-auto max-w-4xl text-balance text-center font-display text-3xl font-semibold leading-[1.25] tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.22]">
            The best websites don’t feel clever — they feel effortless. Fast,
            clear, and easy to trust.{' '}
            <span className="text-accent">
              That’s the bar I hold every project to.
            </span>
          </p>
        </ScrollReveal>
      </Container>
    </section>
  )
}
