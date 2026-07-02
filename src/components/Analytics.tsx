import { useEffect } from 'react'
import { site } from '../config/site'

/**
 * Privacy-friendly analytics loader. Injects the provider script(s) once, only
 * when configured in site.ts (both are empty by default, so nothing loads and no
 * cookie banner is needed). Both providers auto-track SPA navigations, so route
 * changes are counted without extra wiring. No-op during SSG (guards on window).
 */
export default function Analytics() {
  useEffect(() => {
    if (typeof document === 'undefined') return
    const { umamiSrc, umamiWebsiteId, plausibleDomain, cloudflareToken } =
      site.analytics

    if (
      umamiSrc &&
      umamiWebsiteId &&
      !document.querySelector('script[data-website-id]')
    ) {
      const s = document.createElement('script')
      s.defer = true
      s.src = umamiSrc
      s.setAttribute('data-website-id', umamiWebsiteId)
      document.head.appendChild(s)
    }

    if (plausibleDomain && !document.querySelector('script[data-domain]')) {
      const s = document.createElement('script')
      s.defer = true
      s.setAttribute('data-domain', plausibleDomain)
      s.src = 'https://plausible.io/js/script.js'
      document.head.appendChild(s)
    }

    if (
      cloudflareToken &&
      !document.querySelector('script[src*="cloudflareinsights"]')
    ) {
      const s = document.createElement('script')
      s.defer = true
      s.src = 'https://static.cloudflareinsights.com/beacon.min.js'
      s.setAttribute(
        'data-cf-beacon',
        JSON.stringify({ token: cloudflareToken, spa: true }),
      )
      document.head.appendChild(s)
    }
  }, [])

  return null
}
