---
layout: post
title: '[프로그래머스 / lv0] 문자열로 변환'
subtitle: '[프로그래머스 / lv0] 문자열로 변환'
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

정수 `n`이 주어질 때, `n`을 문자열로 변환하여 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `n` ≤ 10000

### 입출력 예

---

| n    | result |
| ---- | ------ |
| 123  | "123"  |
| 2573 | "2573" |

### 입출력 예 설명

---

입출력 예 #1

- 123을 문자열로 변환한 "123"을 return합니다.

입출력 예 #2

- 2573을 문자열로 변환한 "2573"을 return합니다.

```jsx
function solution(n) {
  return n.toString();
}
```

## 느낀 점

---

`toString()`을 이용해서 쉽게 해결하였다.
