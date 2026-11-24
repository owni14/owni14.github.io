import { CategoryPage } from '@/components/blog-pages'
import { categoriesFor, categoryLabel } from '@/lib/content'
import { isCategory } from '@/lib/categories'
import { pageMetadata } from '@/lib/seo'
export const dynamicParams = false
export function generateStaticParams() {
  return categoriesFor('en').map((category) => ({ category }))
}
type Props = { params: Promise<{ category: string }> }
export async function generateMetadata({ params }: Props) {
  const { category } = await params
  if (!isCategory(category)) return {}
  const label = categoryLabel(category)
  return pageMetadata(label, `Posts about ${label}`, `/posts/${category}`, 'en')
}
export default async function Page({ params }: Props) {
  const { category } = await params
  return <CategoryPage category={category} locale="en" />
}
