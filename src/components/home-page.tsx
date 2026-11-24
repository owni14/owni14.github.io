import { messages, type Locale } from '@/lib/i18n'
import { JsonLd } from '@/components/json-ld'
import { PostList } from '@/components/post-list'
import { formatPeriod, getPosts, getSite } from '@/lib/content'
import { splitEmphasis } from '@/lib/format'
import { personJsonLd, websiteJsonLd } from '@/lib/seo'
import { Link } from '@/components/localized-link'

function Section({
  id,
  title,
  more,
  children,
}: {
  id: string
  title: string
  more?: { href: string; label: string }
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-8 pt-16">
      <div className="mb-5 flex items-baseline justify-between">
        <h2 id={`${id}-title`} className="text-lg font-semibold">
          {title}
        </h2>
        {more && (
          <Link
            href={more.href}
            className="text-muted hover:text-fg text-sm no-underline transition-colors"
          >
            {more.label} →
          </Link>
        )}
      </div>
      {children}
    </section>
  )
}

export function HomePage({ locale = 'ko' }: { locale?: Locale }) {
  const site = getSite(locale)
  const posts = getPosts(locale)
  const t = messages[locale]
  const recent = posts.slice(0, 5)

  return (
    <>
      <JsonLd data={[personJsonLd(locale), websiteJsonLd(locale)]} />

      <section className="pt-10 sm:pt-14">
        <h1 className="sr-only">
          {site.name} · {site.tagline}
        </h1>
        {/* site.yml에서 **이렇게** 감싼 부분은 굵게 나온다 */}
        <p className="whitespace-pre-line">
          {splitEmphasis(site.intro.trim()).map((part, i) =>
            i % 2 ? <strong key={i}>{part}</strong> : part,
          )}
        </p>
      </section>

      <Section id="experience" title={t.experience}>
        <ol className="divide-line divide-y">
          {site.experience.map((e) => (
            <li
              key={`${e.company}-${e.start}`}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <span className="text-muted shrink-0 font-mono text-xs whitespace-nowrap sm:w-32">
                {locale === 'en'
                  ? `${e.start} – ${e.end ?? t.present}`
                  : formatPeriod(e.start, e.end)}
              </span>
              <p className="flex-1">
                {e.url ? (
                  <a href={e.url} rel="noreferrer" target="_blank" className="group no-underline">
                    <span className="group-hover:decoration-fg underline decoration-transparent decoration-1 underline-offset-[3px] transition-colors">
                      {e.company}
                    </span>
                  </a>
                ) : (
                  e.company
                )}
                <span className="text-muted mt-1 block text-sm">
                  {e.role}
                  {e.location && <span className="text-faint"> · {e.location}</span>}
                </span>
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="posts" title={t.recent} more={{ href: '/posts', label: t.viewAll }}>
        <PostList posts={recent} locale={locale} />
      </Section>
    </>
  )
}
