import type { Post } from '@/lib/content'

type Entry = Post['toc'][number]

function TocList({ items, depth = 0 }: { items: Entry[]; depth?: number }) {
  if (items.length === 0) return null
  return (
    <ol className={depth > 0 ? 'mt-1 ml-3' : ''}>
      {items.map((item) => (
        <li key={item.url} className="mt-1">
          <a href={item.url} className="text-muted hover:text-fg block truncate no-underline">
            {item.title}
          </a>
          <TocList items={item.items} depth={depth + 1} />
        </li>
      ))}
    </ol>
  )
}

export function Toc({ items }: { items: Entry[] }) {
  if (items.length === 0) return null
  return (
    <nav aria-label="목차" className="text-sm">
      <p className="text-faint mb-2 font-mono text-xs">목차</p>
      <TocList items={items} />
    </nav>
  )
}
