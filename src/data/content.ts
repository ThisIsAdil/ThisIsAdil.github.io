// Homepage content, derived from docs/content-intake.md (the source of truth).
// Real facts only — no invented metrics, testimonials, or outcomes. Prices are
// filled in from `priceFrom` once provided; until then the UI shows "Custom quote".
//
// Voice: business-first, plain, human. Say what the client gets and why it
// matters — not the frameworks. EdTech / academies lead, because that's where
// the strongest proof is.

export interface Service {
  slug: string
  title: string
  /** Who this is for — the buyer, in their words. */
  forWho: string
  outcome: string
  /** What the client actually gets — concrete deliverables. */
  includes: string[]
  /** Typical starting price (USD). Anchors value + filters enquiries. */
  priceFrom?: string
  /** Typical timeline for the starting scope. */
  timeline?: string
  /** One line naming the best-fit client, richer than `forWho`. */
  idealFor?: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface Faq {
  q: string
  a: string
}

/**
 * "How I think" — real decisions from real projects, framed as
 * problem → the call I made → why → result. This is where product thinking is
 * *shown*, not claimed. Grounded in the case-study material; refine the wording
 * with the exact specifics before launch (marked inline below).
 */
export interface Decision {
  /** Which project this came from (small attribution). */
  project: string
  /** Short, memorable label for the decision. */
  label: string
  problem: string
  /** The non-obvious call — the actual decision. */
  decision: string
  /** The reasoning that makes it *your* decision, not a default. */
  why: string
  result: string
}

export const decisions: Decision[] = [
  {
    project: 'Future Meds Academy',
    label: 'I gave the client the keys',
    problem:
      'The academy’s staff aren’t developers, but their content changes constantly — new courses, faculty, results, resources.',
    decision:
      'I built an admin CMS the team runs themselves, instead of a site that needs me for every edit.',
    why: 'Ownership only means something if you can use it. A site its owner can’t update slowly dies.',
    result:
      'Staff publish courses, resources, and blog posts on their own — no developer in the loop.',
  },
  {
    project: 'Blooms Academy',
    // REFINE: confirm the exact technical approach to timing accuracy/resilience.
    label: 'I treated the exam clock as the product',
    problem:
      'In a timed IELTS practice test, a timer that drifts or freezes destroys the one thing students came for: a realistic run.',
    decision:
      'I engineered the exam timer as the core of the experience — accurate and dependable, not an afterthought bolted onto a form.',
    why: 'In assessment, the integrity of the clock is the experience. Everything else is secondary.',
    result:
      'Students practise on an engine that behaves like the real exam, so their scores mean something.',
  },
  {
    project: 'Future Meds Academy',
    label: 'I made a React app findable',
    problem:
      'An academy lives or dies on being found — but a standard React app is close to invisible to search engines.',
    decision:
      'I added a custom prerendering step so every page ships real, crawlable HTML while staying a fast single-page app.',
    why: 'For a school, findability isn’t a marketing add-on — it’s an enrolment channel.',
    result:
      'Fast pages that search engines can actually read, without giving up the app-like feel.',
  },
]

export const services: Service[] = [
  {
    slug: 'academy-platforms',
    title: 'Academy & learning platforms',
    forWho: 'Coaching institutes, academies, and EdTech businesses.',
    idealFor:
      'You run an academy or course business and need more than a brochure site — a platform students actually learn on and staff can run themselves.',
    outcome:
      'A platform that wins enrolments and genuinely supports students — one system for your marketing, your students, and your team.',
    includes: [
      'Marketing site that builds trust and captures enquiries',
      'Student portal (courses, progress, resources)',
      'Faculty & admin dashboards',
      'Self-serve CMS so your team updates content — no developer needed',
      'Payments, enrolments & enquiry capture',
      'AI-assisted features where they help (e.g. writing feedback)',
      'SEO architecture so you get found',
      'Deployment, handover & full code ownership',
    ],
    priceFrom: '$5,000',
    timeline: '4–8 weeks',
  },
  {
    slug: 'business-websites',
    title: 'Business websites',
    forWho: 'Startups, agencies, and professional services.',
    idealFor:
      'You have a real business but a website that undersells it — and you want one that makes serious buyers take you seriously.',
    outcome:
      'A fast, credible website that makes a good business look the part — and turns visitors into enquiries.',
    includes: [
      'Positioning & messaging that speaks to your buyer',
      'Custom design and build (no template look)',
      'Responsive across every device',
      'Performance optimisation (fast on any connection)',
      'SEO foundations built in from the first line',
      'Contact/enquiry flows that convert',
      'Deployment, handover & full code ownership',
    ],
    priceFrom: '$1,800',
    timeline: '2–4 weeks',
  },
  {
    slug: 'performance-seo',
    title: 'Performance & SEO',
    forWho: 'Existing sites that load slowly or stay invisible.',
    idealFor:
      'You already have a site, but it’s slow, hard to find, or quietly losing you enquiries — and you want it fixed, measurably.',
    outcome:
      'A faster site that ranks and converts better — measured before and after, not guessed.',
    includes: [
      'Full performance & SEO audit with a prioritised plan',
      'Core Web Vitals & Lighthouse optimisation',
      'Technical SEO (crawlability, structure, metadata)',
      'Structured data for rich search results',
      'Accessibility (WCAG) fixes',
      'A before/after report you can act on',
    ],
    priceFrom: '$900',
    timeline: '1–2 weeks',
  },
]

export const process: ProcessStep[] = [
  {
    title: 'Understand',
    description:
      'We start with the business: your goals, your audience, and what a win looks like. Not the tech.',
  },
  {
    title: 'Design',
    description:
      'Structure and interface built for clarity, trust, and conversion. You see it before it’s built.',
  },
  {
    title: 'Build',
    description:
      'Fast, accessible, SEO-strong engineering — no shortcuts, no throwaway code.',
  },
  {
    title: 'Launch & support',
    description:
      'Deployment, a clean handover you fully own, and ongoing improvements as you grow.',
  },
]

export const faqs: Faq[] = [
  {
    q: 'What’s a typical project timeline?',
    a: 'Two to eight weeks, depending on scope. We agree a clear timeline before anything starts.',
  },
  {
    q: 'How does pricing work?',
    a: 'Fixed-price projects with milestone-based payments — so you know the number up front, with no surprises.',
  },
  {
    q: 'Do you work internationally?',
    a: 'Yes. I work remotely with clients worldwide, and I’m used to working across time zones.',
  },
  {
    q: 'Who will I be working with?',
    a: 'Me, directly. No account managers, no handoffs to a junior — the person you talk to is the person who builds it.',
  },
  {
    q: 'Do you offer maintenance after launch?',
    a: 'Yes. Ongoing maintenance, improvements, and support are available once you’re live.',
  },
  {
    q: 'Who owns the project?',
    a: 'You do — full ownership of the code and content on completion and final payment.',
  },
]

/** First-person note (kept as a fallback / About voice). */
export const proofNote =
  'I work directly with every client — no account managers, no handoffs. That means clearer communication, faster decisions, and code I stand behind. I care about the details most people never notice: how fast a page loads, how well it ranks, and how it holds up as you grow.'

/** Primary tech stack (shown on Services / About). */
export const stack = [
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'Tailwind CSS',
  'Vite',
]

export interface Testimonial {
  quote: string
  name: string
  role: string
  /** TEMPORARY placeholder — must be replaced with an approved quote pre-launch. */
  temporary?: boolean
}

// Real client quotes exist (Future Meds, Blooms) but wording isn't approved to
// publish yet — so the Proof section shows clearly-marked placeholders for now.
// Once approved, drop the quotes in here and render them.
export const testimonials: Testimonial[] = []
