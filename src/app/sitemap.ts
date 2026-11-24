import type { MetadataRoute } from 'next'
import { categoriesFor, getPosts, subcategories } from '@/lib/content'
import { localizedPath, type Locale } from '@/lib/i18n'
import { SITE_URL, alternates } from '@/lib/seo'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return (['ko', 'en'] as Locale[]).flatMap((locale) => {
    const posts = getPosts(locale)
    const categories = categoriesFor(locale)
    const latest = posts[0]?.date ?? new Date().toISOString()
    const entry = (path: string, lastModified = latest) => ({
      url: `${SITE_URL}${localizedPath(path, locale)}`,
      lastModified,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(alternates(path, locale).languages).map(([language, value]) => [
            language,
            `${SITE_URL}${value}`,
          ]),
        ),
      },
    })
    return [
      entry('/'),
      entry('/posts'),
      entry('/categories'),
      ...categories.flatMap((c) => [
        entry(`/posts/${c}`),
        ...subcategories(c, locale).map((s) => entry(`/posts/${c}/${s}`)),
      ]),
      ...posts.map((p) => entry(p.originalPath, p.updated ?? p.date)),
    ]
  })
}
