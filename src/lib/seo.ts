import { categoryLabel, site, subcategoryLabel, type Post } from '@/lib/content'
import type { Metadata } from 'next'

export const SITE_URL = 'https://owni14.github.io'
export const SITE_TITLE = `${site.name} · ${site.tagline}`

/**
 * Next 메타데이터는 중첩 객체(openGraph, alternates)를 병합하지 않고 하위 세그먼트 값으로 통째로 교체한다.
 * 그래서 페이지별 메타데이터는 반드시 이 베이스를 spread 한 뒤 필드를 덧붙인다.
 */
export const openGraphBase = {
  siteName: site.name,
  locale: 'ko_KR',
  images: ['/og.png'],
}

export const alternatesBase = { types: { 'application/rss+xml': '/rss.xml' } }

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${site.name}` },
  description: site.intro.split('\n')[0],
  openGraph: { ...openGraphBase, type: 'website' },
  twitter: { card: 'summary_large_image' },
  alternates: { ...alternatesBase, canonical: '/' },
}

export const pageMetadata = (title: string, description: string, path: string): Metadata => ({
  title,
  description,
  alternates: { ...alternatesBase, canonical: path },
  openGraph: { ...openGraphBase, type: 'website', title, description, url: path },
})

export const personJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.tagline,
  url: SITE_URL,
  email: `mailto:${site.links.email}`,
  sameAs: [site.links.github, site.links.linkedin].filter(Boolean),
})

export const websiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  url: SITE_URL,
  inLanguage: 'ko',
  author: { '@type': 'Person', name: site.name, url: SITE_URL },
})

export const blogPostingJsonLd = (post: Post) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  datePublished: post.date,
  dateModified: post.updated ?? post.date,
  inLanguage: 'ko',
  url: `${SITE_URL}${post.permalink}`,
  mainEntityOfPage: `${SITE_URL}${post.permalink}`,
  articleSection: categoryLabel(post.category),
  keywords: subcategoryLabel(post.category, post.subcategory),
  author: { '@type': 'Person', name: site.name, url: SITE_URL },
})

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
})
