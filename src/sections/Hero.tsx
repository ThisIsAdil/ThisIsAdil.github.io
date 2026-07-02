import type { CSSProperties } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'
import { Badge, Button, Container } from '../ui'
import Magnetic from '../components/Magnetic'
import { cn } from '../lib/cn'

const delay = (ms: number) => ({ '--enter-delay': `${ms}ms` }) as CSSProperties

// Headline reveals word-by-word; "rely on." carries the accent — reliability is
// what a serious client wants first, and it's the one place colour appears above
// the fold. Word spacing is margin-driven (not whitespace nodes) so inline-block
// wrappers can't collapse the gaps.
const WORDS = [
  'Websites',
  'and',
  'platforms',
  'your',
  'business',
  'can',
  'rely',
  'on.',
]
const ACCENT_FROM = 6

// Three honest, non-numeric facts — proof without invented metrics.
const FACTS = [
  'Full-stack platforms for real academies',
  'Performance & SEO built in, not bolted on',
  'One senior developer, start to finish',
]

const flashlight: CSSProperties = {
  backgroundImage: 'radial-gradient(var(--depth-color) 1px, transparent 1px)',
  backgroundSize: '24px 24px',
  maskImage:
    'radial-gradient(340px circle at var(--mx, 50%) var(--my, 38%), #000 0%, transparent 60%)',
  WebkitMaskImage:
    'radial-gradient(340px circle at var(--mx, 50%) var(--my, 38%), #000 0%, transparent 60%)',
  opacity: 0.35,
}

const vignette: CSSProperties = {
  background:
    'radial-gradient(ellipse 75% 70% at 50% 32%, color-mix(in srgb, var(--color-fg) 5%, transparent), transparent 70%)',
}

/**
 * Statement hero: one huge, centred sentence with vast space around it, a cursor
 * "flashlight" that quietly reveals the dot texture, and a scroll cue that hands
 * off to the work below. Type-only — instant first paint, no image LCP. The word
 * reveal is transform-only (LCP-safe) and disabled under reduced motion.
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
      className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0" style={vignette} />
        <div className="absolute inset-0" style={flashlight} />
      </div>

      <Container className="flex flex-1 flex-col items-center justify-center py-24 text-center">
        <div className="animate-in" style={delay(0)}>
          <Badge>
            <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
            Available for new projects
          </Badge>
        </div>

        <p
          className="animate-in mt-7 text-sm font-medium uppercase tracking-[0.2em] text-fg-subtle"
          style={delay(80)}
        >
          Agency quality — freelance direct
        </p>

        <h1 className="mx-auto mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
          {WORDS.map((word, i) => (
            <span
              key={i}
              className="me-[0.24em] inline-block overflow-hidden pb-[0.08em] align-bottom last:me-0"
            >
              <span
                className={cn(
                  'animate-rise inline-block',
                  i >= ACCENT_FROM && 'text-accent',
                )}
                style={delay(160 + i * 45)}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        <p
          className="animate-in mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-fg-muted sm:text-xl"
          style={delay(620)}
        >
          I’m Adil Shaikh. I build fast, SEO-strong sites and learning platforms
          for academies and ambitious teams worldwide, with the product thinking
          of a top team and none of the agency distance.
        </p>

        <div
          className="animate-in mt-10 flex flex-wrap items-center justify-center gap-4"
          style={delay(720)}
        >
          <Magnetic>
            <Button asChild size="lg">
              <Link to="/contact">Start a project</Link>
            </Button>
          </Magnetic>
          <Button asChild variant="secondary" size="lg">
            <a href="#work">See selected work</a>
          </Button>
        </div>

        <p className="animate-in mt-6 text-sm text-fg-subtle" style={delay(800)}>
          No obligation. I usually reply within a day.
        </p>

        <ul
          className="animate-in mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-fg-muted"
          style={delay(880)}
        >
          {FACTS.map((fact, i) => (
            <li key={fact} className="flex items-center gap-3">
              {i > 0 && (
                <span
                  aria-hidden
                  className="size-1 rounded-full bg-border-strong"
                />
              )}
              {fact}
            </li>
          ))}
        </ul>
      </Container>

      <div className="flex justify-center pb-10">
        <a
          href="#work"
          aria-label="Scroll to selected work"
          className="animate-in group inline-flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-fg-subtle transition-colors hover:text-fg"
          style={delay(980)}
        >
          <span className="grid size-9 place-items-center rounded-full border border-border transition-colors group-hover:border-fg">
            <ArrowDown
              className="size-4 motion-safe:animate-scroll-nudge"
              aria-hidden
            />
          </span>
        </a>
      </div>
    </section>
  )
}
