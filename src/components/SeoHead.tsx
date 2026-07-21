import { Head } from 'vite-react-ssg'
import { site } from '../config/site'
import { absoluteUrl, buildTitle } from '../lib/seo'

export interface SeoHeadProps {
  /** Page-specific title (brand suffix added automatically). Omit on home. */
  title?: string
  description?: string
  /** Route path for the canonical + OG URL, e.g. '/work'. */
  path?: string
  /** OG/Twitter image path (defaults to the site OG image, added in M7). */
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
  /** JSON-LD object(s) to embed. */
  jsonLd?: object | object[]
}

/**
 * Per-route document head: title, description, canonical, Open Graph + Twitter,
 * optional noindex and JSON-LD. One component every page renders so SEO stays
 * consistent and single-sourced.
 */
export default function SeoHead({
  title,
  description = site.description,
  path = '/',
  image = '/og/default.png',
  type = 'website',
  noindex = false,
  jsonLd,
}: SeoHeadProps) {
  const url = absoluteUrl(path)
  const fullTitle = buildTitle(title)
  const imageUrl = absoluteUrl(image)
  const graphs = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        {noindex && <meta name="robots" content="noindex, nofollow" />}

        <meta property="og:site_name" content={site.name} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${site.name} logo`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={`${site.name} logo`} />
      </Head>

      {/* JSON-LD rendered in the body (valid per Google) — reliable with SSG,
          and avoids Head's <script> limitations. */}
      {graphs.map((graph, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
    </>
  )
}
