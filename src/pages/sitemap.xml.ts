import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

import { site } from '../lib/site'
import { blogDefaultLocale, normalizeLocaleCode } from '../locales/config'

const postsPerPage = 10

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function postLocale(id: string) {
  const [maybeLocale] = id.split('/')
  return id.includes('/')
    ? normalizeLocaleCode(maybeLocale)
    : normalizeLocaleCode(blogDefaultLocale)
}

function formatLastMod(value: Date | undefined) {
  return value?.toISOString()
}

export const GET: APIRoute = async ({ site: astroSite }) => {
  const baseUrl = astroSite ?? new URL(site.url)
  const now = Date.now()
  const posts = (await getCollection('blog')).filter((post) => {
    const notDraft = !post.data.draft
    const notFuture = !post.data.date || post.data.date.getTime() <= now
    return notDraft && notFuture
  })
  const defaultLocalePosts = posts.filter(
    (post) => postLocale(post.id) === normalizeLocaleCode(blogDefaultLocale),
  )
  const newestPostDate = posts
    .map((post) => post.data.updatedAt ?? post.data.date)
    .filter((date): date is Date => date instanceof Date)
    .sort((a, b) => b.getTime() - a.getTime())[0]

  const entries: { path: string; lastmod?: Date }[] = [
    { path: '/', lastmod: newestPostDate },
    { path: '/blog', lastmod: newestPostDate },
    { path: '/about', lastmod: newestPostDate },
  ]

  const totalPages = Math.ceil(defaultLocalePosts.length / postsPerPage)
  for (let page = 2; page <= totalPages; page += 1) {
    entries.push({ path: `/blog/page/${page}`, lastmod: newestPostDate })
  }

  const years = Array.from(
    new Set(
      defaultLocalePosts
        .map((post) => post.data.date?.getFullYear())
        .filter((year): year is number => typeof year === 'number'),
    ),
  )

  for (const year of years) {
    const latestForYear = defaultLocalePosts
      .filter((post) => post.data.date?.getFullYear() === year)
      .map((post) => post.data.updatedAt ?? post.data.date)
      .filter((date): date is Date => date instanceof Date)
      .sort((a, b) => b.getTime() - a.getTime())[0]

    entries.push({ path: `/blog/archive/${year}`, lastmod: latestForYear })
  }

  for (const post of posts) {
    entries.push({
      path: `/blog/${post.id}`,
      lastmod: post.data.updatedAt ?? post.data.date,
    })
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map(({ path, lastmod }) => {
      const loc = escapeXml(new URL(path, baseUrl).toString())
      const lastmodTag = lastmod
        ? `\n    <lastmod>${escapeXml(formatLastMod(lastmod)!)}</lastmod>`
        : ''
      return `  <url>\n    <loc>${loc}</loc>${lastmodTag}\n  </url>`
    })
    .join('\n')}\n</urlset>\n`

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
