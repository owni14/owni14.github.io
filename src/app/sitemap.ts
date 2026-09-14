import type { MetadataRoute } from 'next'
import { categories, posts, subcategories } from '@/lib/content'
import { SITE_URL } from '@/lib/seo'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = posts[0]?.date ?? new Date().toISOString()
  return [
    { url: SITE_URL, lastModified: latest, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/posts`, lastModified: latest, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/categories`, lastModified: latest, changeFrequency: 'monthly' },
    ...categories.flatMap((c) => [
      { url: `${SITE_URL}/posts/${c}`, lastModified: latest },
      ...subcategories(c).map((s) => ({
        url: `${SITE_URL}/posts/${c}/${s}`,
        lastModified: latest,
      })),
    ]),
    ...posts.map((p) => ({
      url: `${SITE_URL}${p.permalink}`,
      lastModified: p.updated ?? p.date,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
