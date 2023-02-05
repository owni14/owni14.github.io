---
layout: post
title: '[Issues] map 함수 사용에 따른 에러'
subtitle: '[Issues] map 함수 사용에 따른 에러'
category: issues
image:
  path: /assets/img/issues.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## 에러 내용

---

![map_error_msg](/assets/img/development/2022/10/22/map_error_msg.png)
`Expected an assingment or function call and instead saw an expression`이라는 에러가 발생하여 에러가 나는 줄을 확인해 보았다. 도무지 봐도 어디가 잘못된건지 잘 모르겠어서 에러 내용을 검색해보니 내가 map 함수를 잘못 사용하고 있었다.

## 해결 방법

---

`.map(()={})`을 사용할 경우 `{}`안에 return값이 존재해야 값을 반환할 수 있다. 그렇지만 나는 그냥 중괄호만 사용하고 값을 반환하지 않았고, 그로인해 에러가 계속 발생하고 있었다.

문제를 해결하기 위해서는 중괄호안에 return을 넣어서 반환해주는 방법과 `.map(()=())`으로 그냥 `()`인 소괄호를 이용해서 반환해 주는 것이다. `()`을 사용할 경우 따로 return 을 적어줄 필요 없이 `()`안에 들어 있는 모든 값이 반환되는 형식이다. 그래서 나는 `()` 방법을 택하였다.

![using_map_function](/assets/img/development/2022/10/22/using_map_function.png)

## Reference

---

[https://helicopter55.tistory.com/2](https://helicopter55.tistory.com/2)
