import { CategoriesPage } from '@/components/blog-pages'
import { messages } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
export const metadata = pageMetadata(
  messages.en.categories,
  messages.en.categoriesDescription,
  '/categories',
  'en',
)
export default function Page() {
  return <CategoriesPage locale="en" />
}
