---
layout: post
title: '[프로그래머스 / lv2] 최댓값과 최솟값'
subtitle: '[프로그래머스 / lv2] 최댓값과 최솟값'
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

문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.

예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

### 제한 조건

---

- s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.

### 입출력 예

---

| s             | return  |
| ------------- | ------- |
| "1 2 3 4"     | "1 4"   |
| "-1 -2 -3 -4" | "-4 -1" |
| "-1 -1"       | "-1 -1" |

### 풀이

---

```jsx
function solution(s) {
  const arrNum = s.split(' ').map((num) => Number(num));
  const maxNum = Math.max(...arrNum);
  const minNum = Math.min(...arrNum);
  return `${minNum} ${maxNum}`;
}
```

### 느낀점

---

문제를 다 풀고 살짝 허무했던거 같다. 그 이유가 가장 위에 있던 풀이가 나랑 똑같이 Math.max랑 Math.min을 이용한거였는데 문자를 숫자로 변환하지 않고 그냥 split(" ")만을 이용해 바로 적용한 것이었다. 문자열도 되는지 몰랐던 나는 이번에 새로 하나 알고 가는 좋은 기회였던거 같다.
