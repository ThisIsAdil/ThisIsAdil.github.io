import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card, Container } from '../ui'
import SeoHead from '../components/SeoHead'
import ScrollReveal from '../components/ScrollReveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { workEntries } from '../content'

export default function Work() {
  return (
    <>
      <SeoHead
        title="Work"
        description="Selected case studies — fast, SEO-strong websites and platforms built to convert, education-led."
        path="/work"
      />
      <Container className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
            Work I’ll put my name on.
          </h1>
          <p className="mt-5 text-lg text-fg-muted">
            Real platforms and sites across education, business, and non-profit
            — each one shipped end to end. Open any project to see the problem,
            the calls I made, and what got built.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {workEntries.map(({ slug, frontmatter: fm }, i) => (
            <ScrollReveal key={slug} delay={i * 60}>
              <Link to={`/work/${slug}`} className="block h-full">
                <Card
                  interactive
                  className="flex h-full flex-col overflow-hidden p-0"
                >
                  {fm.cover ? (
                    <img
                      src={fm.cover}
                      alt={`${fm.title} screenshot`}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover object-top"
                    />
                  ) : (
                    <ImagePlaceholder
                      label={`[${fm.title} Screenshot]`}
                      className="aspect-[16/10] rounded-none border-x-0 border-t-0"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                      {fm.industry}
                    </p>
                    <h2 className="mt-3 font-display text-xl font-semibold">
                      {fm.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm text-fg-muted">
                      {fm.summary}
                    </p>
                    {fm.highlights.length > 0 && (
                      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-fg-subtle">
                        {fm.highlights.slice(0, 3).map((h) => (
                          <li key={h} className="flex items-center gap-1.5">
                            <span
                              aria-hidden
                              className="size-1 rounded-full bg-accent"
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg">
                      Read case study
                      <ArrowRight
                        className="size-4 transition-transform duration-[var(--duration-fast)]"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </>
  )
}
