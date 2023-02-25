---
layout: post
title: "[프로그래머스 / lv0] 짝수는 싫어요"
subtitle: "[프로그래머스 / lv0] 짝수는 싫어요"
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

정수 `n`이 매개변수로 주어질 때, `n` 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `n` ≤ 100

### 입출력 예

---

| n   | result                      |
| --- | --------------------------- |
| 10  | [1, 3, 5, 7, 9]             |
| 15  | [1, 3, 5, 7, 9, 11, 13, 15] |

### 입출력 예 설명

---

입출력 #1

- 10 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9]를 return합니다.

입출력 #1

- 15 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9, 11, 13, 15]를 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 4m 23s
- 풀이

```jsx
function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i += 2) {
    answer.push(i);
  }
  return answer;
}
```

## 느낀 점

---

처음 문제를 읽고 홀수 값을 구해서 오름차순 정렬을 해야했기에 자연스럽게 `sort` 를 생각했는데 sort를 이용할 필요가 없었다. 그냥 for문을 사용해서 1부터 2씩 더해주면 알아서 오름차순 정렬이 되기때문이었다. 추후에 짝수 구하는 것도 한번 해보려고 한다.
