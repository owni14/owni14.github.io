---
layout: post
title: '[프로그래머스 / lv0] 홀짝에 따라 다른 값 반환하기'
subtitle: '[프로그래머스 / lv0] 홀짝에 따라 다른 값 반환하기'
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

양의 정수 `n`이 매개변수로 주어질 때, `n`이 홀수라면 `n` 이하의 홀수인 모든 양의 정수의 합을 return 하고 `n`이 짝수라면 `n` 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

### 제한사항

---

- 1 ≤ `n` ≤ 100

### 입출력 예

---

| n   | result |
| --- | ------ |
| 7   | 16     |
| 10  | 220    |

### 입출력 예 설명

---

입출력 예 #1

- 예제 1번의 `n`은 7로 홀수입니다. 7 이하의 모든 양의 홀수는 1, 3, 5, 7이고 이들의 합인 1 + 3 + 5 + 7 = 16을 return 합니다.

입출력 예 #2

- 예제 2번의 `n`은 10으로 짝수입니다. 10 이하의 모든 양의 짝수는 2, 4, 6, 8, 10이고 이들의 제곱의 합인 2 + 4 + 6 + 8 + 10 = 4 + 16 + 36 + 64 + 100 = 220을 return 합니다.

### 풀이

---

```jsx
function solution(n) {
  let answer = 0;

  const checkEvenFn = (num) => {
    return num % 2 === 0;
  };

  for (let i = 1; i <= n; i++) {
    if (checkEvenFn(n)) {
      if (checkEvenFn(i)) {
        answer += Math.pow(i, 2);
      }
    } else {
      if (!checkEvenFn(i)) {
        answer += i;
      }
    }
  }

  return answer;
}
```

### 느낀점

---

함수르 반복해서 사용할 일이 있어서 현업에서 사용하듯이 공통적으로 사용하는 함수는 따로 빼서 작업을 했다. 근데 for문이 저렇게 좀 길어지는거 같아서 별로인거 같다.
