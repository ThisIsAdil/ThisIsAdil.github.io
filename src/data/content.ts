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

export interface Project {
  slug: string
  name: string
  industry: string
  role: string
  summary: string
  tags: string[]
  featured: boolean
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

export const projects: Project[] = [
  {
    slug: 'future-meds-academy',
    name: 'Future Meds Academy',
    industry: 'EdTech · Medical Entrance Prep',
    role: 'Full-stack development, architecture & deployment',
    summary:
      'A full-stack learning platform — marketing site, student portal, faculty tools, and admin CMS — built for trust, enquiries, and long-term scale.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    featured: true,
  },
  {
    slug: 'blooms-academy',
    name: 'Blooms Academy',
    industry: 'EdTech · IELTS',
    role: 'Full-stack development & deployment',
    summary:
      'A multi-role IELTS platform with AI-assisted writing evaluation, a timed exam engine, live classes, and integrated payments.',
    tags: ['React', 'Node.js', 'MongoDB', 'Google Gemini', 'Razorpay'],
    featured: true,
  },
  {
    slug: 'mh-associates',
    name: 'MH Associates',
    industry: 'Electrical EPC',
    role: 'Frontend development & deployment',
    summary:
      'A professional marketing site for an electrical EPC firm — credibility-first, conversion-focused, and performance-optimized.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    featured: true,
  },
  {
    slug: 'mavin-star',
    name: 'Mavin Star Education & Welfare Society',
    industry: 'Non-profit',
    role: 'Frontend development & deployment',
    summary:
      'A lightweight, fully static NGO site with clear donation and volunteer flows — fast and easy to maintain.',
    tags: ['React', 'Vite', 'React Router'],
    featured: false,
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

/** First-person note used in place of testimonials until real quotes exist. */
export const proofNote =
  'I work directly with every client — no account managers, no handoffs. That means clearer communication, faster decisions, and code I stand behind. I care about the details most people never notice: how fast a page loads, how well it ranks, and how it holds up as you grow.'
