---
layout: post
title: "[프로그래머스 / lv0] 배열 자르기"
subtitle: "[프로그래머스 / lv0] 배열 자르기"
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

정수 배열 `numbers`와 정수 `num1`, `num2`가 매개변수로 주어질 때, `numbers`의 `num1`번 째 인덱스부터 `num2`번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

---

- 2 ≤ `numbers`의 길이 ≤ 30
- 0 ≤ `numbers`의 원소 ≤ 1,000
- 0 ≤`num1` < `num2` < `numbers`의 길이

### 입출력 예

---

| numbers         | num1 | num2 | result    |
| --------------- | ---- | ---- | --------- |
| [1, 2, 3, 4, 5] | 1    | 3    | [2, 3, 4] |
| [1, 3, 5]       | 1    | 2    | [3, 5]    |

### 입출력 예 설명

---

입출력 예 #1

- [1, 2, 3, 4, 5]의 1번째 인덱스 2부터 3번째 인덱스 4 까지 자른 [2, 3, 4]를 return 합니다.

입출력 예 #2

- [1, 3, 5]의 1번째 인덱스 3부터 2번째 인덱스 5까지 자른 [3, 5]를 return 합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 1m 13s
- 풀이

```jsx
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}
```

## 느낀 점

---

배열의 몇 번째 인덱스부터 몇 번째 인덱스까지 자르는 것은 slice써서 종종 해본 기억이 있어서 나름 쉽다고 느껴졌다. 그런데 `slice(start, end)` 를 썼을때 end까지 포함되지 않는 다는 것을 잊어버리고 있었기 떄문에 결과가 다르게 나왔고, +1을 붙여주니 통과가 되었다.

slice에 대한 개념을 확실하게 잡고가는 이번 코딩테스트였던거 같다.
