---
layout: post
title: '[프로그래머스 / lv0] 점의 위치 구하기'
subtitle: '[프로그래머스 / lv0] 점의 위치 구하기'
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

사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

![https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/b58d4788-42fa-44fa-af50-481907e65473/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-07-07%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.27.04%20%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1%E1%84%87%E1%85%A9%E1%86%AB.png](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/b58d4788-42fa-44fa-af50-481907e65473/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-07-07%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.27.04%20%E1%84%87%E1%85%A9%E1%86%A8%E1%84%89%E1%85%A1%E1%84%87%E1%85%A9%E1%86%AB.png)

- x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
- x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
- x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
- x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.

x 좌표 (x, y)를 차례대로 담은 정수 배열 `dot`이 매개변수로 주어집니다. 좌표 `dot`이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

### **제한사항**

---

- `dot`의 길이 = 2
- `dot[0]`은 x좌표를, `dot[1]`은 y좌표를 나타냅니다
- 500 ≤ `dot`의 원소 ≤ 500
- `dot`의 원소는 0이 아닙니다.

### **입출력 예**

---

| dot     | result |
| ------- | ------ |
| [2, 4]  | 1      |
| [-7, 9] | 2      |

### **입출력 예 설명**

---

입출력 예 #1

- `dot`이 [2, 4]로 x 좌표와 y 좌표 모두 양수이므로 제 1 사분면에 속합니다. 따라서 1을 return 합니다.

입출력 예 #2

- `dot`이 [-7, 9]로 x 좌표가 음수, y 좌표가 양수이므로 제 2 사분면에 속합니다. 따라서 2를 return 합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 2m 34s
- 풀이

```jsx
function solution(dot) {
  let answer = 0;
  const x = dot[0];
  const y = dot[1];

  if (x > 0 && y > 0) answer = 1;
  if (x < 0 && y > 0) answer = 2;
  if (x < 0 && y < 0) answer = 3;
  if (x > 0 && y < 0) answer = 4;

  return answer;
}
```

## 느낀 점

---

문제를 읽고 그냥 원초적으로 접근해서 문제를 풀었다. 근데 채점을 하고 난 후 다른사람의 풀이를 보니 내가 전혀 생각하지도 못한 풀이가 있었다. 그것은 바로 구조분해 할당을 이용해서 dot를 받은 것이다. `const [num,num2] = dot;` 이런식으로 구조분해할당을 이용하셨는데 아직 배울게 정말 많고 기초적인 개념을 이용해야겠다는 생각을 하게되었다.
