import { notFound } from 'next/navigation'
import { PostList } from '@/components/post-list'
import { PostsHeader } from '@/components/posts-header'
import { isCategory } from '@/lib/categories'
import { categories, categoryLabel, postsByCategory } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return categories.map((category) => ({ category }))
}

export async function generateMetadata({ params }: PageProps<'/posts/[category]'>) {
  const { category } = await params
  if (!isCategory(category)) return {}
  const label = categoryLabel(category)
  return pageMetadata(label, `${label} 카테고리의 글 목록`, `/posts/${category}`)
}

export default async function CategoryPage({ params }: PageProps<'/posts/[category]'>) {
  const { category } = await params
  if (!isCategory(category) || !categories.includes(category)) notFound()
  return (
    <>
      <PostsHeader category={category} />
      <PostList posts={postsByCategory(category)} showYear />
    </>
  )
}
