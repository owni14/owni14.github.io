import Image from 'next/image'
import type { ComponentProps, ReactNode } from 'react'
import * as runtime from 'react/jsx-runtime'

function Summary({ children }: { children: ReactNode }) {
  return (
    <aside className="summary" aria-label="요약">
      {children}
    </aside>
  )
}

function Callout({ children }: { children: ReactNode }) {
  return <div className="bg-soft rounded-md px-4 py-3 text-[0.95rem]">{children}</div>
}

function MdxImage(props: ComponentProps<'img'>) {
  const { src, alt = '', width, height } = props
  if (!src || typeof src !== 'string') return null
  return (
    <Image
      src={src}
      alt={alt}
      width={Number(width) || 1200}
      height={Number(height) || 675}
      sizes="(min-width: 768px) 42rem, 100vw"
      className="h-auto w-full"
    />
  )
}

const components = { Summary, Callout, img: MdxImage }

// Velite가 빌드 시점에 컴파일한 MDX 함수 본문을 실행한다. 서버 컴포넌트에서만 쓴다.
const compileMDX = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default as React.ComponentType<{ components: typeof components }>
}

/* eslint-disable react-hooks/static-components -- 서버 컴포넌트에서 빌드 시 한 번 렌더되는 정적 콘텐츠 */
export function MDXContent({ code }: { code: string }) {
  const Component = compileMDX(code)
  return <Component components={components} />
}
