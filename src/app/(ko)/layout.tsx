import { SiteLayout } from '@/components/site-layout'
import { rootMetadata } from '@/lib/seo'
export const metadata = rootMetadata('ko')
export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="ko">{children}</SiteLayout>
}
