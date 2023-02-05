---
layout: post
title: '[프로그래머스 / lv0] 각도기'
subtitle: '[프로그래머스 / lv0] 각도기'
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

각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 `angle`이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

- 예각 : 0 < `angle` < 90
- 직각 : `angle` = 90
- 둔각 : 90 < `angle` < 180
- 평각 : `angle` = 180

### 제한사항

---

- 0 < `angle` ≤ 180
- `angle`은 정수입니다.

### 입출력 예

---

| angle | result |
| ----- | ------ |
| 70    | 1      |
| 91    | 3      |
| 180   | 4      |

### 입출력 예 설명

---

입출력 예 #1

- `angle`이 70이므로 예각입니다. 따라서 1을 return합니다.

입출력 예 #2

- `angle`이 91이므로 둔각입니다. 따라서 3을 return합니다.

입출력 예 #2

- `angle`이 180이므로 평각입니다. 따라서 4를 return합니다.

## 풀이 & 걸리시간

---

- 걸린시간 : 5m 37s

- 풀이

```jsx
function solution(angle) {
  let answer = 0;

  if (0 < angle && angle < 90) answer = 1;
  if (angle === 90) answer = 2;
  if (90 < angle && angle < 180) answer = 3;
  if (angle === 180) answer = 4;

  return answer;
}
```

## 느낀 점

---

다른 사람의 풀이를 보니 filter를 사용하는 사람도 있고 삼항 연산자를 사용하는 사람도 있었다. 나는 switch나 if문 밖에 생각 하지 못하였는데 좀 더 다양하게 생각할 필요가 있을꺼 같다.

그리고 처음에 0 < angle < 90이라고 하니 결과값이 잘 나오지 않았는데 나의 실수였다. 아무 생각없이 그냥 비교를 하고 있었기 때문에 아차 싶어서 &&연산자를 활용한 식으로 바꾸어주었다.
