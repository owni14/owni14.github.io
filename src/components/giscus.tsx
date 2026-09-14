'use client'

import GiscusWidget from '@giscus/react'

const repo = process.env.NEXT_PUBLIC_GISCUS_REPO as `${string}/${string}` | undefined
const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID
const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY
const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID

export function Giscus() {
  if (!repo || !repoId || !category || !categoryId) return null
  return (
    <section aria-label="댓글" className="border-line mt-16 border-t pt-10">
      <GiscusWidget
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="ko"
        loading="lazy"
      />
    </section>
  )
}
