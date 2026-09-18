'use client'

import { useEffect, useRef } from 'react'

/**
 * 글 본문을 얼마나 읽었는지 화면 맨 위에 가는 막대로 보여 준다.
 * 끝 지점은 문서 끝이 아니라 본문(targetId) 끝이다. 댓글과 푸터는 읽은 양에 넣지 않는다.
 * 스크롤마다 리렌더하지 않도록 상태 대신 ref로 스타일만 바꾸고, 본문 끝 위치는 크기가 바뀔 때만 다시 잰다.
 */
export function ReadingProgress({ targetId }: { targetId: string }) {
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = document.getElementById(targetId)
    if (!target) return

    // 본문 끝이 화면 아래쪽에 닿는 스크롤 위치
    let end = 0
    let ticking = false
    const paint = () => {
      ticking = false
      if (!bar.current) return
      // 스크롤 없이 한 화면에 다 보이는 짧은 글은 막대를 띄우지 않는다
      const progress = end <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / end))
      // 막대 전체를 왼쪽 화면 밖에 두고 읽은 만큼 밀어 넣는다. scaleX와 달리 둥근 끝과 그림자가 찌그러지지 않는다.
      bar.current.style.transform = `translateX(${(progress - 1) * 100}%)`
      bar.current.style.opacity = progress > 0 ? '1' : '0'
    }
    const schedule = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(paint)
      }
    }
    const measure = () => {
      end = target.getBoundingClientRect().bottom + window.scrollY - window.innerHeight
      schedule()
    }

    measure()
    const resize = new ResizeObserver(measure)
    resize.observe(target)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      resize.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', measure)
    }
  }, [targetId])

  return (
    <div
      ref={bar}
      aria-hidden
      className="reading-progress bg-fg pointer-events-none fixed top-0 left-0 z-30 h-[3px] w-full rounded-r-full opacity-0"
      style={{ transform: 'translateX(-100%)' }}
    />
  )
}
