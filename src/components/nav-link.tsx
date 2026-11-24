'use client'

import { Link } from '@/components/localized-link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { useLocale } from '@/components/locale-provider'
import { localizedPath } from '@/lib/i18n'

export function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname()
  const local = localizedPath(href, useLocale())
  const active = pathname === local || pathname.startsWith(`${local}/`)
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`no-underline ${active ? 'text-fg font-medium' : 'text-muted hover:text-fg'}`}
    >
      {children}
    </Link>
  )
}
