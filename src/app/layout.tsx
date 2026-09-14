import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ScrollTop } from '@/components/scroll-top'
import { baseMetadata } from '@/lib/seo'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ViewTransitions } from 'next-view-transitions'
import './globals.css'

export const metadata = baseMetadata

const gaId = process.env.NEXT_PUBLIC_GA_ID

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <ViewTransitions>
      <html lang="ko" className="h-full">
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
          {gaId && <GoogleAnalytics gaId={gaId} />}
        </body>
      </html>
    </ViewTransitions>
  )
}
