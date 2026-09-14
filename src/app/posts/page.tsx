import { PostList } from '@/components/post-list'
import { PostsHeader } from '@/components/posts-header'
import { posts } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata('Posts', '개발하면서 배운 것과 생각을 기록합니다.', '/posts')

export default function PostsPage() {
  return (
    <>
      <PostsHeader />
      <PostList posts={posts} showYear />
    </>
  )
}
