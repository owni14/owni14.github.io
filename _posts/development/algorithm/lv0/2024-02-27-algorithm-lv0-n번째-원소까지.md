---
layout: post
title: '[프로그래머스 / lv0] n번째 원소까지'
subtitle: '[프로그래머스 / lv0] n번째 원소까지'
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

정수 리스트 `num_list`와 정수 `n`이 주어질 때, `num_list`의 첫 번째 원소부터 `n` 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

### 제한사항

- 2 ≤ `num_list`의 길이 ≤ 30
- 1 ≤ `num_list`의 원소 ≤ 9
- 1 ≤ `n` ≤ `num_list`의 길이 \_\_\_

### 입출력 예

---

| num_list        | n   | result    |
| --------------- | --- | --------- |
| [2, 1, 6]       | 1   | [2]       |
| [5, 2, 1, 7, 5] | 3   | [5, 2, 1] |

### 입출력 예 설명

---

입출력 예 #1

- [2, 1, 6]의 첫 번째 원소부터 첫 번째 원소까지의 모든 원소는 [2]입니다.

입출력 예 #2

- [5, 2, 1, 7, 5]의 첫 번째 원소부터 세 번째 원소까지의 모든 원소는 [5, 2, 1]입니다.

### 풀이

---

```jsx
function solution(num_list, n) {
  const answer = num_list.reduce((acc, cur, idx) => {
    if (idx < n) {
      return [...acc, cur];
    }
    return acc;
  }, []);
  return answer;
}
```

### 느낀점

---

다른 사람의 풀이를 보니 slice를 사용하던데 나는 reduce를 사용해서 너무 빙빙 돌아서 푼게 아닌가라는 생각이 든다.
