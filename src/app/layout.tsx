import { Footer } from '@/components/footer'
import { HashLinks } from '@/components/hash-links'
import { Header } from '@/components/header'
import { ScrollTop } from '@/components/scroll-top'
import { baseMetadata } from '@/lib/seo'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ViewTransitions } from 'next-view-transitions'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

// 빌드할 때 Google Fonts에서 받아 사이트에 함께 넣는다(방문자 브라우저는 Google에 요청하지 않음).
// 한글은 unicode-range 조각으로 나뉘어 페이지에 쓰인 글자만 내려받고, 미리 불러오는 건 라틴 조각뿐이다.
const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

export const metadata = baseMetadata

const gaId = process.env.NEXT_PUBLIC_GA_ID

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <ViewTransitions>
      <html lang="ko" className={`${notoSansKr.variable} h-full`}>
        <body className="flex min-h-full flex-col">
          <a
            href="#main"
            className="bg-bg sr-only z-20 px-3 py-2 focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
          >
            본문으로 건너뛰기
          </a>
          <Header />
          <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-5">
            {children}
          </main>
          <Footer />
          <ScrollTop />
          <HashLinks />
          {gaId && <GoogleAnalytics gaId={gaId} />}
        </body>
      </html>
    </ViewTransitions>
  )
}
