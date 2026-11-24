import { Footer } from '@/components/footer'
import { HashLinks } from '@/components/hash-links'
import { Header } from '@/components/header'
import { ScrollTop } from '@/components/scroll-top'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ViewTransitions } from 'next-view-transitions'
import { Noto_Sans_KR } from 'next/font/google'
import '@/app/globals.css'
import { LocaleProvider } from '@/components/locale-provider'
import { messages, type Locale } from '@/lib/i18n'
import { getPosts } from '@/lib/content'

// 빌드할 때 Google Fonts에서 받아 사이트에 함께 넣는다(방문자 브라우저는 Google에 요청하지 않음).
// 한글은 unicode-range 조각으로 나뉘어 페이지에 쓰인 글자만 내려받고, 미리 불러오는 건 라틴 조각뿐이다.
const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

const gaId = process.env.NEXT_PUBLIC_GA_ID

export function SiteLayout({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  const t = messages[locale]
  return (
    <ViewTransitions>
      <html lang={locale} className={`${notoSansKr.variable} h-full`}>
        <body className="flex min-h-full flex-col">
          <LocaleProvider
            locale={locale}
            availablePaths={getPosts(locale === 'ko' ? 'en' : 'ko').map((p) => p.originalPath)}
          >
            <a
              href="#main"
              className="bg-bg sr-only z-20 px-3 py-2 focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
            >
              {t.skip}
            </a>
            <Header locale={locale} />
            <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-5">
              {children}
            </main>
            <Footer locale={locale} />
            <ScrollTop />
            <HashLinks />
            {gaId && <GoogleAnalytics gaId={gaId} />}
          </LocaleProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
