---
layout: post
title: "[프로그래머스 / lv0] 숫자 찾기"
subtitle: "[프로그래머스 / lv0] 숫자 찾기"
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

정수 `num`과 `k`가 매개변수로 주어질 때, `num`을 이루는 숫자 중에 `k`가 있으면 `num`의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

---

- 0 < `num` < 1,000,000
- 0 ≤ `k` < 10
- `num`에 `k`가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.

### 입출력 예

---

| num    | k   | result |
| ------ | --- | ------ |
| 29183  | 1   | 3      |
| 232443 | 4   | 4      |
| 123456 | 7   | -1     |

### 입출력 예 설명

---

입출력 예 #1

- 29183에서 1은 3번째에 있습니다.

입출력 예 #2

- 232443에서 4는 4번째에 처음 등장합니다.

입출력 예 #3

- 123456에 7은 없으므로 -1을 return 합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 12m 54s
- 풀이

```jsx
function solution(num, k) {
  let arrNum = num.toString().split("");
  let result = 0;

  for (let i = 0; i < arrNum.length; i++) {
    if (parseInt(arrNum[i]) === k) {
      result = i + 1;
      break;
    }
  }

  if (result === 0) {
    result = -1;
  }

  return result;
}
```

## 느낀 점

---

정수로 나왔기 때문에 문자열로 바꾸고 배열로 바꾸어서 문제를 풀었다. 정말 매번 느끼는거지만 난 아직 갈길이 많이 멀다고 느껴진다. 다른 사람의 풀이를 보니 그냥 한 줄로 모든 풀이를 다 써서 풀었는데 그에 반해 나는 좀 더 길게 써서 나타내는거 같다는 생각이든다. 그래도 다른 사람 풀이를 보고 배울 수 있는건 가져가자는 형식으로 코테를 진행하고 있다.
