---
layout: post
title: "[프로그래머스 / lv0] 배열 회전시키기"
subtitle: "[프로그래머스 / lv0] 배열 회전시키기"
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

정수가 담긴 배열 `numbers`와 문자열 `direction`가 매개변수로 주어집니다. 배열 `numbers`의 원소를 `direction`방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 3 ≤ `numbers`의 길이 ≤ 20
- `direction`은 "left" 와 "right" 둘 중 하나입니다.

### 입출력 예

---

| numbers                   | direction | result                    |
| ------------------------- | --------- | ------------------------- |
| [1, 2, 3]                 | "right"   | [3, 1, 2]                 |
| [4, 455, 6, 4, -1, 45, 6] | "left"    | [455, 6, 4, -1, 45, 6, 4] |

### 입출력 예 설명

---

입출력 예 #1

- `numbers` 가 [1, 2, 3]이고 `direction`이 "right" 이므로 오른쪽으로 한 칸씩 회전시킨 [3, 1, 2]를 return합니다.

입출력 예 #2

- `numbers` 가 [4, 455, 6, 4, -1, 45, 6]이고 `direction`이 "left" 이므로 왼쪽으로 한 칸씩 회전시킨 [455, 6, 4, -1, 45, 6, 4]를 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 20m 16s
- 풀이

```jsx
function solution(numbers, direction) {
  let answer = [];

  if (direction === "left") {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers.length - 1 === i) {
        answer.push(numbers[0]);
      } else {
        answer.push(numbers[i + 1]);
      }
    }
  }

  if (direction === "right") {
    for (let i = 0; i < numbers.length; i++) {
      if (i === 0) {
        answer.push(numbers[numbers.length - 1]);
      } else {
        answer.push(numbers[i - 1]);
      }
    }
  }

  return answer;
}
```

## 느낀 점

---

오늘은 하루종일 좀 바쁘기도 했고 머리가 너무 아파서 한 문제만 풀기로 했다. 문제를 보는데 생각보다 쉬울꺼 같다는 생각이 들었지만 막상 푸니까 잘 되지 않았다. 풀어보니 코드가 좀 많이 복잡하다는 생각이 들었고 추후에 다시 보면서 깔끔한 코드로 풀어야겠다는 생각을 했다.
