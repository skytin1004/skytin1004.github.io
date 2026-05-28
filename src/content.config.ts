import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const markdownId = ({ entry }: { entry: string }) => entry.replace(/\.(md|mdx)$/, '')

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
    generateId: markdownId,
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    date: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    readingTimeMinutes: z.number().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
})

const about = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/about',
    generateId: markdownId,
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
})

export const collections = {
  blog,
  about,
}
