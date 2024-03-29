---
layout: post
title: '[프로그래머스 / lv0] 양꼬치'
subtitle: '[프로그래머스 / lv0] 양꼬치'
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

머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 `n`과 `k`가 매개변수로 주어졌을 때, 양꼬치 `n`인분과 음료수 `k`개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

### 제한사항

---

- n / 10 ≤ `k` < 1,000
- 서비스로 받은 음료수는 모두 마십니다.

### 입출력 예

---

| n   | k   | result  |
| --- | --- | ------- |
| 10  | 3   | 124,000 |
| 64  | 6   | 768,000 |

### 입출력 예 설명

---

입출력 예 #1

- 10인분을 시켜 서비스로 음료수를 하나 받아 총 10 _ 12000 + 3 _ 2000 - 1 \* 2000 = 124,000원입니다.

입출력 예 #2

- 64인분을 시켜 서비스로 음료수를 6개 받아 총 64 _ 12000 + 6 _ 2000 - 6 \* 2000 =768,000원입니다.

## 풀이 & 걸린시간

---

- 걸린시간: 14m 16s
- 풀이

```jsx
function solution(n, k) {
  let total = 0;
  let food = 12000;
  let drink = 2000;

  food *= n;
  drink *= k;

  const subCount = Math.floor(n / 10);

  total = food + drink - subCount * 2000;
  return total;
}
```

## 느낀 점

---

문제를 읽고 금방 풀 수 있겠다! 라는 생각이 들어 풀어봤는데 막상 잘 되지 않았다. 나는 제일 처음 양꼬치 개수의 인분은 %로 나누어 0이 나오면 `subCount -= drink` 를 하였는데 %로 나누었을때 0이 나오는 것은 10, 20, 30과 같이 일의 자리수가 딱 0인것만 나왔었다.

그래서 다시 문제를 읽어보니 64인분도 있었고 나중에 88인분 등 여러 인분이 나올 가능성이 있다고 가정해서 10으로 나누었을때 나오는 몫을 소수점 제외하고 정수만 추출해서 2000을 곱해줬더니 테스트를 정상적으로 통과했다. 여러 방면으로 깊게 생각할 필요가 있을꺼 같다.
