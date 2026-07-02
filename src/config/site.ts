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
    // Real form endpoint. Get a FREE access key at https://web3forms.com (enter
    // your email, they mail you a key — no account). Paste it here and the contact
    // form emails you directly. Left empty → falls back to a pre-filled mailto.
    web3formsKey: '79be459a-fbd3-469b-a5d5-1a79fe76af8c',
  },

  // Privacy-friendly analytics. All optional and OFF until you add a value.
  // RECOMMENDED (free, easy, no cookie banner): Umami Cloud.
  //   1. Sign up at https://cloud.umami.is (free "Hobby" tier).
  //   2. Add your website → Settings → Tracking code.
  //   3. Copy the two values below from that snippet:
  //        umamiSrc       = the script `src` (e.g. https://cloud.umami.is/script.js)
  //        umamiWebsiteId = the `data-website-id` (a UUID)
  // Others (leave blank unless you use them): Plausible domain, Cloudflare token.
  analytics: {
    umamiSrc: '',
    umamiWebsiteId: '',
    plausibleDomain: '',
    cloudflareToken: '',
  },

  social: {
    github: 'https://github.com/ThisIsAdil',
    linkedin: 'https://www.linkedin.com/in/hey-adilshaikh',
  },

  // Primary navigation (final IA). Order = the funnel's supporting pages.
  // Blog lives in the footer, not the primary nav, until it's regularly seeded —
  // an apparently-empty "Writing" tab reads as abandoned at the top level.
  nav: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
  ],

  // Secondary links surfaced in the footer only (Privacy sits in the bottom bar).
  footerNav: [{ label: 'Writing', href: '/blog' }],

  // The one action everything points to.
  primaryCta: { label: 'Start a project', href: '/contact' },
} as const

export type Site = typeof site
