# Portfolio Redesign Direction

## Project Goal

Rebuild the current site from an old Jekyll blog/theme hybrid into a single-page portfolio that immediately communicates Minseok Song's current identity:

- Microsoft AI MVP
- OSS maintainer of `Azure/co-op-translator`
- Builder of `Localizeflow`
- Operator of multilingual documentation systems for open source and developer education

The site should feel current, editorial, and product-minded rather than like a personal blog.

## Public Signals Used

This redesign is based on public information available as of March 31, 2026 from:

- GitHub profile: `https://github.com/skytin1004`
- Co-op Translator repository: `https://github.com/Azure/co-op-translator`
- Localizeflow: `https://localizeflow.com/`
- Microsoft Tech Community and Microsoft Developer Community Blog posts
- Microsoft Learn / Microsoft Reactor event pages
- Existing portfolio content already published at `https://skytin1004.github.io/about`

## Positioning

### Core statement

Minseok is not just "an AI engineer" or "someone who writes tutorials."

He builds the infrastructure and operating model that keep technical knowledge synchronized across languages.

### Narrative shift

Old framing:

- engineering blog
- tutorials
- general portfolio

New framing:

- documentation localization systems
- maintainer workflows at scale
- GitHub-native product and automation design
- open source to product continuum

## Experience Goals

Within the first 10 seconds, visitors should understand:

1. Who Minseok Song is now
2. What he builds
3. Why the work matters
4. Evidence that the work operates at real scale
5. Where to go next: GitHub, Localizeflow, writing, or direct contact

## Visual Direction

### Theme

`Editorial systems for global technical knowledge`

### Feel

- clean but not sterile
- innovative without looking trend-chasing
- light-first and high-contrast
- structured like a product launch page crossed with an author site

### Style ingredients

- warm ivory base instead of plain white
- deep ink text with cobalt and teal accents
- soft radial color fields and grid texture
- strong geometric headline typography
- rounded but architectural cards
- restrained motion for reveal and navigation feedback

## Information Architecture

### 1. Hero

- clear positioning headline
- one-line Korean support copy
- summary of current work
- primary CTAs
- portrait + current signal card

### 2. Proof / Signal Layer

- metrics at a glance
- ecosystem repositories
- badges for MVP / maintainer / builder / MLSA

### 3. Flagship Work

- Localizeflow
- Co-op Translator

This section should explain both the open-source engine and the productized layer above it.

### 4. Operating Principles

Show the philosophy behind the work:

- GitHub as source of truth
- translate only what changed
- translations as versioned software assets

### 5. Writing and Talks

Split into:

- selected writing
- selected talks / media

The writing list should bias toward the current localization + docs-ops identity, while still reflecting Azure AI and Responsible AI work.

### 6. Background and Journey

Compact cards for:

- education
- credentials
- recognition

And a timeline showing the evolution from first software project to current product/operator identity.

### 7. Contact

- direct links
- simple closing CTA

## Content Strategy

### What to emphasize

- infrastructure thinking
- maintainer empathy
- multilingual documentation systems
- GitHub-native automation
- open source credibility
- transition from operating workflows manually to productizing them

### What to de-emphasize

- generic "I love coding" portfolio language
- old blog-style navigation
- disconnected project gallery items
- decorative sections without strategic value

## Technical Plan

### Architecture

- keep Jekyll as the static site generator
- move the page to a single custom portfolio shell
- use `_data/profile.yml` as the content source of truth
- replace theme-heavy home rendering with custom HTML/CSS/JS

### Files to rewrite

- `index.html`
- `_layouts/default.html`
- `_includes/head.html`
- `assets/css/main.scss`
- `assets/js/main.js`
- `_config.yml`

### Pages to normalize

- `about.html`
- `about_kor.html`
- `archives.html`
- `categories.html`
- `tags.html`
- `404.html`

These should no longer expose the old visual system.

## Motion

- subtle section reveal on scroll
- sticky navigation with active section state
- small hover lift on cards
- mobile menu transition

No autoplay gimmicks, sliders, or generic typing effects.

## Success Criteria

- the site no longer reads like an old engineering blog
- Minseok's current public identity is visible above the fold
- the design feels coherent across desktop and mobile
- content updates become easier because the portfolio is data-driven
- the implementation remains simple enough to maintain in GitHub Pages / Jekyll
