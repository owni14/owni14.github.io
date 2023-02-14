---
layout: post
title: '[프로그래머스 / lv0] 배열 원소의 길이'
subtitle: '[프로그래머스 / lv0] 배열 원소의 길이'
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

문자열 배열 `strlist`가 매개변수로 주어집니다. `strlist` 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `strlist` 원소의 길이 ≤ 100
- `strlist`는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.

### 입출력 예

---

| strlist                        | result       |
| ------------------------------ | ------------ |
| ["We", "are", "the", "world!"] | [2, 3, 3, 6] |
| ["I", "Love", "Programmers."]  | [1, 4, 12]   |

### 입출력 예 설명

---

입출력 예 #1

- ["We", "are", "the", "world!"]의 각 원소의 길이인 [2, 3, 3, 6]을 return합니다.

입출력 예 #2

- ["I", "Love", "Programmers."]의 각 원소의 길이인 [1, 4, 12]을 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 1m 54s
- 풀이

```jsx
function solution(strlist) {
  const result = strlist.map((item) => item.length);
  return result;
}
```

## 느낀 점

---

문제를 읽고 어떻게 풀지 고민을 좀 했었는데 생각해보니 프로젝트에서 많이 사용했던 map함수를 이용하면 각 원소의 길이를 배열형태로 반환 할 수 있겠다 싶어서 map을 사용하였는데 바로 통과가 되었다.
