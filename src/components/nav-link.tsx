'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

export function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname()
  const active = pathname === href || pathname.startsWith(`${href}/`)
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
