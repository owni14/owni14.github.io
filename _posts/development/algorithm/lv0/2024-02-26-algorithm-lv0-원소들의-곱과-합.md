---
layout: post
title: '[프로그래머스 / lv0] 원소들의 곱과 합'
subtitle: '[프로그래머스 / lv0] 원소들의 곱과 합'
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

정수가 담긴 리스트 `num_list`가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 2 ≤ `num_list`의 길이 ≤ 10
- 1 ≤ `num_list`의 원소 ≤ 9

### 입출력 예

---

| num_list        | result |
| --------------- | ------ |
| [3, 4, 5, 2, 1] | 1      |
| [5, 7, 8, 3]    | 0      |

### 입출력 예 설명

---

- 모든 원소의 곱은 840, 합의 제곱은 529이므로 0을 return합니다.

입출력 예 #1

- 모든 원소의 곱은 120, 합의 제곱은 225이므로 1을 return합니다.

입출력 예 #2

### 풀이

---

```jsx
function solution(num_list) {
  const multiply = num_list.reduce((acc, cur) => acc * cur, 1);
  const total = num_list.reduce((acc, cur) => acc + cur, 0);

  return multiply < Math.pow(total, 2) ? 1 : 0;
}
```

### 느낀점

---

reduce를 하나로만 써서 한번에 처리하려고 했는데 그게 되지 않았고 내가 너무 생각이 짧았던거 같다. 그래서 방법을 다시 바꿔서 reduce를 두개로 나눠서 각각 변수를 선언한 다음 값을 비교해서 return했다.
