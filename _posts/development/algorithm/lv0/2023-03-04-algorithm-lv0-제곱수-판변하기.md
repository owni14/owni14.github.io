---
layout: post
title: "[프로그래머스 / lv0] 제곱수 판변하기"
subtitle: "[프로그래머스 / lv0] 제곱수 판변하기"
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

어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 `n`이 매개변수로 주어질 때, `n`이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `n` ≤ 1,000,000

### 입출력 예

---

| n   | result |
| --- | ------ |
| 144 | 1      |
| 976 | 2      |

### 입출력 예 설명

---

입출력 예 #1

- 144는 12의 제곱이므로 제곱수입니다. 따라서 1을 return합니다.

입출력 예 #2

- 976은 제곱수가 아닙니다. 따라서 2를 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 9m 10s
- 풀이

```jsx
function solution(n) {
  let answer = 0;
  for (let i = 0; i <= 1000; i++) {
    if (i * i === n) {
      answer = 1;
      break;
    } else {
      answer = 2;
    }
  }
  return answer;
}
```

## 느낀 점

---

항상 나의 풀이보다 쉬운 풀이는 존재하기 마련이고 내가 모르는 것이 많이 부족하다는 것을 매번 느끼는거 같다. 나는 이번에 제한사항을 기준으로 반복문을 진행하였는데 채점 후 다른사람의 풀이를 보니 `Math.sqrt()` 라는 메소드와**`Number.isInteger()`** 를 사용하여 간단하게 문제를 풀이하였다**.** 이번에도 새로운 메소드를 알게 된 계기가 되었던거 같다.
