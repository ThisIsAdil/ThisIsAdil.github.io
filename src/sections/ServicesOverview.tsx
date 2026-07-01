import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card, Container, Section } from '../ui'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { services } from '../data/content'

export default function ServicesOverview() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I build"
          intro="Three ways I help teams grow online — each engineered for performance, SEO, and long-term maintainability."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 60}>
              <Card className="flex h-full flex-col p-7">
                <h3 className="font-display text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-fg-subtle">{service.forWho}</p>
                <p className="mt-4 text-fg-muted">{service.outcome}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.includes.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-bg-subtle px-2.5 py-0.5 text-xs text-fg-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-sm text-fg-muted">
                    {service.priceFrom
                      ? `From ${service.priceFrom}`
                      : 'Custom quote'}
                  </span>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-sm font-medium text-fg transition-colors hover:text-fg-muted"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
