---
layout: post
title: "[프로그래머스 / lv0] 가장 큰 수 찾기"
subtitle: "[프로그래머스 / lv0] 가장 큰 수 찾기"
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

정수 배열 `array`가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

---

- 1 ≤ `array의` 길이 ≤ 100
- 0 ≤ `array` 원소 ≤ 1,000
- `array`에 중복된 숫자는 없습니다.

### 입출력 예

---

| array          | result  |
| -------------- | ------- |
| [1, 8, 3]      | [8, 1]  |
| [9, 10, 11, 8] | [11, 2] |

### 입출력 예 설명

---

입출력 예 #1

- 1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.

입출력 예 #2

- 9, 10, 11, 8 중 가장 큰 수는 11이고 인덱스 2에 있습니다.

## 풀이 & 걸린시간

---

- 걸린시간: 7m 11s
- 풀이

```jsx
function solution(array) {
  let answer = [];
  let highValue = 0;
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > highValue) {
      highValue = array[i];
      index = i;
    }
  }

  answer.push(highValue);
  answer.push(index);

  return answer;
}
```

## 느낀 점

---

항상 나의 식이 다른 사람들의 풀이보다 좀 길다고 느껴진다.. 나는 이번에 for문을 썼지만 다른 사람들은 Math.max를 이용해 최대 값을 찾아낸 다음 indexOf로 구하였다. 이번 문제를 나름 쉽게 풀었다고 생각되었지만 MDN에 있는 JS내장 객체활용을 좀 더 해야겠다고 생각드는 계기가 되었다.
