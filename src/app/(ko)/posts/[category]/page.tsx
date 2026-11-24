import { CategoryPage } from '@/components/blog-pages'
import { categoriesFor, categoryLabel } from '@/lib/content'
import { isCategory } from '@/lib/categories'
import { pageMetadata } from '@/lib/seo'
export const dynamicParams = false
export function generateStaticParams() {
  return categoriesFor('ko').map((category) => ({ category }))
}
type Props = { params: Promise<{ category: string }> }
export async function generateMetadata({ params }: Props) {
  const { category } = await params
  if (!isCategory(category)) return {}
  const label = categoryLabel(category)
  return pageMetadata(label, `${label} 글 목록`, `/posts/${category}`, 'ko')
}
export default async function Page({ params }: Props) {
  const { category } = await params
  return <CategoryPage category={category} locale="ko" />
}
