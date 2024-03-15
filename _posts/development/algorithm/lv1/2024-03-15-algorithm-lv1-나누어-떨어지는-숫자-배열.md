---
layout: post
title: '[프로그래머스 / lv1] 나누어 떨어지는 숫자 배열'
subtitle: '[프로그래머스 / lv1] 나누어 떨어지는 숫자 배열'
category: dev
tag: algorithm
image:
  path: /assets/img/algorithm.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## 문제

### **문제 설명**

---

array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.

divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

### 제한사항

---

- arr은 자연수를 담은 배열입니다.
- 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
- divisor는 자연수입니다.
- array는 길이 1 이상인 배열입니다.

### 입출력 예

---

| arr           | divisor | return        |
| ------------- | ------- | ------------- |
| [5, 9, 7, 10] | 5       | [5, 10]       |
| [2, 36, 1, 3] | 1       | [1, 2, 3, 36] |
| [3,2,6]       | 10      | [-1]          |

### 입출력 예 설명

---

입출력 예#1

arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

입출력 예#2

arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

입출력 예#3

3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

### 풀이

---

```jsx
function solution(arr, divisor) {
  const answer = arr
    .filter((item) => item % divisor === 0)
    .sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}
```

### 느낀점

---

문제를 보고 divisor로 나누어 떨어지는 값을 filter로 처리하고 오름차순은 sort로 정렬을 해야겠다고 바로 생각하여 적용하였고, 마지막에 element가 하나도 없다면이라는 말을 보고 sort한 배열의 length로 비교해서 값을 반환하면 되겠다고 생각했다. 이번 문제로 빠르게 풀었던거 같다.
