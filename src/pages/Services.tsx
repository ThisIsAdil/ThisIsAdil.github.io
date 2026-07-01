import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow'
import { Check } from 'lucide-react'
import { Badge, Button, Container, Section } from '../ui'
import SeoHead from '../components/SeoHead'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import ProcessSection from '../sections/ProcessSection'
import FinalCTA from '../sections/FinalCTA'
import { services, stack } from '../data/content'

export default function Services() {
  return (
    <>
      <SeoHead
        title="Services"
        description="Business & marketing websites, academy & learning platforms, and performance & SEO rebuilds — for teams whose growth depends on their web presence."
        path="/services"
      />

      {/* Intro */}
      <Container className="py-16 sm:py-24">
        <div className="max-w-3xl">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
            Fast, SEO-strong sites and platforms — built to convert.
          </h1>
          <p className="mt-6 text-lg text-fg-muted">
            Three ways I help teams grow online. Every engagement is engineered
            for performance, search visibility, and long-term maintainability.
          </p>
        </div>

        {/* Service detail blocks */}
        <div className="mt-16 space-y-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug}>
              <div className="grid gap-8 rounded-lg border border-border bg-surface p-8 shadow-sm md:grid-cols-[1fr_1.4fr] md:p-10">
                <div>
                  <span className="text-gradient font-display text-xl font-bold tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-semibold">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm text-fg-subtle">
                    {service.forWho}
                  </p>
                  <p className="mt-4 text-fg-muted">{service.outcome}</p>
                </div>
                <div className="md:border-l md:border-border md:pl-10">
                  <p className="text-sm font-medium text-fg">What’s included</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-fg-muted"
                      >
                        <Check
                          className="size-4 shrink-0 text-fg"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>

      {/* Process (reused from homepage for cohesion) */}
      <ProcessSection />

      {/* Stack */}
      <Section className="border-t border-border">
        <Container>
          <SectionHeading
            eyebrow="Stack"
            title="Built with modern, maintainable tools"
            intro="A proven, well-supported toolset — chosen for speed, reliability, and longevity, not novelty."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          <Button asChild className="mt-10">
            <Link to="/contact">Start a project</Link>
          </Button>
        </Container>
      </Section>

      <FinalCTA />
    </>
  )
}
