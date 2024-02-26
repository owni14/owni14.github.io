---
layout: post
title: '[프로그래머스 / lv0] 정수 구분'
subtitle: '[프로그래머스 / lv0] 정수 구분'
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

실수 `flo`가 매개 변수로 주어질 때, `flo`의 정수 부분을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 0 ≤ `flo` ≤ 100

### 입출력 예

---

| flo   | result |
| ----- | ------ |
| 1.42  | 1      |
| 69.32 | 69     |

### 입출력 예 설명

---

입출력 예 #1

- 1.42의 정수 부분은 1입니다.

입출력 예 #2

- 69.32의 정수 부분은 69입니다.

### 풀이

---

```jsx
function solution(flo) {
  return Math.floor(flo);
}
```

### 느낀점

---

문제를 정수 부분만 추출해내는거니까 Math.floor를 써야겠다는 생각을 했다. 저번에 공부하면서 Math.floor, ceil, round를 한번 정리해놨기 때문에 좀 더 쉽게 풀 수 있지 않았나라는 생각을 한다.
