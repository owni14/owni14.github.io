---
layout: post
title: "[프로그래머스 / lv0] 팩토리얼"
subtitle: "[프로그래머스 / lv0] 팩토리얼"
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

`i`팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 _ 4 _ 3 _ 2 _ 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

- i! ≤ n

### 제한사항

---

- 0 < `n` ≤ 3,628,800

### 입출력 예

---

| n       | result |
| ------- | ------ |
| 3628800 | 10     |
| 7       | 3      |

### 입출력 예 설명

---

입출력 예 #1

- 10! = 3,628,800입니다. `n`이 3628800이므로 최대 팩토리얼인 10을 return 합니다.

입출력 예 #2

- 3! = 6, 4! = 24입니다. `n`이 7이므로, 7 이하의 최대 팩토리얼인 3을 return 합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 11m 39s
- 풀이

```jsx
function solution(n) {
  let factorial = 1;
  let result = 0;

  for (let i = 1; i <= 11; i++) {
    factorial *= i;
    if (factorial > n) {
      result = i - 1;
      break;
    }
  }

  return result;
}
```

## 느낀 점

---

while문을 쓸까 고민했지만 제한사항을 보고 그냥 for문을 이용해서 문제를 풀자고 생각하여 문제에 접근하였다. for문 안에서 팩토리얼을 해주었고, 만약 해당 팩토리얼이 입력된 n보다 클 경우에는 반환 값이 result에 i를 하나 빼주었다. 빼준 이유는 n 값이 넘어가기 전의 값이 팩토리얼의 최대 값이기 때문이다.
