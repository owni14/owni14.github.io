---
layout: post
title: "[프로그래머스 / lv0] 숨어있는 숫자의 덧셈(1)"
subtitle: "[프로그래머스 / lv0] 숨어있는 숫자의 덧셈(1)"
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

문자열 `my_string`이 매개변수로 주어집니다. `my_string`안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `my_string`의 길이 ≤ 1,000
- `my_string`은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.

### 입출력 예

---

| my_string       | result |
| --------------- | ------ |
| "aAb1B2cC34oOp" | 10     |
| "1a2b3c4d123"   | 16     |

### 입출력 예 설명

---

입출력 예 #1

- "aAb1B2cC34oOp"안의 한자리 자연수는 1, 2, 3, 4 입니다. 따라서 1 + 2 + 3 + 4 = 10 을 return합니다.

입출력 예 #2

- "1a2b3c4d123Z"안의 한자리 자연수는 1, 2, 3, 4, 1, 2, 3 입니다. 따라서 1 + 2 + 3 + 4 + 1 + 2 + 3 = 16 을 return합니다.

### 유의사항

---

- 연속된 숫자도 각각 한 자리 숫자로 취급합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 3m 58s
- 풀이

```jsx
function solution(my_string) {
  let answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === "0") answer += parseInt(my_string[i]);
    if (my_string[i] === "1") answer += parseInt(my_string[i]);
    if (my_string[i] === "2") answer += parseInt(my_string[i]);
    if (my_string[i] === "3") answer += parseInt(my_string[i]);
    if (my_string[i] === "4") answer += parseInt(my_string[i]);
    if (my_string[i] === "5") answer += parseInt(my_string[i]);
    if (my_string[i] === "6") answer += parseInt(my_string[i]);
    if (my_string[i] === "7") answer += parseInt(my_string[i]);
    if (my_string[i] === "8") answer += parseInt(my_string[i]);
    if (my_string[i] === "9") answer += parseInt(my_string[i]);
  }
  return answer;
}
```

## 느낀 점

---

나는 for문 안에 if문을 써서 숫자를 찾아내는 방법으로 풀었지만 다른 사람의 풀이를 보니 정규표현식을 통해 풀이를 간단하게 푼 것이었다. 이번에 내가 정규표현식에 대해 좀 많이 부족하구나라는 생각을 많이하게 되었다.
