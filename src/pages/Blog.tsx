import { Link } from 'react-router-dom'
import { Card, Container } from '../ui'
import SeoHead from '../components/SeoHead'
import ScrollReveal from '../components/ScrollReveal'
import { blogEntries } from '../content'
import { formatDate } from '../lib/format'

export default function Blog() {
  return (
    <>
      <SeoHead
        title="Blog"
        description="Notes on building fast, findable, high-converting websites and web apps."
        path="/blog"
      />
      <Container className="py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-fg-subtle">
            <span className="h-px w-6 bg-border-strong" aria-hidden />
            Writing
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
            Notes on the craft
          </h1>
          <p className="mt-6 text-lg text-fg-muted">
            Occasional writing on performance, SEO, and building for growth.
          </p>
        </div>

        {blogEntries.length === 0 ? (
          <p className="mt-16 text-fg-muted">First articles coming soon.</p>
        ) : (
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {blogEntries.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 60}>
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <Card interactive className="flex h-full flex-col p-7">
                    <p className="text-xs font-medium uppercase tracking-widest text-fg-subtle">
                      {formatDate(post.frontmatter.date)}
                    </p>
                    <h2 className="mt-3 font-display text-xl font-semibold">
                      {post.frontmatter.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm text-fg-muted">
                      {post.frontmatter.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {post.frontmatter.tags.map((tag) => (
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
        )}
      </Container>
    </>
  )
}
