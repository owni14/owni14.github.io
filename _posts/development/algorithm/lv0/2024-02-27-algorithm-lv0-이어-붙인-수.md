---
layout: post
title: '[프로그래머스 / lv0] 이어 붙인 수'
subtitle: '[프로그래머스 / lv0] 이어 붙인 수'
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

정수가 담긴 리스트 `num_list`가 주어집니다. `num_list`의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 2 ≤ `num_list`의 길이 ≤ 10
- 1 ≤ `num_list`의 원소 ≤ 9
- `num_list`에는 적어도 한 개씩의 짝수와 홀수가 있습니다.

### 입출력 예

---

| num_list        | result |
| --------------- | ------ |
| [3, 4, 5, 2, 1] | 393    |
| [5, 7, 8, 3]    | 581    |

### 입출력 예 설명

---

입출력 예 #1

- 홀수만 이어 붙인 수는 351이고 짝수만 이어 붙인 수는 42입니다. 두 수의 합은 393입니다.

입출력 예 #2

- 홀수만 이어 붙인 수는 573이고 짝수만 이어 붙인 수는 8입니다. 두 수의 합은 581입니다.

### 풀이

---

```jsx
function solution(num_list) {
  const { even, odd } = num_list.reduce(
    (acc, cur) => {
      let curEven = '';
      let curOdd = '';
      if (cur % 2 === 0) {
        curEven = cur.toString();
      } else {
        curOdd = cur.toString();
      }
      return { even: acc.even + curEven, odd: acc.odd + curOdd };
    },
    { even: '', odd: '' }
  );

  const answer = Number(even) + Number(odd);
  return answer;
}
```

### 느낀점

---

reduce를 사용해 구조분해 할당으로 짝수, 홀수를 받아서 사용하면 좀 더 가독성이 높지 않을까라는 생각을하여 해당 방법으로 코드를 작성했다.
