---
layout: post
title: "[프로그래머스 / lv0] 합성수 찾기"
subtitle: "[프로그래머스 / lv0] 합성수 찾기"
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

약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 `n`이 매개변수로 주어질 때 `n`이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `n` ≤ 100

### 입출력 예

---

| n   | result |
| --- | ------ |
| 10  | 5      |
| 15  | 8      |

### 입출력 예 설명

---

입출력 예 #1

- 10 이하 합성수는 4, 6, 8, 9, 10 로 5개입니다. 따라서 5를 return합니다.

입출력 예 #1

- 15 이하 합성수는 4, 6, 8, 9, 10, 12, 14, 15 로 8개입니다. 따라서 8을 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 18m 13s
- 풀이

```jsx
function solution(n) {
  let totalCount = 0;

  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
      if (j === i) {
        if (count >= 3) {
          totalCount++;
          count = 0;
        }
      }
    }
  }

  return totalCount;
}
```

## 느낀 점

---

문제를 처음 읽고 이해하고 어떻게 푸는지 고민하는데 시간이 상당히 오래걸렸다. 정말 문제를 어떻게 접근하고 풀어야할지 막막했는데 for문을 두번 돌려서 어찌어찌해서 풀자고 생각하였다. 나는 제일 먼저 입력된 n값 만큼 반복하는 for문을 하나 만들었고 안쪽 for문에는 1부터 시작해서 i의 숫자중 해당 숫자들의 약수개수가 몇개인지 확인하기 위해 작성하였다.

만약 i %j를 하였을 경우에는 count를 증가시키는데 이 count는 합성수인지 확인하기 위한 count인 것이다. 그 후 안쪽 for문이 마지막으로 돌때 약수의 개수가 3개 이상 즉, 합성수이면 전체 합성수를 하나 증가시켜주고 for문안의 count를 0으로 초기화 시켜 다음숫자를 받을 준비를 했다.

이번에 푼 문제에 대해 느낀 점과 풀이 방법을 같이 적어보았는데 풀이법이 조금 이해하기 어려울 수 있겠다. 혹시 이해가 잘 안가거나 궁금한 점이 있으면 댓글로 남겨주면 읽고 답을 하겠다.
