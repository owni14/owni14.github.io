import { CategoryPage } from '@/components/blog-pages'
import { categoriesFor, subcategories, subcategoryLabel } from '@/lib/content'
import { isCategory } from '@/lib/categories'
import { pageMetadata } from '@/lib/seo'
export const dynamicParams = false
export function generateStaticParams() {
  return categoriesFor('en').flatMap((category) =>
    subcategories(category, 'en').map((sub) => ({ category, sub })),
  )
}
type Props = { params: Promise<{ category: string; sub: string }> }
const localeLabel = (category: Parameters<typeof subcategoryLabel>[0], sub: string) =>
  sub === 'programmers' ? 'Programmers' : subcategoryLabel(category, sub)
export async function generateMetadata({ params }: Props) {
  const { category, sub } = await params
  if (!isCategory(category)) return {}
  const label = localeLabel(category, sub)
  return pageMetadata(label, `Posts about ${label}`, `/posts/${category}/${sub}`, 'en')
}
export default async function Page({ params }: Props) {
  const { category, sub } = await params
  return <CategoryPage category={category} sub={sub} locale="en" />
}
