---
layout: post
title: '[프로그래머스 / lv0] 두 수의 합'
subtitle: '[프로그래머스 / lv0] 두 수의 합'
category: dev
tag: algorithm
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## 문제

---

### **문제 설명**

---

정수 `num1`과 `num2`가 주어질 때, `num1`과 `num2`의 합을 return하도록 soltuion 함수를 완성해주세요.

### 제한사항

---

- 50,000 ≤ `num1` ≤ 50,000
- 50,000 ≤ `num2` ≤ 50,000

### **입출력 예**

---

| num1 | num2 | result |
| ---- | ---- | ------ |
| 2    | 3    | 5      |
| 100  | 2    | 102    |

### 입출력 예 설명

---

입출력 예 #1

- `num1`이 2이고 `num2`가 3이므로 2 + 3 = 5를 return합니다.

입출력 예 #2

- `num1`이 100이고 `num2`가 2이므로 100 + 2 = 102를 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간 : 23s

- 풀이

```jsx
function solution(num1, num2) {
  return num1 + num2;
}
```
