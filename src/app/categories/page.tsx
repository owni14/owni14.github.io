import { Link } from 'next-view-transitions'
import {
  categories,
  categoryLabel,
  postsByCategory,
  postsBySubcategory,
  subcategories,
  subcategoryLabel,
} from '@/lib/content'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata('Categories', '카테고리와 소분류별 글 목록', '/categories')

export default function CategoriesPage() {
  return (
    <>
      <header className="pt-8 pb-6">
        <h1 className="text-xl font-semibold">Categories</h1>
      </header>

      {categories.length === 0 ? (
        <p className="text-muted">아직 글이 없습니다.</p>
      ) : (
        <ul className="divide-line divide-y">
          {categories.map((c) => (
            <li key={c} className="py-5">
              <Link
                href={`/posts/${c}`}
                className="flex items-baseline justify-between gap-4 font-medium no-underline hover:underline"
              >
                <span>{categoryLabel(c)}</span>
                <span className="text-faint font-mono text-xs font-normal">
                  {postsByCategory(c).length}
                </span>
              </Link>
              <ul className="mt-2 ml-4 text-sm">
                {subcategories(c).map((s) => (
                  <li key={s}>
                    <Link
                      href={`/posts/${c}/${s}`}
                      className="text-muted hover:text-fg flex items-baseline justify-between gap-4 py-1 no-underline transition-colors"
                    >
                      <span>{subcategoryLabel(c, s)}</span>
                      <span className="text-faint font-mono text-xs">
                        {postsBySubcategory(c, s).length}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
