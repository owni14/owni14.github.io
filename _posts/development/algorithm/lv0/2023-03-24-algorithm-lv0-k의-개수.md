---
layout: post
title: "[프로그래머스 / lv0] k의 개수"
subtitle: "[프로그래머스 / lv0] k의 개수"
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

1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 `i`, `j`, `k`가 매개변수로 주어질 때, `i`부터 `j`까지 `k`가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `i` < `j` ≤ 100,000
- 0 ≤ `k` ≤ 9

### 입출력 예

---

| i   | j   | k   | result |
| --- | --- | --- | ------ |
| 1   | 13  | 1   | 6      |
| 10  | 50  | 5   | 5      |
| 3   | 10  | 2   | 0      |

### 입출력 예 설명

---

입출력 예 #1

- 본문과 동일합니다.

입출력 예 #2

- 10부터 50까지 5는 15, 25, 35, 45, 50 총 5번 등장합니다. 따라서 5를 return 합니다.

입출력 예 #3

- 3부터 10까지 2는 한 번도 등장하지 않으므로 0을 return 합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 13m 19s
- 풀이

```jsx
function solution(i, j, k) {
  let answer = 0;

  for (let idx = i; idx <= j; idx++) {
    const arrIdx = idx.toString().split("");

    for (let idx2 = 0; idx2 < arrIdx.length; idx2++) {
      if (arrIdx[idx2] === k.toString()) answer++;
    }
  }

  return answer;
}
```

## 느낀 점

---

처음에 find를 이용해서 k이 있으면 answer를 하나씩 증가시키는 방법으로 풀었는데 풀리지 않았다.. 알고보니 k가 등장하는 개수 모두를 세어줘야했었다. 그래서 여러 방법을 고민하다가 정수를 문자열로바꾸고 거기서 한번 더 배열로 바꿔서 for문을 두번 돌려서 풀었다.

다른 사람의 풀이중에 가장 기억에 남는게 for를 이용해 숫자들을 한번에 다 합쳐서 split를 이용해서 개수를 자르는게 되게 인상적이었다. 나는 그렇게 생각하지도 못했는데 나도 좀 더 깊게 생각해야할꺼 같다.
