# Jekyll 글 이전

`owni14/deprecated-blog`의 Jekyll 글 222개 중 공개 글 220개를 새 블로그의 MDX 형식으로 이전했다. 비공개 초안 2개와 해당 글에서만 사용하는 이미지 3개는 로컬에만 보존하고 공개 저장소와 배포에서 제외했다. 원본 커밋, 글별 원본 메타데이터·파일 해시·이전 및 새 경로는 [jekyll-posts.json](./jekyll-posts.json)에 기록했다.

- 공개 글 220개를 이전하고 기존 `restarting-blog.mdx`를 유지했다. 원래 `published: false`였던 초안 2개는 로컬에서만 보존한다. 공개 이전 매니페스트에는 초안 본문·메타데이터를 포함하지 않는다.
- 원래 제목·작성일·태그·대표 이미지 경로를 보존했다. 작성일이 없는 글은 Jekyll과 같이 파일명의 날짜를 사용했다. 새 블로그에서 필수인 설명은 원문 설명 또는 첫 문단에서 만들었다.
- 기존 폴더 구조를 Web, Backend, Algorithm, Development, Personal의 두 단계 분류에 대응했다. 새 slug에는 원래 날짜를 포함해 동명 글 충돌을 막았다.
- Jekyll 목차 표시는 제거하고 새 블로그의 자동 목차를 사용한다. Liquid의 raw 래퍼는 제거하되 코드 내용은 보존했다. 본문의 중괄호·HTML 표기·자동 링크는 MDX에서 실행되거나 파싱 오류가 나지 않도록 변환했다.
- 본문과 대표 이미지에서 참조하는 로컬 이미지 88개를 `public/assets/img/`에 복사했다. 각 파일은 원본 Git blob SHA-1과 대조했다. 외부 링크는 기존 주소를 유지한다.
- 본문에 남은 옛 파일명 링크 7곳을 대응하는 새 글로 연결했다. 해당 별칭 5개도 이전 주소 이동 페이지에 포함한다.

## 기존 주소

기존 `_config.yml`의 `permalink: none` 및 Jekyll 3.9의 URL 생성 규칙에 따라 `/<category>/<slug>.html` 주소를 계산했다. `pnpm build`는 Next.js 정적 내보내기 후 `scripts/generate-legacy-redirects.mjs`를 실행해 공개 글과 별칭의 이동 페이지 225개를 `out/`에 생성한다. 브라우저에서는 쿼리와 해시를 유지하며 새 글로 이동하고, 스크립트가 꺼져 있으면 meta refresh와 링크로 이동할 수 있다. HTTP 301은 아니며 새 글의 canonical 주소를 제공한다.

이동 페이지는 새 사이트가 같은 도메인에 배포될 때 적용된다. 별도 옛 도메인의 DNS나 호스팅 설정은 변경하지 않았다.

## 댓글

기존 Giscus 댓글은 GitHub Discussions에 별도로 저장되므로 이번 글 파일 이전에 포함하지 않았다. 새 사이트는 기존 Giscus 환경변수 설정을 유지한다. 글 주소가 바뀌었으므로 과거 댓글을 연결하려면 실제 Discussions 저장소와 pathname 매핑을 별도로 확인해야 한다.

## 검증 및 배포

`pnpm build`, `pnpm typecheck`, `pnpm lint`로 확인한다. 별도로 222개 글의 제목·날짜·태그·초안 상태, 코드 보존, 이미지 해시 및 정적 결과를 전수 대조한다.

이번 로컬 검증에서는 기본 Turbopack 빌드가 실행 환경의 포트 바인딩 제한으로 실패했다. 저장소의 번들러 설정은 바꾸지 않고 `pnpm exec next build --webpack`과 이동 페이지 생성 스크립트로 정적 출력을 검증했다. 타입 검사와 lint는 통과했다. 222개 원본 글과 이미지 91개의 Git blob 해시(로컬 전수 대조, 공개 대상은 220개 글·88개 이미지), 코드 블록·인라인 코드 1,378개, 공개 글 페이지 220개 및 이동 페이지 225개를 대조했고 불일치가 없었다.

`main`에 push하면 기존 GitHub Actions가 빌드 후 GitHub Pages로 배포한다.
