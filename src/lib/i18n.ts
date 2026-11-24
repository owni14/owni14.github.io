export type Locale = 'ko' | 'en'

export const messages = {
  ko: {
    menu: '주요 메뉴',
    posts: '글',
    categories: '분류',
    experience: '경력',
    recent: '최근 글',
    all: '전체',
    viewAll: '전체 보기',
    empty: '아직 글이 없습니다.',
    present: '현재',
    skip: '본문으로 건너뛰기',
    search: '검색',
    searchPosts: '글 검색',
    placeholder: '제목, 본문, 분류로 검색',
    searchError: '검색 인덱스를 불러오지 못했습니다.',
    loading: '불러오는 중…',
    noResults: '검색 결과가 없습니다.',
    move: '이동',
    open: '열기',
    close: '닫기',
    parent: '상위 분류',
    subcategories: '소분류',
    toc: '목차',
    top: '맨 위로',
    updated: '수정',
    previous: '이전 글',
    next: '다음 글',
    comments: '댓글',
    translation: '자동 번역본입니다. 코드와 기술 용어는 원문을 유지할 수 있습니다.',
    original: '원문 보기',
    links: '링크',
    email: '이메일',
    rss: 'RSS 피드',
    notFound: '페이지를 찾을 수 없습니다',
    notFoundText: '주소를 확인하거나 글 목록에서 원하는 글을 찾아보세요.',
    home: '홈',
    postsDescription: '개발하며 배운 것과 경험한 일, 일과 일상에 대한 생각을 기록합니다.',
    categoriesDescription: '카테고리와 소분류별 글 목록',
  },
  en: {
    menu: 'Main navigation',
    posts: 'Posts',
    categories: 'Categories',
    experience: 'Experience',
    recent: 'Recent posts',
    all: 'All',
    viewAll: 'View all',
    empty: 'No posts yet.',
    present: 'Present',
    skip: 'Skip to content',
    search: 'Search',
    searchPosts: 'Search posts',
    placeholder: 'Search titles, content, and categories',
    searchError: 'Could not load the search index.',
    loading: 'Loading…',
    noResults: 'No results found.',
    move: 'Navigate',
    open: 'Open',
    close: 'Close',
    parent: 'Parent categories',
    subcategories: 'Subcategories',
    toc: 'On this page',
    top: 'Back to top',
    updated: 'Updated',
    previous: 'Previous post',
    next: 'Next post',
    comments: 'Comments',
    translation:
      'Automatically translated. Code and technical terms may remain in their original language.',
    original: 'Read the original',
    links: 'Links',
    email: 'Email',
    rss: 'RSS feed',
    notFound: 'Page not found',
    notFoundText: 'Check the address or browse the posts to find what you need.',
    home: 'Home',
    postsDescription:
      'Notes on development, lessons learned, and reflections on work and everyday life.',
    categoriesDescription: 'Browse posts by category and topic',
  },
} as const

export function localizedPath(path: string, locale: Locale) {
  const base = path === '/en' ? '/' : path.startsWith('/en/') ? path.slice(3) : path
  if (!base.startsWith('/') || base.startsWith('//') || /^\/(assets|static|_next)(\/|$)/.test(base))
    return path
  return locale === 'en' ? `/en${base === '/' ? '' : base}` : base
}

export function formatLocalizedDate(value: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'ko-KR', {
    year: 'numeric',
    month: locale === 'en' ? 'short' : '2-digit',
    day: '2-digit',
    timeZone: 'UTC',
  }).format(new Date(value))
}
