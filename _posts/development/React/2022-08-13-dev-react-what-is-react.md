---
layout: post
title: '[Dev] 리액트란?'
subtitle: '[Dev] 리액트란?'
category: dev
tags: react
image: 
    path: /assets/img/development/2022-08-13-dev-react-what-is-react/react.png
---

* this ordered seed list will be replaced by the toc 
{:toc}

## React란?
---
리액트란 자바스크립트 라이브러리 중 하나이다.  
라이브러리라는 것은 많이 쓰이는 `특정 기능`들을 모아둔 곳이다.
React는 주로 프론트엔드 영역에서 많이 사용되며 인스타나 페이스북같은 곳도 리액트로 만들어 졌다.  
화면 이동을 자유롭게 가능하게 해주기 때문에 현재는 `vue.js`와 더불어 프론트엔드에서 많이 쓰는 것으로 알고 있다.

## Component
컴포넌트는 하나의 페이지의 일부 영역이라고 생각하면 되는데 예를들어 인스타그램을 인터넷으로 들어가게 되면 상단 탭바가 있고 밑에는 친구들의 스토리를 볼 수 있는 곳이 있는데 상단 탭바, 스토리 영역이 각각 하나의 컴포넌트가 되고 그러한 컴포넌트들이 모여서 전체 페이지를 구성하는 것이다.

여러 컴포넌트들은 다른 곳에서 재활용 할 수 있어 코드의 재사용성이 높다. 리액트 컴포넌트는 **클래스형 컴포넌트**와 **함수형 컴포넌트**가 있는데, 클래스형은 예전에 많이 사용하였지만 `HOOK`라는 것을 발표한 이후에는 함수형을 많이 쓴다. 함수형이 클래스보다 더 간결하고 메모리 자원을 덜 사용한다. 

  - 클래스형
    ~~~
    import React, { Component } from 'react';
    class App extends Component {
    render() {
    const name = '리액트';
    return <div>{name}</div>;
        }
    }
    export default App;
    ~~~

  - 함수형
    ~~~
    import React from 'react';
    function App() {
    const name = '리액트';
    return <div>{name}</div>;
    }
    export default App;
    ~~~

## Reference
  - [Class component and Function component](https://devowen.com/298)