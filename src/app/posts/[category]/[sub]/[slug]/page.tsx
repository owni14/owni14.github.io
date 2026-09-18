import { Link } from 'next-view-transitions'
import { notFound } from 'next/navigation'
import { Giscus } from '@/components/giscus'
import { JsonLd } from '@/components/json-ld'
import { MDXContent } from '@/components/mdx'
import { ReadingProgress } from '@/components/reading-progress'
import { Toc } from '@/components/toc'
import {
  adjacentPosts,
  categoryLabel,
  formatDate,
  getPost,
  posts,
  subcategoryLabel,
} from '@/lib/content'
import { transitionName } from '@/lib/format'
import { alternatesBase, blogPostingJsonLd, breadcrumbJsonLd, openGraphBase } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return posts.map((p) => ({ category: p.category, sub: p.subcategory, slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<'/posts/[category]/[sub]/[slug]'>) {
  const { category, sub, slug } = await params
  const post = getPost(category, sub, slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { ...alternatesBase, canonical: post.permalink },
    openGraph: {
      ...openGraphBase,
      type: 'article',
      title: post.title,
      description: post.description,
      url: post.permalink,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      section: categoryLabel(post.category),
    },
  }
}

export default async function PostPage({ params }: PageProps<'/posts/[category]/[sub]/[slug]'>) {
  const { category, sub, slug } = await params
  const post = getPost(category, sub, slug)
  if (!post) notFound()
  const { newer, older } = adjacentPosts(post)
  const catLabel = categoryLabel(post.category)
  const subLabel = subcategoryLabel(post.category, post.subcategory)

  return (
    <article className="pt-8">
      <ReadingProgress targetId="post-body" />
      <JsonLd
        data={[
          blogPostingJsonLd(post),
          breadcrumbJsonLd([
            { name: 'Posts', path: '/posts' },
            { name: catLabel, path: `/posts/${post.category}` },
            { name: subLabel, path: `/posts/${post.category}/${post.subcategory}` },
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
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.updated && <span>수정 {formatDate(post.updated)}</span>}
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
        aria-label="이전 글과 다음 글"
        className="border-line mt-16 grid gap-4 border-t pt-8 sm:grid-cols-2"
      >
        <div>
          {older && (
            <>
              <p className="text-faint font-mono text-xs">이전 글</p>
              <Link href={older.permalink} className="mt-1 block">
                {older.title}
              </Link>
            </>
          )}
        </div>
        <div className="sm:text-right">
          {newer && (
            <>
              <p className="text-faint font-mono text-xs">다음 글</p>
              <Link href={newer.permalink} className="mt-1 block">
                {newer.title}
              </Link>
            </>
          )}
        </div>
      </nav>

      <Giscus />
    </article>
  )
}
