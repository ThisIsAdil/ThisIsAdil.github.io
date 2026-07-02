import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Container } from '../ui'
import Eyebrow from '../components/Eyebrow'
import BrowserFrame from '../components/BrowserFrame'
import ImagePlaceholder from '../components/ImagePlaceholder'
import ScrollReveal from '../components/ScrollReveal'
import { cn } from '../lib/cn'
import { getWork, type WorkEntry } from '../content'

// The two projects to feature on the homepage, in order.
const FEATURED_SLUGS = ['future-meds-academy', 'blooms-academy']

function WorkItem({
  entry,
  index,
  total,
}: {
  entry: WorkEntry
  index: number
  total: number
}) {
  const { slug, frontmatter: fm } = entry
  const flip = index % 2 === 1

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
      {/* Visual */}
      <ScrollReveal className={cn(flip && 'lg:order-2')}>
        <Link
          to={`/work/${slug}`}
          aria-label={`${fm.title} — read the case study`}
          className="group relative block"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-accent/[0.07] blur-3xl transition-opacity duration-500 group-hover:opacity-100 lg:opacity-70"
          />
          <BrowserFrame className="shadow-xl transition-[transform,border-color] duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover:-translate-y-1.5 group-hover:border-accent/50">
            <ImagePlaceholder
              label={`[${fm.title} Screenshot]`}
              className="aspect-[16/10] rounded-none border-0 transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
            />
          </BrowserFrame>
        </Link>
      </ScrollReveal>

      {/* Narrative */}
      <ScrollReveal delay={120} className={cn(flip && 'lg:order-1')}>
        <div className="flex items-baseline gap-3">
          <span className="font-display text-5xl font-semibold leading-none tabular-nums text-accent sm:text-6xl">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-display text-sm font-medium tabular-nums text-fg-subtle">
            / {String(total).padStart(2, '0')}
          </span>
        </div>

        <Eyebrow className="mt-6">{fm.industry}</Eyebrow>
        <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {fm.title}
        </h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-fg-muted">
          {fm.summary}
        </p>

        {fm.highlights.length > 0 && (
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {fm.highlights.map((item) => (
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
        )}

        <Link
          to={`/work/${slug}`}
          className="group mt-9 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
        >
          Read the case study
          <ArrowRight
            className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </ScrollReveal>
    </div>
  )
}

/**
 * Selected work — two flagship builds, told properly. Client-language
 * highlights (what the business got), not a tech-stack dump; native-scroll
 * reveals, alternating sides, lots of room to breathe.
 */
export default function WorkShowcase() {
  const items = FEATURED_SLUGS.map((slug) => getWork(slug)).filter(
    (e): e is WorkEntry => Boolean(e),
  )

  return (
    <section
      id="work"
      aria-label="Selected work"
      className="scroll-mt-20 border-t border-border"
    >
      <Container className="pb-4 pt-24 lg:pt-32">
        <Eyebrow>Selected work</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Two platforms I’m proud to put my name on.
        </h2>
        <p className="measure mt-4 text-lg text-fg-muted">
          Real products for real academies — where structure, performance, and
          product thinking did the heavy lifting.
        </p>
      </Container>

      <Container>
        <div className="mt-16 space-y-24 sm:space-y-32 lg:space-y-40">
          {items.map((entry, i) => (
            <WorkItem
              key={entry.slug}
              entry={entry}
              index={i}
              total={items.length}
            />
          ))}
        </div>
      </Container>

      <Container className="pb-24 pt-20 text-center">
        <Link
          to="/work"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
        >
          See the full archive
          <ArrowUpRight
            className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </Container>
    </section>
  )
}
