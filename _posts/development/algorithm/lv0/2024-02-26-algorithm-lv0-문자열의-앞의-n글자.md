---
layout: post
title: '[프로그래머스 / lv0] 문자열의 앞의 n글자'
subtitle: '[프로그래머스 / lv0] 문자열의 앞의 n글자'
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

문자열 `my_string`과 정수 `n`이 매개변수로 주어질 때, `my_string`의 앞의 `n`글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

### 제한사항

---

- `my_string`은 숫자와 알파벳으로 이루어져 있습니다.
- 1 ≤ `my_string`의 길이 ≤ 1,000
- 1 ≤ `n` ≤ `my_string`의 길이

### 입출력 예

---

| my_string        | n   | result        |
| ---------------- | --- | ------------- |
| "ProgrammerS123" | 11  | "ProgrammerS" |
| "He110W0r1d"     | 5   | "He110"       |

### 입출력 예

---

입출력 예 #1

- 예제 1번의 `my_string`에서 앞의 11글자는 "ProgrammerS"이므로 이 문자열을 return 합니다.

입출력 예 #2

- 예제 2번의 `my_string`에서 앞의 5글자는 "He110"이므로 이 문자열을 return 합니다.

### 풀이

---

```jsx
function solution(my_string, n) {
  return my_string.slice(0, n);
}
```

### 느낀점

---

정말 빨리 풀어서 다른사람의 풀이를 보니 대부분 다 비슷한 풀이로 풀었다. 그런데 어떤 사람은 subString을 이용해서 풀었는데 slice와 subString의 차이를 정확하게 내가 인지하지 못하고 있었다라는 생각이 들었다. 해당 내용은 따로 정리해서 올리려고 한다.
