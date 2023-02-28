---
layout: post
title: "[프로그래머스 / lv0] 중앙값 구하기"
subtitle: "[프로그래머스 / lv0] 중앙값 구하기"
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

중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 `array`가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

---

- `array`의 길이는 홀수입니다.
- 0 < `array`의 길이 < 100
- 1,000 < `array`의 원소 < 1,000

### 입출력 예

---

| array             | result |
| ----------------- | ------ |
| [1, 2, 7, 10, 11] | 7      |
| [9, -1, 0]        | 0      |

### 입출력 예 설명

---

입출력 예 #1

- 본문과 동일합니다.

입출력 예 #2

- 9, -1, 0을 오름차순 정렬하면 -1, 0, 9이고 가장 중앙에 위치하는 값은 0입니다.

## 풀이 & 걸린시간

---

- 걸린시간: 3m 36s
- 풀이

```jsx
function solution(array) {
  let answer = array.sort((a, b) => a - b);
  let length = array.length - 1;

  return answer[length / 2];
}
```

## 느낀 점

---

문제의 중앙 값을 구하기 위해 먼저 오름차순 정렬이 필요하다 느꼈다. 그런 다음 길이를 구하고 길이에 -1을 해주면 배열의 인덱스가 완성된다. 그 후 2로 나눠주어 중앙값을 구해주었다. 문제를 처음 읽고 살짝 생각한 뒤 차근차근 접근해 풀어보니 빠르게 문제가 풀려서 좋았다.
