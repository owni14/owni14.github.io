---
layout: post
title: '[프로그래머스 / lv0] 마지막 두 원소'
subtitle: '[프로그래머스 / lv0] 마지막 두 원소'
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

정수 리스트 `num_list`가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 2 ≤ `num_list`의 길이 ≤ 10
- 1 ≤ `num_list`의 원소 ≤ 9

### 입출력 예

---

| num_list        | result              |
| --------------- | ------------------- |
| [2, 1, 6]       | [2, 1, 6, 5]        |
| [5, 2, 1, 7, 5] | [5, 2, 1, 7, 5, 10] |

### 입출력 예 설명

---

입출력 예 #1

- 마지막 원소인 6이 그전 원소인 1보다 크기 때문에 6 - 1인 5를 추가해 return합니다.

입출력 예 #2

- 마지막 원소인 5가 그전 원소인 7보다 크지 않기 때문에 5의 두 배인 10을 추가해 return합니다.

### 풀이

---

```jsx
function solution(num_list) {
  const getNum = num_list.reduce(
    (acc, cur, idx) => {
      if (idx === num_list.length - 2) {
        return {
          ...acc,
          beforeLast: cur,
        };
      } else if (idx === num_list.length - 1) {
        return {
          ...acc,
          last: cur,
        };
      }
      return acc;
    },
    { beforeLast: 0, last: 0 }
  );

  return [
    ...num_list,
    getNum.beforeLast < getNum.last
      ? getNum.last - getNum.beforeLast
      : getNum.last * 2,
  ];
}
```

### 느낀점

---

이번에는 평소보다 시간이 좀 걸렸던거 같다. 그 이유가 나는 reduce를 이용해서 처리하고 싶어서 이것저것 시도해보다 결국 저렇게 좀 지저분한 코드가 나왔다.. 결과적으로는 통과지만 리팩토링이 무조건 필요한 코드인거 같다.
다른 사람들의 풀이를 보니 slice를 이용하여 간단하게 풀이한 사람도 있었다 나는 slice를 이용하더라도 제일 마지막꺼 하나, 제일 마지막 전꺼 하나 이렇게 나눠서 할 생각이었으나 다른분들은 다르게 풀어서 되게 내가 생각이 많구나라고 생각했다.
