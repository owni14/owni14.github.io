---
layout: post
title: "[프로그래머스 / lv0] 최댓값 만들기(2)"
subtitle: "[프로그래머스 / lv0] 최댓값 만들기(2)"
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

정수 배열 `numbers`가 매개변수로 주어집니다. `numbers`의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 10,000 ≤ `numbers`의 원소 ≤ 10,000
- 2 ≤ `numbers` 의 길이 ≤ 100

### 입출력 예

---

| numbers                   | result |
| ------------------------- | ------ |
| [1, 2, -3, 4, -5]         | 15     |
| [0, -31, 24, 10, 1, 9]    | 240    |
| [10, 20, 30, 5, 5, 20, 5] | 600    |

### 입출력 예 설명

입출력 예 #1

- 두 수의 곱중 최댓값은 -3 \* -5 = 15 입니다.

입출력 예 #2

- 두 수의 곱중 최댓값은 10 \* 24 = 240 입니다.

입출력 예 #3

- 두 수의 곱중 최댓값은 20 \* 30 = 600 입니다.

## 풀이 & 걸린시간

---

- 걸린시간: 5m 15s
- 풀이

```jsx
function solution(numbers) {
  let answer = 0;
  const sortedArr = numbers.sort((a, b) => b - a);
  const negativeMax =
    sortedArr[numbers.length - 1] * sortedArr[numbers.length - 2];
  const positiveMax = sortedArr[0] * sortedArr[1];
  if (negativeMax > positiveMax) {
    answer = negativeMax;
  } else {
    answer = positiveMax;
  }
  return answer;
}
```

## 느낀 점

---

처음 문제를 풀때 전체 다 절대값으로 `Math.abs` 를 사용해서 문제를 풀었는데 생각해보니 전체 절대 값을 취하게 되면 값이 최대 값이 제대로 나오지 않는 다는 것을 깨닫고 다른 방법으로 접근했었다. 그래서 생각해낸 방법이 일단 전체 내림차순으로 정렬시키고 음수 값끼리 곱해서 가장 큰 값과 양수끼리 곱해서 가장 큰 값중 더 큰 값을 return해주면 되겠다고 생각하였다.

그 후 채점을 해보니 정상적으로 통과되었는데 다른사람의 풀이를 보니 Math.max를 사용하는 것이었다. 나는 if문을 써서 비교를 했지만 Math.max를 사용하니 가독성이 더 올라가는거 같다는 생각이 들었고 편해보였다. 다음에는 나도 한번 사용해보려고 한다.
