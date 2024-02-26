---
layout: post
title: '[프로그래머스 / lv0] 대문자로 바꾸기'
subtitle: '[프로그래머스 / lv0] 대문자로 바꾸기'
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

알파벳으로 이루어진 문자열 `myString`이 주어집니다. 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

### 제한사항

---

- 1 ≤ `myString`의 길이 ≤ 100,000
  - `myString`은 알파벳으로 이루어진 문자열입니다.

### 입출력 예

---

### 풀이

---

```jsx
function solution(myString) {
  return myString.toUpperCase();
}
```

### 느낀점

---

현업에서 toUpperCase()나 toLowerCase()를 종종 사용하였기 때문에 문제를 보는 순간 방법이 바로 떠올랐다.
