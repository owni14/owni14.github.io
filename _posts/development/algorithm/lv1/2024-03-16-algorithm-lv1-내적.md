---
layout: post
title: '[프로그래머스 / lv1] 내적'
subtitle: '[프로그래머스 / lv1] 내적'
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

길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 [내적](https://en.wikipedia.org/wiki/Dot_product)을 return 하도록 solution 함수를 완성해주세요.

이때, a와 b의 내적은 `a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]` 입니다. (n은 a, b의 길이)

### 제한사항

---

- a, b의 길이는 1 이상 1,000 이하입니다.
- a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

### 입출력 예

---

| a         | b           | result |
| --------- | ----------- | ------ |
| [1,2,3,4] | [-3,-1,0,2] | 3      |
| [-1,0,1]  | [1,0,-1]    | -2     |

### 입출력 예 설명

---

입출력 예 #1

- a와 b의 내적은 `1*(-3) + 2*(-1) + 3*0 + 4*2 = 3` 입니다.

입출력 예 #2

- a와 b의 내적은 `(-1)*1 + 0*0 + 1*(-1) = -2` 입니다.

### 풀이

---

```jsx
function solution(a, b) {
  const answer = a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
  return answer;
}
```

### 느낀점

---

처음에 내적을 보고 무슨 뜻인지 이해가 되지 않아 링크가 걸려있어 들어가보니 내적은 집합 간 원소의 곱의 합으로 값을 출력하는 것이라고 나와있었다. 그래서 다시 문제로 돌아와 보니 같은 인덱스의 곱의 합을 추출하면 되겠다고 생각을 했고 이 문제를 풀기 위해서는 reduce를 이용하면 빠르게 풀겠다고 생각하였다.
