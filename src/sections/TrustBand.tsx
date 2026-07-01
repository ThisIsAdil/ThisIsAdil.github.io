import { Container } from '../ui'
import { projects } from '../data/content'

/**
 * Lightweight credibility strip — real project names (no logos yet). Honest
 * proof of a real client base without fabricated marks.
 */
export default function TrustBand() {
  return (
    <div className="border-y border-border bg-bg-subtle">
      <Container className="py-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-fg-subtle">
          Recent work
        </p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {projects.map((p) => (
            <li
              key={p.slug}
              className="font-display text-sm font-medium text-fg-muted"
            >
              {p.name}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
