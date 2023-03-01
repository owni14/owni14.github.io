---
layout: post
title: "[프로그래머스 / lv0] 문자열안에 문자열"
subtitle: "[프로그래머스 / lv0] 문자열안에 문자열"
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

문자열 `str1`, `str2`가 매개변수로 주어집니다. `str1` 안에 `str2`가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `str1`의 길이 ≤ 100
- 1 ≤ `str2`의 길이 ≤ 100
- 문자열은 알파벳 대문자, 소문자, 숫자로 구성되어 있습니다.

### 입출력 예

---

| str1                     | str2   | result |
| ------------------------ | ------ | ------ |
| "ab6CDE443fgh22iJKlmn1o" | "6CD"  | 1      |
| "ppprrrogrammers"        | "pppp" | 2      |
| "AbcAbcA"                | "AAA"  | 2      |

### 입출력 예 설명

---

입출력 예 #1

- "ab`6CD`E443fgh22iJKlmn1o" `str1`에 `str2`가 존재하므로 1을 return합니다.

입출력 예 #2

- "ppprrrogrammers" `str1`에 `str2`가 없으므로 2를 return합니다.

입출력 예 #3

- "AbcAbcA" `str1`에 `str2`가 없으므로 2를 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 2m 39s
- 풀이

```jsx
function solution(str1, str2) {
  let state = 0;
  const result = str1.includes(str2);
  if (result) {
    state = 1;
  } else {
    state = 2;
  }
  return state;
}
```

## 느낀 점

---

문제를 딱 보고 includes로 풀이를 할 수 있겠다 생각을 하였고 내 생각대로 풀이를 푸니 나름 쉽게 풀렸던 문제였다.
