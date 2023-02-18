---
layout: post
title: "[프로그래머스 / lv0] 최댓값 만들기(1)"
subtitle: "[프로그래머스 / lv0] 최댓값 만들기(1)"
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

- 0 ≤ `numbers`의 원소 ≤ 10,000
- 2 ≤ `numbers`의 길이 ≤ 100

### 입출력 예

---

| numbers               | result |
| --------------------- | ------ |
| [1, 2, 3, 4, 5]       | 20     |
| [0, 31, 24, 10, 1, 9] | 744    |

### 입출력 예 설명

---

입출력 예 #1

- 두 수의 곱중 최댓값은 4 \* 5 = 20 입니다.

입출력 예 #1

- 두 수의 곱중 최댓값은 31 \* 24 = 744 입니다.

## 풀이 & 걸린시간

---

- 걸린시간: 8m 10s
- 풀이

```jsx
function solution(numbers) {
  function compare(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  }

  const sortedNumbers = numbers.sort(compare).reverse();

  return sortedNumbers[0] * sortedNumbers[1];
}
```

## 느낀 점

---

처음 문제를 봤을땐 정렬 할 생각을 전혀하지 않고 제일 큰 숫자와 두번째로 큰 숫자의 인덱스를 추출하여 값을 뽑아낸 다음 문제를 풀려고 했다. 그런데 곰곰이 생각해보니 sort를 통해 값을 정렬한 다음 문제를 풀면 쉽게 풀릴꺼 같다는 생각이 들어 정렬을 진행하였다.

마지막에 reverse()를 한 이유는 그냥 첫번째와 두번째 인덱스가 제일 큰 값과 작은 값이 되었으면 해서 reverse()를 적어주었다. reverse()를 적어주지 않으면 `numbers.length - 1` 과 -2를 해줘야할꺼 같고 코드가 조금 길어지는거 같다는 느낌이 들었다.
