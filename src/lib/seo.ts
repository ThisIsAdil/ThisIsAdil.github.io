import { site } from '../config/site'

/** Absolute URL for a path, e.g. absoluteUrl('/work') → https://…/work */
export function absoluteUrl(path = '/') {
  return new URL(path, site.url)
    .toString()
    .replace(/\/$/, path === '/' ? '/' : '')
}

/** Page title with the brand suffix; the homepage gets the fuller default. */
export function buildTitle(title?: string) {
  return title ? `${title} — ${site.name}` : `${site.name} — ${site.title}`
}

/* ── JSON-LD builders (expanded in M8; base graph established here) ───────── */

export function personLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.author,
    url: site.url,
    jobTitle: site.title,
    sameAs: [site.social.github, site.social.linkedin],
  }
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
  }
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
