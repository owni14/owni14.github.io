/** velite isodate는 UTC 자정 ISO 문자열을 저장하므로 Date 파싱 없이 앞 10자리만 쓴다 (시간대 영향 없음). */
export const formatDate = (iso: string) => iso.slice(0, 10).replaceAll('-', '.')

export const formatPeriod = (start: string, end?: string) => `${start} – ${end ?? '현재'}`

/** view-transition-name·DOM id용 글 키. slug는 파일명일 뿐이라 분류까지 합쳐야 유일하다. */
export const transitionName = (p: { category: string; subcategory: string; slug: string }) =>
  `post-${p.category}-${p.subcategory}-${p.slug}`
