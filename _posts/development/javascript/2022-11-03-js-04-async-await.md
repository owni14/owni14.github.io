---
layout: post
title: '[Js] async와 await'
subtitle: '[Js] async와 await'
category: dev
tags: js
published: true
image:
  path: /assets/img/js.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## async & await이란?

---

async와 await은 최근에 나온 자바스크립트 문법으로 기존 비동기 처리방식인 콜백 함수와 프로미스 단점을 보완해준다. 프로미스에 대한 개념이 잡혀있지 않으신 분들은 [promise에 대한 이해](https://owni14.github.io/dev/js-01-what-is-promise.html)를 한번 읽어보면 조금이나마 도움이 되지 않을까 싶다.

### async

`async`같은 경우 function앞에 위치

```
async function myFunc() {
  return value;
}
```

### await

`await`는 `async`안에서만 동작

```
let value = await promise;
```

## async & await 문법 및 예제

---

### 문법

`async`와 `await`의 기본 문법은 다음과 같다.

```
async function 함수명() {
  await 비동기처리메서드명();
}
```

function 앞에 `async`를 붙이게 되면 해당 함수는 **프로미스를 반환**하게 되고, 프로미스가 아닌 경우 **프로미스로 감싸서 반환**해준다. 자바스크립트는 `await`를 만나면 프로미스가 처리될 떄까지 기다린다. 프로미스가 처리될때 동안 엔진이 다른 일(다른 스크립트를 실행, 이벤트 처리등)을 할 수 있기 때문에, **CPU리소스가 낭비되지 않는다.**

일반적으로 `await`의 대상이 되는 비동기 처리 코드는 Axios등과 같은 프로미스를 반환하는 **API 호출 함수**이다. 비동기 처리 메서드가 **꼭 프로미스 객체를 반환**해야 `await`가 동작을 한다.

### 예제

```
function fetchInfo() {
  return new Promise((resolve, reject) => {
    let info = 'this is promise object';
    resolve(info);
  })
}

async function getInfo() {
  let resultInfo = await fetchInfo();
  console.log(resultInfo); // this is promise object
}
```

`fetchInfo()`함수는 프로미스 객체를 반환하는 함수이며 함수가 실행되면 프로미스가 이행(Resolved)상태가 된다. `getInfo()`함수는 `async`를 통해 프로미스를 반환하게 되는 함수로 만들어 주고 함수 안에 `await`를 이용하여 `fetchInfo()`를 통해 프로미스 객체를 받아온다. `await`를 사용하지 않았다면 콜백 함수나 `.then()`등을 이용해야 했다.

## async & await 예외 처리

---

async와 await는 예외처리는 **try catch**를 통해 처리해준다. 프로미스 에러처리에 사용되었던 `.catch()`처럼 async와 await에서도 사용해주면 된다.

```
async function getInfo() {
  try{
    let resultInfo = await fetchInfo();
    console.log(resultInfo); // this is promise object
  } catch (error) {
    console.log(error);
  }
}
```

## Reference

---

[https://ko.javascript.info/async-await](https://ko.javascript.info/async-await)  
[https://joshua1988.github.io/web-development/javascript/js-async-await/](https://joshua1988.github.io/web-development/javascript/js-async-await/)
