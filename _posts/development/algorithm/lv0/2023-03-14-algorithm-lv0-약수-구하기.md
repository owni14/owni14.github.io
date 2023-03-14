---
layout: post
title: "[프로그래머스 / lv0] 약수 구하기"
subtitle: "[프로그래머스 / lv0] 약수 구하기"
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

정수 `n`이 매개변수로 주어질 때, `n`의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `n` ≤ 10,000

### 입출력 예

---

### 입출력 예 설명

---

입출력 예 #1

- 24의 약수를 오름차순으로 담은 배열 [1, 2, 3, 4, 6, 8, 12, 24]를 return합니다.

입출력 예 #2

- 29의 약수를 오름차순으로 담은 배열 [1, 29]를 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 2m 48s
- 풀이

```jsx
function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}
```

## 느낀 점

---

약수구하는 것은 한번 해 본 경험이 있어 반복문을 통해 구현했다. 오름차순으로 하기 위해서 1부터 n까지 증가시키면서 값을 넣어주면 될꺼 같다고 생각했고 내 방식대로 진행하니 테스트를 통과하였다. 이번 문제도 오늘 푼 문제와 비슷하게 좀 쉽게 느껴졌던 문제였다.
