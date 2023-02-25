---
layout: post
title: "[프로그래머스 / lv0] 편지"
subtitle: "[프로그래머스 / lv0] 편지"
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

머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 `message`를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 공백도 하나의 문자로 취급합니다.
- 1 ≤ message의 길이 ≤ 50
- 편지지의 여백은 생각하지 않습니다.
- `message`는 영문 알파벳 대소문자, ‘!’, ‘~’ 또는 공백으로만 이루어져 있습니다.

### 입출력 예

---

### 입출력 예 설명

---

입출력 예 #1

- `message`의 글자 수가 15개로 최소 가로 30cm의 편지지가 필요합니다.

입출력 예 #2

- `message`의 글자 수가 11개로 최소 가로 22cm의 편지지가 필요합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 4m 12s
- 풀이

```jsx
function solution(message) {
  const answer = message.length * 2;
  return answer;
}
```

## 느낀 점

---

문자열의 길이를 구하자고 생각을 하였고 length를 적어서 테스트를 해봤더니 문자열의 길이가 나왔다. 나는 length는 배열에서만 사용하는줄 알았는데 문자열에서 사용이 가능해서 새로운 점을 알게 되었다.
