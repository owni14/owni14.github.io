import { messages, localizedPath, formatLocalizedDate, type Locale } from '@/lib/i18n'
import { Link } from '@/components/localized-link'
import { notFound } from 'next/navigation'
import { Giscus } from '@/components/giscus'
import { JsonLd } from '@/components/json-ld'
import { MDXContent } from '@/components/mdx'
import { ReadingProgress } from '@/components/reading-progress'
import { Toc } from '@/components/toc'
import { adjacentPosts, categoryLabel, formatDate, getPost, subcategoryLabel } from '@/lib/content'
import { transitionName } from '@/lib/format'
import { blogPostingJsonLd, breadcrumbJsonLd } from '@/lib/seo'

export function PostPage({
  category,
  sub,
  slug,
  locale = 'ko',
}: {
  category: string
  sub: string
  slug: string
  locale?: Locale
}) {
  const post = getPost(category, sub, slug, locale)
  if (!post) notFound()
  const { newer, older } = adjacentPosts(post, locale)
  const t = messages[locale]
  const catLabel = categoryLabel(post.category)
  const subLabel =
    locale === 'en' && post.subcategory === 'programmers'
      ? 'Programmers'
      : subcategoryLabel(post.category, post.subcategory)

  return (
    <article className="pt-8">
      <ReadingProgress targetId="post-body" />
      <JsonLd
        data={[
          blogPostingJsonLd(post, locale),
          breadcrumbJsonLd([
            { name: t.posts, path: localizedPath('/posts', locale) },
            { name: catLabel, path: localizedPath(`/posts/${post.category}`, locale) },
            {
              name: subLabel,
              path: localizedPath(`/posts/${post.category}/${post.subcategory}`, locale),
            },
            { name: post.title, path: post.permalink },
          ]),
        ]}
      />

      <header className="max-w-2xl">
        <p className="text-muted flex flex-wrap items-center gap-x-3 font-mono text-xs">
          <span>
            <Link
              href={`/posts/${post.category}`}
              className="text-muted no-underline hover:underline"
            >
              {catLabel}
            </Link>
            <span aria-hidden> › </span>
            <Link
              href={`/posts/${post.category}/${post.subcategory}`}
              className="text-muted no-underline hover:underline"
            >
              {subLabel}
            </Link>
          </span>
          <time dateTime={post.date}>
            {locale === 'en' ? formatLocalizedDate(post.date, locale) : formatDate(post.date)}
          </time>
          {post.updated && (
            <span>
              {t.updated} {formatLocalizedDate(post.updated, locale)}
            </span>
          )}
        </p>
        <h1
          className="mt-3 text-2xl font-semibold"
          style={{ viewTransitionName: transitionName(post) }}
        >
          {post.title}
        </h1>
      </header>

      {/* 목차는 본문 폭을 깎지 않도록 컨테이너 바깥 오른쪽 여백에 띄운다. 여백이 충분한 xl부터만 보인다. */}
      <div className="relative mt-10">
        <div id="post-body" className="prose max-w-2xl">
          <MDXContent code={post.body} />
        </div>
        <aside className="absolute top-0 left-full hidden h-full w-60 pl-10 xl:block">
          <div className="sticky top-20">
            <Toc items={post.toc} />
          </div>
        </aside>
      </div>

      <nav
        aria-label={`${t.previous} / ${t.next}`}
        className="border-line mt-16 grid gap-4 border-t pt-8 sm:grid-cols-2"
      >
        <div>
          {older && (
            <>
              <p className="text-faint font-mono text-xs">{t.previous}</p>
              <Link href={older.permalink} className="mt-1 block">
                {older.title}
              </Link>
            </>
          )}
        </div>
        <div className="sm:text-right">
          {newer && (
            <>
              <p className="text-faint font-mono text-xs">{t.next}</p>
              <Link href={newer.permalink} className="mt-1 block">
                {newer.title}
              </Link>
            </>
          )}
        </div>
      </nav>

      <Giscus term={post.originalPath} />
    </article>
  )
}
