---
layout: post
title: "[프로그래머스 / lv0] 아이스 아메리카노"
subtitle: "[프로그래머스 / lv0] 아이스 아메리카노"
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

머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 `money`가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

---

- 0 < `money` ≤ 1,000,000

### 입출력 예

---

| money  | result    |
| ------ | --------- |
| 5,500  | [1, 0]    |
| 15,000 | [2, 4000] |

### 입출력 예 설명

---

입출력 예 #1

- 5,500원은 아이스 아메리카노 한 잔을 살 수 있고 잔돈은 0원입니다.

입출력 예 #2

- 15,000원은 아이스 아메리카노 두 잔을 살 수 있고 잔돈은 4,000원입니다.

## 풀이 & 걸린시간

---

- 걸린시간: 3m 39s
- 풀이

```jsx
function solution(money) {
  let result = [];
  const count = Math.floor(money / 5500);
  const change = money - count * 5500;
  result.push(count);
  result.push(change);
  return result;
}
```

## 느낀 점

---

5500을 매개변수로 들어온 money로 나눠서 잔 수를 구하자고 생각했고 잔수를 구하니 잔돈을 구할 수 있었다. 이번 문제는 비교적 쉽게 느껴졌다
