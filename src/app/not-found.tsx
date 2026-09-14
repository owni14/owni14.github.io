import { Link } from 'next-view-transitions'
import { categories, categoryLabel } from '@/lib/content'

export default function NotFound() {
  return (
    <div className="pt-12">
      <p className="text-faint font-mono text-xs">404</p>
      <h1 className="mt-2 text-xl font-semibold">페이지를 찾을 수 없습니다</h1>
      <p className="text-muted mt-4">
        예전 블로그 주소로 오셨다면, 옛 글은 이 사이트로 옮기지 않았습니다. 새 글은 아래에서 볼 수
        있습니다.
      </p>
      <ul className="mt-8 flex flex-wrap gap-5 text-sm">
        <li>
          <Link href="/posts">전체 글</Link>
        </li>
        {categories.map((c) => (
          <li key={c}>
            <Link href={`/posts/${c}`}>{categoryLabel(c)}</Link>
          </li>
        ))}
        <li>
          <Link href="/">홈</Link>
        </li>
      </ul>
    </div>
  )
}
