import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button, Container } from '../ui'
import SeoHead from '../components/SeoHead'
import Breadcrumbs from '../components/Breadcrumbs'
import Prose from '../components/Prose'
import ImagePlaceholder from '../components/ImagePlaceholder'
import BrowserFrame from '../components/BrowserFrame'
import { getWork, workEntries } from '../content'
import { getWorkBody } from '../content/bodies'
import { testimonials } from '../data/content'
import { absoluteUrl, breadcrumbLd } from '../lib/seo'

export default function WorkDetail() {
  const { slug = '' } = useParams<{ slug: string }>()
  const entry = getWork(slug)
  const Component = getWorkBody(slug)

  if (!entry || !Component) {
    return (
      <Container className="py-24">
        <h1 className="text-4xl font-semibold">Case study not found</h1>
        <Button asChild className="mt-6">
          <Link to="/work">Back to work</Link>
        </Button>
      </Container>
    )
  }

  const fm = entry.frontmatter
  // Match by slug prefix (testimonials carry the project name in `role`) — the
  // old fm.title match never fired. Renders only when an approved quote exists.
  const testimonial = testimonials.find((t) =>
    t.role.toLowerCase().includes(slug.split('-')[0]),
  )

  // Next case study (wraps around) for continued browsing.
  const idx = workEntries.findIndex((e) => e.slug === slug)
  const next = workEntries[(idx + 1) % workEntries.length]

  const glance: { label: string; value: string }[] = [
    { label: 'Industry', value: fm.industry },
    { label: 'Role', value: fm.role },
    { label: 'Stack', value: fm.tags.join(', ') },
  ]

  return (
    <>
      <SeoHead
        title={fm.title}
        description={fm.summary}
        path={`/work/${slug}`}
        type="article"
        jsonLd={[
          breadcrumbLd([
            { name: 'Work', path: '/work' },
            { name: fm.title, path: `/work/${slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: fm.title,
            abstract: fm.summary,
            url: absoluteUrl(`/work/${slug}`),
            keywords: fm.tags.join(', '),
          },
        ]}
      />

      <Container className="py-16 sm:py-24">
        <div className="max-w-3xl">
          <Breadcrumbs
            items={[{ label: 'Work', to: '/work' }, { label: fm.title }]}
          />
          <p className="mt-8 text-xs font-medium uppercase tracking-widest text-fg-subtle">
            {fm.industry}
          </p>
          <h1 className="mt-3 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
            {fm.title}
          </h1>
          <p className="mt-4 text-lg text-fg-muted">{fm.summary}</p>
        </div>

        <BrowserFrame className="mt-10">
          {fm.cover ? (
            <img
              src={fm.cover}
              alt={`${fm.title} screenshot`}
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] w-full object-cover object-top"
            />
          ) : (
            <ImagePlaceholder
              label={`[${fm.title} Screenshot]`}
              className="aspect-[16/9] rounded-none border-0"
            />
          )}
        </BrowserFrame>

        {/* At a glance — honest spec strip (role/industry/stack + deliverables). */}
        <div className="mt-10 grid gap-8 rounded-2xl border border-border bg-bg-subtle p-8 lg:grid-cols-[1fr_1fr]">
          <dl className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {glance.map((g) => (
              <div key={g.label}>
                <dt className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                  {g.label}
                </dt>
                <dd className="mt-1 text-sm text-fg">{g.value}</dd>
              </div>
            ))}
          </dl>
          {fm.scope.length > 0 && (
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                What I delivered
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {fm.scope.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 text-sm text-fg-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-14 max-w-3xl">
          <Prose>
            <Component />
          </Prose>

          {/* Gallery — aligned composition (placeholders until real screens land).
              Full-width hero shot, then three equal tiles on one baseline. */}
          <div className="mt-16">
            <h2 className="font-display text-xl font-semibold">Gallery</h2>
            <p className="mt-2 text-sm text-fg-muted">
              A closer look at the interface and key screens.
            </p>
            {fm.gallery.length > 0 ? (
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {fm.gallery.map((g) => (
                  <figure key={g.image}>
                    <BrowserFrame>
                      <img
                        src={g.image}
                        alt={g.caption}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[16/10] w-full object-cover object-top"
                      />
                    </BrowserFrame>
                    <figcaption className="mt-2 text-xs text-fg-subtle">
                      {g.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <div className="mt-6 flex flex-col gap-4">
                <BrowserFrame>
                  <ImagePlaceholder
                    label={`[${fm.title} — Desktop, full screen]`}
                    className="aspect-[16/9] rounded-none border-0"
                  />
                </BrowserFrame>
                <div className="grid gap-4 sm:grid-cols-3">
                  {['Mobile view', 'Key screen', 'Detail'].map((kind) => (
                    <ImagePlaceholder
                      key={kind}
                      label={`[${fm.title} — ${kind}]`}
                      className="aspect-[4/3]"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {testimonial && (
            <figure className="mt-14 rounded-lg border border-border bg-bg-subtle p-8">
              <blockquote className="text-lg leading-relaxed text-fg">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-fg-muted">
                — {testimonial.name}, {testimonial.role}
              </figcaption>
            </figure>
          )}

          {/* Next case study */}
          {next && next.slug !== slug && (
            <Link
              to={`/work/${next.slug}`}
              className="group mt-14 flex items-center justify-between gap-6 rounded-2xl border border-border bg-surface p-6 shadow-sm transition-[border-color,transform] duration-[var(--duration-base)] ease-[var(--ease-out-expo)] hover:-translate-y-0.5 hover:border-border-strong sm:p-8"
            >
              <span>
                <span className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                  Next case study
                </span>
                <span className="mt-1 block font-display text-xl font-semibold tracking-tight">
                  {next.frontmatter.title}
                </span>
              </span>
              <ArrowRight
                className="size-5 shrink-0 text-fg-subtle transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1 group-hover:text-accent"
                aria-hidden
              />
            </Link>
          )}

          <div className="mt-14 border-t border-border pt-10">
            <h2 className="text-2xl font-semibold tracking-tight">
              Want a platform like this?
            </h2>
            <p className="mt-3 text-fg-muted">
              Tell me about your project — I usually reply within a day.
            </p>
            <Button asChild className="mt-6">
              <Link to="/contact">Start a project</Link>
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}
