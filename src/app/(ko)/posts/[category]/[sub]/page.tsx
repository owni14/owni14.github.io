import { CategoryPage } from '@/components/blog-pages'
import { categoriesFor, subcategories, subcategoryLabel } from '@/lib/content'
import { isCategory } from '@/lib/categories'
import { pageMetadata } from '@/lib/seo'
export const dynamicParams = false
export function generateStaticParams() {
  return categoriesFor('ko').flatMap((category) =>
    subcategories(category, 'ko').map((sub) => ({ category, sub })),
  )
}
type Props = { params: Promise<{ category: string; sub: string }> }
const localeLabel = (category: Parameters<typeof subcategoryLabel>[0], sub: string) =>
  subcategoryLabel(category, sub)
export async function generateMetadata({ params }: Props) {
  const { category, sub } = await params
  if (!isCategory(category)) return {}
  const label = localeLabel(category, sub)
  return pageMetadata(label, `${label} 글 목록`, `/posts/${category}/${sub}`, 'ko')
}
export default async function Page({ params }: Props) {
  const { category, sub } = await params
  return <CategoryPage category={category} sub={sub} locale="ko" />
}
