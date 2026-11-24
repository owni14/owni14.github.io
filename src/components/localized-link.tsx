'use client'

import { Link as TransitionLink } from 'next-view-transitions'
import type { ComponentProps } from 'react'
import { useLocale } from '@/components/locale-provider'
import { localizedPath } from '@/lib/i18n'

export function Link(props: ComponentProps<typeof TransitionLink>) {
  const locale = useLocale()
  const href = typeof props.href === 'string' ? localizedPath(props.href, locale) : props.href
  return <TransitionLink {...props} href={href} />
}
