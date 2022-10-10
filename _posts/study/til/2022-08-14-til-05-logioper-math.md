---
layout: post
title: '[til] 논리연산자, math함수, ??연산자'
subtitle: '[til] 논리연산자, math함수, ??연산자'
category: study
tags: til
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## 논리연산자

---

1. AND

- 표현 : `&&`
- 구문 : `value1 && value2`
- 설명 : `value1`의 값이 **true**인 경우 `value2`를 반환, **false** 인 경우 value1을 반환

2. OR

- 표현 : `||`
- 구문 : `value1 || value2`
- 설명 : `value1`이 **true**이면 `value1` 반환, **false**인 경우 value2 반환

3. NOT

- 표현 : `!`
- 구문 : `!value`
- 설명 : `value`가 **true**인 경우 **false** 반환, **false**인 경우 **true**반환

4. 추가 설명

- Boolean을 제외하고 문자나 숫자 같은 경우 값이 들어 있으면 **true**를 반환 한다.

## Math.ceil() / Math.floor() / Math.round()

---

1. Math.ceil()

- 정의 : 소수점 이하의 값이 존재 할 때 값을 올리는 함수
- 예시

```
let val = 123.6;
console.log(Math.ceil(val)); // 124
```

2. Math.floor()

- 정의 : 소수점 이하의 값이 존재 할 때 값을 버리는 함수
- 예시

```
let val = 123.6;
console.log(Math.floor(val)); // 123
```

3. Math.round()

- 정의 : 소수점 이하의 값에 따라서 올리거나 버리는 함수
- 예시

```
let val = 123.6;
let val = 123.5;
console.log(Math.round(val)); // 124
console.log(Math.round(val)); // 123
```

## ?? 연산자

---

`??` 연산자는 좌항이 `undefined`와 `null`인 경우 우항을 선택하고, 그 외의 경우는 항상 좌항을 선택한다.

```
const val1 = null ?? true;
const val2 = undefined ?? true;
const val3 = false ?? true;
console.log(val1); // true
console.log(val2); // true
console.log(val3); // false
```

## Reference

---

- [논리연산자](https://html6.tistory.com/424)
- [Math.ceil()/Math.floor()/Math.round()](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=diceworld&logNo=220174711730)
- [??연산자](https://www.daleseo.com/js-nullish-coalescing/)
