---
layout: post
title: "[프로그래머스 / lv0] 문자열 정렬하기(1)"
subtitle: "[프로그래머스 / lv0] 문자열 정렬하기(1)"
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

문자열 `my_string`이 매개변수로 주어질 때, `my_string` 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

### 제한사항

---

- 1 ≤ `my_string`의 길이 ≤ 100
- `my_string`에는 숫자가 한 개 이상 포함되어 있습니다.
- `my_string`은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다. - - -

### 입출력 예

---

| my_string   | result          |
| ----------- | --------------- |
| "hi12392"   | [1, 2, 2, 3, 9] |
| "p2o4i8gj2" | [2, 2, 4, 8]    |
| "abcde0"    | [0]             |

### 입출력 예 설명

---

입출력 예 #1

- "hi12392"에 있는 숫자 1, 2, 3, 9, 2를 오름차순 정렬한 [1, 2, 2, 3, 9]를 return 합니다.

입출력 예 #2

- "p2o4i8gj2"에 있는 숫자 2, 4, 8, 2를 오름차순 정렬한 [2, 2, 4, 8]을 return 합니다.

입출력 예 #3

- "abcde0"에 있는 숫자 0을 오름차순 정렬한 [0]을 return 합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 8m 14s
- 풀이

```jsx
function solution(my_string) {
  let answer = my_string.replace(/[^0-9]/g, "");
  let newArray = [];

  for (const item of answer) {
    newArray.push(parseInt(item));
  }
  return newArray.sort((a, b) => a - b);
}
```

## 느낀 점

---

이번에도 정규표현식을 이요해 숫자만 추출한 다음 문자를 풀었다. 처음에 for문을 돌면서 각 배열에 하나씩 push를 해주는데 숫자가 문자형태로 나와서 테스트 통과가 되지 않아 `parseInt()` 를 이용해 숫자로 바꾼 후 넣어주었다. 이번 문제를 나름 수월하게 풀었던거 같다.
