// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for site-wide config.
// TODO(adil): fill in the placeholders marked `REPLACE` before deploy.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Build with Adil',
  author: 'Adil Shaikh',

  // REPLACE: your GitHub user-page URL, then later your custom domain.
  // For a user page the repo is `<username>.github.io` and this is the root URL.
  url: 'https://REPLACE-username.github.io',

  description:
    'Adil Shaikh — freelance full-stack developer. Fast, SEO-strong websites and web apps, engineered with care.',

  // REPLACE with your city (global-first + subtle location, per SEO plan).
  location: 'REPLACE-City, Country',

  // Contact channels (per Content Strategy: WhatsApp + Cal.com + passive email).
  contact: {
    // REPLACE with your number in international format, no `+` or spaces.
    whatsapp: 'https://wa.me/REPLACE-15551234567',
    // REPLACE with your Cal.com link.
    calcom: 'https://cal.com/REPLACE-adil',
    // REPLACE with your email.
    email: 'REPLACE-hello@example.com',
  },

  social: {
    // REPLACE with your profiles.
    github: 'https://github.com/REPLACE-username',
    linkedin: 'https://www.linkedin.com/in/REPLACE-username',
  },
} as const

export type Site = typeof site
