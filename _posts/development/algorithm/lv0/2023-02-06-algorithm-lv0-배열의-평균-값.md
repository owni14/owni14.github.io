---
layout: post
title: '[프로그래머스 / lv0] 배열의 평균 값'
subtitle: '[프로그래머스 / lv0] 배열의 평균 값'
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

정수 배열 `numbers`가 매개변수로 주어집니다. `numbers`의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 0 ≤ `numbers`의 원소 ≤ 1,000
- 1 ≤ `numbers`의 길이 ≤ 100
- 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

### 입출력 예

---

| numbers                                      | result |
| -------------------------------------------- | ------ |
| [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]              | 5.5    |
| [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99] | 94.0   |

### 입출력 예 설명

---

입출력 예 #1

- `numbers`의 원소들의 평균 값은 5.5입니다.

입출력 예 #2

- `numbers`의 원소들의 평균 값은 94.0입니다.

## 풀이 & 걸린시간

---

- 걸린시간: 6m 49s

- 풀이

```jsx
function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  answer /= numbers.length;
  return answer;
}
```

## 느낀 점

---

나눗셈의 /와 %에 대해서 조금 헷갈렸고 for문안에서 +=을 해줘서 계속 누적해야했는데 +를 생략해서 작성해서 값이 제대로 나오지 않아서 좀 당황스러웠다. 그렇지만 원인을 빨리 찾아내서 문제를 풀 수 있었다. /는 몫을 구한느 것이고 %는 나머지를 구한 다는 것도 확실하게 인지할 수 있었다.
