import { Link } from 'next-view-transitions'
import { categoryLabel, subcategoryLabel, type Category } from '@/lib/categories'
import { formatDate, transitionName } from '@/lib/format'

export type PostListItem = {
  title: string
  description: string
  date: string
  category: Category
  subcategory: string
  slug: string
  permalink: string
}

export function PostList({
  posts,
  showYear = false,
  emptyMessage = '아직 글이 없습니다.',
}: {
  posts: PostListItem[]
  showYear?: boolean
  emptyMessage?: string
}) {
  if (posts.length === 0) {
    return <p className="text-muted">{emptyMessage}</p>
  }
  const rows = posts.map((post, i) => {
    const year = post.date.slice(0, 4)
    const prevYear = i > 0 ? posts[i - 1].date.slice(0, 4) : null
    return { post, yearHeading: showYear && year !== prevYear ? year : null }
  })
  return (
    <ul className="divide-line divide-y">
      {rows.map(({ post, yearHeading }) => (
        <li key={post.permalink}>
          {yearHeading && (
            <p className="text-muted pt-8 pb-2 font-mono text-xs" aria-hidden>
              {yearHeading}
            </p>
          )}
          <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
            <time dateTime={post.date} className="text-muted shrink-0 font-mono text-xs sm:w-24">
              {formatDate(post.date)}
            </time>
            <Link href={post.permalink} className="group flex-1 no-underline">
              <span
                className="group-hover:decoration-fg underline decoration-transparent decoration-1 underline-offset-[3px] transition-colors"
                style={{ viewTransitionName: transitionName(post) }}
              >
                {post.title}
              </span>
              <span className="text-muted mt-1 block text-sm">{post.description}</span>
            </Link>
            <span className="text-faint shrink-0 text-xs sm:w-32 sm:text-right">
              <Link
                href={`/posts/${post.category}`}
                className="text-faint hover:text-muted no-underline"
              >
                {categoryLabel(post.category)}
              </Link>
              <span aria-hidden> › </span>
              <Link
                href={`/posts/${post.category}/${post.subcategory}`}
                className="text-faint hover:text-muted no-underline"
              >
                {subcategoryLabel(post.category, post.subcategory)}
              </Link>
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
