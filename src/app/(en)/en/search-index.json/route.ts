import { getPosts, toSummary } from '@/lib/content'
export const dynamic = 'force-static'
export function GET() {
  return Response.json(getPosts('en').map((p) => ({ ...toSummary(p), plain: p.plain })))
}
