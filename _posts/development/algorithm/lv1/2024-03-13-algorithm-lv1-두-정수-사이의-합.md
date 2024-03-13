---
layout: post
title: '[프로그래머스 / lv1] 두 정수 사이의 합'
subtitle: '[프로그래머스 / lv1] 두 정수 사이의 합'
category: dev
tag: algorithm
image:
  path: /assets/img/algorithm.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## 문제

### **문제 설명**

---

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.

예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

### 제한 조건

---

- a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
- a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
- a와 b의 대소관계는 정해져있지 않습니다.

### 입출력 예

---

| a   | b   | return |
| --- | --- | ------ |
| 3   | 5   | 12     |
| 3   | 3   | 3      |
| 5   | 3   | 12     |

### 풀이

---

```jsx
function solution(a, b) {
  let answer = 0;
  const initNum = a < b ? a : b;
  const endNum = a < b ? b : a;
  for (let i = initNum; i <= endNum; i++) {
    answer += i;
  }

  return answer;
}
```

### 느낀점

---

절대 값을 어떻게 처리하지 고민하다가 a b의 대소를 구분하여 두 상태에 각각 담아서 초기값과 종료값을 지정하였다. 처음에 절대값때문에 어떻게 풀지 살짝 고민했던거 같다.
