---
layout: post
title: "[프로그래머스 / lv0] A로 B 만들기"
subtitle: "[프로그래머스 / lv0] A로 B 만들기"
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

문자열 `before`와 `after`가 매개변수로 주어질 때, `before`의 순서를 바꾸어 `after`를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

---

- 0 < `before`의 길이 == `after`의 길이 < 1,000
- `before`와 `after`는 모두 소문자로 이루어져 있습니다.

### 입출력 예

---

| before  | after   | result |
| ------- | ------- | ------ |
| "olleh" | "hello" | 1      |
| "allpe" | "apple" | 0      |

### 입출력 예 설명

---

입출력 예 #1

- "olleh"의 순서를 바꾸면 "hello"를 만들 수 있습니다.

입출력 예 #2

- "allpe"의 순서를 바꿔도 "apple"을 만들 수 없습니다.

## 풀이 & 걸린시간

---

- 걸린시간: 27m 15s
- 풀이

```jsx
function solution(before, after) {
  let status = 0;
  const arrBefore = before.split("");
  const arrAfter = after.split("");

  for (let i = 0; i < arrBefore.length; i++) {
    for (let j = 0; j < arrAfter.length; j++) {
      if (arrBefore[i] === arrAfter[j]) {
        arrBefore[i] = "";
        arrAfter[j] = "";
      }
    }
  }

  if (arrBefore.join("").length === 0) status = 1;

  return status;
}
```

## 느낀 점

---

처음에 어떻게 각각 다 비교하고 확인하지라는 생각을 해 막막하고 생각이 쉽게 떠오르지 않았다. 나 같은 경우 받은 파라미터를 배열 형태로 만들었고 for문을 2번 돌면서 after에 해당하는 문자가 before에 있으면 해당 문자를 after와 before배열에서 제거하였다.

그 후 for문을 빠져나와 if문에서 배열을 문자열로 만들고 해당 길이가 0이되면 status를 만들 수 있는 상태인 1로 바꾸어 주었다. 길이가 0인 경우 after와 before문자가 모두 같기 때문에 다 제거된 상태이다. 그리고 상태의 초기 값을 0으로 지정하여 문자를 만들 수 없다고 지정하고 시작하였다.
