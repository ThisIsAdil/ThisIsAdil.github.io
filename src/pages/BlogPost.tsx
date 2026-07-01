import { Link, useParams } from 'react-router-dom'
import { Button, Container } from '../ui'
import SeoHead from '../components/SeoHead'
import Breadcrumbs from '../components/Breadcrumbs'
import Prose from '../components/Prose'
import { getPost } from '../content'
import { getBlogBody } from '../content/bodies'
import { formatDate } from '../lib/format'
import { absoluteUrl, breadcrumbLd } from '../lib/seo'
import { site } from '../config/site'

export default function BlogPost() {
  const { slug = '' } = useParams<{ slug: string }>()
  const post = getPost(slug)
  const Component = getBlogBody(slug)

  if (!post || !Component) {
    return (
      <Container className="py-24">
        <h1 className="text-4xl font-semibold">Post not found</h1>
        <Button asChild className="mt-6">
          <Link to="/blog">Back to blog</Link>
        </Button>
      </Container>
    )
  }

  const fm = post.frontmatter

  return (
    <>
      <SeoHead
        title={fm.title}
        description={fm.description}
        path={`/blog/${slug}`}
        type="article"
        jsonLd={[
          breadcrumbLd([
            { name: 'Blog', path: '/blog' },
            { name: fm.title, path: `/blog/${slug}` },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: fm.title,
            description: fm.description,
            datePublished: fm.date,
            author: { '@type': 'Person', name: site.author },
            url: absoluteUrl(`/blog/${slug}`),
          },
        ]}
      />

      <Container className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[{ label: 'Blog', to: '/blog' }, { label: fm.title }]}
          />
          <p className="mt-8 text-sm text-fg-subtle">{formatDate(fm.date)}</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {fm.title}
          </h1>
          <p className="mt-4 text-lg text-fg-muted">{fm.description}</p>

          <hr className="my-10 border-border" />

          <Prose>
            <Component />
          </Prose>

          <div className="mt-14 border-t border-border pt-8">
            <Button asChild variant="secondary">
              <Link to="/blog">← All writing</Link>
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}
