---
layout: post
title: "[프로그래머스 / lv0] 문자 반복 출력하기"
subtitle: "[프로그래머스 / lv0] 문자 반복 출력하기"
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

문자열 `my_string`과 정수 `n`이 매개변수로 주어질 때, `my_string`에 들어있는 각 문자를 `n`만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

---

- 2 ≤ `my_string` 길이 ≤ 5
- 2 ≤ `n` ≤ 10
- "my_string"은 영어 대소문자로 이루어져 있습니다.

### 입출력 예

---

| my_string | n   | result            |
| --------- | --- | ----------------- |
| "hello"   | 3   | "hhheeellllllooo" |

### 입출력 예 설명

---

입출력 예 #1

- "hello"의 각 문자를 세 번씩 반복한 "hhheeellllllooo"를 return 합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 6m 07s
- 풀이

```jsx
function solution(my_string, n) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      answer += my_string[i];
    }
  }
  return answer;
}
```

## 느낀 점

---

문제를 보고 for문을 이용하면 원하는 결과를 얻을 수 있겠다! 라고 생각을 하고 접근을 했다. 그래서 이중 for문을 작성하여 처음에는 my_string길이만큼 반복하고 두번째는 n의 개수만큼 반복해 answer에 문자열의 계속해서 더해갔다. 그런데 채점을 하고 난 후 다른 사람들의 풀이를 보니 reduce를 이용하거나 구조분해 후 map을 사용하는 등 다양한 방법이 나와서 나만 혼자 길게 적은게 아닌가 싶었다.
