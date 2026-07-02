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
  forWho: string
  outcome: string
  includes: string[]
  priceFrom?: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface Faq {
  q: string
  a: string
}

export const services: Service[] = [
  {
    slug: 'academy-platforms',
    title: 'Academy & learning platforms',
    forWho: 'Coaching institutes, academies, and EdTech businesses.',
    outcome:
      'A platform that wins enrolments and actually supports students — not just a brochure that looks nice.',
    includes: [
      'Marketing site that builds trust',
      'Student portal',
      'Faculty & admin tools',
      'Course and content management',
      'Payments & enquiries',
      'SEO and performance',
    ],
  },
  {
    slug: 'business-websites',
    title: 'Business websites',
    forWho: 'Startups, agencies, and professional services.',
    outcome:
      'A fast, credible website that makes a good business look serious — and turns visitors into enquiries.',
    includes: [
      'Positioning & structure',
      'Design and build',
      'Responsive across devices',
      'Performance optimisation',
      'SEO foundations',
      'Deployment & handover',
    ],
  },
  {
    slug: 'performance-seo',
    title: 'Performance & SEO',
    forWho: 'Existing sites that load slowly or stay invisible.',
    outcome:
      'A faster site that ranks and converts better — measured, not guessed.',
    includes: [
      'Technical SEO',
      'Core Web Vitals',
      'Lighthouse optimisation',
      'Accessibility',
      'Structured data',
      'Metadata & fixes',
    ],
  },
]

export const process: ProcessStep[] = [
  {
    title: 'Understand',
    description:
      'We start with the business — your goals, your audience, and what a win actually looks like. Not the tech.',
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
    q: 'Who will I actually be working with?',
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
