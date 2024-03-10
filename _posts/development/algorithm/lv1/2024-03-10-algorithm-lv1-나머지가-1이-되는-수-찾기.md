---
layout: post
title: '[프로그래머스 / lv1] 나머지가 1이 되는 수 찾기'
subtitle: '[프로그래머스 / lv1] 나머지가 1이 되는 수 찾기'
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

자연수 `n`이 매개변수로 주어집니다. `n`을 `x`로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 `x`를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

### 제한사항

---

- 3 ≤ `n` ≤ 1,000,000

### 입출력 예

---

| n   | result |
| --- | ------ |
| 10  | 3      |
| 12  | 11     |

### 입출력 예 설명

---

**입출력 예 #1**

- 10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다.

**입출력 예 #2**

- 12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.

### 풀이

---

```jsx
function solution(n) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      answer = i;
    }
  }
  return answer;
}
```

### 느낀점

---

나는 for문을 사용해서 문제에 접근했지만 다른 사람들은 while을 써서 문제에 접근한 케이스도 있어서 신기했다. 다방면으로 접근하는 방법을 알필요가 있을꺼 같다.
