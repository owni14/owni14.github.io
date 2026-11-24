import { localizedPath, type Locale } from '@/lib/i18n'
import { SocialLinks } from '@/components/social-links'
import { site } from '@/lib/content'

export function Footer({ locale = 'ko' }: { locale?: Locale }) {
  return (
    <footer className="mt-24">
      <div className="text-muted mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 pt-6 pb-8 text-xs sm:pb-14">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <SocialLinks
          links={site.links}
          locale={locale}
          rssHref={localizedPath('/rss.xml', locale)}
          className="gap-4 text-[15px]"
        />
      </div>
    </footer>
  )
}
