import { readFile, mkdir, writeFile, access } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const output = path.join(root, 'out')
const manifest = JSON.parse(
  await readFile(path.join(root, 'docs/migrations/jekyll-posts.json'), 'utf8'),
)
const escape = (value) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[char],
  )
let count = 0
for (const post of manifest.posts) {
  // 비공개였던 글은 이전 주소에서도 공개하지 않는다.
  if (post.draft) continue
  await access(path.join(output, post.permalink + '.html'))
  for (const legacyPath of [post.legacyPath, ...(post.legacyAliases || [])]) {
    const file = path.resolve(output, '.' + legacyPath)
    if (!file.startsWith(output + path.sep) || !file.endsWith('.html')) {
      throw new Error(`Invalid legacy path: ${legacyPath}`)
    }
    try {
      await access(file)
      throw new Error(`Legacy path would overwrite an exported page: ${legacyPath}`)
    } catch (error) {
      if (error.code !== 'ENOENT') throw error
    }
    const target = encodeURI(post.permalink)
    const scriptTarget = JSON.stringify(target).replaceAll('<', '\\u003c')
    const html = `<!doctype html>
<html lang="ko"><head><meta charset="utf-8">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0;url=${escape(target)}">
<link rel="canonical" href="https://owni14.github.io${escape(target)}">
<title>${escape(post.title)} — 이동</title>
</head><body><p><a href="${escape(target)}">이전한 글로 이동</a></p>
<script>location.replace(${scriptTarget} + location.search + location.hash)</script>
</body></html>
`
    await mkdir(path.dirname(file), { recursive: true })
    await writeFile(file, html)
    count++
  }
}
console.log(`Generated ${count} legacy redirects`)
