import { Link } from 'react-router-dom'
import { Card, Container } from '../ui'
import SeoHead from '../components/SeoHead'
import ScrollReveal from '../components/ScrollReveal'
import { projects } from '../data/content'

export default function Work() {
  return (
    <>
      <SeoHead
        title="Work"
        description="Selected case studies — fast, SEO-strong websites and platforms built to convert, education-led."
        path="/work"
      />
      <Container className="py-16 sm:py-24">
        <h1 className="text-5xl font-semibold tracking-tight">Work</h1>
        <p className="measure mt-4 text-lg text-fg-muted">
          Real projects across education, business, and non-profit. Full
          case-study write-ups arrive in M6.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 60}>
              <Link to={`/work/${project.slug}`} className="block h-full">
                <Card interactive className="flex h-full flex-col p-7">
                  <p className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                    {project.industry}
                  </p>
                  <h2 className="mt-3 font-display text-xl font-semibold">
                    {project.name}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-fg-muted">
                    {project.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.slice(0, 5).map((tag) => (
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
    </>
  )
}
