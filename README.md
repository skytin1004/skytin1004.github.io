# Minseok Song Tech Blog

Personal technical blog built with [Astro](https://astro.build), React islands, and Tailwind CSS.

## Development

Use Node.js 22.12.0 or newer.

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content

- Blog posts live in `src/content/blog`.
- The About page renders `src/content/about/resume.md`.
- Shared site metadata lives in `src/lib/site.ts`.

## Deployment

The site builds to `dist/` and can be deployed to GitHub Pages or any static host.
