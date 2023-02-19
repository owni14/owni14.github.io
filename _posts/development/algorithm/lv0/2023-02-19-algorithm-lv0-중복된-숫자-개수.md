---
layout: post
title: "[프로그래머스 / lv0] 중복된 숫자 개수"
subtitle: "[프로그래머스 / lv0] 중복된 숫자 개수"
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

정수가 담긴 배열 `array`와 정수 `n`이 매개변수로 주어질 때, `array`에 `n`이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

### 제한사항

---

- 1 ≤ `array`의 길이 ≤ 100
- 0 ≤ `array`의 원소 ≤ 1,000
- 0 ≤ `n` ≤ 1,000

### 입출력 예

---

| array              | n   | result |
| ------------------ | --- | ------ |
| [1, 1, 2, 3, 4, 5] | 1   | 2      |
| [0, 2, 3, 4]       | 1   | 0      |

### 입출력 예 설명

---

입출력 예 #1

- [1, 1, 2, 3, 4, 5] 에는 1이 2개 있습니다.

입출력 예 #2

- [0, 2, 3, 4] 에는 1이 0개 있습니다.

## 풀이 & 걸린시간

---

- 걸린시간: 2m 27s
- 풀이

```jsx
function solution(array, n) {
  const result = array.filter((item) => item === n);
  return result.length;
}
```

## 느낀 점

---

map이나 filter를 사용하면 되겠다는 느낌이 들었다. 그래서 일단 map을 먼저 사용해봤는데 map은 새로운 배열로 반환하기 때문에 `array.map((item) ⇒ item === n)` 으로 작성하게 되면 **true, false** 가 나오게 되어 내가 원하는 답이 나오지 않았다. 그래서 filter를 이용해서 n과 같은 값을 추출한 다음 `.length` 로 길이를 구해주었다.
