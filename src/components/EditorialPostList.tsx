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
  maxPosts?: number
  moreHref?: string
  moreLabel?: string
  startIndex?: number
  pagination?: {
    currentPage: number
    totalPages: number
    basePath: string
  }
}

function formatMeta(post: EditorialPost) {
  const parts = [post.date, post.readingTimeMinutes ? `${post.readingTimeMinutes} min read` : null]
  return parts.filter(Boolean).join(' / ')
}

export default function EditorialPostList({
  posts,
  heading = 'Recent writing',
  intro = 'Field notes, architecture decisions, and implementation tradeoffs from practical AI and developer tooling work.',
  maxPosts,
  moreHref,
  moreLabel = 'More writing',
  startIndex = 1,
  pagination,
}: EditorialPostListProps) {
  if (posts.length === 0) {
    return (
      <section className="not-prose border-t border-border pt-10">
        <p className="text-sm text-text-secondary">No published writing yet.</p>
      </section>
    )
  }

  const visiblePosts = typeof maxPosts === 'number' ? posts.slice(0, maxPosts) : posts
  const showMoreLink = Boolean(moreHref) && visiblePosts.length < posts.length
  const showPagination = pagination && pagination.totalPages > 1
  const paginationHref = (page: number) =>
    page === 1 ? pagination?.basePath ?? '/blog' : `${pagination?.basePath ?? '/blog'}/page/${page}`

  return (
    <section className="not-prose space-y-8">
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

      <div className="divide-y divide-border border-y border-text">
        {visiblePosts.map((post, index) => (
          <article key={post.href} className="group py-7">
            <a href={post.href} className="grid gap-5 md:grid-cols-[4rem_minmax(0,1fr)_13rem]">
              <span className="font-display text-sm text-text-secondary">
                {String(startIndex + index).padStart(2, '0')}
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
      {showPagination && (
        <nav
          aria-label="Writing pagination"
          className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6"
        >
          <a
            href={
              pagination.currentPage > 1
                ? paginationHref(pagination.currentPage - 1)
                : undefined
            }
            aria-disabled={pagination.currentPage === 1}
            className={
              'inline-flex border px-4 py-2 text-sm font-medium transition-colors ' +
              (pagination.currentPage === 1
                ? 'pointer-events-none border-border text-text-secondary/50'
                : 'border-text text-text hover:border-brand hover:text-brand')
            }
          >
            Previous
          </a>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {Array.from({ length: pagination.totalPages }, (_, index) => {
              const page = index + 1
              const active = page === pagination.currentPage

              return (
                <a
                  key={page}
                  href={paginationHref(page)}
                  aria-current={active ? 'page' : undefined}
                  className={
                    'grid h-10 w-10 place-items-center border text-sm font-medium transition-colors ' +
                    (active
                      ? 'border-text bg-text text-bg'
                      : 'border-border text-text hover:border-brand hover:text-brand')
                  }
                >
                  {page}
                </a>
              )
            })}
          </div>
          <a
            href={
              pagination.currentPage < pagination.totalPages
                ? paginationHref(pagination.currentPage + 1)
                : undefined
            }
            aria-disabled={pagination.currentPage === pagination.totalPages}
            className={
              'inline-flex border px-4 py-2 text-sm font-medium transition-colors ' +
              (pagination.currentPage === pagination.totalPages
                ? 'pointer-events-none border-border text-text-secondary/50'
                : 'border-text text-text hover:border-brand hover:text-brand')
            }
          >
            Next
          </a>
        </nav>
      )}
      {showMoreLink && (
        <div className="flex justify-end">
          <a
            href={moreHref}
            className="inline-flex border border-text px-4 py-2 text-sm font-medium text-text transition-colors hover:border-brand hover:text-brand"
          >
            {moreLabel}
          </a>
        </div>
      )}
    </section>
  )
}
