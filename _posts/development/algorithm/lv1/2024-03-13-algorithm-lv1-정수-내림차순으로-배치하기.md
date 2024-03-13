---
layout: post
title: '[프로그래머스 / lv1] 정수 내림차순으로 배치하기'
subtitle: '[프로그래머스 / lv1] 정수 내림차순으로 배치하기'
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

함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

### 제한 조건

---

- `n`은 1이상 8000000000 이하인 자연수입니다.

### 입출력 예

---

### 풀이

---

```jsx
function solution(n) {
  const stringNumArr = n
    .toString()
    .split('')
    .sort((a, b) => b - a);
  const answer = stringNumArr.reduce((acc, cur) => (acc += cur));
  return Number(answer);
}
```

### 느낀점

---

일단 다 풀이하고 나니 보니까 메서드를 되게 많이 쓴거 같다고 생각이 든다. 숫자를 문자열로 변환하고 또 배열로 변환한 다음 정렬을하는 식으로 나는 문제에 접근하였고 문자열 배열이 나오고 난 후 어떻게 배열을 풀지 생각을 조금 했었던거 같다. 제일 많이 쓰고 모든 거의 배열의 메서드를 할 수 있는 reduce를 쓰는게 좋을꺼 같아 reduce를 사용하여 문제를 풀었다.
