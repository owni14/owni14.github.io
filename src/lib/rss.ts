import { localizedPath, type Locale } from '@/lib/i18n'
import { stripEmphasis } from '@/lib/format'
import { categoryLabel, getPosts, getSite, subcategoryLabel } from '@/lib/content'
import { SITE_URL } from '@/lib/seo'

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** RSS 2.0 피드. 빌드 시 /rss.xml 로 내보내진다. */
export function rssResponse(locale: Locale) {
  const posts = getPosts(locale)
  const site = getSite(locale)
  const description = stripEmphasis(site.intro.split('\n')[0])
  const items = posts
    .map(
      (p) => `    <item>
      <title>${escape(p.title)}</title>
      <link>${SITE_URL}${p.permalink}</link>
      <guid isPermaLink="true">${SITE_URL}${p.permalink}</guid>
      <description>${escape(p.description)}</description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category>${escape(categoryLabel(p.category))}</category>
      <category>${escape(locale === 'en' && p.subcategory === 'programmers' ? 'Programmers' : subcategoryLabel(p.category, p.subcategory))}</category>
    </item>`,
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(site.name)}</title>
    <link>${SITE_URL}${localizedPath('/', locale)}</link>
    <description>${escape(description)}</description>
    <language>${locale}</language>
    <lastBuildDate>${new Date(posts[0]?.date ?? Date.now()).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}${localizedPath('/rss.xml', locale)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`
  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
