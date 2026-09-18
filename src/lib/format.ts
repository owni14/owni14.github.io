/** velite isodate는 UTC 자정 ISO 문자열을 저장하므로 Date 파싱 없이 앞 10자리만 쓴다 (시간대 영향 없음). */
export const formatDate = (iso: string) => iso.slice(0, 10).replaceAll('-', '.')

/** 'YYYY-MM' → 'YYYY.MM'. 글 날짜(formatDate)와 같은 점 표기로 맞춘다. */
export const formatPeriod = (start: string, end?: string) =>
  `${start.replace('-', '.')} – ${end?.replace('-', '.') ?? '현재'}`

/** view-transition-name·DOM id용 글 키. slug는 파일명일 뿐이라 분류까지 합쳐야 유일하다. */
export const transitionName = (p: { category: string; subcategory: string; slug: string }) =>
  `post-${p.category}-${p.subcategory}-${p.slug}`

/** site.yml의 `**강조**` 표기를 [일반, 강조, 일반, …] 순서의 조각으로 나눈다. 홀수 번째가 강조다. */
export const splitEmphasis = (text: string) => text.split(/\*\*(.+?)\*\*/g)

/** 메타 설명·RSS처럼 서식을 쓸 수 없는 곳을 위해 `**` 표기만 걷어낸다. */
export const stripEmphasis = (text: string) => splitEmphasis(text).join('')
