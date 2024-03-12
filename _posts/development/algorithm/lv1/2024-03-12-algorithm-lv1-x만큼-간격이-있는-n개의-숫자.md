---
layout: post
title: '[프로그래머스 / lv1] x만큼 간격이 있는 n개의 숫자'
subtitle: '[프로그래머스 / lv1] x만큼 간격이 있는 n개의 숫자'
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

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

### **제한 조건**

---

- x는 -10000000 이상, 10000000 이하인 정수입니다.
- n은 1000 이하인 자연수입니다.

### **입출력 예**

---

| x   | n   | answer       |
| --- | --- | ------------ |
| 2   | 5   | [2,4,6,8,10] |
| 4   | 3   | [4,8,12]     |
| -4  | 2   | [-4, -8]     |

### 풀이

---

```jsx
function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
```

### 느낀점

---

for문 밖에 생각이 안나서 for문으로 했는데 다른 사람들의 풀이를 보니 for문을 사용하지 않고도 문제를 풀어서 신기했다. 처음에 for문 안쪽에서 `answer[i] + x` 로 코드 실행을 했는데 배열 안의 값이 null이 계속 나오고 있었다 생각해보니까 아직 해당 인덱스는 값이 할당 되지 않은상태인데 자꾸만 가져와서 쓰려고 하니까 값이 비어있는거 같았다. 그래서 console울 찍어보니 다 undefined가 나왔다.
