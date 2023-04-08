---
layout: post
title: '[React] React 상태관리 라이브러리 비교(Redux vs MobX vs Zustand vs Recoil)'
subtitle: '[React] React 상태관리 라이브러리 비교(Redux vs MobX vs Zustand vs Recoil)'
category: dev
tags: react
published: true
image:
  path: /assets/img/react.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## 상태관리! 왜 필요할까?

---

1. 과도한 props drilling 현상
2. 프로젝트가 커질수록 관리해야하는 props 증가
3. 라이브러리를 사용하지 않을 경우 유지보수가 어려움
4. props 추적 어려움

## 상태관리 트렌드(23년 04월 기준)

---

현재 npm trends를 보게 되면 다운로드 수가 가장 많은게 Redux이고 Zustand, MobX, Recoil이 그 뒤를 잇고 있다. 원래 MobX가 Zustand보다 더 앞서고 있었지만 올해들어서 Zustand가 앞지르는 상황이 되었다. [npm trends](https://npmtrends.com/mobx-vs-react-redux-vs-recoil-vs-zustand)를 들어가보면 오늘 내가 리뷰하고자하는 라이브러리의 트렌드를 확인할 수 있다.

## 상태관리 라이브러리

---

### Redux

- 장점
  - 디버깅에 유리
  - 상태의 중앙화
  - 불변객체로 유지하기 때문에 예측 가능한 상태관리
  - 사용하기 비교적 까다로운 Redux를 대신해서 Redux-Toolkit이라는 라이브러리가 존재
- 단점
  - 다소 높은 러닝커브
  - 상태, 액션, 리듀서를 정의하는데 추가적인 코드 필요
  - 상태를 한 곳에서만 관리
  - 비동기를 위한 redux-thunk, redux-saga등의 미들웨어가 필수

### MobX

- 장점
  - 간결한 코드
  - 높은 성능
  - 편리한 디버깅
  - 타입스크립트 지원
- 단점
  - 다소 높은 러닝커브
  - 디버깅이 편리하지만 디버깅툴에서 가독성이 떨어지는 이슈
  - 래퍼런스 부족
  - 기본적으로 클래스형에 맞춰져있다.

### Zustand

- 장점
  - 불변성을 유지하면서 간단한 구조를 가지고 있어 성능에 유리
  - 타입스크립트 지원
  - 상태 변화를 모니터링하고 디버깅하기 쉬움
- 단점
  - Redux와 Mobx에 비해 커뮤니티가 부족

### Recoil

- 장점
  - 손 쉽게 사용 가능
  - 비동기 상태관리 가능
  - 중앙 집중식 관리
  - 매우 경량화되어 있어 빠른 성능
- 단점
  - 상태를 복잡하게 만들 수 있다.
  - 대규모 어플리케이션에 필요한 기능들을 제공하지 않을 수 있다.
  - 비교적 최신 기술로써 작은 커뮤니티

## 내 생각

---

이번에 포스팅을 작성하기 위해 라이브러리를 한번 씩 다 경험해보았는데 역시 Redux가 제일 난이도가 있었고 그 다음으로는 MobX였다. 보통 React에서는 함수형 컴포넌트를 많이 사용하니까 클래스형을 주로쓰는 Mobx는 생각보다 낯설다라는 느낌이 들었다. 그리고 나는 Recoil은 이전에 사용해본적이 있어 러닝 커브가 정말 낮다고 생각들었는데 Zustand가 제일 낮은거 같다고 생각든다.

Recoil같은 경우 최상단루트에서 App을 감싸서 내려주는 형식이지만 Zustand는 최상단에서 App을 감싸줄 필요가 없었다. 그리고 코드도 직관적이고 간편해서 나중에 한번 사용해보려고 한다. 내가 이때까지 많은 자료를 조사하면서 찾아보았는데 대규모 프로젝트 즉, 기능이 많고 상태관리가 많이 일어나는 프로젝트 같은 경우 Redux를 대부분의 커뮤니티에서 추천하는 방향이다.

그리고 프로젝트가 컴포넌트 중심인지 데이터중심인지 초점을 맞추어 적용해보길 바란다. 컴포넌트 중심같은 경우 Recoil, jotai등이 있으며 데이터 중심은 Redux, Zustand, MobX등이 존재한다고 한다.

## Reference

---

- [https://chanhuiseok.github.io/posts/react-15/](https://chanhuiseok.github.io/posts/react-15/)
- [https://velog.io/@wjdwl002/React-상태관리-라이브러리-비교분석-Redux-Recoil-편](https://velog.io/@wjdwl002/React-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%B9%84%EA%B5%90%EB%B6%84%EC%84%9D-Redux-Recoil-%ED%8E%B8)
- [https://dori-coding.tistory.com/entry/React-상태관리-라이브러리-어떤걸-써야할까](https://dori-coding.tistory.com/entry/React-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%96%B4%EB%96%A4%EA%B1%B8-%EC%8D%A8%EC%95%BC%ED%95%A0%EA%B9%8C)
- [https://velog.io/@leejihun96/redux와-react-redux](https://velog.io/@leejihun96/redux%EC%99%80-react-redux)
- [https://hanamon.kr/redux란-리덕스-상태-관리-라이브러리/](https://hanamon.kr/redux%EB%9E%80-%EB%A6%AC%EB%8D%95%EC%8A%A4-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC/)
- [https://amyhyemi.tistory.com/103](https://amyhyemi.tistory.com/103)
- [https://tech.osci.kr/2022/06/29/복잡하고-어려운-redux-적응기/](https://tech.osci.kr/2022/06/29/%EB%B3%B5%EC%9E%A1%ED%95%98%EA%B3%A0-%EC%96%B4%EB%A0%A4%EC%9A%B4-redux-%EC%A0%81%EC%9D%91%EA%B8%B0/)
- [https://velog.io/@wjd489898/React-MobX-이해하기](https://velog.io/@wjd489898/React-MobX-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
- [https://itchallenger.tistory.com/630](https://itchallenger.tistory.com/630)
- [https://ui.toast.com/posts/ko_20210812](https://ui.toast.com/posts/ko_20210812)
