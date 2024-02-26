---
layout: post
title: '[프로그래머스 / lv0] flag에 따라 다른 값 반환하기'
subtitle: '[프로그래머스 / lv0] flag에 따라 다른 값 반환하기'
category: dev
tag: algorithm
image:
  path: /assets/img/algorithm.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## 문제

---

### **문제 설명**

---

두 정수 `a`, `b`와 boolean 변수 `flag`가 매개변수로 주어질 때, `flag`가 true면 `a` + `b`를 false면 `a` - `b`를 return 하는 solution 함수를 작성해 주세요.

### 제한사항

---

- 1,000 ≤ `a`, `b` ≤ 1,000

### 입출력 예

---

| a   | b   | flag  | result |
| --- | --- | ----- | ------ |
| -4  | 7   | true  | 3      |
| -4  | 7   | false | -11    |

### 입출력 예

---

입출력 예 #1

- 예제 1번에서 `flag`가 true이므로 `a` + `b` = (-4) + 7 = 3을 return 합니다.

입출력 예 #2

- 예제 2번에서 `flag`가 false이므로 `a` - `b` = (-4) - 7 = -11을 return 합니다.

### 풀이

---

```jsx
function solution(a, b, flag) {
  const sum = a + b;
  const sub = a - b;
  return flag ? sum : sub;
}
```

### 느낀점

---

바로 삼항연산자를쓰고 계산식을 변수 선언안하고 사용할 수 있었지만 나는 그래도 변수로 빼서 하는게 가독성이 좋다고 생각해서 따로 빼서 삼항연산자를 썼다.
