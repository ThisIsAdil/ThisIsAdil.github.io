import type { ComponentType } from 'react'
import { slugFromPath } from './index'

// Full MDX modules (rendered body components). Imported ONLY by the detail
// pages (WorkDetail / BlogPost), which are lazy routes — so these ship in
// per-route chunks, never in the homepage/main bundle. Still SSG-prerendered.
const workBodies = import.meta.glob('/content/work/*.mdx', {
  eager: true,
}) as Record<string, { default: ComponentType }>
const blogBodies = import.meta.glob('/content/blog/*.mdx', {
  eager: true,
}) as Record<string, { default: ComponentType }>

const bySlug = (mods: Record<string, { default: ComponentType }>) =>
  Object.fromEntries(
    Object.entries(mods).map(([path, mod]) => [
      slugFromPath(path),
      mod.default,
    ]),
  )

const work = bySlug(workBodies)
const blog = bySlug(blogBodies)

export const getWorkBody = (slug: string): ComponentType | undefined =>
  work[slug]
export const getBlogBody = (slug: string): ComponentType | undefined =>
  blog[slug]
