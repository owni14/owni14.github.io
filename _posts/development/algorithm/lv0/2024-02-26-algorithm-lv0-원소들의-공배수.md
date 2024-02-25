---
layout: post
title: '[프로그래머스 / lv0] 공배수'
subtitle: '[프로그래머스 / lv0] 공배수'
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

정수 `number`와 `n`, `m`이 주어집니다. `number`가 `n`의 배수이면서 `m`의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 10 ≤ `number` ≤ 100
- 2 ≤ `n`, `m` < 10

### 입출력 예

---

| number | n   | m   | result |
| ------ | --- | --- | ------ |
| 60     | 2   | 3   | 1      |
| 55     | 10  | 5   | 0      |

### 입출력 예 설명

---

입출력 예 #1

- 60은 2의 배수이면서 3의 배수이기 때문에 1을 return합니다.

입출력 예 #2

- 55는 5의 배수이지만 10의 배수가 아니기 때문에 0을 return합니다.

### 풀이

---

```jsx
function solution(number, n, m) {
  const isMultiN = number % n === 0;
  const isMultiM = number % m === 0;

  return isMultiN && isMultiM ? 1 : 0;
}
```

### 느낀점

---

문제를 딱 처음보고 한줄로도 작성할 수 있겠다라고 생각했는데 그러면 가독성이 떨어질꺼 같아서 변수를 따로 분리해서 return할때 비교를 했다.
