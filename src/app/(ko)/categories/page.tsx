import { CategoriesPage } from '@/components/blog-pages'
import { messages } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
export const metadata = pageMetadata(
  messages.ko.categories,
  messages.ko.categoriesDescription,
  '/categories',
  'ko',
)
export default function Page() {
  return <CategoriesPage locale="ko" />
}
