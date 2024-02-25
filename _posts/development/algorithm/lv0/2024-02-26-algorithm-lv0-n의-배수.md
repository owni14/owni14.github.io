---
layout: post
title: '[프로그래머스 / lv0] n의 배수'
subtitle: '[프로그래머스 / lv0] n의 배수'
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

정수 `num`과 `n`이 매개 변수로 주어질 때, `num`이 `n`의 배수이면 1을 return `n`의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 2 ≤ `num` ≤ 100
- 2 ≤ `n` ≤ 9

### 입출력 예

---

| num | n   | result |
| --- | --- | ------ |
| 98  | 2   | 1      |
| 34  | 3   | 0      |

### 입출력 예 설명

---

입출력 예 #1

- 98은 2의 배수이므로 1을 return합니다.

입출력 예 #2

- 32는 3의 배수가 아니므로 0을 return합니다.

### 풀이

---

```jsx
function solution(num, n) {
  let answer = 0;
  if (num % n === 0) {
    answer = 1;
  } else {
    answer = 0;
  }
  return answer;
}
```

### 느낀점

---

오랜만에 다시 코딩테스트를 시작 했는데 정말 빨리 푼거 같다고 생각든다. 0단계부터 다시 차근차근 앞으로 나가야겠다.
