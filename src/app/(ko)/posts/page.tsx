import { PostsPage } from '@/components/blog-pages'
import { messages } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
export const metadata = pageMetadata(
  messages.ko.posts,
  messages.ko.postsDescription,
  '/posts',
  'ko',
)
export default function Page() {
  return <PostsPage locale="ko" />
}
