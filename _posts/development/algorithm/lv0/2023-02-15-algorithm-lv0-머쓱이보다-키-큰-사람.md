---
layout: post
title: "[프로그래머스 / lv0] 머쓱이보다 키 큰 사람"
subtitle: "[프로그래머스 / lv0] 머쓱이보다 키 큰 사람"
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

머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 `array`와 머쓱이의 키 `height`가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

### 제한사항

---

- 1 ≤ `array`의 길이 ≤ 100
- 1 ≤ `height` ≤ 200
- 1 ≤ `array`의 원소 ≤ 200

### 입출력 예

---

| array                | height | result |
| -------------------- | ------ | ------ |
| [149, 180, 192, 170] | 167    | 3      |
| [180, 120, 140]      | 190    | 0      |

### 입출력 예 설명

---

입출력 예 #1

- 149, 180, 192, 170 중 머쓱이보다 키가 큰 사람은 180, 192, 170으로 세 명입니다.

입출력 예 #2

- 180, 120, 140 중 190보다 큰 수는 없으므로 0명입니다.

## 풀이 & 걸린시간

---

- 걸린시간: 2m 02s
- 풀이

```jsx
function solution(array, height) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      answer++;
    }
  }
  return answer;
}
```

## 느낀 점

---

for문을 이용해서 if로 머쓱이보다 큰 사람을 카운트를 하나씩 증가시키는 방법으로 문제를 접근해서 풀었다. 그러나 다른 사람은 filter를 이용해 얻어진 값의 길이를 반환하는 것이었다. 정말 간결하고 보기 좋은 코드 같았다.
