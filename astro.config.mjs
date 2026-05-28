import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mermaid from 'astro-mermaid'
import { fileURLToPath } from 'node:url'
import remarkAdmonitions from './src/lib/remark-admonitions.mjs'

export default defineConfig({
  srcDir: 'src',
  site: 'https://www.mssong.com',
  integrations: [react(), mermaid()],
  markdown: {
    remarkPlugins: [remarkAdmonitions],
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
})
