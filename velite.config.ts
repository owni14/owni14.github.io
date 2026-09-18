import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { defineCollection, defineConfig, s, z } from 'velite'
import { isCategory, isSubcategory } from './src/lib/categories'

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(120),
      description: s.string().max(200),
      date: s.isodate(),
      updated: s.isodate().optional(),
      draft: s.boolean().default(false),
      path: s.path(),
      toc: s.toc(),
      body: s.mdx(),
      /** 검색 인덱스용 본문 평문. velite가 파싱한 HTML 트리의 텍스트를 그대로 쓴다. */
      plain: s.excerpt({ length: 5000 }),
    })
    .transform((data, ctx) => {
      // 분류는 파일 경로에서 읽는다: posts/<category>/<subcategory>/<slug>
      const segments = data.path.split('/')
      const [, category, subcategory, slug] = segments
      if (
        segments.length !== 4 ||
        !category ||
        !subcategory ||
        !slug ||
        !isCategory(category) ||
        !isSubcategory(category, subcategory)
      ) {
        ctx.addIssue({
          code: 'custom',
          message: `글은 content/posts/<category>/<subcategory>/<slug>.mdx 에 두어야 하며, category와 subcategory는 src/lib/categories.ts 에 정의된 값이어야 합니다: ${data.path}`,
        })
        return z.NEVER
      }
      return {
        ...data,
        category,
        subcategory,
        slug,
        permalink: `/posts/${category}/${subcategory}/${slug}`,
      }
    }),
})

const site = defineCollection({
  name: 'Site',
  pattern: 'site.yml',
  single: true,
  schema: s.object({
    name: s.string(),
    tagline: s.string(),
    intro: s.string(),
    links: s.object({
      github: s.string().url(),
      linkedin: s.string().url().optional(),
      email: s.string().email(),
    }),
    experience: s.array(
      s.object({
        company: s.string(),
        url: s.string().url().optional(),
        role: s.string(),
        start: s.string(),
        end: s.string().optional(),
        location: s.string().optional(),
      }),
    ),
  }),
})

export default defineConfig({
  root: 'content',
  strict: true,
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts, site },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [rehypePrettyCode, { theme: 'github-light', keepBackground: false }],
    ],
  },
})
