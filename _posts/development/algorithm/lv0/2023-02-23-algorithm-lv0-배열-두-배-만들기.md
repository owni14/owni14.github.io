---
layout: post
title: "[프로그래머스 / lv0] 배열 두 배 만들기"
subtitle: "[프로그래머스 / lv0] 배열 두 배 만들기"
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

정수 배열 `numbers`가 매개변수로 주어집니다. `numbers`의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 10,000 ≤ `numbers`의 원소 ≤ 10,000
- 1 ≤ `numbers`의 길이 ≤ 1,000

### 입출력 예

---

| numbers                   | result                     |
| ------------------------- | -------------------------- |
| [1, 2, 3, 4, 5]           | [2, 4, 6, 8, 10]           |
| [1, 2, 100, -99, 1, 2, 3] | [2, 4, 200, -198, 2, 4, 6] |

### 입출력 예 설명

---

입출력 예 #1

- [1, 2, 3, 4, 5]의 각 원소에 두배를 한 배열 [2, 4, 6, 8, 10]을 return합니다.

입출력 예 #2

- [1, 2, 100, -99, 1, 2, 3]의 각 원소에 두배를 한 배열 [2, 4, 200, -198, 2, 4, 6]을 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 34s
- 풀이

```jsx
function solution(numbers) {
  const answer = numbers.map((v, i) => v * 2);
  return answer;
}
```

## 느낀 점

---

문제를 보자 마자 든 생각이 map을 사용하면 될거 같은 생각이 들었고 각 인덱스를 돌면서 x2를 해주니 정상적으로 통과가 되었다. 이러한 유형은 익숙하다고 생각이 들었다.
