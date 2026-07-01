import { ArrowUpRight, CalendarClock, Mail, MessageCircle } from 'lucide-react'
import Eyebrow from '../components/Eyebrow'
import { Card, Container } from '../ui'
import SeoHead from '../components/SeoHead'
import { site } from '../config/site'

const channels = [
  {
    icon: CalendarClock,
    title: 'Book a call',
    body: 'A 30-minute discovery call over Google Meet to talk through your project.',
    href: site.contact.calcom,
    action: 'cal.com',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    body: 'Prefer a quick, informal chat? Message me and I’ll get back to you.',
    href: site.contact.whatsapp,
    action: 'Message',
  },
  {
    icon: Mail,
    title: 'Email',
    body: 'Send your project details and I’ll reply within a day.',
    href: `mailto:${site.contact.email}`,
    action: site.contact.email,
  },
]

export default function Contact() {
  return (
    <>
      <SeoHead
        title="Start a project"
        description="Tell me about your project. Book a call, message on WhatsApp, or send an email — I usually reply within a day."
        path="/contact"
      />
      <Container className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
            Start a project
          </h1>
          <p className="mt-6 text-lg text-fg-muted">
            Tell me what you’re building and where you want it to go. No
            obligation — I usually reply within a day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card interactive className="flex h-full flex-col p-7">
                <span
                  className="grid size-11 place-items-center rounded-md border border-border bg-bg-subtle text-fg"
                  aria-hidden
                >
                  <c.icon className="size-5" />
                </span>
                <h2 className="mt-5 font-display text-lg font-semibold">
                  {c.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-fg-muted">{c.body}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-fg">
                  {c.action}
                  <ArrowUpRight
                    className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </Card>
            </a>
          ))}
        </div>

        <p className="mt-12 text-sm text-fg-subtle">
          Based in {site.location} — working with clients worldwide.
        </p>
      </Container>
    </>
  )
}
