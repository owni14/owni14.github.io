---
layout: post
title: '[프로그래머스 / lv1] 문자열을 정수로 바꾸기'
subtitle: '[프로그래머스 / lv1] 문자열을 정수로 바꾸기'
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

문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

### 제한 조건

---

- s의 길이는 1 이상 5이하입니다.
- s의 맨앞에는 부호(+, -)가 올 수 있습니다.
- s는 부호와 숫자로만 이루어져있습니다.
- s는 "0"으로 시작하지 않습니다.

### 입출력 예

---

예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.

str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

### 풀이

---

```jsx
function solution(s) {
  return Number(s);
}
```

### 느낀점

---

처음으로 레벨 1을 풀게 되었는데 쉬운 문제여서 그런지 보자마자 바로 풀었던거 같다.
