'use client'

import { createContext, useContext, type ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'

const LocaleContext = createContext<Locale>('ko')
const AvailablePathsContext = createContext<string[]>([])
export const useLocale = () => useContext(LocaleContext)
export const useAvailablePaths = () => useContext(AvailablePathsContext)
export function LocaleProvider({
  locale,
  availablePaths,
  children,
}: {
  locale: Locale
  availablePaths: string[]
  children: ReactNode
}) {
  return (
    <LocaleContext.Provider value={locale}>
      <AvailablePathsContext.Provider value={availablePaths}>
        {children}
      </AvailablePathsContext.Provider>
    </LocaleContext.Provider>
  )
}
