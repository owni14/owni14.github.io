---
layout: post
title: '[프로그래머스 / lv0] 문자열의 뒤의 n글자'
subtitle: '[프로그래머스 / lv0] 문자열의 뒤의 n글자'
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

문자열 `my_string`과 정수 `n`이 매개변수로 주어질 때, `my_string`의 뒤의 `n`글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

### 제한사항

---

- `my_string`은 숫자와 알파벳으로 이루어져 있습니다.
- 1 ≤ `my_string`의 길이 ≤ 1,000
- 1 ≤ `n` ≤ `my_string`의 길이

### 입출력 예

---

| my_string        | n   | result        |
| ---------------- | --- | ------------- |
| "ProgrammerS123" | 11  | "grammerS123" |
| "He110W0r1d"     | 5   | "W0r1d"       |

### 입출력 예

---

입출력 예 #1

- 예제 1번의 `my_string`에서 뒤의 11글자는 "grammerS123"이므로 이 문자열을 return 합니다.

입출력 예 #2

- 예제 2번의 `my_string`에서 뒤의 5글자는 "W0r1d"이므로 이 문자열을 return 합니다.

### 풀이

---

```jsx
function solution(my_string, n) {
  const answer = my_string.slice(-n, my_string.length);
  return answer;
}
```

### 느낀점

---

최근에 slice와 subString의 차이점에 대해서 본적이 있었고 slice의 첫번째 파라미터에 -를 붙이면 뒤에서부터 시작한 다는 것을 알고 있어서 해당 내용을 적용했다.
