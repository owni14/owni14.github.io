---
layout: post
title: '[프로그래머스 / lv1] 자연수 뒤집어 배열로 만들기'
subtitle: '[프로그래머스 / lv1] 자연수 뒤집어 배열로 만들기'
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

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

### 제한 조건

---

- n은 10,000,000,000이하인 자연수입니다.

### 입출력 예

---

| n     | return      |
| ----- | ----------- |
| 12345 | [5,4,3,2,1] |

### 풀이

---

```jsx
function solution(n) {
  const answer = n
    .toString()
    .split('')
    .reverse()
    .map((item) => Number(item));
  return answer;
}
```

### 느낀점

---

전에 풀었던 문제와 유형이 비슷하다고 생각해 자연수를 string으로 만든다음 배열로 만들었다. 그리고 최근 알게 된 reverse라는 메서드를 통해 배열을 뒤집고 map을 이용해 숫자로 변환하였다. 실제로 이렇게 메서드를 길게 이어서 써본적은 없는데 길게 이어서 써보니 가독성이 좋다..고는 안드는거 같다.
