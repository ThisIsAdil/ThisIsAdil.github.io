import type { ReactNode } from 'react'
import { Head } from 'vite-react-ssg'

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
        <title>Styleguide — Build with Adil</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div>
        <p className="text-sm font-medium uppercase tracking-widest text-fg-subtle">
          Internal · not indexed
        </p>
        <h1 className="mt-3 text-6xl font-semibold">Styleguide</h1>
        <p className="measure mt-4 text-fg-muted">
          Design foundation (M1): tokens, type scale, shape, elevation. Toggle
          the theme in the header to verify every token in light and dark.
        </p>

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

        <Section title="Actions — button styles (previews; primitives land in M2)">
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-md bg-fg px-5 py-2.5 text-sm font-medium text-bg">
              Primary (ink)
            </button>
            <button className="rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium hover:border-fg">
              Secondary
            </button>
            <button className="rounded-md px-5 py-2.5 text-sm font-medium text-fg-muted hover:bg-bg-subtle hover:text-fg">
              Ghost
            </button>
            <a
              href="#"
              className="text-sm font-medium text-accent underline underline-offset-4"
            >
              Link
            </a>
          </div>
        </Section>
      </div>
    </>
  )
}
