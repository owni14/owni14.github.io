import { JsonLd } from '@/components/json-ld'
import { PostList } from '@/components/post-list'
import { formatPeriod, posts, site } from '@/lib/content'
import { personJsonLd, websiteJsonLd } from '@/lib/seo'
import { Link } from 'next-view-transitions'

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

export default function HomePage() {
  const recent = posts.slice(0, 5)

  return (
    <>
      <JsonLd data={[personJsonLd(), websiteJsonLd()]} />

      <section className="pt-10 sm:pt-14">
        <h1 className="sr-only">
          {site.name} · {site.tagline}
        </h1>
        <p className="max-w-xl whitespace-pre-line">{site.intro.trim()}</p>
        <ul className="text-muted mt-6 flex gap-5 text-sm" aria-label="링크">
          <li>
            <a href={site.links.github} rel="me noreferrer" target="_blank">
              GitHub
            </a>
          </li>
          {site.links.linkedin && (
            <li>
              <a href={site.links.linkedin} rel="me noreferrer" target="_blank">
                LinkedIn
              </a>
            </li>
          )}
          <li>
            <a href={`mailto:${site.links.email}`}>Email</a>
          </li>
        </ul>
      </section>

      <Section id="experience" title="Experience">
        <ol className="divide-line divide-y">
          {site.experience.map((e) => (
            <li
              key={`${e.company}-${e.start}`}
              className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6"
            >
              <span className="text-muted font-mono text-xs sm:pt-1">
                {formatPeriod(e.start, e.end)}
              </span>
              <div>
                <p className="font-medium">
                  {e.role} ·{' '}
                  {e.url ? (
                    <a href={e.url} rel="noreferrer" target="_blank">
                      {e.company}
                    </a>
                  ) : (
                    e.company
                  )}
                  {e.location && <span className="text-faint font-normal"> · {e.location}</span>}
                </p>
                <p className="text-muted mt-1 text-sm">{e.summary}</p>
                {e.highlights.length > 0 && (
                  <ul className="text-muted mt-2 list-disc pl-5 text-sm">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="posts" title="Recent Posts" more={{ href: '/posts', label: '전체 보기' }}>
        <PostList posts={recent} />
      </Section>

      <Section id="contact" title="Contact">
        <p>
          함께 일하거나 이야기 나누고 싶다면{' '}
          <a href={`mailto:${site.links.email}`}>{site.links.email}</a>로 메일을 보내 주세요.
        </p>
      </Section>
    </>
  )
}
