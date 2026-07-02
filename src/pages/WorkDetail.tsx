import { Link, useParams } from 'react-router-dom'
import { Button, Container } from '../ui'
import SeoHead from '../components/SeoHead'
import Breadcrumbs from '../components/Breadcrumbs'
import Prose from '../components/Prose'
import ImagePlaceholder from '../components/ImagePlaceholder'
import BrowserFrame from '../components/BrowserFrame'
import { getWork } from '../content'
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
  const testimonial = testimonials.find((t) => t.role.includes(fm.title))

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
          <p className="mt-4 text-lg text-fg-muted">{fm.role}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {fm.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border bg-bg-subtle px-2.5 py-0.5 text-xs text-fg-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <BrowserFrame className="mt-10">
          <ImagePlaceholder
            label={`[${fm.title} Screenshot]`}
            className="aspect-[16/9] rounded-none border-0"
          />
        </BrowserFrame>

        <div className="mt-14 max-w-3xl">
          <Prose>
            <Component />
          </Prose>

          {/* Gallery — bento composition (placeholders for now). */}
          <div className="mt-16">
            <h2 className="font-display text-xl font-semibold">Gallery</h2>
            <p className="mt-2 text-sm text-fg-muted">
              A closer look at the interface and key screens.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-6">
              <BrowserFrame className="sm:col-span-4">
                <ImagePlaceholder
                  label={`[${fm.title} — Desktop]`}
                  className="aspect-[16/10] rounded-none border-0"
                />
              </BrowserFrame>
              <ImagePlaceholder
                label={`[${fm.title} — Mobile]`}
                className="aspect-[3/4] sm:col-span-2"
              />
              <ImagePlaceholder
                label={`[${fm.title} — Detail 1]`}
                className="aspect-[16/9] sm:col-span-3"
              />
              <ImagePlaceholder
                label={`[${fm.title} — Detail 2]`}
                className="aspect-[16/9] sm:col-span-3"
              />
            </div>
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

          <div className="mt-14 border-t border-border pt-10">
            <h2 className="text-2xl font-semibold tracking-tight">
              Want results like this?
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
