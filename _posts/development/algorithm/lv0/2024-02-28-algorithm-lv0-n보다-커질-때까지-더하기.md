---
layout: post
title: '[프로그래머스 / lv0] n보다 커질 때까지 더하기'
subtitle: '[프로그래머스 / lv0] n보다 커질 때까지 더하기'
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

정수 배열 `numbers`와 정수 `n`이 매개변수로 주어집니다. `numbers`의 원소를 앞에서부터 하나씩 더하다가 그 합이 `n`보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

### 제한사항

---

- 1 ≤ `numbers`의 길이 ≤ 100
- 1 ≤ `numbers`의 원소 ≤ 100
- 0 ≤ n < `numbers`의 모든 원소의 합

### 입출력 예

---

| numbers                  | n   | result |
| ------------------------ | --- | ------ |
| [34, 5, 71, 29, 100, 34] | 123 | 139    |
| [58, 44, 27, 10, 100]    | 139 | 239    |

### 입출력 예 설명

---

입출력 예 #1

- 예제 1번의 `numbers`를 문제 설명대로 더해가는 과정을 나타내면 다음의 표와 같습니다.
  | i | numbers[i] | sum |
  | --- | ---------- | --- |
  | | | 0 |
  | 0 | 34 | 34 |
  | 1 | 5 | 39 |
  | 2 | 71 | 110 |
  | 3 | 29 | 139 |
  29를 더한 뒤에 sum 값은 139이고 `n` 값인 123보다 크므로 139를 return 합니다.
- 예제 2번의 `numbers`의 마지막 원소 전까지의 원소를 sum에 더하면 139입니다. 139는 `n` 값인 139보다 크지 않고 마지막 원소인 100을 더하면 139보다 커지므로 239를 return 합니다.

### 풀이

---

```jsx
function solution(numbers, n) {
  const answer = numbers.reduce((acc, cur) => {
    if (acc <= n) {
      acc += cur;
    }
    return acc;
  }, 0);
  return answer;
}
```

### 느낀점

---

배열이 나오면 나는 reduce, map, filter를 주로 이용하는거 같다. 이번에는 reduce를 썼는데 막상 다 작성하고 나니까 생각보다 비효율적이라고 생각을 한다. 그 이유가 문제에서는 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return하라고 되어있는데 내가 작성한 reduc같은 경우 배열의 끝까지 다 돌기 때문에 비효율적인거 같다.
