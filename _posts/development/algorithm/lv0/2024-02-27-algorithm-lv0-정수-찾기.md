---
layout: post
title: '[프로그래머스 / lv0] 정수 찾기'
subtitle: '[프로그래머스 / lv0] 정수 찾기'
category: dev
tag: algorithm
image:
  path: /assets/img/algorithm.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

---

### **문제 설명**

---

정수 리스트 `num_list`와 찾으려는 정수 `n`이 주어질 때, `num_list`안에 `n`이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 3 ≤ `num_list`의 길이 ≤ 100
- 1 ≤ `num_list`의 원소 ≤ 100
- 1 ≤ `n` ≤ 100

### 입출력 예

---

| num_list            | n   | result |
| ------------------- | --- | ------ |
| [1, 2, 3, 4, 5]     | 3   | 1      |
| [15, 98, 23, 2, 15] | 20  | 0      |

### 입출력 예 설명

---

입출력 예 #1

- [1, 2, 3, 4, 5] 안에 3이 있으므로 1을 return합니다.

입출력 예 #2

- [15, 98, 23, 2, 15] 안에 20이 없으므로 0을 return합니다.

### 풀이

---

```jsx
function solution(num_list, n) {
  const isInclude = num_list.includes(n);
  return isInclude ? 1 : 0;
}
```

### 느낀점

---

includes함수를 사용하면 쉽게 찾을 수 있을거라고 생각했다.
