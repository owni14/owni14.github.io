'use client'

import { useTransitionRouter } from 'next-view-transitions'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { categoryLabel, subcategoryLabel, type Category } from '@/lib/categories'
import { formatDate, transitionName } from '@/lib/format'

type IndexEntry = {
  title: string
  description: string
  date: string
  category: Category
  subcategory: string
  slug: string
  permalink: string
  plain: string
}

let indexPromise: Promise<IndexEntry[]> | null = null
function loadIndex() {
  indexPromise ??= fetch('/search-index.json').then((r) => {
    if (!r.ok) throw new Error(`search index ${r.status}`)
    return r.json() as Promise<IndexEntry[]>
  })
  return indexPromise
}

function matches(entry: IndexEntry, terms: string[]) {
  const haystack = [
    entry.title,
    entry.description,
    categoryLabel(entry.category),
    subcategoryLabel(entry.category, entry.subcategory),
    entry.plain,
  ]
    .join(' ')
    .toLowerCase()
  return terms.every((t) => haystack.includes(t))
}

/** 헤더 돋보기 버튼 + 화면 중앙에 뜨는 검색 모달. ⌘K / Ctrl+K / `/` 로도 연다. */
export function SearchDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const router = useTransitionRouter()
  const listId = useId()

  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const closingRef = useRef(false)
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState<IndexEntry[] | null>(null)
  const [error, setError] = useState(false)
  const [cursor, setCursor] = useState(0)

  const show = useCallback(() => {
    const d = dialogRef.current
    if (!d || d.open) return
    setClosing(false)
    setOpen(true)
    d.showModal()
    requestAnimationFrame(() => inputRef.current?.select())
    if (!index && !error) {
      loadIndex()
        .then(setIndex)
        .catch(() => setError(true))
    }
  }, [index, error])

  const hide = useCallback(() => {
    const d = dialogRef.current
    if (!d || !d.open || closingRef.current) return
    closingRef.current = true
    setClosing(true)
    const finish = () => {
      d.close()
      setOpen(false)
      setClosing(false)
      closingRef.current = false
      // close() 후 브라우저가 포커스를 돋보기 버튼으로 되돌리며 포커스 링이 남지 않도록
      buttonRef.current?.blur()
    }
    // 닫힘 클래스가 적용된 다음 프레임에 CSS 애니메이션이 끝나기를 기다린다.
    // 애니메이션이 없으면(prefers-reduced-motion) 즉시 닫힌다.
    requestAnimationFrame(() => {
      const animations = d.getAnimations({ subtree: true })
      if (animations.length === 0) return finish()
      Promise.all(animations.map((a) => a.finished)).then(finish, finish)
    })
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      const typing =
        !!target &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        show()
      } else if (e.key === '/' && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault()
        show()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [show])

  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  const searching = terms.length > 0
  const results = index
    ? searching
      ? index.filter((e) => matches(e, terms))
      : index.slice(0, 5)
    : []
  const active = results[Math.min(cursor, Math.max(results.length - 1, 0))]

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>('[aria-selected="true"]')
      ?.scrollIntoView({ block: 'nearest' })
  }, [cursor, results.length])

  const go = (permalink: string) => {
    hide()
    router.push(permalink)
  }

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (results.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setCursor((c) => Math.min(c + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setCursor((c) => Math.max(c - 1, 0))
    } else if (e.key === 'Enter' && active) {
      e.preventDefault()
      go(active.permalink)
    }
  }

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={show}
        aria-label="검색"
        title="검색 (⌘K)"
        className="text-muted hover:text-fg -mr-2 flex h-8 w-8 items-center justify-center rounded-md transition-colors"
      >
        <SearchIcon />
      </button>

      <dialog
        ref={dialogRef}
        onCancel={(e) => {
          e.preventDefault()
          hide()
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) hide()
        }}
        aria-label="글 검색"
        className={`search-dialog bg-bg border-line fixed inset-x-0 top-[12vh] mx-auto my-0 w-[calc(100%-2rem)] max-w-xl rounded-xl border p-0 shadow-2xl outline-none ${
          closing ? 'search-dialog-closing' : ''
        }`}
      >
        {open && (
          <div className="flex max-h-[70vh] flex-col">
            <div className="border-line flex items-center gap-3 border-b px-4">
              <span className="text-faint shrink-0">
                <SearchIcon />
              </span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setCursor(0)
                }}
                onKeyDown={onInputKey}
                placeholder="제목, 본문, 분류로 검색"
                autoComplete="off"
                spellCheck={false}
                role="combobox"
                aria-expanded={results.length > 0}
                aria-controls={listId}
                aria-activedescendant={active ? `${listId}-${transitionName(active)}` : undefined}
                className="placeholder:text-faint h-14 w-full bg-transparent text-base outline-none"
              />
              <kbd className="text-faint border-line hidden shrink-0 rounded-sm border px-1.5 font-mono text-[0.7rem] sm:block">
                esc
              </kbd>
            </div>

            <div className="overflow-y-auto overscroll-contain">
              {error ? (
                <p className="text-muted px-4 py-8 text-sm">검색 인덱스를 불러오지 못했습니다.</p>
              ) : !index ? (
                <p className="text-muted px-4 py-8 text-sm">불러오는 중…</p>
              ) : results.length === 0 ? (
                <p className="text-muted px-4 py-8 text-sm">검색 결과가 없습니다.</p>
              ) : (
                <ul ref={listRef} id={listId} role="listbox" className="py-2">
                  {!searching && (
                    <li className="text-faint px-4 pt-1 pb-2 font-mono text-[0.7rem] tracking-wide uppercase">
                      최근 글
                    </li>
                  )}
                  {results.map((r, i) => {
                    const selected = i === cursor
                    return (
                      <li
                        key={r.permalink}
                        id={`${listId}-${transitionName(r)}`}
                        role="option"
                        aria-selected={selected}
                        onMouseEnter={() => setCursor(i)}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => go(r.permalink)}
                        className={`mx-2 cursor-pointer rounded-md px-3 py-2.5 transition-colors duration-100 ${selected ? 'bg-soft' : ''}`}
                      >
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="truncate text-sm font-medium">
                            <Highlight text={r.title} terms={terms} />
                          </span>
                          <span className="text-faint shrink-0 font-mono text-xs">
                            {categoryLabel(r.category)} ›{' '}
                            {subcategoryLabel(r.category, r.subcategory)} · {formatDate(r.date)}
                          </span>
                        </div>
                        <p className="text-muted mt-0.5 truncate text-xs">
                          <Highlight text={r.description} terms={terms} />
                        </p>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>

            <div className="border-line text-faint flex gap-4 border-t px-4 py-2 font-mono text-[0.7rem]">
              <span>↑↓ 이동</span>
              <span>↵ 열기</span>
              <span>esc 닫기</span>
            </div>
          </div>
        )}
      </dialog>
    </>
  )
}

/** 검색어와 일치하는 부분을 <mark>로 감싼다 (대소문자 무시). */
function Highlight({ text, terms }: { text: string; terms: string[] }) {
  if (terms.length === 0) return text
  const pattern = new RegExp(
    `(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi',
  )
  // split with a capturing group: odd indexes are the matched parts
  return text.split(pattern).map((part, i) =>
    i % 2 === 1 ? (
      <mark
        key={i}
        className="text-fg rounded-[2px] bg-transparent font-semibold underline decoration-1 underline-offset-[3px]"
      >
        {part}
      </mark>
    ) : (
      part
    ),
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m10.5 10.5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
