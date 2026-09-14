import { site } from '@/lib/content'

export function Footer() {
  return (
    <footer className="mt-24">
      <div className="text-muted mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 pt-8 pb-14 text-xs sm:pb-24">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          방문 통계를 위해 Google Analytics를 사용합니다. ·{' '}
          <a href="/rss.xml" className="text-muted">
            RSS
          </a>
        </p>
      </div>
    </footer>
  )
}
