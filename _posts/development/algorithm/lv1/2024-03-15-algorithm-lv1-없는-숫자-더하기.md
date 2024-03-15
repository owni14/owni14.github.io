---
layout: post
title: '[프로그래머스 / lv1] 없는 숫자 더하기'
subtitle: '[프로그래머스 / lv1] 없는 숫자 더하기'
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

0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 `numbers`가 매개변수로 주어집니다. `numbers`에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `numbers`의 길이 ≤ 9
  - 0 ≤ `numbers`의 모든 원소 ≤ 9
  - `numbers`의 모든 원소는 서로 다릅니다.

### 입출력 예

---

| numbers           | result |
| ----------------- | ------ |
| [1,2,3,4,6,7,8,0] | 14     |
| [5,8,4,0,6,7,9]   | 6      |

### 입출력 예 설명

---

**입출력 예 #1**

- 5, 9가 `numbers`에 없으므로, 5 + 9 = 14를 return 해야 합니다.

**입출력 예 #2**

- 1, 2, 3이 `numbers`에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

### 풀이

---

```jsx
function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }

  return answer;
}
```

### 느낀점

---

문제를 보고 for문으로 접근해야겠다고 생각을 해서 0부터 9까지 반복문을 통해 없는 숫자들은 answer에 누적해서 더한 값을 반환했다. 빨리 풀었던 문제였던거 같다.
