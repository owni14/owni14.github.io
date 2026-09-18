'use client'

import { useEffect } from 'react'

/**
 * 같은 페이지 안의 #링크(목차, 소제목 앵커, 본문 건너뛰기)를 직접 처리한다.
 *
 * 브라우저 기본 동작에 맡기면 popstate가 발생하고, next-view-transitions가 이를 페이지 이동으로 보고
 * 화면 전환을 시작한다. 주소의 경로는 그대로라 전환이 끝나지 않아 몇 초간 화면이 멈췄다가
 * "Transition was aborted because of timeout in DOM update" 오류가 난다.
 * replaceState는 popstate를 일으키지 않으므로 전환 없이 스크롤만 한다.
 */
export function HashLinks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = (event.target as Element).closest?.('a[href^="#"]')
      if (!link) return
      const hash = link.getAttribute('href') ?? ''
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (!target) return

      event.preventDefault()
      // 부드러운 이동 여부는 CSS(html의 scroll-behavior, 동작 줄이기 설정 포함)를 따른다
      target.scrollIntoView()
      history.replaceState(history.state, '', hash)
      // 기본 동작을 막았으니 키보드 초점도 직접 옮긴다
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
      target.focus({ preventScroll: true })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
