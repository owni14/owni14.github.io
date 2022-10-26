---
layout: post
title: '[React] 리액트의 핵심 useEffect'
subtitle: '[React] 리액트의 핵심 useEffect'
category: dev
tags: react
image:
  path: /assets/img/react.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## useEffect란?

---

useEffect란 컴포넌트가 렌더링 될 때 **특정 작업을 실행**할 수 있도록 하는 Hook이다. useEffect를 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있다. side effect란 함수가 실행되면서 함수 외부에 존재하는 값이나 상태를 변경시키는 등의 행위를 말한다.

useEffect는 컴포넌트가 mount 됐을 때, unmount 됐을 때, update 됐을 때 특정 작업을 처리할 수 있다.

![react_lifecycle](/assets/img/development/2022/10/26/react_lifecycle.png)

## useEffect 사용법

---

```
useEffect(function, [deps])
```

- **function** : 수행하고자 하는 작업
- **deps** : 배열 형태로 이루어져있고, 배열 안은 검사하고자 하는 값 또는 빈 배열

useEffect를 사용하기 위해서는 `import React, { useEffect } from 'react'`를 사용해주어야 한다.

### Component가 mount 될 때

```
useEffect(() => {
  console.log('컴포넌트가 마운드 될 때만 실행')
}, []);

useEffect(() => {
  console.log('컴포넌트가 렌더링 될 때 마다 실행');
});
```

deps에 **빈 배열**로 넣어주게 되면 컴포넌트가 **마운트 됐을 경우에만 실행**된다. 즉 한번만 실행되는 함수이다. 만약 deps에 **아무것도 넣지 않을 경우**에는 컴포넌트가 **렌더링 될 때 마다 실행**된다.

### Component가 update 될 때

```
useEffect(() => {
  console.log('업데이트 될 때 실행된다');
}, [value])
```

deps안에 value를 적어주게 될 경우 그 변수의 값이 변할 때 실행되는 useEffect이다. 즉, **특정값이 업데이트** 될 때 실행하고 싶을 때는 deps위치에 배열 안에 **검사하고 싶은 값**을 넣어주면 된다.

### Component가 unmount 될 때 및 update 직전

```
useEffect(() => {
  console.log('effect');
  return () => {
    console.log('cleanup');
  }
}, [])
```

**cleanup 함수**는 useEffect 안에서 **return 할때 실행**되는 것이다. return 뒤에 나오는 함수를 의미하며 useEffect에 대한 뒷정리 함수라고 한다. 컴포넌트가 unmount 될 때만 cleanup함수를 실행하고 싶다면 deps안에 빈 배열로 넣어주면 되고, 특정 값이 업데이트 되기 전에 실행하고 싶다면 deps안에 검사하고 싶은 값을 넣어주면 된다.

## Reference

---

[https://xiubindev.tistory.com/100](https://xiubindev.tistory.com/100)  
[https://goddaehee.tistory.com/308](https://goddaehee.tistory.com/308)  
[https://points.tistory.com/86](https://points.tistory.com/86)  
[https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
