import { notFound } from 'next/navigation'
import { Link } from '@/components/localized-link'
import { PostList } from '@/components/post-list'
import { PostsHeader } from '@/components/posts-header'
import { isCategory } from '@/lib/categories'
import {
  categoriesFor,
  categoryLabel,
  getPosts,
  postsByCategory,
  postsBySubcategory,
  subcategories,
  subcategoryLabel,
} from '@/lib/content'
import { messages, type Locale } from '@/lib/i18n'

export function PostsPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PostsHeader locale={locale} />
      <PostList posts={getPosts(locale)} locale={locale} showYear />
    </>
  )
}

export function CategoryPage({
  category,
  sub,
  locale,
}: {
  category: string
  sub?: string
  locale: Locale
}) {
  if (
    !isCategory(category) ||
    !categoriesFor(locale).includes(category) ||
    (sub && !subcategories(category, locale).includes(sub))
  )
    notFound()
  const posts = sub ? postsBySubcategory(category, sub, locale) : postsByCategory(category, locale)
  return (
    <>
      <PostsHeader category={category} subcategory={sub} locale={locale} />
      <PostList posts={posts} locale={locale} showYear />
    </>
  )
}

export function CategoriesPage({ locale }: { locale: Locale }) {
  const t = messages[locale]
  const categories = categoriesFor(locale)
  return (
    <>
      <header className="pt-8 pb-6">
        <h1 className="text-xl font-semibold">{t.categories}</h1>
      </header>
      {categories.length === 0 ? (
        <p className="text-muted">{t.empty}</p>
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
                  {postsByCategory(c, locale).length}
                </span>
              </Link>
              <ul className="mt-2 ml-4 text-sm">
                {subcategories(c, locale).map((s) => (
                  <li key={s}>
                    <Link
                      href={`/posts/${c}/${s}`}
                      className="text-muted hover:text-fg flex items-baseline justify-between gap-4 py-1 no-underline transition-colors"
                    >
                      <span>
                        {locale === 'en' && s === 'programmers'
                          ? 'Programmers'
                          : subcategoryLabel(c, s)}
                      </span>
                      <span className="text-faint font-mono text-xs">
                        {postsBySubcategory(c, s, locale).length}
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

export function NotFoundPage({ locale }: { locale: Locale }) {
  const t = messages[locale]
  return (
    <div className="pt-12">
      <p className="text-faint font-mono text-xs">404</p>
      <h1 className="mt-2 text-xl font-semibold">{t.notFound}</h1>
      <p className="text-muted mt-4">{t.notFoundText}</p>
      <ul className="mt-8 flex flex-wrap gap-5 text-sm">
        <li>
          <Link href="/posts">{t.viewAll}</Link>
        </li>
        <li>
          <Link href="/">{t.home}</Link>
        </li>
      </ul>
    </div>
  )
}
