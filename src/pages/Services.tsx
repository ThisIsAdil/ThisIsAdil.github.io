import { Link } from 'react-router-dom'
import Eyebrow from '../components/Eyebrow'
import {
  BarChart3,
  CalendarClock,
  Check,
  Cloud,
  CreditCard,
  FileText,
  Gauge,
  LayoutDashboard,
  Lock,
  Plug,
  Search,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { Button, Container, Section } from '../ui'
import SeoHead from '../components/SeoHead'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeading from '../components/SectionHeading'
import ProcessSection from '../sections/ProcessSection'
import FinalCTA from '../sections/FinalCTA'
import { services } from '../data/content'

const capabilities: { icon: LucideIcon; label: string }[] = [
  { icon: Sparkles, label: 'AI integration' },
  { icon: CreditCard, label: 'Payment gateways' },
  { icon: Lock, label: 'Secure authentication' },
  { icon: LayoutDashboard, label: 'Admin dashboards' },
  { icon: FileText, label: 'Content management (CMS)' },
  { icon: CalendarClock, label: 'Booking & scheduling' },
  { icon: BarChart3, label: 'Analytics & reporting' },
  { icon: Search, label: 'Technical SEO' },
  { icon: Gauge, label: 'Performance optimization' },
  { icon: Plug, label: 'Third-party API integrations' },
  { icon: Cloud, label: 'Cloud deployment' },
  { icon: Check, label: 'Accessibility (WCAG)' },
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

      {/* Capabilities */}
      <Section className="border-t border-border">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="What I can build into your product"
            intro="Beyond a website — the features that turn a site into a system that works for your business."
          />
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 shadow-sm transition-[transform,border-color] duration-[var(--duration-base)] ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:border-border-strong"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-bg-subtle text-fg">
                  <c.icon className="size-5" aria-hidden />
                </span>
                <span className="text-sm font-medium">{c.label}</span>
              </div>
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
