# owni14.github.io 재구축 계획서

2026-09-14 · v6 · 1~2단계 구현 완료(로컬), 0단계 저장소 생성 대기

> **2026-09-14 이후 변경(이 문서보다 우선)**: 프로젝트 섹션·`/projects` 라우트 제거, 블로그 주소 `/blog` → `/posts`, 분류는 카테고리 › 소분류 두 단계(`content/posts/<category>/<subcategory>/`, 정의는 `src/lib/categories.ts`), 태그 제거, 검색 모달과 `/search-index.json` 추가, RSS 구현. 아래 본문의 `/blog`·`/projects`·태그 관련 기술은 당시 계획 기록이다. 폰트는 Pretendard(직접 서빙) → Noto Sans KR(`next/font/google`, 빌드 시 자체 호스팅)로 교체, `public/fonts/`·`src/app/fonts.css` 삭제. 현재 구조는 README를 따른다.

## 1. 목표

Jekyll 블로그(owni14.github.io)와 포트폴리오(owni14.me, 도메인 만료)를 대신할 정적 사이트를 새로 만든다.

- 루트는 스크롤 랜딩(포트폴리오), 블로그는 `/blog` 아래
- 주소는 `https://owni14.github.io` 하나
- 옛 글 222개는 옮기지 않는다. 기존 저장소는 `blog-legacy`로 보관
- 글 1개, 프로젝트 1개로 구조를 확정한 뒤 살을 붙인다. 폴더와 라이브러리는 필요한 시점에 추가

## 2. 재사용하는 것

| 항목                             | 위치                                                               |
| -------------------------------- | ------------------------------------------------------------------ |
| GA4 측정 ID `G-BE9JKM7K4D`       | `Blog/_includes/my-head.html`                                      |
| 구글·네이버 인증 파일, `ads.txt` | `Blog/` 루트                                                       |
| 경력·프로젝트 텍스트             | `Projects/portfolio/app/_plugins/locales/ko/{about,projects}.json` |

## 3. 폴더와 저장소

```text
/Users/min/Development/Projects/owni14.github.io/   새 프로젝트 (이 문서 위치)
/Users/min/Development/Blog/                        기존 Jekyll, 보관
/Users/min/Development/Projects/portfolio/          텍스트 원본, 보관
/Users/min/Development/Projects/{blog,nextPortfolio,oldPortfolio}/   삭제
```

1. 새 저장소 `owni14/owni14-site` (private)에 연결. Pages는 켜지 않고 CI 빌드로만 확인
2. 컷오버: 기존 `owni14.github.io` → `blog-legacy`로 이름 변경 후 Archive → `owni14-site` → `owni14.github.io`로 변경, public → Pages Source = GitHub Actions
3. `owni14.me`, `deprecated-owni14.me` Archive

옛 URL은 404. 리다이렉트 없음. `not-found.tsx`에서 블로그 목록으로 안내.

## 4. 스택

| 역할       | 선택                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 프레임워크 | Next.js 16 App Router, `output: 'export'`, React 19, TypeScript strict, pnpm                                                                                                          |
| 스타일     | Tailwind CSS 4 (`@theme` 토큰, `globals.css` 하나)                                                                                                                                    |
| 콘텐츠     | MDX + Velite 0.4 (frontmatter 빌드 시 검증, TOC 자동)                                                                                                                                 |
| 마크다운   | remark-gfm, rehype-slug, rehype-autolink-headings, rehype-pretty-code + shiki (`github-light`)                                                                                        |
| 전환       | next-view-transitions                                                                                                                                                                 |
| 댓글       | @giscus/react (새 저장소 Discussions)                                                                                                                                                 |
| 분석       | @next/third-parties `GoogleAnalytics`, `NEXT_PUBLIC_GA_ID` 환경변수                                                                                                                   |
| 폰트       | Pretendard Variable 다이내믹 서브셋(`public/fonts/woff2-dynamic-subset/` 92개, 3MB, `src/app/fonts.css`의 `@font-face` + `unicode-range`로 필요한 조각만 로드), 코드는 `ui-monospace` |
| 배포       | GitHub Actions → GitHub Pages                                                                                                                                                         |

마감 단계에 추가: `feed`(RSS), `satori`(OG 이미지), Playwright(스모크), `sharp`(webp).

쓰지 않음: SSR·미들웨어(Pages 불가), 다크모드, 포인트 색, Playground, 아이콘 라이브러리, CSS-in-JS, UI 킷, Vitest, 다국어, 검색, 마이그레이션 도구.

## 5. 구조 (2단계 시점)

```text
.github/workflows/{ci.yml,deploy.yml}
content/
  posts/development/rebuilding-this-site.mdx   글 1개 (새로 씀)
  projects/react-todo-list-tdd.mdx             프로젝트 1개
  site.yml                                     프로필 + 경력
public/
  images/posts/…, images/projects/…, fonts/woff2-dynamic-subset/
  og.png, llms.txt, robots.txt, .nojekyll, 인증 파일 3종
src/
  app/
    layout.tsx  page.tsx  not-found.tsx  sitemap.ts  robots.ts  globals.css  fonts.css
    blog/page.tsx  blog/[category]/page.tsx  blog/[category]/[slug]/page.tsx  blog/tag/[tag]/page.tsx
    projects/page.tsx  projects/[slug]/page.tsx
  components/  header footer nav-link(client) post-list project-card toc giscus(client) mdx json-ld   (평면, 10개 넘으면 분리)
  lib/         content.ts (Velite 래핑)  seo.ts (metadata, JSON-LD)
velite.config.ts  next.config.ts  postcss.config.mjs  tsconfig.json  package.json  .env.example
```

빌드는 `velite build && next build`. 타입체크는 `velite build && next typegen && tsc --noEmit`(라우트 타입 `PageProps`가 typegen으로 생성됨). `scripts/`는 마감 단계에 생김.

## 6. 콘텐츠 스키마

```ts
posts: {
  title: s.string().max(120),
  description: s.string().max(200),          // 필수. 질문에 한 문단으로 답하는 요약
  date: s.isodate(), updated: s.isodate().optional(),
  category: s.enum(['development', 'life']),
  tags: s.array(s.string()).default([]),
  draft: s.boolean().default(false),
  slug: s.path(), toc: s.toc(), body: s.mdx(),
}
projects: { title, description, period, role, stack[], links{repo,live}, cover, featured, order, body }
site.yml: { name, tagline, intro, links{github,linkedin,email}, experience[{company, role, start, end, summary, highlights[]}] }
```

- 파일명 `<slug>.mdx`, slug는 영문 소문자와 하이픈만. 날짜는 frontmatter에만
- 2단계 이후 스키마·라우트 변경 없음

예시 콘텐츠: 글은 "블로그와 포트폴리오를 하나로 다시 만든 이유와 구조"를 새로 쓴다(코드·이미지·표·제목 계층 포함, 실제 첫 글). 프로젝트는 `react-todo-list-tdd`. `site.yml`은 about.json에서.

## 7. 페이지

| 경로                                  | 내용                                                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                                   | Hero → Experience → Projects(3) → Recent Posts(5) → Contact. 앵커 `#experience` `#projects` `#posts` `#contact`. 경력·프로젝트는 두 화면 안 |
| `/blog`                               | 전체 목록, 최신순, 연도 구분. 페이지네이션 없음                                                                                             |
| `/blog/[category]`, `/blog/tag/[tag]` | 필터 목록                                                                                                                                   |
| `/blog/[category]/[slug]`             | 제목, 메타, Summary, TOC(우측 고정), 본문, 이전/다음, giscus                                                                                |
| `/projects`, `/projects/[slug]`       | 카드 그리드(featured 2칸) / 개요, 역할, 스택, 링크, 스크린샷, 배운 점                                                                       |

상단바: 왼쪽 이름, 오른쪽 Blog · Projects. sticky, 단색 배경, 하단 1px 선. 햄버거 없음.

## 8. 디자인 토큰

```css
@theme {
  --color-bg: #fdfcfb; /* feel5ny #fff 와 sanggggg #fbfaf8 의 중간 */
  --color-soft: #f5f3ef; /* 코드, 인용, 카드 */
  --color-line: #e8e5df;
  --color-fg: #1a1a18; /* 본문, 링크 */
  --color-muted: #6f6c66; /* 메타 */
  --color-faint: #a8a49c; /* 링크 기본 밑줄 */
  --font-sans: 'Pretendard Variable', 'Apple SD Gothic Neo', system-ui, sans-serif;
  --font-mono: ui-monospace, Menlo, monospace;
  --text-xs: 0.8rem;
  --text-sm: 0.9rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 1.75rem;
  --text-3xl: 2.25rem;
  --radius-sm: 4px;
  --radius-md: 8px;
}
```

- 유채색 없음. 링크는 본문색 + `faint` 밑줄, hover/focus 시 밑줄이 본문색
- 현재 메뉴·목차 항목은 굵기와 `muted → fg`로 구분. 포커스 링 `2px solid fg`
- 본문 폭 `max-w-2xl`, 목록·랜딩 `max-w-3xl`

## 9. 배포

`deploy.yml`은 `if: github.repository == 'owni14/owni14.github.io'` 가드로 컷오버 전엔 실행되지 않는다. 그 전엔 `ci.yml`(lint, typecheck, build, 예시 글 HTML에 제목·본문·JSON-LD 존재 검사)만.

```yaml
# deploy.yml 핵심
- run: pnpm build
  env: { NEXT_PUBLIC_GA_ID: ${{ vars.NEXT_PUBLIC_GA_ID }} }
- uses: actions/upload-pages-artifact@v3
  with: { path: out }
- uses: actions/deploy-pages@v4
```

`next.config.ts`: `output: 'export'`, `trailingSlash: false`, `images.unoptimized: true`. `public/.nojekyll` 필수.

## 10. SEO / GEO / AEO 체크리스트

- 본문·TOC·메타·JSON-LD는 서버 컴포넌트에서 렌더. 클라이언트는 giscus, GA, ViewTransitions, 상단바 현재 메뉴 표시(NavLink)만
- 페이지별 `title`, `description`, `canonical`, OG 카드. OG 이미지는 정적 1장으로 시작
- `sitemap.xml`, `robots.txt`(GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, Yeti 허용), `llms.txt`
- JSON-LD: 랜딩 `Person`, 글 `BlogPosting`(author → 같은 Person, `sameAs` GitHub·LinkedIn), `WebSite`, `BreadcrumbList`
- 글마다 `description` 필수 + 상단 `<Summary>` 2~3문장. 제목은 질문형·결론형
- 시맨틱 HTML(`article`, `time`, h1 하나), 이미지 `alt` 필수, 대비 4.5:1 이상
- GA4는 `NEXT_PUBLIC_GA_ID`가 있을 때만 삽입. 값은 `.env.local`과 Actions 변수에만. 쿠키 배너 없음, 푸터에 GA 사용 고지
- 예산: 랜딩 JS gzip 기준 ≤ 200KB (2단계 실측 185KB, 원본 600KB. React 19 + Next 16 런타임이 대부분), Lighthouse Performance 95+ / A11y 100 / SEO 100
- 컷오버 후 Search Console·네이버 서치어드바이저에 사이트맵 제출

## 11. 단계

| 단계     | 내용                                                                               | 완료 기준                  |
| -------- | ---------------------------------------------------------------------------------- | -------------------------- |
| 0 준비   | `owni14-site` 저장소 생성, 복제본 폴더 삭제                                        | 로컬 연결                  |
| 1 뼈대   | create-next-app, Tailwind 토큰, Velite, Header/Footer, GA4, `ci.yml`               | `pnpm build` 통과          |
| 2 예시   | 글 1, 프로젝트 1, `site.yml`. 라우트·스키마 확정                                   | 전 라우트 로컬 렌더        |
| 3 랜딩   | 섹션 5개 완성                                                                      | 두 화면 안에 경력·프로젝트 |
| 4 블로그 | 카테고리·태그, TOC, 하이라이트, Summary, giscus, 이전/다음                         | 예시 글로 전부 동작        |
| 5 마감   | 프로젝트 3+, 글 3+, RSS, OG 이미지, JSON-LD, webp, Lighthouse, 스모크              | 기준 충족, 빈 섹션 없음    |
| 6 컷오버 | Actions 변수 등록 → 저장소 이름 변경 → Pages 배포 → GA 실시간 확인 → 사이트맵 제출 | 새 사이트 서비스           |

컷오버 조건은 글 3개 이상. 새 글은 기존 Jekyll이 아니라 `content/posts/`에 쓴다.

## 12. 나중에

옛 글 선별 이전(손으로), 다크모드(토큰 재정의만), 포인트 색, Playground, `/design`, 검색(글 300개 넘으면), 다국어, 커스텀 도메인.
