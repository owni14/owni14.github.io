---
layout: post
title: '[프로그래머스 / lv0] 짝수의 합'
subtitle: '[프로그래머스 / lv0] 짝수의 합'
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

정수 `n`이 주어질 때, `n`이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

### 제한사항

---

0 < `n` ≤ 1000

### 입출력 예

---

| n   | result |
| --- | ------ |
| 10  | 30     |
| 4   | 6      |

---

### 입출력 예 설명

입출력 예 #1

- `n`이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.

입출력 예 #2

- `n`이 4이므로 2 + 4 = 6을 return 합니다.

## 풀이 & 걸린시간

---

- 걸린시간 : 20m (풀지 못함)

- 풀이

```jsx
// 내가 푼 풀이
function solution(n) {
  let sum = 0;

  if (n % 2 === 0) {
    // 2부터 n의 숫자까지 2씩 더해주면 됨
    for (let i = 0; i <= n; i += 2) {
      sum += i;
    }
  }
  return answer;
}

// 다른 사람이 푼 풀이
function solution(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}
```

## 느낀 점

---

React나 Next.js를 쓰다보니 map, filter등의 함수를 많이 사용하고 for문을 거의 사용하지 않았다. 그래서 문제를 보고 어떻게 하지 고민하다가 for문을 사용하려고 하니까 막상 잘 생각나지 않았지만 골똘히 생각해서 풀이를 작성했다.

근데 내 풀이는 시간이 좀 많이 걸리긴 했지만 테스트는 잘 넘어갔고 채점하기에서 하나가 실패해서 넘어가지 못하였다. 그래서 어떻게 하지 많이 고민하다가 안될꺼 같아서 20분 제한을 걸어두고 찾아보았다.

다른 사람이 푼 풀이를 보니 생각보다 간단했으며 나는 n이 짝수인 것만 짝수의 합을 구한다고 생각했는데 그게 아니라 n이 어떤 숫자가 들어오던지 그 숫자의 짝수의 합을 구하는 문제였다. 내가 제대로 문제를 읽지 않고 풀어서 이런 상황이 발생한거 같다. 다음에는 문제를 좀 더 꼼꼼하게 읽고 이해하려고 노력해야겠다.
