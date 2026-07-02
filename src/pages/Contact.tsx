import { useState, type FormEvent } from 'react'
import { ArrowUpRight, CalendarClock, Check, Mail, MessageCircle } from 'lucide-react'
import { Button, Container } from '../ui'
import SeoHead from '../components/SeoHead'
import Headshot from '../components/Headshot'
import { site } from '../config/site'

const channels = [
  {
    icon: CalendarClock,
    title: 'Book a call',
    body: 'A 30-minute discovery call to talk it through.',
    href: site.contact.calcom,
    action: 'cal.com',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    body: 'Prefer a quick, informal chat?',
    href: site.contact.whatsapp,
    action: 'Message',
  },
  {
    icon: Mail,
    title: 'Email',
    body: 'Send details and I’ll reply within a day.',
    href: `mailto:${site.contact.email}`,
    action: site.contact.email,
  },
]

const PROJECT_TYPES = [
  'Academy / learning platform',
  'Business or marketing website',
  'Performance & SEO rebuild',
  'Something else',
]
const TIMELINES = ['As soon as possible', '1–3 months', '3+ months', 'Just exploring']
const BUDGETS = [
  'Prefer to discuss on a call',
  'Under $2,000',
  '$2,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
]

const fieldLabel = 'block text-sm font-medium text-fg'
const fieldBase =
  'mt-2 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-fg transition-colors placeholder:text-fg-subtle focus:border-border-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-ring)]'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const get = (k: string) => String(data.get(k) ?? '').trim()

    const payload = {
      name: get('name'),
      email: get('email'),
      projectType: get('projectType'),
      timeline: get('timeline'),
      budget: get('budget'),
      message: get('message'),
    }

    // With a Web3Forms key, submit it directly so I get an email. No key set →
    // fall back to a pre-filled mailto so the form always works on a static host.
    if (site.contact.web3formsKey) {
      setSubmitting(true)
      setError(false)
      // Multipart FormData is a CORS-simple request (no preflight) — the robust,
      // documented way to call Web3Forms from the browser. `data` already holds
      // the form fields (incl. the botcheck honeypot).
      data.append('access_key', site.contact.web3formsKey)
      data.append('subject', `New project enquiry — ${payload.name || 'website'}`)
      data.append('from_name', payload.name || 'Website enquiry')
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: data,
        })
        const json = (await res.json()) as { success?: boolean }
        if (json.success) {
          setSent(true)
          form.reset()
        } else {
          setError(true)
        }
      } catch {
        setError(true)
      } finally {
        setSubmitting(false)
      }
      return
    }

    const subject = `Project enquiry — ${payload.name || 'new project'}`
    const body = [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Project: ${payload.projectType}`,
      `Timeline: ${payload.timeline}`,
      `Budget: ${payload.budget}`,
      '',
      payload.message,
    ].join('\n')
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <SeoHead
        title="Start a project"
        description="Tell me about your project. Share a few details and I’ll reply within a day — or book a call, message on WhatsApp, or send an email."
        path="/contact"
      />
      <Container className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
            Start a project
          </h1>
          <p className="mt-6 text-lg text-fg-muted">
            Tell me what you’re building and where you want it to go. A few
            details up front means our first conversation is useful, not a
            questionnaire. No obligation — I usually reply within a day.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          {/* Qualification form */}
          <div>
            {sent ? (
              <div className="rounded-2xl border border-border bg-bg-subtle p-8 sm:p-10">
                <span className="grid size-11 place-items-center rounded-full bg-accent/10 text-accent">
                  <Check className="size-5" aria-hidden />
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold">
                  Thanks — that’s on its way.
                </h2>
                <p className="mt-3 text-fg-muted">
                  {site.contact.web3formsKey
                    ? 'I’ve got your details and I’ll reply within a day. If it’s urgent, WhatsApp is fastest.'
                    : 'Your email app should have opened with the details filled in — just hit send. If it didn’t, reach me directly on WhatsApp or at ' +
                      site.contact.email +
                      '.'}
                </p>
                <Button
                  variant="secondary"
                  className="mt-6"
                  onClick={() => setSent(false)}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-6">
                {/* Honeypot — hidden from humans; bots fill it and get rejected. */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  style={{ display: 'none' }}
                />
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={fieldLabel}>
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className={fieldBase}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={fieldLabel}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className={fieldBase}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="projectType" className={fieldLabel}>
                      What are you building?
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue={PROJECT_TYPES[0]}
                      className={fieldBase}
                    >
                      {PROJECT_TYPES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className={fieldLabel}>
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      defaultValue={TIMELINES[1]}
                      className={fieldBase}
                    >
                      {TIMELINES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className={fieldLabel}>
                    Budget range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    defaultValue={BUDGETS[0]}
                    className={fieldBase}
                  >
                    {BUDGETS.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                  <p className="mt-2 text-sm text-fg-subtle">
                    A rough range helps me suggest the right scope — projects are
                    fixed-price, agreed before we start.
                  </p>
                </div>

                <div>
                  <label htmlFor="message" className={fieldLabel}>
                    Tell me about the project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="What are you building, who it’s for, and what a win looks like."
                    className={fieldBase}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Button type="submit" size="lg" loading={submitting}>
                    {submitting ? 'Sending…' : 'Send project details'}
                  </Button>
                  <span className="text-sm text-fg-subtle">
                    No obligation. I usually reply within a day.
                  </span>
                </div>
                {error && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    Something went wrong sending that. Please try again, or
                    reach me on WhatsApp or at {site.contact.email}.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Alternatives + reassurance */}
          <aside className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-medium text-fg">
                Prefer to talk first?
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {channels.map((c) => (
                  <li key={c.title}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 rounded-xl border border-border bg-surface p-4 shadow-sm transition-[border-color,transform] duration-[var(--duration-base)] ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:border-border-strong"
                    >
                      <span
                        className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-bg-subtle text-fg"
                        aria-hidden
                      >
                        <c.icon className="size-4" />
                      </span>
                      <span className="flex-1">
                        <span className="flex items-center gap-1 text-sm font-medium text-fg">
                          {c.title}
                          <ArrowUpRight
                            className="size-3.5 text-fg-subtle transition-transform duration-[var(--duration-fast)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden
                          />
                        </span>
                        <span className="mt-0.5 block text-sm text-fg-muted">
                          {c.body}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-bg-subtle p-6">
              <div className="flex items-center gap-4">
                <div className="size-14 shrink-0 overflow-hidden rounded-full border border-border shadow-sm">
                  <Headshot />
                </div>
                <div>
                  <p className="font-display text-base font-semibold">
                    You’ll work directly with me
                  </p>
                  <p className="mt-0.5 text-sm text-fg-muted">
                    Based in {site.location}, working worldwide.
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-fg-muted">
                No account managers, no handoffs — the person you talk to is the
                person who builds it.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </>
  )
}
