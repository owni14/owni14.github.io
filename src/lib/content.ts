import { posts as allPosts, site } from '#site/content'
import {
  CATEGORY_KEYS,
  categoryLabel,
  subcategoryKeys,
  subcategoryLabel,
  type Category,
} from '@/lib/categories'
import { formatDate, formatPeriod } from '@/lib/format'

export { site, categoryLabel, subcategoryLabel, formatDate, formatPeriod, type Category }
export type Post = (typeof allPosts)[number]

/** 검색 인덱스에 필요한 최소 필드만 추린다 (body 등 무거운 필드 제외). */
export const toSummary = ({
  title,
  description,
  date,
  category,
  subcategory,
  slug,
  permalink,
}: Post) => ({ title, description, date, category, subcategory, slug, permalink })

export const posts: Post[] = allPosts
  .filter((p) => !p.draft)
  .sort((a, b) => b.date.localeCompare(a.date))

/** 글이 있는 카테고리만, 정의된 순서대로 */
export const categories = CATEGORY_KEYS.filter((c) => posts.some((p) => p.category === c))

/** 글이 있는 소분류만, 정의된 순서대로 */
export const subcategories = (category: Category) =>
  subcategoryKeys(category).filter((s) =>
    posts.some((p) => p.category === category && p.subcategory === s),
  )

export const postsByCategory = (category: Category) => posts.filter((p) => p.category === category)
export const postsBySubcategory = (category: Category, subcategory: string) =>
  posts.filter((p) => p.category === category && p.subcategory === subcategory)
export const getPost = (category: string, subcategory: string, slug: string) =>
  posts.find((p) => p.category === category && p.subcategory === subcategory && p.slug === slug)

export const adjacentPosts = (post: Post) => {
  const i = posts.findIndex((p) => p.permalink === post.permalink)
  return { newer: posts[i - 1], older: posts[i + 1] }
}
