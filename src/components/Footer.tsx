import { Link } from 'react-router-dom'
import { CalendarClock, Mail, MessageCircle } from 'lucide-react'
import { Container } from '../ui'
import { site } from '../config/site'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const iconLink =
  'inline-flex size-9 items-center justify-center rounded-full border border-border text-fg-muted transition-colors duration-[var(--duration-fast)] hover:border-fg hover:text-fg'

const listLink =
  'text-sm text-fg-muted transition-colors duration-[var(--duration-fast)] hover:text-fg'

// Build-time year is fine for a static footer.
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg font-semibold">{site.name}</p>
            <p className="measure mt-3 text-sm text-fg-muted">
              Fast, findable websites and web apps — built to convert, with
              senior-level care.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={iconLink}
              >
                <GithubIcon width={18} height={18} />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={iconLink}
              >
                <LinkedinIcon width={18} height={18} />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-medium text-fg">Explore</p>
            <ul className="mt-4 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className={listLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to={site.primaryCta.href} className={listLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-sm font-medium text-fg">Get in touch</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${listLink}`}
                >
                  <MessageCircle size={15} aria-hidden="true" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.contact.calcom}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${listLink}`}
                >
                  <CalendarClock size={15} aria-hidden="true" /> Book a call
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className={`inline-flex items-center gap-2 ${listLink}`}
                >
                  <Mail size={15} aria-hidden="true" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.author} · Based in {site.location}, available
            worldwide
          </p>
          <Link to="/privacy" className={listLink}>
            Privacy
          </Link>
        </div>
      </Container>
    </footer>
  )
}
