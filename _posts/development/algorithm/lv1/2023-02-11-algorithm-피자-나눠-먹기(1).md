---
layout: post
title: '[프로그래머스 / lv0] 피자 나눠 먹기(1)'
subtitle: '[프로그래머스 / lv0] 피자 나눠 먹기(1)'
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

머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 `n`이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

### 제한사항

---

- 1 ≤ `n` ≤ 100

### 입출력 예

---

### 입출력 예 설명

---

입출력 예 #1

- 7명이 최소 한 조각씩 먹기 위해서 최소 1판이 필요합니다.

입출력 예 #2

- 1명은 최소 한 조각을 먹기 위해 1판이 필요합니다.

입출력 예 #3

- 15명이 최소 한 조각씩 먹기 위해서 최소 3판이 필요합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 19m 04s
- 풀이

```jsx
function solution(n) {
  let pizzaCount = 1;
  for (let i = 1; i < n; i++) {
    if (7 * i < n) pizzaCount += 1;
  }
  return pizzaCount;
}
```

## 느낀 점

---

내가 내 풀이를 적었지만 되게 난잡하고 보기 힘든 코드인거 같다는 생각이 든다. 문제를 읽고 7의 배수를 활용하면 어떻게 되지 않을까 생각해서 계속 for문을 쓰려고 했는데 막상 잘 되지 않아서 시간이 오래 걸렸었다. for문도 for, for in, for of등 다양한 for문이 존재하니 추후 블로그에 포스팅해야겠다.

문제를 풀고난 후 다른 사람의 풀이를 봤는데 제일 허무 했는게 다른 사람은 그냥 한 줄로 작성하고 끝이었다. 그것도 Math.ceil을 이용하였는데 나는 그 생각을 전혀 하지 못했다.
