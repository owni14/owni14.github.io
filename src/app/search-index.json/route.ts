import { posts, toSummary } from '@/lib/content'

export const dynamic = 'force-static'

/** 블로그 검색용 정적 인덱스. 빌드 시 /search-index.json 으로 내보내진다. */
export function GET() {
  const index = posts.map((p) => ({ ...toSummary(p), plain: p.plain }))
  return Response.json(index)
}
