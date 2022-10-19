---
layout: post
title: '[Js] promise에 대한 이해'
subtitle: '[Js] promise에 대한 이해'
category: dev
tags: js
published: true
image:
  path: /assets/img/js.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## promise란 무엇인가?

---

> Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.  
> 출처 : MDN

프로미스 자바스크립트 비동기처리시 사용되는 객체이다. 동기처리의 경우 실행 순서가 정해져있어 앞의 코드가 종료된 후 다음코드를 실행하는 방법으로 이루어지지만, **비동기처리**의 경우 코드 순서를 두지 않고 특정 코드를 먼저 수행하는 것을 의미한다.

## promise가 필요한 이유

---

프로미스는 미래의 어떤 시점에 대해서 결과를 제공하겠다는 **약속(프로미스)**을 반환한다. 이러한 점이 필요한 이유는 보통 서버에서 데이터를 받아오게 될 경우 데이터 전체가 다 받아오지도 않았는데, 마치 데이터가 다 받아온 것 마냥 화면에 출력 할 수도 있는 상황이 있을 수 있다. 이때 데이터를 표시하려고 하면 오류를 출력하거나 빈화면이 출력되는데 이러한 문제점을 해결하기 위해서 프로미스가 필요하다.

## promise의 3가지 상태

---

프로미스는 3가지 상태를 가지고 있는데 각 상태는 처리 과정을 의미하는데, `new Promise()`로 프로미스를 생성하고 종료할 때까지 다음과 같은 3가지 상태를 가지고 있다. promise는 콜백 함수 인자로 **resolve**와 **reject**를 사용할 수 있다.

- **대기(pending)** : 이행하지도, 거부하지도 않은 초기 상태

`new Promise()`메서드 호출 시 대기상태가 된다.

```
new Promise(function(res, rej) {
  // ...
})
```

- **이행(fulfilled)** : 연산이 성공적으로 완료된 상태

res안에 value값을 넣어줌에 따라 성공적으로 **이행된 상태**가 된다. 그 후 `test`라는 함수를 통해 반환 된 값을 `.then()`을 이용해 처리 결과를 받을 수 있다.

```
function fulfilledTest() {
  return new Promise(function(res, rej) {
    const value = 10;
    res(value);
  });
}

fulfilledTest().then(function(resolvedData) {
  console.log(resolvedData); // 10
})
```

- **거부(rejected)** : 연산이 실패한 상태

rej로 에러 값을 리턴해주면 Rejected한 상태가 되며, `catch()`메서드를 통해 실패 처리의 값을 받을 수 있다.

```
function rejectedTest() {
  return new Promise(function(res, rej) {
    rej(new Error("Request is failed"));
  });
}

rejectedTest.then().catch(function(err) {
  console.log(err); // Request is failed
})

```

![promise_image](/assets/img/development/2022/10/16/promise_image.png)  
출처:MDN

## Reference

---

[https://joshua1988.github.io/web-development/javascript/promise-for-beginners/](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
