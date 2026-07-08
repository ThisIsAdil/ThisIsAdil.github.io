import { Check } from 'lucide-react'
import { Container, Section } from '../ui'
import SeoHead from '../components/SeoHead'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import ProcessSection from '../sections/ProcessSection'
import FinalCTA from '../sections/FinalCTA'
import { services } from '../data/content'

// Capabilities grouped by what they do FOR the client, each with a plain-English
// benefit — not a bare tech-label grid.
const capabilityGroups: {
  title: string
  items: { label: string; benefit: string }[]
}[] = [
  {
    title: 'Grow & get found',
    items: [
      { label: 'Technical SEO', benefit: 'So the right people find you on Google.' },
      { label: 'Performance & Core Web Vitals', benefit: 'Fast pages that don’t lose impatient visitors.' },
      { label: 'Analytics & reporting', benefit: 'See what’s working and what to fix.' },
      { label: 'Conversion-focused design', benefit: 'Turn more visitors into enquiries.' },
    ],
  },
  {
    title: 'Run your business',
    items: [
      { label: 'Admin dashboards', benefit: 'Manage everything from one place.' },
      { label: 'Self-serve CMS', benefit: 'Update content yourself — no developer needed.' },
      { label: 'Booking & scheduling', benefit: 'Let clients book calls, classes, or slots.' },
      { label: 'Payments & subscriptions', benefit: 'Take money online, securely.' },
    ],
  },
  {
    title: 'Serve your users',
    items: [
      { label: 'Student & customer portals', benefit: 'A private, personalised space for each user.' },
      { label: 'Secure auth & roles', benefit: 'Right access for students, staff, and admins.' },
      { label: 'AI-assisted features', benefit: 'Automate the slow parts, where it genuinely helps.' },
      { label: 'Email & OTP notifications', benefit: 'Keep users informed and verified.' },
    ],
  },
  {
    title: 'Connect & last',
    items: [
      { label: 'Third-party integrations', benefit: 'Connect the tools you already use.' },
      { label: 'Cloud deployment', benefit: 'Reliable hosting that scales with you.' },
      { label: 'Accessibility (WCAG)', benefit: 'Usable by everyone — and better for SEO.' },
      { label: 'Maintainable code you own', benefit: 'No lock-in; grow it with any developer.' },
    ],
  },
]

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
          <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
            Fast, SEO-strong sites and platforms — built to convert.
          </h1>
          <p className="mt-6 text-lg text-fg-muted">
            Three ways I help teams grow online. Every project is fixed-price and
            agreed before we start, so you know the number up front — and you own
            all the code at the end.
          </p>
        </div>

        {/* Service detail blocks */}
        <div className="mt-16 flex flex-col gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug}>
              <div className="grid gap-8 rounded-2xl border border-border bg-surface p-8 shadow-sm md:grid-cols-[1fr_1.3fr] md:p-10">
                <div className="md:border-r md:border-border md:pr-10">
                  <span className="section-index text-4xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-xs font-medium uppercase tracking-widest text-fg-subtle">
                    Who it’s for
                  </p>
                  <p className="mt-1.5 text-fg-muted">
                    {service.idealFor ?? service.forWho}
                  </p>

                  <p className="mt-5 text-lg leading-relaxed text-fg">
                    {service.outcome}
                  </p>

                  {/* Prices are deliberately kept to the call (per brand strategy).
                      Timeline qualifies the enquiry without anchoring value. */}
                  {service.timeline && (
                    <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-5">
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                          Typical timeline
                        </dt>
                        <dd className="mt-1 font-display text-xl font-semibold text-fg">
                          {service.timeline}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                          Pricing
                        </dt>
                        <dd className="mt-1 font-display text-xl font-semibold text-fg">
                          Fixed quote
                        </dd>
                      </div>
                    </dl>
                  )}
                </div>

                <div>
                  <p className="text-sm font-medium text-fg">What you get</p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-fg-muted"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-accent"
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
        <p className="mt-6 text-sm text-fg-subtle">
          Not sure which fits? Tell me what you’re building on the{' '}
          <a
            href="/contact"
            className="font-medium text-accent underline underline-offset-4"
          >
            project form
          </a>{' '}
          and I’ll point you the right way — with a clear, fixed quote scoped to
          what you actually need.
        </p>
      </Container>

      {/* Capabilities — grouped, client-benefit-led */}
      <Section className="border-t border-border bg-bg-subtle">
        <Container>
          <SectionHeading
            title="What I can build into your product"
            intro="Beyond a website — the pieces that turn a site into a system that works for your business. Mix and match; every project is scoped to what you need."
          />
          <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {capabilityGroups.map((group) => (
              <ScrollReveal key={group.title}>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-col divide-y divide-border border-y border-border">
                  {group.items.map((item) => (
                    <li key={item.label} className="py-3">
                      <p className="text-sm font-medium text-fg">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm text-fg-muted">
                        {item.benefit}
                      </p>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <ProcessSection />

      <FinalCTA />
    </>
  )
}
