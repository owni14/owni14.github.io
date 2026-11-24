'use client'

import { useLocale } from '@/components/locale-provider'
import { messages } from '@/lib/i18n'
import GiscusWidget from '@giscus/react'

const repo = process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}` | undefined
const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID
const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY
const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID

export function Giscus({ term }: { term?: string }) {
  const locale = useLocale()
  if (!repo || !repoId || !category || !categoryId) return null
  return (
    <section aria-label={messages[locale].comments} className="border-line mt-16 border-t pt-10">
      <GiscusWidget
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping={term ? 'specific' : 'pathname'}
        term={term}
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang={locale}
        loading="lazy"
      />
    </section>
  )
}
