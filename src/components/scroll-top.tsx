'use client'

import { useEffect, useState } from 'react'

const THRESHOLD = 480

export function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const update = () => {
      setVisible(window.scrollY > THRESHOLD)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="맨 위로"
      tabIndex={visible ? 0 : -1}
      className={`bg-bg border-line text-muted hover:text-fg hover:bg-soft fixed right-5 bottom-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border shadow-sm transition duration-300 ease-out hover:scale-110 hover:shadow-md active:scale-95 sm:right-10 sm:bottom-10 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d="M8 13V3M3.5 7.5 8 3l4.5 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
