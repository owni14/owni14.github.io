import { PostsPage } from '@/components/blog-pages'
import { messages } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
export const metadata = pageMetadata(
  messages.en.posts,
  messages.en.postsDescription,
  '/posts',
  'en',
)
export default function Page() {
  return <PostsPage locale="en" />
}
