---
layout: post
title: '[프로그래머스 / lv1] 행렬의 덧셈'
subtitle: '[프로그래머스 / lv1] 행렬의 덧셈'
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

행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

### 제한 조건

---

- 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

### 입출력 예

---

| arr1          | arr2          | return        |
| ------------- | ------------- | ------------- |
| [[1,2],[2,3]] | [[3,4],[5,6]] | [[4,6],[7,9]] |
| [[1],[2]]     | [[3],[4]]     | [[4],[6]]     |

### 풀이

---

```jsx
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let twoDimension = [];
    for (let j = 0; j < arr1[i].length; j++) {
      twoDimension.push(arr1[i][j] + arr2[i][j]);
      if (twoDimension.length === arr1[i].length) {
        answer.push(twoDimension);
      }
    }
  }
  return answer;
}
```

### 느낀점

---

for문을 이용하면 좀 더 빠르게 풀 수 있겠다 생각하여 for문으로 풀었는데 map으로도 충분히 풀 수 있는 문제였다. 처음에는 어떻게 풀지 감이 안왔지만 차근차근 생각해보니 전역에 answer배열하나 for문안에 twoDimension이라는 변수 하나를 선언해두고 문제에 접근하니 금방 문제가 풀렸다.
