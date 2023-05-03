---
layout: post
title: '[프로그래머스 / lv0] 소문자로 바꾸기'
subtitle: '[프로그래머스 / lv0] 소문자로 바꾸기'
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

알파벳으로 이루어진 문자열 `myString`이 주어집니다. 모든 알파벳을 소문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

### 제한사항

---

- 1 ≤ `myString`의 길이 ≤ 100,000
  - `myString`은 알파벳으로 이루어진 문자열입니다.

### 입출력 예

---

| myString  | result    |
| --------- | --------- |
| "aBcDeFg" | "abcdefg" |
| "aaa"     | "aaa"     |

## 풀이 & 걸린시간

---

- 걸린시간: 42s
- 풀이

```jsx
function solution(myString) {
  return myString.toLowerCase();
}
```

## 느낀 점

---

많이 보고 자주 알고 있던 문제였기 때문에 쉽게 풀었다.
