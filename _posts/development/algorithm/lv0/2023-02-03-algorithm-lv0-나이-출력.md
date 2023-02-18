---
layout: post
title: '[프로그래머스 / lv0] 나이 출력'
subtitle: '[프로그래머스 / lv0] 나이 출력'
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

머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 `age`가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.

### 제한사항

---

- 0 < age ≤ 120
- 나이는 태어난 연도에 1살이며 1년마다 1씩 증가합니다.

### 입출력 예

---

| age | result |
| --- | ------ |
| 40  | 1983   |
| 23  | 2000   |

### 입출력 예 설명

---

입출력 예 #1

- 2022년 기준 40살이므로 1983년생입니다.

입출력 예 #2

- 2022년 기준 23살이므로 2000년생입니다.

## 풀이 & 걸린시간

---

- 걸린시간 : 3m

- 풀이

```jsx
function solution(age) {
  const year = 2022;
  return year - age + 1;
}
```
