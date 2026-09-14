/**
 * 글 분류 정의. 카테고리 > 소분류 두 단계이며, 여기에만 추가하면 된다.
 * key는 URL(/posts/<category>/<subcategory>)과 content/posts/<category>/<subcategory>/ 폴더명에 쓰이고,
 * 나열한 순서가 화면 표시 순서다.
 */
export const CATEGORIES = {
  'clean-code': {
    label: 'Clean Code',
    subs: { principles: 'Principles', refactoring: 'Refactoring', testing: 'Testing' },
  },
  web: {
    label: 'Web',
    subs: {
      javascript: 'JavaScript',
      typescript: 'TypeScript',
      css: 'CSS',
      browser: 'Browser',
      http: 'HTTP',
    },
  },
  devops: {
    label: 'DevOps',
    subs: { 'ci-cd': 'CI/CD', docker: 'Docker', cloud: 'Cloud' },
  },
  personal: {
    label: 'Personal',
    subs: { reflection: 'Reflection', career: 'Career' },
  },
} as const satisfies Record<string, { label: string; subs: Record<string, string> }>

export type Category = keyof typeof CATEGORIES

export const CATEGORY_KEYS = Object.keys(CATEGORIES) as Category[]

export const isCategory = (value: string): value is Category => value in CATEGORIES

export const isSubcategory = (category: Category, value: string) =>
  value in CATEGORIES[category].subs

export const subcategoryKeys = (category: Category) => Object.keys(CATEGORIES[category].subs)

export const categoryLabel = (category: Category) => CATEGORIES[category].label

export const subcategoryLabel = (category: Category, subcategory: string) =>
  (CATEGORIES[category].subs as Record<string, string>)[subcategory] ?? subcategory
