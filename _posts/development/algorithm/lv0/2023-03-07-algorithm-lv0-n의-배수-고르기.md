---
layout: post
title: "[프로그래머스 / lv0] n의 배수 고르기"
subtitle: "[프로그래머스 / lv0] n의 배수 고르기"
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

정수 `n`과 정수 배열 `numlist`가 매개변수로 주어질 때, `numlist`에서 `n`의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `n` ≤ 10,000
- 1 ≤ `numlist`의 크기 ≤ 100
- 1 ≤ `numlist`의 원소 ≤ 100,000

### 입출력 예

---

| n   | numlist                        | result             |
| --- | ------------------------------ | ------------------ |
| 3   | [4, 5, 6, 7, 8, 9, 10, 11, 12] | [6, 9, 12]         |
| 5   | [1, 9, 3, 10, 13, 5]           | [10, 5]            |
| 12  | [2, 100, 120, 600, 12, 12]     | [120, 600, 12, 12] |

### 입출력 예 설명

---

입출력 예 #1

- `numlist`에서 3의 배수만을 남긴 [6, 9, 12]를 return합니다.

입출력 예 #2

- `numlist`에서 5의 배수만을 남긴 [10, 5]를 return합니다.

입출력 예 #3

- `numlist`에서 12의 배수만을 남긴 [120, 600, 12, 12]를 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 1m 40s
- 풀이

```jsx
function solution(n, numlist) {
  const answer = numlist.filter((num) => num % n === 0);
  return answer;
}
```

## 느낀 점

---

문제를 보자마자 filter를 이용해 조건에 맞는 것만 return해주면 될꺼 같다고 생각했다. 이번 문제를 좀 쉽게 느껴졌다.
