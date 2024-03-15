---
layout: post
title: '[프로그래머스 / lv1] 제일 작은 수 제거하기'
subtitle: '[프로그래머스 / lv1] 제일 작은 수 제거하기'
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

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

### 제한 조건

---

- arr은 길이 1 이상인 배열입니다.
- 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

### 입출력 예

---

| arr       | return  |
| --------- | ------- |
| [4,3,2,1] | [4,3,2] |
| [10]      | [-1]    |

### 풀이

---

```jsx
function solution(arr) {
  let exNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (exNum > arr[i]) {
      exNum = arr[i];
    }
  }
  const answer = arr.filter((num) => num !== exNum);
  return answer.length ? answer : [-1];
}
```

### 느낀점

---

처음 입출력 예의 첫번째 배열을 보고 순서대로 정렬하고 제일 작은 수를 빼고 반환해야겠다고 생각하여 아래와 같이 풀이를 작성하였다.

```jsx
function solution(arr) {
  arr.sort((a, b) => b - a).pop();
  return arr.length ? arr : [-1];
}
```

그러나 문제는 분명 순서대로 정렬하라는 소리도 없었고 단지 작은 수만 제거하라는 말이었는데 내가 생각이 짧았던거 같다. 난 for문을 쓰고 filter를 사용해서 문제를 풀었지만 다른 사람들은 Math.min이라는 메서드를 사용해서 문제를 풀었다. Math.min은 한번도 사용해본적도 본적도 없었던 메서드여서 이번에 새로 알게되었던거 같다.
