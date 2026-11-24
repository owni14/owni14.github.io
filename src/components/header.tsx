import { NavLink } from '@/components/nav-link'
import { SearchDialog } from '@/components/search-dialog'
import { site } from '@/lib/content'
import { Link } from '@/components/localized-link'
import { LanguageSwitch } from '@/components/language-switch'
import { messages, type Locale } from '@/lib/i18n'

export function Header({ locale = 'ko' }: { locale?: Locale }) {
  const t = messages[locale]
  return (
    <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 pt-8 pb-2 sm:pt-14">
      <Link href="/" className="font-bold no-underline">
        {site.name}
      </Link>
      <div className="flex items-center gap-4 sm:gap-6">
        <nav aria-label={t.menu} className="flex gap-4 text-sm sm:gap-6">
          <NavLink href="/posts">{t.posts}</NavLink>
          <NavLink href="/categories">{t.categories}</NavLink>
        </nav>
        <SearchDialog />
        <LanguageSwitch />
      </div>
    </header>
  )
}
