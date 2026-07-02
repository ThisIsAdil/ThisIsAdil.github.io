import { z } from 'zod'

export interface WorkFrontmatter {
  title: string
  industry: string
  role: string
  summary: string
  /** Tech tags — technical detail, shown on the case-study page. */
  tags: string[]
  /** Client-language capabilities — what the business got. Shown in listings. */
  highlights: string[]
  featured: boolean
  order: number
}
export interface BlogFrontmatter {
  title: string
  description: string
  date: string
  tags: string[]
}

export interface WorkEntry {
  slug: string
  frontmatter: WorkFrontmatter
}
export interface BlogEntry {
  slug: string
  frontmatter: BlogFrontmatter
}

// zod validation runs only during the SSG/build (import.meta.env.SSR); on the
// client the branch is dead code, so zod tree-shakes out of the browser bundle.
// A malformed frontmatter file still fails the build.
function parseWork(fm: unknown): WorkFrontmatter {
  if (import.meta.env.SSR) {
    return z
      .object({
        title: z.string(),
        industry: z.string(),
        role: z.string(),
        summary: z.string(),
        tags: z.array(z.string()),
        highlights: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        order: z.number().default(999),
      })
      .parse(fm) as WorkFrontmatter
  }
  return fm as WorkFrontmatter
}

function parseBlog(fm: unknown): BlogFrontmatter {
  if (import.meta.env.SSR) {
    return z
      .object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        tags: z.array(z.string()).default([]),
      })
      .parse(fm) as BlogFrontmatter
  }
  return fm as BlogFrontmatter
}

export const slugFromPath = (p: string) =>
  p
    .split('/')
    .pop()!
    .replace(/\.mdx$/, '')

// Load ONLY frontmatter eagerly (lightweight metadata for listings + routing).
// MDX body components are loaded in ./bodies, imported only by the lazy detail
// routes — so they never ship in the homepage/main bundle.
const workMeta = import.meta.glob('/content/work/*.mdx', {
  eager: true,
  import: 'frontmatter',
}) as Record<string, unknown>
const blogMeta = import.meta.glob('/content/blog/*.mdx', {
  eager: true,
  import: 'frontmatter',
}) as Record<string, unknown>

export const workEntries: WorkEntry[] = Object.entries(workMeta)
  .map(([path, fm]) => ({
    slug: slugFromPath(path),
    frontmatter: parseWork(fm),
  }))
  .sort((a, b) => a.frontmatter.order - b.frontmatter.order)

export const blogEntries: BlogEntry[] = Object.entries(blogMeta)
  .map(([path, fm]) => ({
    slug: slugFromPath(path),
    frontmatter: parseBlog(fm),
  }))
  .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))

export const featuredWork = workEntries.filter((e) => e.frontmatter.featured)

export const getWork = (slug: string) =>
  workEntries.find((e) => e.slug === slug)
export const getPost = (slug: string) =>
  blogEntries.find((e) => e.slug === slug)
