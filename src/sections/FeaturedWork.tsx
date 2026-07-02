import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container, Section } from '../ui'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import BrowserFrame from '../components/BrowserFrame'
import { cn } from '../lib/cn'
import { featuredWork } from '../content'

export default function FeaturedWork() {
  return (
    <Section className="border-t border-border">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Featured work"
            title="Products, not just websites"
            intro="A few builds where structure, performance, and product thinking did the heavy lifting — education-led."
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

        <div className="mt-16 space-y-20 sm:space-y-28">
          {featuredWork.map(({ slug, frontmatter: fm }, i) => {
            const flip = i % 2 === 1
            return (
              <ScrollReveal key={slug}>
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  {/* Visual */}
                  <Link
                    to={`/work/${slug}`}
                    className={cn('group block', flip && 'lg:order-2')}
                  >
                    <BrowserFrame className="transition-[transform,border-color] duration-[var(--duration-base)] ease-[var(--ease-out-expo)] group-hover:-translate-y-1 group-hover:border-accent/50">
                      <ImagePlaceholder
                        label={`[${fm.title} Screenshot]`}
                        className="aspect-[16/10] rounded-none border-0 transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                      />
                    </BrowserFrame>
                  </Link>

                  {/* Narrative */}
                  <div className={cn(flip && 'lg:order-1')}>
                    <p className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-widest text-fg-subtle">
                      <span
                        className="h-px w-6 rounded-full bg-accent"
                        aria-hidden
                      />
                      {fm.industry}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                      {fm.title}
                    </h3>
                    <p className="mt-4 max-w-md text-fg-muted">{fm.summary}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {fm.tags.slice(0, 5).map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-border bg-bg-subtle px-3 py-1 text-xs text-fg-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/work/${slug}`}
                      className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
                    >
                      View case study
                      <ArrowRight
                        className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
