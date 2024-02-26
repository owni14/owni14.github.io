---
layout: post
title: '[프로그래머스 / lv0] 두 수의 연산값 비교하기'
subtitle: '[프로그래머스 / lv0] 두 수의 연산값 비교하기'
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

연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

- 12 ⊕ 3 = 123
- 3 ⊕ 12 = 312

양의 정수 `a`와 `b`가 주어졌을 때, `a` ⊕ `b`와 `2 * a * b` 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.

단, `a` ⊕ `b`와 `2 * a * b`가 같으면 `a` ⊕ `b`를 return 합니다.

### 제한사항

---

- 1 ≤ `a`, `b` < 10,000

### 입출력 예

---

| a   | b   | result |
| --- | --- | ------ |
| 2   | 91  | 364    |
| 91  | 2   | 912    |

### 입출력 예 설명

---

입출력 예 #1

- `a` ⊕ `b` = 291 이고, `2 * a * b` = 364 입니다. 둘 중 더 큰 값은 364 이므로 364를 return 합니다.

입출력 예 #2

- `a` ⊕ `b` = 912 이고, `2 * a * b` = 364 입니다. 둘 중 더 큰 값은 912 이므로 912를 return 합니다.

---

※ 2023년 04월 27일 입출력 예 설명이 수정되었습니다.

### 풀이

---

```jsx
function solution(a, b) {
  const firstCal = Number(a.toString() + b.toString());
  const secondCal = 2 * a * b;
  const answer =
    firstCal === secondCal
      ? firstCal
      : firstCal > secondCal
      ? firstCal
      : secondCal;
  return answer;
}
```

### 느낀점

---

정말 코딩을 쉽게 하는사람이 많구나라고 느꼈다. 나는 answer변수에 항등연산자를 활용해 같으면 첫번째 값을 return하라고 적어놨는데 다른 사람의 풀이를 보고 곰곰이 생각해보니 두 값이 같으면 secondCal을 return해도 된다는 생각을 했고 `firstCal > secondCal ? firstCal : secondCal` 이런 삼항연산자로 작성해도 됐겠다라는 생각을했다.
