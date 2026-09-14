import { Link } from 'next-view-transitions'
import {
  categories,
  categoryLabel,
  posts,
  postsByCategory,
  postsBySubcategory,
  subcategories,
  subcategoryLabel,
  type Category,
} from '@/lib/content'

function Chip({
  href,
  active,
  count,
  children,
}: {
  href: string
  active: boolean
  count: number
  children: string
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm no-underline transition-colors ${
        active ? 'bg-fg text-bg' : 'bg-soft text-muted hover:text-fg'
      }`}
    >
      {children}
      <span className={`font-mono text-xs ${active ? 'text-bg/70' : 'text-faint'}`}>{count}</span>
    </Link>
  )
}

/**
 * 글 목록 상단. 상위 경로(작은 글자) + 현재 단계 제목 + 칩 한 줄.
 * 칩은 현재 위치의 바로 아래 단계만 보여 준다: 전체 화면에서는 카테고리, 카테고리 안에서는 소분류.
 */
export function PostsHeader({
  category,
  subcategory,
}: {
  category?: Category
  subcategory?: string
}) {
  const parents: { label: string; href: string }[] = []
  let title = 'Posts'
  if (category) {
    parents.push({ label: 'Posts', href: '/posts' })
    title = categoryLabel(category)
  }
  if (category && subcategory) {
    parents.push({ label: categoryLabel(category), href: `/posts/${category}` })
    title = subcategoryLabel(category, subcategory)
  }

  return (
    <header className="pt-8 pb-6">
      {parents.length > 0 && (
        <nav aria-label="상위 분류" className="text-muted mb-2 font-mono text-xs">
          {parents.map((c, i) => (
            <span key={c.href}>
              {i > 0 && <span aria-hidden> › </span>}
              <Link href={c.href} className="text-muted no-underline hover:underline">
                {c.label}
              </Link>
            </span>
          ))}
          <span aria-hidden> ›</span>
        </nav>
      )}
      <h1 className="text-xl font-semibold">{title}</h1>

      <nav aria-label={category ? '소분류' : '카테고리'} className="mt-6 flex flex-wrap gap-2">
        {category ? (
          <>
            <Chip
              href={`/posts/${category}`}
              active={!subcategory}
              count={postsByCategory(category).length}
            >
              All
            </Chip>
            {subcategories(category).map((s) => (
              <Chip
                key={s}
                href={`/posts/${category}/${s}`}
                active={subcategory === s}
                count={postsBySubcategory(category, s).length}
              >
                {subcategoryLabel(category, s)}
              </Chip>
            ))}
          </>
        ) : (
          <>
            <Chip href="/posts" active count={posts.length}>
              All
            </Chip>
            {categories.map((c) => (
              <Chip key={c} href={`/posts/${c}`} active={false} count={postsByCategory(c).length}>
                {categoryLabel(c)}
              </Chip>
            ))}
          </>
        )}
      </nav>
    </header>
  )
}
