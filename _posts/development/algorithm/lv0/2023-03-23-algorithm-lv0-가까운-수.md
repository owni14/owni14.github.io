---
layout: post
title: "[프로그래머스 / lv0] 가까운 수"
subtitle: "[프로그래머스 / lv0] 가까운 수"
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

정수 배열 `array`와 정수 `n`이 매개변수로 주어질 때, `array`에 들어있는 정수 중 `n`과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `array`의 길이 ≤ 100
- 1 ≤ `array`의 원소 ≤ 100
- 1 ≤ `n` ≤ 100
- 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.

### 입출력 예

---

| array        | n   | result |
| ------------ | --- | ------ |
| [3, 10, 28]  | 20  | 28     |
| [10, 11, 12] | 13  | 12     |

### 입출력 예 설명

---

입출력 예 #1

- 3, 10, 28 중 20과 가장 가까운 수는 28입니다.

입출력 예 #2

- 10, 11, 12 중 13과 가장 가까운 수는 12입니다.

## 풀이 & 걸린시간

---

- 걸린시간: 18m 36s
- 풀이

```jsx
function solution(array, n) {
  let sortedArr = [...array, n].sort((a, b) => a - b);

  const foundIndex = sortedArr.findIndex((el) => el === n);
  const beforeVal = sortedArr[foundIndex - 1];
  const afterVal = sortedArr[foundIndex + 1];

  const calBeforeVal = n - beforeVal;
  const calAfterVal = afterVal - n;

  let result = calBeforeVal > calAfterVal ? afterVal : beforeVal;

  return result;
}
```

## 느낀 점

---

처음에 도무지 어떻게 풀어야하는지 감이 오지 않았다. 처음 생각한 건 if를 써서 각각 비교를 통해 구하면 어떻게 구해지지 않을까라고 생각했지만 너무 복잡하게 느껴졌고 이 방법은 아니라고 생각들었다. 그렇게 시간을 계속 보내던 중 문득 떠오른데 sort! 정렬이었다!

정렬을 통해 앞쪽 숫자와 뒤쪽 숫자를 비교해서 값이 더 작은 것을 결과 값으로 return해주면 될꺼 같다고 생각들어 해당 방법을 적용해보니 테스트를 통과하게 되었다. 이번 문제를 푸니 점수가 무려 13점을 받게되서 솔직히 놀랐다. 되게 많은 점수가 주어지니 뿌듯하기도 했고 나름 잘 푼거 같다고 생각이 들었다.
