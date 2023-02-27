---
layout: post
title: "[프로그래머스 / lv0] 배열의 유사도"
subtitle: "[프로그래머스 / lv0] 배열의 유사도"
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

두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 `s1`과 `s2`가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `s1`, `s2`의 길이 ≤ 100
- 1 ≤ `s1`, `s2`의 원소의 길이 ≤ 10
- `s1`과 `s2`의 원소는 알파벳 소문자로만 이루어져 있습니다
- `s1`과 `s2`는 각각 중복된 원소를 갖지 않습니다.

### 입출력 예

---

| s1              | s2                          | result |
| --------------- | --------------------------- | ------ |
| ["a", "b", "c"] | ["com", "b", "d", "p", "c"] | 2      |
| ["n", "omg"]    | ["m", "dot"]                | 0      |

### 입출력 예 설명

---

입출력 예 #1

- "b"와 "c"가 같으므로 2를 return합니다.

입출력 예 #2

- 같은 원소가 없으므로 0을 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 3m 08s
- 풀이

```jsx
function solution(s1, s2) {
  var answer = 0;

  for (let i = 0; i < s1.length; i++) {
    const state = s2.includes(s1[i]);
    if (state) {
      answer++;
    }
  }
  return answer;
}
```

## 느낀 점

---

includes를 이용하여 배열안에 해당 값이 있는지 확인하는 방식으로 진행했더니 채점을 통과했다. includes는 많이 사용하지는 않지만 해당 내용에 대해 한번 더 숙지하고 이해하는 계기가 되었다.
