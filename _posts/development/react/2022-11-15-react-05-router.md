---
layout: post
title: '[React] React Router 사용법'
subtitle: '[React] React Router 사용법'
category: dev
tags: react
published: true
image:
  path: /assets/img/react.png
comments: true
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## React Router란?

---

React Router에 대해 알기 전에 먼저 라우팅이란 개념부터 알아야 할꺼 같다. 라우팅이란? **사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것**이라고 생각할 수 있다. 그래서 리액트 라우터를 사용해서 새로운 페이지를 렌더링해서 불러올 수 있다.

## React Router 사용법

---

### 설치

```
npm install react-router-dom
```

### 프로젝트에 라우터 적용

- `<BrowserRouter>`라는 컴포넌트로 감싸서 라우터를 적용시킨다. BrowserRouter는 HTML5를 지원하는 **브라우저의 주소를 감지** 한다.
- 프로젝트의 최상단인 index.js에서 사용한다.

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### Route: 특정 주소에 컴포넌트 연결

- <Routes>
  - 여러 Route 감싸서 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링 시켜주는 역할

- <Route>
  - path: 경로
  - element: 컴포넌트
  - 여러 라우팅을 매칭하고 싶은 경우 URL 뒤에 * 을 사용하면 된다.
  - exact는 path가 정확하게 일치하는 경우에만 동작하도록 하는 prop

```
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/MainPage/Main';
import Login from './views/LoginPage/Login';
import Register from './views/RegisterPage/Register';
import Header from './views/Header/Header';
import Test from './views/Test/Test';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact={true} path='/' element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
```

### Link를 이용하여 동작

- 웹 페이지에서 주로 링크를 보여줄 경우 a태그 이용 -> a 태그 이용시 페이지를 새롭게 불러옴
- Link 사용시 History API를 통해 브라우저 주소의 경로만 바꿔주는 기능

```
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
  return (
    <div className={classes.div}>
      <span className={classes.span}>
        <Link to='/'>main</Link>
      </span>
      <span className={classes.span}>
        <Link to='/login'>login</Link>
      </span>
      <span className={classes.span}>
        <Link to='/register'>register</Link>
      </span>
      <span className={classes.span}>
        <Link to='/test'>test</Link>
      </span>
    </div>
  );
}

export default Header;

```

main페이지와 login, register페이지를 이동하더라도 화면 상단에 링크를 남겨두기 위해 Header컴포넌트를 따로 만들었다.

![main_page](/assets/img/development/2022/11/15/main_page.png)  
![login_page](/assets/img/development/2022/11/15/login_page.png)

## 파라미터와 쿼리

---

- 파라미터 : /product/meal
  - 특정 id나 이름을 가지고 조회를 할 때 사용
- 쿼리 : /about?details=true
  - 어떤 키워드를 검색하거나, 요청을 할 때 필요한 옵션을 전달 할 때 사용

## useReactRouter Hook

---

- useHistory()
  - 스택에 현재까지 이동한 url 경로들이 담겨있는 형태로 주소를 임의로 변경하거나 되돌아갈 수 있도록 해줌
  - action: 최근에 수행된 action(push, pop,. replace)
    - push: 새로운 URL이 history에 추가, 새로운 주소로 이동할 때
    - pop: 새로운 URL이 history에 제거, 뒤로 가기
    - replace: 최근 경로를 history 스택에서 replace해서 페이지 이동
  - block(propt): history 스택의 push와 pop동작을 제어
  - go(n): history 스택의 포인터를 n으로 이동
  - goBack(): 이전 페이지로 이동
  - goForward(): 앞 페이지로 이동
  - length: 전체 history 스택의 길이
  - location: 현재 페이지의 정보
  - push(path, state): 새 경로를 history 스택에 push해서 페이지 이동
  - replace(path, state): 최근 경로를 history 스택에서 replace해서 페이지 이동
- useRouteMatch()
  - Route path와 URL의 매칭에 대한 정보를 가지고 있음
  - isEact: true이면 경로가 완전히 정확할 경우에만 수행
  - params: 경로에 전달된 파라미터 값을 가진 객체
  - path: Route에 정의된 경로
  - url: 클라이언트로부터 실제 요청 받은 경로
- useLocation()
  - 현재 페이지에 대한 정보를 가짐
  - hash: 현재 페이지의 hash값
  - pathname: 현재 페이지의 경로
  - search: 현재 페이지의 query string
- useParams()
  - 경로에 전달된 파라미터 값을 가진 객체

## Reference

---

[https://goddaehee.tistory.com/305](https://goddaehee.tistory.com/305)  
[https://velopert.com/3417](https://velopert.com/3417)  
[https://velog.io/@younoah/react-router-dom](https://velog.io/@younoah/react-router-dom)
