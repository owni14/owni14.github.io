---
layout: post
title: "[프로그래머스 / lv0] 주사위의 개수"
subtitle: "[프로그래머스 / lv0] 주사위의 개수"
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

머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 상자의 가로, 세로, 높이가 저장되어있는 배열 `box`와 주사위 모서리의 길이 정수 `n`이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

### 제한사항

---

- `box`의 길이는 3입니다.
- `box[0]` = 상자의 가로 길이
- `box[1]` = 상자의 세로 길이
- `box[2]` = 상자의 높이 길이
- 1 ≤ `box`의 원소 ≤ 100
- 1 ≤ `n` ≤ 50
- `n` ≤ `box`의 원소
- 주사위는 상자와 평행하게 넣습니다.

### 입출력 예

---

| box        | n   | result |
| ---------- | --- | ------ |
| [1, 1, 1]  | 1   | 1      |
| [10, 8, 6] | 3   | 12     |

### 입출력 예 설명

---

입출력 예 #1

- 상자의 크기가 가로 1, 세로 1, 높이 1이므로 모서리의 길이가 1인 주사위는 1개 들어갈 수 있습니다.

입출력 예 #2

- 상자의 크기가 가로 10, 세로 8, 높이 6이므로 모서리의 길이가 3인 주사위는 12개 들어갈 수 있습니다.

## 풀이 & 걸린시간

---

- 걸린시간: 15m 24s
- 풀이

```jsx
function solution(box, n) {
  let volume = [];
  let answer = 1;

  for (let i = 0; i < box.length; i++) {
    volume.push(Math.floor(box[i] / n));
  }

  for (const v of volume) {
    answer *= v;
  }

  return answer;
}
```

## 느낀 점

---

수학적 지식이 조금 필요해 문제를 이해하는데 시간이 좀 걸렸던거 같다. 그래도 시간이 걸려서 나의 힘으로 문제를 푸니 나름 뿌듯했지만 나중에 level1이나 2는 이해하는데 얼마나 걸릴까 걱정이 앞서기도 한다.
