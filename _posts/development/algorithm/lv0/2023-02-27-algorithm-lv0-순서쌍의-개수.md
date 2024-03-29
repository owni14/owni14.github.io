---
layout: post
title: "[프로그래머스 / lv0] 순서쌍의 개수"
subtitle: "[프로그래머스 / lv0] 순서쌍의 개수"
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

순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 `n`이 매개변수로 주어질 때 두 숫자의 곱이 `n`인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ n ≤ 1,000,000

### 입출력 예

---

### 입출력 예 설명

---

입출력 예 #1

- `n`이 20 이므로 곱이 20인 순서쌍은 (1, 20), (2, 10), (4, 5), (5, 4), (10, 2), (20, 1) 이므로 6을 return합니다.

입출력 예 #2

- `n`이 100 이므로 곱이 100인 순서쌍은 (1, 100), (2, 50), (4, 25), (5, 20), (10, 10), (20, 5), (25, 4), (50, 2), (100, 1) 이므로 9를 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 9m 35s
- 풀이

```jsx
function solution(n) {
  var answer = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) answer++;
  }
  return answer + 1;
}
```

## 느낀 점

---

문제 접근을 어떻게 해야할지 처음에 잘 모르고 있었다. 그런데 자세하게 읽어보니 약수의 개수를 구하면 될꺼 같다는 생각이 들어 for문을 이용해서 매겨변수로 들어온 n번을 반복하자고 생각했고 for문 안에서 if문을 이용해 나머지가 0이면 답을 하나 증가시키면 된다고 생각이 들었다.
