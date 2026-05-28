export type EditorialPost = {
  href: string
  title: string
  description?: string
  category?: string
  date?: string
  readingTimeMinutes?: number
  tags?: string[]
  authorName?: string
  authorTitle?: string
}

type EditorialPostListProps = {
  posts: EditorialPost[]
  heading?: string
  intro?: string
}

function formatMeta(post: EditorialPost) {
  const parts = [post.date, post.readingTimeMinutes ? `${post.readingTimeMinutes} min read` : null]
  return parts.filter(Boolean).join(' / ')
}

export default function EditorialPostList({
  posts,
  heading = 'Recent writing',
  intro = 'Field notes, architecture decisions, and implementation tradeoffs from practical AI and developer tooling work.',
}: EditorialPostListProps) {
  if (posts.length === 0) {
    return (
      <section className="not-prose border-t border-border pt-10">
        <p className="text-sm text-text-secondary">No published writing yet.</p>
      </section>
    )
  }

  const [featured, ...rest] = posts
  const topicSet = new Set<string>()
  posts.forEach((post) => {
    if (post.category) topicSet.add(post.category)
    post.tags?.forEach((tag) => topicSet.add(tag))
  })
  const topics = Array.from(topicSet).slice(0, 10)

  return (
    <section className="not-prose space-y-10">
      <div className="grid gap-5 border-t border-border pt-8 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Archive</p>
          <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-text sm:text-3xl">
            {heading}
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
          {intro}
        </p>
      </div>

      <article className="group border-y border-text py-8 transition-colors hover:border-brand">
        <a href={featured.href} className="grid gap-7 md:grid-cols-[minmax(0,1fr)_15rem]">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-brand">
              <span>Featured</span>
              {featured.category && <span>{featured.category}</span>}
            </div>
            <h3 className="mt-4 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight text-text transition-colors group-hover:text-brand sm:text-4xl">
              {featured.title}
            </h3>
            {featured.description && (
              <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary">
                {featured.description}
              </p>
            )}
          </div>

          <div className="flex flex-col justify-between gap-6 border-t border-border pt-5 md:border-t-0 md:border-l md:pl-6 md:pt-0">
            <div className="space-y-2 text-sm text-text-secondary">
              {featured.authorName && (
                <p>
                  <span className="text-text">{featured.authorName}</span>
                  {featured.authorTitle && <span className="block text-xs">{featured.authorTitle}</span>}
                </p>
              )}
              <p>{formatMeta(featured)}</p>
            </div>
            {featured.tags && featured.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {featured.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-2.5 py-1 text-xs text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </a>
      </article>

      <div className="grid gap-6 border-b border-border pb-10 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)]">
        <div className="border border-border bg-bg p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Reading paths
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <a href="/blog" className="group border-t border-text pt-4">
              <span className="font-display text-lg text-text transition-colors group-hover:text-brand">
                AI systems
              </span>
              <span className="mt-2 block text-sm leading-6 text-text-secondary">
                RAG, evaluation, agents, and the architecture decisions behind reliable AI.
              </span>
            </a>
            <a href="/blog" className="group border-t border-text pt-4">
              <span className="font-display text-lg text-text transition-colors group-hover:text-brand">
                Developer workflows
              </span>
              <span className="mt-2 block text-sm leading-6 text-text-secondary">
                GitHub-native automation, docs pipelines, and tools that reduce review friction.
              </span>
            </a>
            <a href="/about" className="group border-t border-text pt-4">
              <span className="font-display text-lg text-text transition-colors group-hover:text-brand">
                Field notes
              </span>
              <span className="mt-2 block text-sm leading-6 text-text-secondary">
                Personal engineering judgment, patterns, and how the work is shaped.
              </span>
            </a>
          </div>
        </div>

        <aside className="border border-border bg-subtle/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Browse by topic
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="border border-border bg-bg px-3 py-1.5 text-sm text-text"
              >
                {topic}
              </span>
            ))}
          </div>
        </aside>
      </div>

      {rest.length > 0 && (
        <div className="divide-y divide-border">
          {rest.map((post, index) => (
            <article key={post.href} className="group py-7">
              <a href={post.href} className="grid gap-5 md:grid-cols-[4rem_minmax(0,1fr)_13rem]">
                <span className="font-display text-sm text-text-secondary">
                  {String(index + 2).padStart(2, '0')}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-brand">
                    {post.category && <span>{post.category}</span>}
                    <span>{formatMeta(post)}</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-medium leading-tight tracking-tight text-text transition-colors group-hover:text-brand">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary">
                      {post.description}
                    </p>
                  )}
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap content-start gap-2 md:justify-end">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-text-secondary">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
