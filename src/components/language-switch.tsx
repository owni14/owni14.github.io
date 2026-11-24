'use client'

import { usePathname } from 'next/navigation'
import { useLocale, useAvailablePaths } from '@/components/locale-provider'
import { localizedPath, type Locale } from '@/lib/i18n'

export function LanguageSwitch() {
  const locale = useLocale()
  const pathname = usePathname()
  const next = locale === 'ko' ? 'en' : 'ko'
  const availablePaths = useAvailablePaths()
  let base = localizedPath(pathname, 'ko')
  try {
    base = decodeURIComponent(base).normalize('NFC')
  } catch {
    /* Keep the original path. */
  }
  const article = base.startsWith('/posts/') && base.split('/').length === 5
  const available = availablePaths.includes(base)
  const destination =
    !article && base.startsWith('/posts/') && !availablePaths.some((p) => p.startsWith(base + '/'))
      ? localizedPath('/posts', next)
      : localizedPath(pathname, next)
  return (
    <div
      role="group"
      aria-label={locale === 'ko' ? '언어 선택' : 'Language'}
      className="bg-soft ring-line inline-flex h-8 shrink-0 items-center rounded-full p-0.5 ring-1 ring-inset"
    >
      {(['ko', 'en'] as Locale[]).map((language) => {
        const selected = language === locale
        const unavailable = !selected && article && !available
        const name = language === 'ko' ? '한국어' : 'English'
        const title = unavailable
          ? locale === 'ko'
            ? '아직 영어 글이 없습니다'
            : 'No Korean version yet'
          : name
        return (
          <button
            key={language}
            type="button"
            lang={language}
            aria-label={name}
            aria-pressed={selected}
            disabled={unavailable}
            title={title}
            className={`h-7 min-w-9 rounded-full px-2 font-mono text-[11px] leading-none font-medium tracking-wide transition-colors motion-reduce:transition-none ${
              selected
                ? 'bg-bg text-fg shadow-[0_1px_3px_rgb(26_26_24/0.08)]'
                : unavailable
                  ? 'text-faint cursor-not-allowed opacity-60'
                  : 'text-muted hover:text-fg hover:bg-bg/50'
            }`}
            onClick={() => {
              if (selected || unavailable) return
              window.location.assign(destination + window.location.search)
            }}
          >
            {language.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
