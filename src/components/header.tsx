import { NavLink } from '@/components/nav-link'
import { SearchDialog } from '@/components/search-dialog'
import { site } from '@/lib/content'
import { Link } from 'next-view-transitions'

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 pt-8 pb-2 sm:pt-14">
      <Link href="/" className="font-bold no-underline">
        {site.name}
      </Link>
      <div className="flex items-center gap-6">
        <nav aria-label="주요 메뉴" className="flex gap-6 text-sm">
          <NavLink href="/posts">Posts</NavLink>
          <NavLink href="/categories">Categories</NavLink>
        </nav>
        <SearchDialog />
      </div>
    </header>
  )
}
