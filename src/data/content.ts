// Homepage content, derived from docs/content-intake.md (the source of truth).
// Real facts only — no invented metrics, testimonials, or outcomes. Prices are
// filled in from `priceFrom` once provided; until then the UI shows "Custom quote".

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
    slug: 'business-websites',
    title: 'Business Websites',
    forWho: 'Startups, agencies, and professional services.',
    outcome: 'A fast, credible website that turns visitors into enquiries.',
    includes: [
      'Strategy',
      'UI development',
      'Responsive design',
      'Performance optimization',
      'SEO foundations',
      'Deployment',
    ],
    // priceFrom: 'TODO — awaiting figure',
  },
  {
    slug: 'academy-platforms',
    title: 'Academy Websites & Learning Platforms',
    forWho: 'Coaching institutes, online academies, and EdTech businesses.',
    outcome: 'A scalable platform to attract, manage, and support students.',
    includes: [
      'Marketing website',
      'Student portal',
      'Admin CMS',
      'Course management',
      'SEO',
      'Performance',
      'Responsive design',
    ],
  },
  {
    slug: 'performance-seo',
    title: 'Performance & SEO Optimization',
    forWho: 'Existing sites that need better speed, visibility, and quality.',
    outcome:
      'A faster, more visible site — better Core Web Vitals and cleaner technical SEO.',
    includes: [
      'Technical SEO',
      'Core Web Vitals',
      'Lighthouse optimization',
      'Accessibility',
      'Structured data',
      'Metadata',
    ],
  },
]

export const process: ProcessStep[] = [
  {
    title: 'Strategy',
    description:
      'We start with your goals, your audience, and what a win actually looks like.',
  },
  {
    title: 'Design',
    description:
      'Structure and interface built for clarity, trust, and conversion.',
  },
  {
    title: 'Build',
    description: 'Fast, accessible, SEO-strong engineering — no shortcuts.',
  },
  {
    title: 'Launch & support',
    description: 'Deployment, a clean handover, and ongoing improvements.',
  },
]

export const faqs: Faq[] = [
  {
    q: 'What’s a typical project timeline?',
    a: 'Two to eight weeks, depending on scope. We agree a clear timeline before starting.',
  },
  {
    q: 'How does pricing work?',
    a: 'Fixed-price projects with milestone-based payments — so there are no surprises.',
  },
  {
    q: 'Do you work internationally?',
    a: 'Yes. I work remotely with clients worldwide.',
  },
  {
    q: 'What’s your technology stack?',
    a: 'React, TypeScript, Node.js, Express, MongoDB, and Tailwind CSS — modern, maintainable web technologies.',
  },
  {
    q: 'Do you offer maintenance after launch?',
    a: 'Yes. Ongoing maintenance and improvements are available.',
  },
  {
    q: 'Who owns the project?',
    a: 'You do — full ownership on completion and final payment.',
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

// ⚠️ TEMPORARY placeholder testimonials for development only.
// Replace with client-approved quotes before production launch.
export const testimonials: Testimonial[] = [
  {
    quote:
      'Working with Adil was a great experience from start to finish. He understood our vision quickly, suggested thoughtful improvements, and delivered a platform that truly reflects the quality of our academy. His attention to performance, usability, and long-term maintainability made him a valuable long-term development partner.',
    name: 'Amir Akhtar',
    role: 'Founder, Future Meds Academy',
    temporary: true,
  },
  {
    quote:
      'Adil approached the project with professionalism and attention to detail. He transformed our ideas into a modern learning platform while keeping communication clear throughout the project. The final platform provides a significantly better experience for both our students and our team.',
    name: 'Sahib Akhtar',
    role: 'Founder, Blooms Academy',
    temporary: true,
  },
]
