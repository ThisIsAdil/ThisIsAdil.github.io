import { Link } from 'react-router-dom'

// Rendered for the catch-all route; vite-react-ssg emits this to 404.html,
// which GitHub Pages serves for any unknown path.
export default function NotFound() {
  return (
    <section className="max-w-xl">
      <p className="text-sm font-medium uppercase tracking-widest text-muted">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">
        This page took a wrong turn.
      </h1>
      <p className="mt-4 text-muted">
        The page you were looking for doesn’t exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-base bg-fg px-5 py-2.5 text-sm font-medium text-bg"
      >
        Back home
      </Link>
    </section>
  )
}
