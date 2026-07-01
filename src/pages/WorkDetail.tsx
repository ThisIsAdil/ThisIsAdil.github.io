import { Link, useParams } from 'react-router-dom'

// Dynamic route. The slug is baked into static HTML at build time via
// getStaticPaths in routes.tsx, so /work/<slug> is deep-linkable on GitHub Pages.
export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <article className="max-w-2xl">
      <Link to="/work" className="text-sm text-fg-muted hover:text-fg">
        ← Back to work
      </Link>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        Case study: <span className="text-accent">{slug}</span>
      </h1>
      <p className="mt-4 text-fg-muted">
        If you loaded this page by pasting the URL directly (a hard refresh /
        deep link) and it rendered without a 404, the GitHub Pages routing
        strategy works. That is the whole point of M0.
      </p>
    </article>
  )
}
