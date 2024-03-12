---
layout: post
title: '[프로그래머스 / lv1] 정수 제곱근 판별'
subtitle: '[프로그래머스 / lv1] 정수 제곱근 판별'
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

임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.

n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

### 제한 사항

---

- n은 1이상, 50000000000000 이하인 양의 정수입니다.

### 입출력 예

---

| n   | return |
| --- | ------ |
| 121 | 144    |
| 3   | -1     |

### 입출력 예 설명

---

**입출력 예#1**

121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

**입출력 예#2**

3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

### 풀이

---

```jsx
function solution(n) {
  const sqrt = Math.sqrt(n);
  const isInteger = Number.isInteger(sqrt);

  return isInteger ? Math.pow(sqrt + 1, 2) : -1;
}
```

### 느낀점

---

이번에 풀때는 나는 `Math.sqrt()` 를 본적이 있고 사용법을 알아서 적용을 해서 해당수의 제곱근을 구하는데는 성공했다. 그러나 제곱근이 아니라면 소수점으로 떨어지게 되고 소수점인지 여부를 어떻게 알까 계속 고민하다가 도저히 생각이 나지 않아 MDN문서를 한번 참고해봤다. 거의 사용하지 않았던 Number.isInteger()이라는 메서드를 사용하면 정수인지 실수인지 여부를 판단할 수 있어서 해당 메서드를 적용시켜 문제를 해결했다. 모든 것을 내 힘으로 풀지 못해서 좀 아쉬움이 남는 문제다.
