---
layout: post
title: "[프로그래머스 / lv0] 세균 증식"
subtitle: "[프로그래머스 / lv0] 세균 증식"
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

어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 `n`과 경과한 시간 `t`가 매개변수로 주어질 때 `t`시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `n` ≤ 10
- 1 ≤ `t` ≤ 15

### 입출력 예

---

| n   | t   | result  |
| --- | --- | ------- |
| 2   | 10  | 2048    |
| 7   | 15  | 229,376 |

### 입출력 예 설명

---

입출력 예 #1

- 처음엔 2마리, 1시간 후엔 4마리, 2시간 후엔 8마리, ..., 10시간 후엔 2048마리가 됩니다. 따라서 2048을 return합니다.

입출력 예 #2

- 처음엔 7마리, 1시간 후엔 14마리, 2시간 후엔 28마리, ..., 15시간 후엔 229376마리가 됩니다. 따라서 229,376을 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 4m 20s
- 풀이

```jsx
function solution(n, t) {
  let answer = n;
  for (let i = 0; i < t; i++) {
    answer *= 2;
  }
  return answer;
}
```

## 느낀 점

---

문제를 본 순간 for문을 이용해서 특정 조건을 반복하면 쉽게 문제를 풀 수 있겠다라고 생각했고 나의 방식대로 문제를 푸니 생각보다 수월하게 문제가 풀렸다.
