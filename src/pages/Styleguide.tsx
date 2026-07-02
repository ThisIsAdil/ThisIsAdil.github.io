import type { ReactNode } from 'react'
import { Head } from 'vite-react-ssg'
import { ArrowRight } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
  Container,
  TextLink,
} from '../ui'
import { site } from '../config/site'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border py-14 first:border-t-0">
      <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-fg-subtle">
        {title}
      </h2>
      {children}
    </section>
  )
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <span className="w-28 shrink-0 text-sm text-fg-subtle">{label}</span>
      <div className="flex flex-wrap items-center gap-4">{children}</div>
    </div>
  )
}

const SEMANTIC_TOKENS = [
  'bg',
  'bg-subtle',
  'surface',
  'fg',
  'fg-muted',
  'fg-subtle',
  'border',
  'border-strong',
  'accent',
  'accent-fg',
] as const

const RADII = ['sm', 'md', 'lg', 'xl'] as const
const SHADOWS = ['sm', 'md', 'lg'] as const

export default function Styleguide() {
  return (
    <>
      <Head>
        <title>Styleguide — Adil Shaikh</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Container className="py-16">
        <p className="text-sm font-medium uppercase tracking-widest text-fg-subtle">
          Internal · not indexed
        </p>
        <h1 className="mt-3 text-6xl font-semibold">Styleguide</h1>
        <p className="measure mt-4 text-fg-muted">
          The design system, single-sourced. Toggle the theme in the header to
          verify every token and component in light and dark.
        </p>

        {/* ── Foundations ─────────────────────────────────────────────── */}
        <Section title="Color — semantic tokens">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {SEMANTIC_TOKENS.map((token) => (
              <div key={token}>
                <div
                  className="h-16 w-full rounded-md border border-border"
                  style={{ backgroundColor: `var(--color-${token})` }}
                />
                <p className="mt-2 text-sm">{token}</p>
                <p className="text-xs text-fg-subtle">--color-{token}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Typography — display (Satoshi) + body (Inter)">
          <div className="space-y-4">
            <p className="text-7xl font-semibold">Fast, findable.</p>
            <p className="text-6xl font-semibold">Built to convert.</p>
            <p className="text-5xl font-semibold">Engineered with care.</p>
            <p className="text-4xl font-semibold">Section heading</p>
            <p className="font-display text-2xl font-medium">
              Subsection heading
            </p>
            <div className="measure space-y-3 pt-4">
              <p className="text-lg">
                Body large — the quick brown fox jumps over the lazy dog.
                Premium sites earn trust through clarity, not clutter.
              </p>
              <p>
                Body base (Inter) — the quick brown fox jumps over the lazy dog.
                Comfortable measure, tuned line-height, quiet letter-spacing.
              </p>
              <p className="text-sm text-fg-muted">
                Small / muted — supporting detail and captions.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Shape — radius">
          <div className="flex flex-wrap gap-6">
            {RADII.map((r) => (
              <div key={r} className="text-center">
                <div
                  className="size-24 border border-border-strong bg-bg-subtle"
                  style={{ borderRadius: `var(--radius-${r})` }}
                />
                <p className="mt-2 text-sm">radius-{r}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Elevation — shadow">
          <div className="flex flex-wrap gap-6">
            {SHADOWS.map((s) => (
              <div
                key={s}
                className="grid size-28 place-items-center rounded-lg border border-border bg-surface text-sm text-fg-muted"
                style={{ boxShadow: `var(--shadow-${s})` }}
              >
                shadow-{s}
              </div>
            ))}
          </div>
        </Section>

        {/* ── Components ──────────────────────────────────────────────── */}
        <Section title="Button — variants">
          <div className="space-y-5">
            <Row label="Variant">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </Row>
            <Row label="Size">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </Row>
            <Row label="With icon">
              <Button iconRight={<ArrowRight className="size-4" />}>
                Start a project
              </Button>
              <Button
                variant="secondary"
                iconLeft={<ArrowRight className="size-4" />}
              >
                Continue
              </Button>
            </Row>
            <Row label="State">
              <Button loading>Sending</Button>
              <Button disabled>Disabled</Button>
            </Row>
          </div>
        </Section>

        <Section title="Links">
          <div className="space-y-3">
            <p className="text-fg-muted">
              An <TextLink to="/work">internal route link</TextLink> uses SPA
              navigation, while an{' '}
              <TextLink href={site.social.github}>external link</TextLink> opens
              safely in a new tab.
            </p>
          </div>
        </Section>

        <Section title="Card">
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="p-6">
              <h3 className="font-display text-lg font-medium">Static card</h3>
              <p className="mt-2 text-sm text-fg-muted">
                Surface, hairline border, medium-soft radius. Padding is
                composed via className.
              </p>
            </Card>
            <Card interactive className="p-6">
              <h3 className="font-display text-lg font-medium">Interactive</h3>
              <p className="mt-2 text-sm text-fg-muted">
                Hover me — subtle lift + border emphasis for clickable cards.
              </p>
            </Card>
          </div>
        </Section>

        <Section title="Badge">
          <div className="flex flex-wrap gap-3">
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Available for work</Badge>
          </div>
        </Section>

        <Section title="Accordion (Radix) — used for FAQ">
          <div className="max-w-2xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="a">
                <AccordionTrigger>
                  What is your typical project timeline?
                </AccordionTrigger>
                <AccordionContent>
                  Most marketing sites ship in 2–4 weeks; larger web apps run
                  longer. We agree a clear timeline before starting.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>How does pricing work?</AccordionTrigger>
                <AccordionContent>
                  Projects are quoted up front based on scope, so there are no
                  surprises.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="c">
                <AccordionTrigger>Who owns the code?</AccordionTrigger>
                <AccordionContent>
                  You do — full ownership of the code and content on delivery.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Section>
      </Container>
    </>
  )
}
