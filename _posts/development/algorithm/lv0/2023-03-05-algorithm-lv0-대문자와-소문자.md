---
layout: post
title: "[프로그래머스 / lv0] 대문자와 소문자"
subtitle: "[프로그래머스 / lv0] 대문자와 소문자"
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

문자열 `my_string`이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `my_string`의 길이 ≤ 1,000
- `my_string`은 영어 대문자와 소문자로만 구성되어 있습니다.

### 입출력 예

---

| my_string    | result       |
| ------------ | ------------ |
| "cccCCC"     | "CCCccc"     |
| "abCdEfghIJ" | "ABcDeFGHij" |

### 입출력 예 설명

---

입출력 예 #1

- 소문자는 대문자로 대문자는 소문자로 바꾼 "CCCccc"를 return합니다.

입출력 예 #2

- 소문자는 대문자로 대문자는 소문자로 바꾼 "ABcDeFGHij"를 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 26m 05s
- 풀이

```jsx
function solution(my_string) {
  const answer = my_string.replace(/[a-zA-Z]/g, (v) => {
    if (v === v.toUpperCase()) return v.toLowerCase();
    if (v === v.toLowerCase()) return v.toUpperCase();
  });

  return answer;
}
```

## 느낀 점

---

정규표현식을 이용해서 어떻게 하면 되지 않을까하며 고민을 되게 많이했다. 그런데 막상 잘 되지 않았고 계속 고민을 하던 끝에 바꿀 값이 대문자나 소문자인지 `toUpperCase` 나 `toLowerCase` 로 구분해서 바꾸어 주면 되지 않을까하여 식을 작성해보니 통과가 되어서 너무 좋았다.
