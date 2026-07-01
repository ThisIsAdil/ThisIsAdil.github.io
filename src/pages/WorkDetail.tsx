import { Link, useParams } from 'react-router-dom'
import { Button, Container } from '../ui'
import SeoHead from '../components/SeoHead'
import Breadcrumbs from '../components/Breadcrumbs'
import Prose from '../components/Prose'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { getWork } from '../content'
import { testimonials } from '../data/content'
import { absoluteUrl, breadcrumbLd } from '../lib/seo'

export default function WorkDetail() {
  const { slug = '' } = useParams<{ slug: string }>()
  const entry = getWork(slug)

  if (!entry) {
    return (
      <Container className="py-24">
        <h1 className="text-4xl font-semibold">Case study not found</h1>
        <Button asChild className="mt-6">
          <Link to="/work">Back to work</Link>
        </Button>
      </Container>
    )
  }

  const { frontmatter: fm, Component } = entry
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

        <ImagePlaceholder
          label={`[${fm.title} Screenshot]`}
          className="mt-10 aspect-[16/9]"
        />

        <div className="mt-14 max-w-3xl">
          <Prose>
            <Component />
          </Prose>

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
