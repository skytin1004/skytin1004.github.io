import { getCollection } from 'astro:content'
import { blogDefaultLocale, normalizeLocaleCode } from '../locales/config'

export type BlogNavSection = {
  title: string
  links: { title: string; href: string }[]
}

export async function getBlogNavigation(locale: string = blogDefaultLocale): Promise<BlogNavSection[]> {
  const normalizedLocale = normalizeLocaleCode(locale)
  const posts = await getCollection('blog')
  const now = Date.now()

  type LinkWithMeta = {
    title: string
    href: string
    year: number
    sortKey: number
  }

  const byYear = new Map<number, LinkWithMeta[]>()

  for (const post of posts) {
    const parts = post.id.split('/')
    const isLocalized = parts.length > 1
    const rawPostLocale = isLocalized ? parts[0] : blogDefaultLocale
    const normalizedPostLocale = normalizeLocaleCode(rawPostLocale)
    if (normalizedPostLocale !== normalizedLocale) continue

    const notDraft = !post.data.draft
    const notFuture = !post.data.date || post.data.date.getTime() <= now
    if (!notDraft || !notFuture) continue

    const date = post.data.date instanceof Date ? post.data.date : undefined
    const year = date?.getFullYear() ?? new Date().getFullYear()
    const sortKey = date?.getTime() ?? 0

    const link: LinkWithMeta = {
      title: post.data.title,
      href: `/blog/${post.id}`,
      year,
      sortKey,
    }

    const existing = byYear.get(year)
    if (existing) {
      existing.push(link)
    } else {
      byYear.set(year, [link])
    }
  }

  const sections: BlogNavSection[] = Array.from(byYear.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([year, links]) => {
      const sortedLinks = links.sort((a, b) => b.sortKey - a.sortKey)
      return {
        title: String(year),
        links: sortedLinks.map(({ title, href }) => ({ title, href })),
      }
    })

  return sections
}
