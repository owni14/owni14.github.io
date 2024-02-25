---
layout: post
title: '[프로그래머스 / lv0] 문자열 곱하기'
subtitle: '[프로그래머스 / lv0] 문자열 곱하기'
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

문자열 `my_string`과 정수 `k`가 주어질 때, `my_string`을 `k`번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

### 제한사항

---

- 1 ≤ `my_string`의 길이 ≤ 100
- `my_string`은 영소문자로만 이루어져 있습니다.
- 1 ≤ `k` ≤ 100

### 입출력 예

---

| my_string | k   | result                                     |
| --------- | --- | ------------------------------------------ |
| "string"  | 3   | "stringstringstring"                       |
| "love"    | 10  | "lovelovelovelovelovelovelovelovelovelove" |

### 입출력 예 설명

---

입출력 예 #1

- 예제 1번의 `my_string`은 "string"이고 이를 3번 반복한 문자열은 "stringstringstring"이므로 이를 return 합니다.

입출력 예 #2

- 예제 2번의 `my_string`은 "love"이고 이를 10번 반복한 문자열은 "lovelovelovelovelovelovelovelovelovelove"이므로 이를 return 합니다.

### 풀이

---

```jsx
function solution(my_string, k) {
  let result = '';
  for (i = 0; i < k; i++) {
    result += my_string;
  }
  return result;
}
```

### 느낀점

---

생각보다 시간이 좀 걸렸던 문제인거 같다. 왜냐하면 그냥 for문을 이용해 반복하면 금방 푼다고 생각했는데 나는 for문을 쓰기 싫어 다른 방법을 알아보다가 생각이 안나서 for문을 이용했다. 그런데 다른 사람의 풀이를 보니 repeat이라는 함수를 사용하고 있어서 놀라웠다. 나는 거의 사용하지 않는 함수였기 때문에 이번 기회에 새로 알게되어 좋았다.
