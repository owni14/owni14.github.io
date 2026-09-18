import type { ReactNode } from 'react'

type Links = { github: string; linkedin?: string; email: string }

// 아이콘 라이브러리 없이 필요한 것만 인라인 SVG로 둔다. 브랜드 로고는 Simple Icons, 메일은 Material Icons 경로.
// 모두 채움 스타일이고, 눈에 같은 크기로 보이도록 viewBox로 보정했다(원 100%, 사각형 약 90%, 봉투는 폭 100%).
// 크기는 1em이라 쓰는 쪽에서 글자 크기(text-[18px] 등)로 정한다.
function GitHubIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="1em" height="1em" viewBox="-1.25 -1.25 26.5 26.5" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="1em" height="1em" viewBox="2 2 20 20" fill="currentColor" aria-hidden>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function RssIcon() {
  return (
    <svg width="1em" height="1em" viewBox="-1 -1 26 26" fill="currentColor" aria-hidden>
      <path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z" />
    </svg>
  )
}

function IconLink({
  href,
  label,
  external = false,
  children,
}: {
  href: string
  label: string
  external?: boolean
  children: ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external && { rel: 'me noreferrer', target: '_blank' })}
      // 음수 마진으로 아이콘 위치는 그대로 두고 터치 영역만 넓힌다
      className="text-muted hover:text-fg -m-2 inline-flex p-2 no-underline"
    >
      {children}
    </a>
  )
}

export function SocialLinks({
  links,
  rssHref,
  className = '',
}: {
  links: Links
  rssHref?: string
  className?: string
}) {
  return (
    <ul className={`flex items-center leading-none ${className}`} aria-label="링크">
      <li>
        <IconLink href={`mailto:${links.email}`} label={`이메일 ${links.email}`}>
          <MailIcon />
        </IconLink>
      </li>
      <li>
        <IconLink href={links.github} label="GitHub" external>
          <GitHubIcon />
        </IconLink>
      </li>
      {links.linkedin && (
        <li>
          <IconLink href={links.linkedin} label="LinkedIn" external>
            <LinkedInIcon />
          </IconLink>
        </li>
      )}
      {rssHref && (
        <li>
          <IconLink href={rssHref} label="RSS 피드">
            <RssIcon />
          </IconLink>
        </li>
      )}
    </ul>
  )
}
