---
layout: post
title: "[프로그래머스 / lv0] 가위 바위 보"
subtitle: "[프로그래머스 / lv0] 가위 바위 보"
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

가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 `rsp`가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

### 제한사항

---

- 0 < `rsp`의 길이 ≤ 100
- `rsp`와 길이가 같은 문자열을 return 합니다.
- `rsp`는 숫자 0, 2, 5로 이루어져 있습니다.

### 입출력 예

---

| rsp   | result |
| ----- | ------ |
| "2"   | "0"    |
| "205" | "052"  |

### 입출력 예 설명

---

입출력 예 #1

- "2"는 가위이므로 바위를 나타내는 "0"을 return 합니다.

입출력 예 #2

- "205"는 순서대로 가위, 바위, 보이고 이를 모두 이기려면 바위, 보, 가위를 순서대로 내야하므로 “052”를 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 6m 47s
- 풀이

```jsx
function solution(rsp) {
  const answer = rsp.replace(/2|0|5/g, (v) => {
    switch (v) {
      case "2":
        return 0;
      case "0":
        return 5;
      case "5":
        return 2;
    }
  });
  return answer;
}
```

## 느낀 점

---

정규표현식을 이용하여 문자들을 모두 이기게 바꾸어 주면 되지 않을까라는 생각으로 접근을 하였다. 최근에도 정규표현식을 이용해 문제를 풀었던 기억이 있기 때문에 이번에 정규표현식은 저번보다는 어렵지 않게 사용할 수 있었다.
