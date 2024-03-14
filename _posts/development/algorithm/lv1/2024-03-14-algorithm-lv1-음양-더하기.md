---
layout: post
title: '[프로그래머스 / lv1] 음양 더하기'
subtitle: '[프로그래머스 / lv1] 음양 더하기'
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

어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

### 제한사항

---

- absolutes의 길이는 1 이상 1,000 이하입니다.
  - absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
- signs의 길이는 absolutes의 길이와 같습니다.
  - `signs[i]` 가 참이면 `absolutes[i]` 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

### 입출력 예

---

| absolutes | signs              | result |
| --------- | ------------------ | ------ |
| [4,7,12]  | [true,false,true]  | 9      |
| [1,2,3]   | [false,false,true] | 0      |

### 입출력 예 설명

---

**입출력 예 #1**

- signs가 `[true,false,true]` 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
- 따라서 세 수의 합인 9를 return 해야 합니다.

**입출력 예 #2**

- signs가 `[false,false,true]` 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
- 따라서 세 수의 합인 0을 return 해야 합니다.

### 풀이

---

```jsx
function solution(absolutes, signs) {
  const convertedNum = absolutes.map((item, idx) =>
    signs[idx] ? item : -item
  );
  const answer = convertedNum.reduce((acc, cur) => acc + cur, 0);
  return answer;
}
```

### 느낀점

---

나는 배열을 한번 돌려서 부호가 있는 숫자 배열을 만들고 그 후 reduce를 이용해 값을 더하는 형식으로 답을 구했다. 그러나 다른 사람의 풀이는 그냥 reduce하나만을 사용해 간결하게 문제를 푼 것이었다. 해당 풀이를 보고 간단하게 문제풀 수도 있겠구나라는 생각을 많이 하게 되었고 배열 메서드를 두번이나 쓴 나를 좀 돌아보게되었다.
