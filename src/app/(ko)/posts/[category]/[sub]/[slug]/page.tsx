import { PostPage } from '@/components/post-page'
import { getPosts, getPost } from '@/lib/content'
import { postMetadata } from '@/lib/seo'
export const dynamicParams = false
export function generateStaticParams() {
  return getPosts('ko').map((p) => ({ category: p.category, sub: p.subcategory, slug: p.slug }))
}
type Props = { params: Promise<{ category: string; sub: string; slug: string }> }
export async function generateMetadata({ params }: Props) {
  const { category, sub, slug } = await params
  const post = getPost(category, sub, slug, 'ko')
  return post ? postMetadata(post, 'ko') : {}
}
export default async function Page({ params }: Props) {
  const { category, sub, slug } = await params
  return <PostPage category={category} sub={sub} slug={slug} locale="ko" />
}
