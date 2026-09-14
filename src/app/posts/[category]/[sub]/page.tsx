import { notFound } from 'next/navigation'
import { PostList } from '@/components/post-list'
import { PostsHeader } from '@/components/posts-header'
import { isCategory } from '@/lib/categories'
import {
  categories,
  categoryLabel,
  postsBySubcategory,
  subcategories,
  subcategoryLabel,
} from '@/lib/content'
import { pageMetadata } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
  return categories.flatMap((category) => subcategories(category).map((sub) => ({ category, sub })))
}

export async function generateMetadata({ params }: PageProps<'/posts/[category]/[sub]'>) {
  const { category, sub } = await params
  if (!isCategory(category)) return {}
  const label = `${categoryLabel(category)} › ${subcategoryLabel(category, sub)}`
  return pageMetadata(label, `${label} 글 목록`, `/posts/${category}/${sub}`)
}

export default async function SubcategoryPage({ params }: PageProps<'/posts/[category]/[sub]'>) {
  const { category, sub } = await params
  if (!isCategory(category) || !subcategories(category).includes(sub)) notFound()
  return (
    <>
      <PostsHeader category={category} subcategory={sub} />
      <PostList posts={postsBySubcategory(category, sub)} showYear />
    </>
  )
}
