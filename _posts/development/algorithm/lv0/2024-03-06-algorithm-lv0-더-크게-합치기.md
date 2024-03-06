---
layout: post
title: '[프로그래머스 / lv0] 더 크게 합치기'
subtitle: '[프로그래머스 / lv0] 더 크게 합치기'
category: dev
tag: algorithm
image:
  path: /assets/img/algorithm.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## 문제

### **문제 설명**

---

연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

- 12 ⊕ 3 = 123
- 3 ⊕ 12 = 312

양의 정수 `a`와 `b`가 주어졌을 때, `a` ⊕ `b`와 `b` ⊕ `a` 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.

단, `a` ⊕ `b`와 `b` ⊕ `a`가 같다면 `a` ⊕ `b`를 return 합니다.

### 제한사항

---

- 1 ≤ `a`, `b` < 10,000

### 입출력 예

---

| a   | b   | result |
| --- | --- | ------ |
| 9   | 91  | 991    |
| 89  | 8   | 898    |

### 입출력 예 설명

---

입출력 예 #1

- `a` ⊕ `b` = 991 이고, `b` ⊕ `a` = 919 입니다. 둘 중 더 큰 값은 991 이므로 991을 return 합니다.

입출력 예 #2

- `a` ⊕ `b` = 898 이고, `b` ⊕ `a` = 889 입니다. 둘 중 더 큰 값은 898 이므로 898을 return 합니다.

### 풀이

---

```jsx
function solution(a, b) {
  const firstNum = Number(a.toString() + b.toString());
  const secondNum = Number(b.toString() + a.toString());
  return firstNum > secondNum ? firstNum : secondNum;
}
```

### 느낀점

---

다른 분들은 Math.max를 이용해서 푸셨는데 나는 정말 사용안하는 함수여서 잘 몰랐던거 같다. 이번 기회에 새로운 것에 대해 알게 되었고 좀 더 Math함수를 살펴봐야할꺼 같다.
