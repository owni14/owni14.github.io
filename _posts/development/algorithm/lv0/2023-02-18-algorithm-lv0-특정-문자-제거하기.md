---
layout: post
title: "[프로그래머스 / lv0] 특정 문자 제거하기"
subtitle: "[프로그래머스 / lv0] 특정 문자 제거하기"
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

문자열 `my_string`과 문자 `letter`이 매개변수로 주어집니다. `my_string`에서 `letter`를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `my_string`의 길이 ≤ 100
- `letter`은 길이가 1인 영문자입니다.
- `my_string`과 `letter`은 알파벳 대소문자로 이루어져 있습니다.
- 대문자와 소문자를 구분합니다.

### 입출력 예

---

| my_string | letter | result  |
| --------- | ------ | ------- |
| "abcdef"  | "f"    | "abcde" |
| "BCBdbe"  | "B"    | "Cdbe"  |

### 입출력 예 설명

---

입출력 예 #1

- "abcdef" 에서 "f"를 제거한 "abcde"를 return합니다.

입출력 예 #2

- "BCBdbe" 에서 "B"를 모두 제거한 "Cdbe"를 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 22m 42s
- 풀이

```jsx
function solution(my_string, letter) {
  const answer = my_string.replaceAll(letter, "");
  return answer;
}
```

## 느낀 점

---

처음에 특정문자를 제거하는게 생각보다 어렵게 느껴졌다. 그리고 배열로 생각해서 letter에 해당하는 index를 찾아 해당 index를 제거하자고 생각했지만 letter에 해당하는 문자가 하나만 들어오는게 아니라 여러개 들어올 수도 있고 어떻게 다 일일이 제거하나 싶어 생각이 깊어졌다.

그런데 문제를 다시 읽어보니 배열이 아닌 문자열이었고 문자열은 replace를 쓰면 어떻게 될꺼 같다는 생각이 들었다. replace는 하나의 문자만 바꿔주는 것이었고 replaceAll을 써서 전체 문자를 바꿔줘야했기 때문에 replaceAll을 사용하였다.
