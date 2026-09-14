# owni14.github.io

자기소개와 블로그. https://owni14.github.io

Next.js 16 정적 내보내기, MDX + Velite, Tailwind CSS 4.

## 실행

```bash
pnpm install
pnpm dev        # next dev (velite 감시 빌드 포함)
pnpm build      # next build → out/ (velite 빌드 포함, 타입 검사 포함)
pnpm typecheck  # velite build + next typegen + tsc
pnpm lint
```

환경변수는 `.env.example` 참고. 로컬은 `.env.local`, 배포는 GitHub Actions 저장소 변수.

## 글 쓰기

`content/posts/<category>/<subcategory>/<slug>.mdx`

```mdx
---
title: 글 제목
description: 목록·검색·SEO에 쓰이는 한두 문장 요약 (필수)
date: 2026-09-14
draft: false
---
```

- 분류는 폴더 경로로 정한다. `content/posts/web/javascript/foo.mdx` → `/posts/web/javascript/foo`, 화면에는 `Web › JavaScript`.
- 카테고리와 소분류는 `src/lib/categories.ts`에 정의된 값만 허용하며, 그 파일의 순서가 화면 순서다. 새 분류는 그 파일에만 추가하면 된다.
- 소분류는 필수다. 글이 없는 분류는 메뉴에 나오지 않는다.
- `draft: true`면 빌드에서 제외.
- 본문에서 `<Summary>`, `<Callout>` 컴포넌트를 쓸 수 있다.

프로필·경력은 `content/site.yml`.

## 배포

`main`에 푸시하면 GitHub Actions가 빌드해 GitHub Pages로 배포한다. 검색 인덱스(`/search-index.json`), RSS(`/rss.xml`), 사이트맵, robots는 빌드 때 생성된다.

계획서: `docs/PLAN.md`
