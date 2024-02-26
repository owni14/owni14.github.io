---
layout: post
title: '[프로그래머스 / lv0] 문자열을 정수로 변환하기'
subtitle: '[프로그래머스 / lv0] 문자열을 정수로 변환하기'
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

숫자로만 이루어진 문자열 `n_str`이 주어질 때, `n_str`을 정수로 변환하여 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `n_str` ≤ 5
- `n_str`은 0부터 9까지의 정수 문자로만 이루어져 있습니다.

### 입출력 예

---

| n_str  | result |
| ------ | ------ |
| "10"   | 10     |
| "8542" | 8542   |

### 입출력 예 설명

---

입출력 예 #1

- "10"을 정수로 바꾸면 10입니다.

입출력 예 #2

- "8542"를 정수로 바꾸면 8542입니다.

### 풀이

---

```jsx
function solution(n_str) {
  return Number(n_str);
}
```

### 느낀점

---

문제가 너무 쉬워서 금방풀었지만 나는 문자열을 정수로 바꾸는 Number와 parseInt 차이점을 궁금해서 찾아봤다. 이번에도 내가 완벽한 차이점을 잘 모르고 사용해왔던 것을 알게되었고, 해당 내용은 정리 후 포스팅하려고 한다.
