---
layout: post
title: '[프로그래머스 / lv1] 자릿수 더하기'
subtitle: '[프로그래머스 / lv1] 자릿수 더하기'
category: dev
tag: algorithm
image:
  path: /assets/img/algorithm.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## 문제

### **문제 설명**

---

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.

예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

### 제한사항

---

- N의 범위 : 100,000,000 이하의 자연수

### 입출력 예

---

| N   | answer |
| --- | ------ |
| 123 | 6      |
| 987 | 24     |

### 입출력 예 설명

---

입출력 예 #1

문제의 예시와 같습니다.

입출력 예 #2

9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

### 풀이

---

```jsx
function solution(n) {
  const arrNum = n.toString().split('');
  const total = arrNum.reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
  }, 0);
  return total;
}
```

### 느낀점

---

자연수를 문자열로 만들고 거기에 또 split을 사용해 배열로 만들어서 계산을 했는데 이렇게 변환을 많이 하는게 맞나라는 의문이 든다.
