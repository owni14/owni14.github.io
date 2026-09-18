import { SocialLinks } from '@/components/social-links'
import { site } from '@/lib/content'

// GA는 측정 ID가 설정된 빌드에서만 로드되므로(layout.tsx), 고지도 그때만 보인다.
const usesAnalytics = Boolean(process.env.NEXT_PUBLIC_GA_ID)

export function Footer() {
  return (
    <footer className="mt-24">
      <div className="text-muted mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 pt-6 pb-8 text-xs sm:pb-14">
        <div className="flex items-center gap-5">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <SocialLinks links={site.links} rssHref="/rss.xml" className="gap-4 text-[15px]" />
        </div>
        {usesAnalytics && <p>Google Analytics 사용</p>}
      </div>
    </footer>
  )
}
