import type { CSSProperties } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Badge, Button, Container } from '../ui'
import Magnetic from '../components/Magnetic'
import Headshot from '../components/Headshot'
import { cn } from '../lib/cn'

const delay = (ms: number) => ({ '--enter-delay': `${ms}ms` }) as CSSProperties

// Headline split into words for a staggered reveal; the last three are the
// gradient accent phrase.
const WORDS = ['Websites', 'and', 'platforms,', 'engineered', 'to', 'perform.']
const ACCENT_FROM = 3

const flashlight: CSSProperties = {
  backgroundImage: 'radial-gradient(var(--accent-400) 1px, transparent 1px)',
  backgroundSize: '22px 22px',
  maskImage:
    'radial-gradient(260px circle at var(--mx, 50%) var(--my, -20%), #000 0%, transparent 65%)',
  WebkitMaskImage:
    'radial-gradient(260px circle at var(--mx, 50%) var(--my, -20%), #000 0%, transparent 65%)',
  opacity: 0.4,
}

const vignette: CSSProperties = {
  background:
    'radial-gradient(ellipse 70% 100% at 50% -10%, color-mix(in srgb, var(--color-fg) 5%, transparent), transparent 70%)',
}

/**
 * Editorial, interactive hero: a cursor "flashlight" reveals the grid texture,
 * the headline reveals word-by-word (transform-only → LCP-safe), and the
 * portrait carries a floating name card.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  function onMove(e: React.PointerEvent) {
    const el = ref.current
    if (!el || e.pointerType !== 'mouse') return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      className="relative overflow-hidden border-b border-border"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0" style={vignette} />
        <div className="absolute inset-0" style={flashlight} />
      </div>

      <Container className="py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Copy */}
          <div>
            <div className="animate-in" style={delay(0)}>
              <Badge>
                <span
                  className="size-1.5 rounded-full bg-emerald-500"
                  aria-hidden
                />
                Available for new projects
              </Badge>
            </div>

            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.0] tracking-[-0.035em] sm:text-6xl lg:text-[4.5rem]">
              {WORDS.map((word, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden pb-[0.08em] align-bottom"
                >
                  <span
                    className={cn(
                      'animate-rise inline-block',
                      i >= ACCENT_FROM && 'text-gradient',
                    )}
                    style={delay(120 + i * 55)}
                  >
                    {word}
                  </span>
                  {i < WORDS.length - 1 && ' '}
                </span>
              ))}
            </h1>

            <p
              className="animate-in mt-7 max-w-xl text-lg leading-relaxed text-fg-muted"
              style={delay(560)}
            >
              I’m Adil Shaikh — I help academies and ambitious teams turn ideas
              into fast, SEO-strong products people trust.
            </p>

            <div
              className="animate-in mt-9 flex flex-wrap items-center gap-4"
              style={delay(660)}
            >
              <Magnetic>
                <Button asChild size="lg">
                  <Link to="/contact">Start a project</Link>
                </Button>
              </Magnetic>
              <Button asChild variant="secondary" size="lg">
                <Link to="/work">See selected work</Link>
              </Button>
            </div>

            <p
              className="animate-in mt-6 text-sm text-fg-subtle"
              style={delay(760)}
            >
              No obligation. I usually reply within a day.
            </p>
          </div>

          {/* Portrait */}
          <div
            className="animate-in relative mx-auto w-full max-w-sm lg:mx-0"
            style={delay(320)}
          >
            <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-xl">
              <Headshot />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-surface/90 px-5 py-3 shadow-lg backdrop-blur-md">
              <p className="font-display text-sm font-semibold">Adil Shaikh</p>
              <p className="text-xs text-fg-muted">Full-Stack Web Developer</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
