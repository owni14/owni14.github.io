---
layout: post
title: "[프로그래머스 / lv0] 모음제거"
subtitle: "[프로그래머스 / lv0] 모음제거"
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

영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 `my_string`이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- `my_string`은 소문자와 공백으로 이루어져 있습니다.
- 1 ≤ `my_string`의 길이 ≤ 1,000

### 입출력 예

---

| my_string          | result      |
| ------------------ | ----------- |
| "bus"              | "bs"        |
| "nice to meet you" | "nc t mt y" |

### 입출력 예 설명

---

입출력 예 #1

- "bus"에서 모음 u를 제거한 "bs"를 return합니다.

입출력 예 #1

- "nice to meet you"에서 모음 i, o, e, u를 모두 제거한 "nc t mt y"를 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 10m 55s
- 풀이

```jsx
function solution(my_string) {
  var answer = "";
  answer = my_string.replace(/[aeiou]/g, "");
  return answer;
}
```

## 느낀 점

---

모음인 a,e,i,o,u를 replace를 이용하여 5번 작성하려고 했다. 그런데 전에 푼 문제에서 if문을 여러번 쓰니 가독성에 있어 별로 좋지 않다고 생각이 들어 이번에는 정규표현식을 써보자 생각하였다. 정규표현식으로 작성하니 코드가 좀 더 간결해지고 보기 좋아져 가독성이 향상되었다고 생각된다.
