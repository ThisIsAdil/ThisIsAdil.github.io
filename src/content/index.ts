import type { ComponentType } from 'react'
import { z } from 'zod'

/* ── Frontmatter schemas (zod-validated → a malformed file fails the build) ── */

const workSchema = z.object({
  title: z.string(),
  industry: z.string(),
  role: z.string(),
  summary: z.string(),
  tags: z.array(z.string()),
  featured: z.boolean().default(false),
  order: z.number().default(999),
})

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  // YAML may parse an unquoted date as a Date; normalize to YYYY-MM-DD.
  date: z
    .union([z.string(), z.date()])
    .transform((d) =>
      typeof d === 'string' ? d : d.toISOString().slice(0, 10),
    ),
  tags: z.array(z.string()).default([]),
})

export type WorkFrontmatter = z.infer<typeof workSchema>
export type BlogFrontmatter = z.infer<typeof blogSchema>

export interface WorkEntry {
  slug: string
  frontmatter: WorkFrontmatter
  Component: ComponentType
}
export interface BlogEntry {
  slug: string
  frontmatter: BlogFrontmatter
  Component: ComponentType
}

interface MdxModule {
  default: ComponentType
  frontmatter: unknown
}

const slugFromPath = (p: string) =>
  p
    .split('/')
    .pop()!
    .replace(/\.mdx$/, '')

// Eagerly load all MDX at build time (works in SSG + client).
const workModules = import.meta.glob('/content/work/*.mdx', {
  eager: true,
}) as Record<string, MdxModule>
const blogModules = import.meta.glob('/content/blog/*.mdx', {
  eager: true,
}) as Record<string, MdxModule>

export const workEntries: WorkEntry[] = Object.entries(workModules)
  .map(([path, mod]) => ({
    slug: slugFromPath(path),
    frontmatter: workSchema.parse(mod.frontmatter),
    Component: mod.default,
  }))
  .sort((a, b) => a.frontmatter.order - b.frontmatter.order)

export const blogEntries: BlogEntry[] = Object.entries(blogModules)
  .map(([path, mod]) => ({
    slug: slugFromPath(path),
    frontmatter: blogSchema.parse(mod.frontmatter),
    Component: mod.default,
  }))
  .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))

export const featuredWork = workEntries.filter((e) => e.frontmatter.featured)

export const getWork = (slug: string) =>
  workEntries.find((e) => e.slug === slug)
export const getPost = (slug: string) =>
  blogEntries.find((e) => e.slug === slug)
