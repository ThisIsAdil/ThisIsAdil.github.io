import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Card, Container, Section } from '../ui'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { projects } from '../data/content'

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.featured)

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
            className="inline-flex items-center gap-1 text-sm font-medium text-fg transition-colors hover:text-fg-muted"
          >
            All work
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 60}>
              <Link to={`/work/${project.slug}`} className="block h-full">
                <Card interactive className="flex h-full flex-col p-7">
                  <p className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                    {project.industry}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-fg-muted">
                    {project.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border bg-bg-subtle px-2.5 py-0.5 text-xs text-fg-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
