import { getCollection } from 'astro:content'

import { blogDefaultLocale, normalizeLocaleCode } from '../locales/config'

type PublishedBlogPostOptions = {
  year?: number
}

export async function getPublishedBlogPosts(
  locale: string = blogDefaultLocale,
  options: PublishedBlogPostOptions = {},
) {
  const normalizedLocale = normalizeLocaleCode(locale)
  const allPosts = await getCollection('blog')
  const now = Date.now()

  return allPosts
    .filter((post) => {
      const parts = post.id.split('/')
      const isLocalized = parts.length > 1
      const rawPostLocale = isLocalized ? parts[0] : blogDefaultLocale
      const normalizedPostLocale = normalizeLocaleCode(rawPostLocale)
      const notDraft = !post.data.draft
      const notFuture = !post.data.date || post.data.date.getTime() <= now
      const matchesYear = !options.year || post.data.date?.getFullYear() === options.year

      return normalizedPostLocale === normalizedLocale && notDraft && notFuture && matchesYear
    })
    .sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0))
}
