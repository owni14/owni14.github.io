'use client'

import type { Post } from '@/lib/content'
import { useEffect, useState } from 'react'

type Entry = Post['toc'][number]

/** 소제목이 화면 위에서 이만큼 안쪽으로 들어오면 그 소제목을 "읽는 중"으로 본다 */
const ACTIVE_OFFSET = 120

const flatten = (items: Entry[]): Entry[] => items.flatMap((item) => [item, ...flatten(item.items)])

/** toc의 url은 '#한글-소제목' 형태다. rehype-slug가 붙인 id와 같은 값이다. */
const idOf = (url: string) => decodeURIComponent(url.slice(1))

function TocList({
  items,
  activeUrl,
  depth = 0,
}: {
  items: Entry[]
  activeUrl: string | null
  depth?: number
}) {
  if (items.length === 0) return null
  return (
    <ol className={depth > 0 ? 'mt-1 ml-3' : ''}>
      {items.map((item) => {
        const active = item.url === activeUrl
        return (
          <li key={item.url} className="mt-1">
            <a
              href={item.url}
              aria-current={active ? 'location' : undefined}
              className={`hover:text-fg block truncate no-underline transition-colors ${
                active ? 'text-fg font-semibold' : 'text-muted'
              }`}
            >
              {item.title}
            </a>
            <TocList items={item.items} activeUrl={activeUrl} depth={depth + 1} />
          </li>
        )
      })}
    </ol>
  )
}

export function Toc({ items }: { items: Entry[] }) {
  const [activeUrl, setActiveUrl] = useState<string | null>(null)

  useEffect(() => {
    // 소제목 요소는 한 번만 찾아 두고, 스크롤할 때는 위치만 읽는다
    const entries = flatten(items).flatMap(({ url }) => {
      const heading = document.getElementById(idOf(url))
      return heading ? [{ url, heading }] : []
    })
    let ticking = false
    const update = () => {
      ticking = false
      // 기준선을 지난 소제목 중 마지막 것이 지금 읽는 구간이다
      let current: string | null = null
      for (const { url, heading } of entries) {
        if (heading.getBoundingClientRect().top > ACTIVE_OFFSET) break
        current = url
      }
      // 마지막 구간이 짧으면 소제목이 기준선까지 못 올라온다. 문서 끝에 닿으면 마지막 항목으로 친다.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom && window.scrollY > 0 && entries.length > 0)
        current = entries[entries.length - 1].url
      setActiveUrl(current)
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [items])

  if (items.length === 0) return null
  return (
    <nav aria-label="목차" className="text-sm">
      <p className="text-faint mb-2 font-mono text-xs">목차</p>
      <TocList items={items} activeUrl={activeUrl} />
    </nav>
  )
}
