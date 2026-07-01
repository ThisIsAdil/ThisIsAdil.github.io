import { Link } from 'react-router-dom'
import { Badge, Button, Container } from '../ui'

/**
 * Above-the-fold hero. Deliberately NOT scroll-revealed — it's the LCP element,
 * so it renders immediately (Motion System: never delay content with motion).
 */
export default function Hero() {
  return (
    <Container className="py-20 sm:py-28 lg:py-32">
      <div className="max-w-3xl">
        <Badge>
          <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
          Available for new projects
        </Badge>

        <h1 className="mt-6 text-balance text-6xl font-semibold leading-[1.03] tracking-tight sm:text-7xl">
          Thoughtfully engineered websites and platforms, built to perform.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-fg-muted sm:text-xl">
          I’m Adil Shaikh — I help academies and ambitious teams launch fast,
          SEO-strong sites and platforms, engineered with care.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <Link to="/contact">Start a project</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link to="/work">See my work</Link>
          </Button>
        </div>

        <p className="mt-5 text-sm text-fg-subtle">
          No obligation. I usually reply within a day.
        </p>
      </div>
    </Container>
  )
}
