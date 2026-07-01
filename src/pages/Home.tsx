import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-widest text-muted">
        Foundation spike · M0
      </p>
      <h1 className="mt-4 text-balance text-5xl font-semibold leading-[1.05] tracking-tight">
        Thoughtfully engineered websites, built to perform.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        This is the M0 deploy spike — proving SSG, routing, theming, and the
        GitHub Pages deep-link fallback all work before we build the real thing.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/work"
          className="rounded-base bg-fg px-5 py-2.5 text-sm font-medium text-bg"
        >
          See my work
        </Link>
        <Link
          to="/work/sample-academy"
          className="rounded-base border border-border px-5 py-2.5 text-sm font-medium hover:border-fg"
        >
          Open a dynamic case study
        </Link>
      </div>
    </section>
  )
}
