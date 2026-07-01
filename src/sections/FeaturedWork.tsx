import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Card, Container, Section } from '../ui'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { featuredWork } from '../content'

export default function FeaturedWork() {
  return (
    <Section className="border-t border-border">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected work"
            title="Platforms and sites, built to last"
            intro="Real projects — education-led — where performance, structure, and maintainability did the heavy lifting."
          />
          <Link
            to="/work"
            className="group inline-flex items-center gap-1 text-sm font-medium text-fg transition-colors hover:text-fg-muted"
          >
            All work
            <ArrowUpRight
              className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredWork.map(({ slug, frontmatter: fm }, i) => (
            <ScrollReveal key={slug} delay={i * 60}>
              <Link to={`/work/${slug}`} className="block h-full">
                <Card
                  interactive
                  className="flex h-full flex-col overflow-hidden p-0"
                >
                  <ImagePlaceholder
                    label={`[${fm.title} Screenshot]`}
                    className="aspect-[16/10] rounded-none border-x-0 border-t-0"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                      {fm.industry}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold">
                      {fm.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm text-fg-muted">
                      {fm.summary}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {fm.tags.slice(0, 4).map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-border bg-bg-subtle px-2.5 py-0.5 text-xs text-fg-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
