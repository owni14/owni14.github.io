---
layout: post
title: '[프로그래머스 / lv0] n번째 원소부터'
subtitle: '[프로그래머스 / lv0] n번째 원소부터'
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

정수 리스트 `num_list`와 정수 `n`이 주어질 때, `n` 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 2 ≤ `num_list`의 길이 ≤ 30
- 1 ≤ `num_list`의 원소 ≤ 9
- 1 ≤ `n` ≤ `num_list`의 길이

### 입출력 예

---

| num_list        | n   | result       |
| --------------- | --- | ------------ |
| [2, 1, 6]       | 3   | [6]          |
| [5, 2, 1, 7, 5] | 2   | [2, 1, 7, 5] |

### 입출력 예 설명

---

입출력 예 #1

- [2, 1, 6]의 세 번째 원소부터 마지막 원소까지의 모든 원소는 [6]입니다.

입출력 예 #2

- [5, 2, 1, 7, 5]의 두 번째 원소부터 마지막 원소까지의 모든 원소는 [2, 1, 7, 5]입니다.

### 풀이

---

```jsx
function solution(num_list, n) {
  const answer = num_list.filter((_, idx) => idx + 2 > n);
  return answer;
}
```

### 느낀점

---

filter를 이용하면 깔끔하겠구나 라고 생각했었는데 다른사람의 풀이를 보니 slice를 이용해서 간단하게 풀어서 프로그래밍에서 정말 많은 풀이방법이 존재한다는것을 다시 한번 느끼게 되었다.
