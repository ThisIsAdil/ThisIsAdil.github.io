import { Link } from 'react-router-dom'

export default function Work() {
  return (
    <section>
      <h1 className="text-4xl font-semibold tracking-tight">Work</h1>
      <p className="mt-4 text-muted">
        Case-study index placeholder. In M6 this becomes a filterable grid
        backed by MDX content.
      </p>
      <ul className="mt-8 space-y-3">
        <li>
          <Link
            to="/work/sample-academy"
            className="inline-block rounded-base border border-border px-4 py-3 hover:border-fg"
          >
            Sample Academy — prerendered dynamic route →
          </Link>
        </li>
      </ul>
    </section>
  )
}
