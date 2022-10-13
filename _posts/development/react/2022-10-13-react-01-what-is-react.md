---
layout: post
title: '[react] 리액트란?'
subtitle: '[react] 리액트란?'
category: dev
tags: react
image:
  path: /assets/img/react.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## 리액트란 무엇인가?

---

> 리액트(React, React.js 또는 ReactJS)는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다.
> 출처 : 위키백과

React는 페이스북에서 개발되어 제공해주는 프론트엔드 라이브러리이다. 프론트엔드에서 가장 많이 사용되는 프레임워크 및 라이브러리는 React, Angular, Vue가 있는데 Angular와 Vue같은 경우 프레임워크이고 React는 라이브러리이다.  
프레임워크란 원하는 기능 구현에 집중하여 개발할 수 있도록 일정한 형태와 필요한 기능을 갖추고 있는 골격, 뼈대를 의미하고 라이브러리는 특정 기능들을 모아둔 코드 및 함수들의 집합으로 코드 작성 시 활용 가능한 도구들을 의미한다.

## 리액트의 특징

---

- 단반향 데이터 흐름
  - 복잡한 앱에서도 데이터 흐름에 따라 일어나는 변화를 예측 가능
- Component 기반 구조
  - 여러 Component를 나눠서 관리
  - 한 페이지내에 Header, Footer 등 각 부분을 독립된 컴포넌트로 생성 가능
  - Component로 인해 코드 재사용성 향상
  - 기능단위, UI단위로 나눠서 관리 가능하므로, 유지보수 용이
- Virtual DOM
  - 이벤트 생성 시 마다 Virtual DOM을 생성
  - 다시 생성 시 실제 DOM과 비교하여 변경된 부분만 실제 DOM에 반영
  - 효율성 및 속도 개선
- Props와 State
  - Props
    - 부모 컴포넌트에서 자식 컴포넌트로 전달해 주는 데이터
    - 자식 컴포넌트에서 props 변경 불가능
    - 최상위 부모 컴포넌트만 props 변경 가능
  - State
    - 컴포넌트 내부에서 선언 및 변경 가능
    - 동적 데이터를 다룰때 사용

## JSX 문법

자바스크립트와 HTML을 동시에 사용하며, HTML에 자바스크립트의 변수들을 바로 사용할 수 있는 일종의 템플릿 언어이다.

```
const App = () => {
  const helloReact = 'Hello React!';
  return <div>{helloReact}</div>
}
```

다음과 같이 자바스크립트에서 HTML 태그 사용이 가능하고 자바스크립트 변수를 html 태그에서 바로 호출하여 사용할 수 있다.
