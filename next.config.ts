import type { NextConfig } from 'next'

// Next 16부터 dev 서버는 별도 프로세스에서 설정을 읽어 argv에 'dev'가 없다. build는 여전히 argv에 남는다.
const isDev = process.env.NODE_ENV === 'development'
const isBuild = process.argv.includes('build')

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  images: { unoptimized: true },
}

/**
 * velite를 Next 안에서 먼저 실행한다. dev는 감시 모드로 계속 돌고, build는 한 번 정리 후 빌드한다.
 * 별도 프로세스로 띄우면 .velite가 만들어지기 전에 Next가 #site/content를 찾는 경쟁이 생긴다.
 * VELITE_STARTED 가드는 Next가 설정을 여러 번 읽어도 velite가 한 번만 뜨게 한다.
 */
export default async function config() {
  if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
    process.env.VELITE_STARTED = '1'
    const { build } = await import('velite')
    await build({ watch: isDev, clean: !isDev })
  }
  return nextConfig
}
