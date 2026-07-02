import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Container, Section } from '../ui'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import { workEntries } from '../content'

/**
 * A lighter "index" of all projects — a scannable log, deliberately different in
 * hierarchy from the large editorial Featured Work above it.
 */
export default function RecentWork() {
  return (
    <div className="border-t border-border bg-bg-subtle">
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Recent work"
            title="The full log"
            intro="Everything else I’ve shipped recently — a quick scan."
          />

          <ul className="mt-10 border-t border-border">
            {workEntries.map(({ slug, frontmatter: fm }, i) => (
              <ScrollReveal
                as="li"
                key={slug}
                delay={i * 50}
                className="border-b border-border"
              >
                <Link
                  to={`/work/${slug}`}
                  className="group -mx-4 flex items-center gap-6 rounded-lg px-4 py-5 transition-colors hover:bg-surface"
                >
                  <span className="flex-1 font-display text-lg font-semibold transition-colors group-hover:text-accent">
                    {fm.title}
                  </span>
                  <span className="hidden flex-1 text-sm text-fg-muted sm:block">
                    {fm.industry}
                  </span>
                  <span className="hidden text-sm text-fg-subtle md:block">
                    {fm.tags.slice(0, 2).join(' · ')}
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-fg-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden
                  />
                </Link>
              </ScrollReveal>
            ))}
          </ul>
        </Container>
      </Section>
    </div>
  )
}
