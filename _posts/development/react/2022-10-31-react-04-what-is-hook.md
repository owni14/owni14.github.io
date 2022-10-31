---
layout: post
title: '[React] 리액트의 Hook'
subtitle: '[React] 리액트의 Hook'
category: dev
tags: react
published: true
image:
  path: /assets/img/react.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## Hook의 등장 배경

---

### 클래스형 컴포넌트

리액트의 컴포넌트는 클래스와 함수형으로 나눠진다. **hook**이라는게 나오기 전에는 상태값 state와 생명주기 기능인 LifeCycle를 사용하기 위해서는 클래스형을 선언하고 사용해야했다. 함수형 컴포넌트 같은 경우에는 한번 호출이 되면 메모리상에서 사라져 상태값과 라이프 사이클 구현이 불가능했다.

클래스형 컴포넌트는 컴포넌트간 로직의 **재사용이 불가능**했고 **코드가 매우 복잡**해지는 문제점을 가지고 있었다. 그러나 상태값과 라이프사이클을 사용하기 위해서는 클래스형 컴포넌트를 사용했어야 했다.

## Hook의 등장

---

> Hook은 React 버전 16.8부터 React 요소로 새로 추가되었습니r다. Hook을 이용하여 기존 Class 바탕의 코드를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용할 수 있습니다.  
> 출처 : React 공식문서

- 함수형 컴포넌트에서 상태값(State)와 생명주기 기능(LifeCycle)을 연동(Hook into)할 수 있게 해준다.

  - 클래스형에서는 Hook가 동작하지 않는다.

- 클래스형 컴포넌트를 사용하지 않고도 함수형 컴포넌트에서 상태값 접근과 자식 요소에 접근이 가능
- useState, useEffect와 같은 내장 Hook 몇 가지를 리액트에서 별도로 제공
- props, state, context, refs 그리고 lifecycle과 같은 리액트 개념에 좀 더 직관적인 API를 제공
- 컴포넌트 간에 상태 관련 로직을 재사용하기 위해 hook을 직접 만드는 것도 가능

## 클래스형과 함수형 컴포넌트 코드 비교

---

### 클래스형 컴포넌트

```
import React, { Component } from 'react';

class Example extends Component {
  state = {
    count: 0,
  };

setCount(num) {
  this.setState({
    count: num,
  });
}
render() {
  const { count } = this.state;
  return (
    <div>
     <div>
      <p>You clicked {count} times</p>
      <button
       onClick={() => {
        this.setCount(count + 1);
     }}
    >
       Click Me!
     </button>
    </div>
   </div>
  );
 )
}

export default Example;
```

### 함수형

```
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
     <p>You clicked {count} times</p>
     <button onClick={() => setCount(count + 1)}>
       Click Me!
       </button>
      </div>
  );
}

export default Example;
```

모두 똑같은 화면으로 나오는 컴포넌트지만 가독성및 코드의 효율이 함수형이 더 낫다는 것을 확인할 수 있다.

## 여러 state변수 선언

---

```
function ExampleWithManyStates() {
  // 상태 변수를 여러 개 선언했습니다!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

배열 구조 분해문법으로 useState로 호출된 state변수들을 다른 변수명으로 할당할 수 있게 해준다. useState의 자세한 내용은 [여기](https://owni14.github.io/dev/react-02-useState.html)에서 확인 가능하다.

## Hook 장점

---

- 컴포넌트로 부터 상태 관련 로직 추상화 가능
- 코드의 재사용성 높여 유지보수 용이
- 계층 변화 없이 상태 관련 로직 재사용 가능

## Hook의 규칙

---

1. 최상위에서만 Hook를 호출해야한다.
2. 오직 React 함수 내에서 Hook를 호출해야 한다.

## Reference

---

[https://velog.io/@niboo/React-Hooks-%EB%9E%80](https://velog.io/@niboo/React-Hooks-%EB%9E%80)  
[https://ko.reactjs.org/docs/hooks-intro.html](https://ko.reactjs.org/docs/hooks-intro.html)
