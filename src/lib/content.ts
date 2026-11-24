import { posts as allPosts, translations, site, siteEnglish } from '#site/content'
import type { Locale } from '@/lib/i18n'
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

export const getSite = (locale: Locale = 'ko') => (locale === 'en' ? siteEnglish : site)

export function getPosts(locale: Locale = 'ko'): Post[] {
  const originals = new Map(allPosts.map((p) => [p.originalPath, p]))
  const versions = new Map<string, Post>()
  if (locale === 'ko') for (const p of allPosts) if (!p.draft) versions.set(p.originalPath, p)
  for (const p of translations) {
    if (p.locale !== locale || p.draft || originals.get(p.originalPath)?.draft) continue
    versions.set(p.originalPath, p)
  }
  return [...versions.values()].sort((a, b) => b.date.localeCompare(a.date))
}

/** 검색 인덱스에 필요한 최소 필드만 추린다 (body 등 무거운 필드 제외). */
export const toSummary = ({
  title,
  description,
  date,
  category,
  subcategory,
  slug,
  permalink,
}: Post) => ({
  title,
  description,
  date,
  category,
  subcategory,
  slug,
  permalink,
})

export const posts: Post[] = getPosts()

/** 글이 있는 카테고리만, 정의된 순서대로 */
export const categoriesFor = (locale: Locale = 'ko') =>
  CATEGORY_KEYS.filter((c) => getPosts(locale).some((p) => p.category === c))
export const categories = categoriesFor()

/** 글이 있는 소분류만, 정의된 순서대로 */
export const subcategories = (category: Category, locale: Locale = 'ko') =>
  subcategoryKeys(category).filter((s) =>
    getPosts(locale).some((p) => p.category === category && p.subcategory === s),
  )

export const postsByCategory = (category: Category, locale: Locale = 'ko') =>
  getPosts(locale).filter((p) => p.category === category)
export const postsBySubcategory = (
  category: Category,
  subcategory: string,
  locale: Locale = 'ko',
) => getPosts(locale).filter((p) => p.category === category && p.subcategory === subcategory)
export const getPost = (
  category: string,
  subcategory: string,
  slug: string,
  locale: Locale = 'ko',
) => {
  // Next may pass an encoded slug during static rendering, while metadata receives Unicode.
  let normalized = slug
  try {
    normalized = decodeURIComponent(slug)
  } catch {
    return undefined
  }
  return getPosts(locale).find(
    (p) =>
      p.category === category &&
      p.subcategory === subcategory &&
      p.slug === normalized.normalize('NFC'),
  )
}

export const adjacentPosts = (post: Post, locale: Locale = 'ko') => {
  const posts = getPosts(locale)
  const i = posts.findIndex((p) => p.permalink === post.permalink)
  return { newer: posts[i - 1], older: posts[i + 1] }
}
