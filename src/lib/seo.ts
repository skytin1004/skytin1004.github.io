import { site } from './site'

type JsonLd = Record<string, unknown>

type WebPageSchemaOptions = {
  url: string
  title: string
  description?: string
  pageType?: 'WebPage' | 'CollectionPage' | 'ProfilePage'
}

type BlogPostingSchemaOptions = {
  url: string
  title: string
  description?: string
  imageUrl: string
  publishedTime?: Date | string
  modifiedTime?: Date | string
  tags?: string[]
}

export function absoluteUrl(
  pathOrUrl: string,
  baseUrl: string | URL = site.url,
) {
  return new URL(pathOrUrl, baseUrl).toString()
}

export function toIsoDate(value: Date | string | undefined) {
  if (!value) return undefined
  const date = value instanceof Date ? value : new Date(value)
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString()
}

export function serializeJsonLd(data: JsonLd | JsonLd[]) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function personSchema(baseUrl: string | URL = site.url): JsonLd {
  const canonicalSiteUrl = absoluteUrl('/', baseUrl)

  return {
    '@type': 'Person',
    '@id': `${canonicalSiteUrl}#person`,
    name: site.name,
    alternateName: site.alternateNames,
    url: canonicalSiteUrl,
    image: absoluteUrl(site.ogImage, baseUrl),
    jobTitle: 'Microsoft AI MVP',
    sameAs: site.sameAs,
  }
}

export function websiteSchema(baseUrl: string | URL = site.url): JsonLd {
  const canonicalSiteUrl = absoluteUrl('/', baseUrl)

  return {
    '@type': 'WebSite',
    '@id': `${canonicalSiteUrl}#website`,
    url: canonicalSiteUrl,
    name: site.title,
    alternateName: site.alternateNames,
    description: site.description,
    inLanguage: 'en',
    publisher: {
      '@id': `${canonicalSiteUrl}#person`,
    },
  }
}

export function blogSchema(baseUrl: string | URL = site.url): JsonLd {
  const canonicalSiteUrl = absoluteUrl('/', baseUrl)

  return {
    '@type': 'Blog',
    '@id': `${canonicalSiteUrl}blog#blog`,
    url: absoluteUrl('/blog', baseUrl),
    name: site.title,
    alternateName: site.alternateNames,
    description: site.description,
    inLanguage: 'en',
    author: {
      '@id': `${canonicalSiteUrl}#person`,
    },
    publisher: {
      '@id': `${canonicalSiteUrl}#person`,
    },
  }
}

export function webPageSchema({
  url,
  title,
  description,
  pageType = 'WebPage',
}: WebPageSchemaOptions): JsonLd {
  const canonicalSiteUrl = absoluteUrl('/')

  return {
    '@type': pageType,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      '@id': `${canonicalSiteUrl}#website`,
    },
    about: {
      '@id': `${canonicalSiteUrl}#person`,
    },
  }
}

export function blogPostingSchema({
  url,
  title,
  description,
  imageUrl,
  publishedTime,
  modifiedTime,
  tags = [],
}: BlogPostingSchemaOptions): JsonLd {
  const canonicalSiteUrl = absoluteUrl('/')
  const datePublished = toIsoDate(publishedTime)
  const dateModified = toIsoDate(modifiedTime) ?? datePublished

  return {
    '@type': 'BlogPosting',
    '@id': `${url}#blogposting`,
    mainEntityOfPage: {
      '@id': `${url}#webpage`,
    },
    headline: title,
    description,
    image: imageUrl,
    datePublished,
    dateModified,
    author: {
      '@id': `${canonicalSiteUrl}#person`,
    },
    publisher: {
      '@id': `${canonicalSiteUrl}#person`,
    },
    keywords: tags,
    url,
  }
}
