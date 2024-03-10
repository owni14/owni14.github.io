---
layout: post
title: '[프로그래머스 / lv1] 약수의 합'
subtitle: '[프로그래머스 / lv1] 약수의 합'
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

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

### 제한 사항

---

- `n`은 0 이상 3000이하인 정수입니다.

### 입출력 예

---

| n   | return |
| --- | ------ |
| 12  | 28     |
| 5   | 6      |

### 입출력 예 설명

---

입출력 예 #1

12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

입출력 예 #2

5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

### 풀이

---

```jsx
function solution(n) {
  let arrDivisor = [];
  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      arrDivisor.push(i);
    }
  }
  const answer = arrDivisor.reduce((acc, cur) => (acc += cur), 0);
  return answer;
}
```

### 느낀점

---

let을 이용해 배열을 뽑아낸 다음 reduce를 사용하여 합을 구하였는데 다른 사람은 배열을 뽑지 않고 for문 한번에 값을 추출해냈다. 생각보면 굳이 배열을 따로 추출할 필요가 없을꺼 같다고 생각한다.
