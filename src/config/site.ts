// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for site-wide config: identity, contact, nav, CTAs.
// Change a value here and it updates everywhere.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Adil Shaikh',
  author: 'Adil Shaikh',
  title: 'Freelance Full-Stack Web Developer',

  // GitHub user-page URL (served lowercase). Swap to a custom domain later.
  url: 'https://thisisadil.github.io',

  description:
    'Adil Shaikh — freelance full-stack developer. Fast, SEO-strong websites and web apps, engineered with care.',

  // Global-first positioning + a subtle base location (per SEO strategy).
  location: 'Aurangabad, India',

  // Contact channels (per Content Strategy: WhatsApp + Cal.com + passive email).
  contact: {
    whatsapp: 'https://wa.me/918625833128',
    calcom: 'https://cal.com/adil-shaikh/discovery-call',
    email: 'reachme.adilshaikh@gmail.com',
  },

  social: {
    github: 'https://github.com/ThisIsAdil',
    linkedin: 'https://www.linkedin.com/in/hey-adilshaikh',
  },

  // Primary navigation (final IA). Order = the funnel's supporting pages.
  nav: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ],

  // The one action everything points to.
  primaryCta: { label: 'Start a project', href: '/contact' },
} as const

export type Site = typeof site
