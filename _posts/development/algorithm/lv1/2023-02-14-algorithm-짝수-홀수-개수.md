---
layout: post
title: '[프로그래머스 / lv0] 짝수 홀수 개수'
subtitle: '[프로그래머스 / lv0] 짝수 홀수 개수'
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

정수가 담긴 리스트 `num_list`가 주어질 때, `num_list`의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

---

- 1 ≤ `num_list`의 길이 ≤ 100
- 0 ≤ `num_list`의 원소 ≤ 1,000

### 입출력 예

---

| num_list        | result |
| --------------- | ------ |
| [1, 2, 3, 4, 5] | [2, 3] |
| [1, 3, 5, 7]    | [0, 4] |

### 입출력 예 설명

---

입출력 예 #1

- [1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.

입출력 예 #2

- [1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.

## 풀이 & 걸린시간

---

- 걸린시간: 11m 09s
- 풀이

```jsx
function solution(num_list) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }

  const result = [even, odd];
  return result;
}
```

## 느낀 점

---

map을 써보기도 했고 여러 방법을 써봤지만 for문을 쓰는게 좋겠다라는 생각이 들었다. 식이 좀 복잡해서 상당히 별로지만 문제를 읽고 오직 내 머릿속 내용으로 풀 수 있는 방법이 저 풀이법 밖에 없었다. 그런데 다른 사람의 풀이를 보니 filter를 사용하기도 하고 for of를 사용하기도 해서 놀라웠다.

나는 for in을 사용했었는데 내가 식을 잘못이해해서 제대로 풀이가 나오지 않았다. 좀 더 다양한 방법으로 다음번엔 접근 해보려고 한다.
