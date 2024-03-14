---
layout: post
title: '[프로그래머스 / lv1] 서울에서 김서방 찾기'
subtitle: '[프로그래머스 / lv1] 서울에서 김서방 찾기'
category: dev
tag: algorithm
image:
  path: /assets/img/algorithm.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## 문제

### **문제 설명**

---

String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

### 제한 사항

---

- seoul은 길이 1 이상, 1000 이하인 배열입니다.
- seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
- "Kim"은 반드시 seoul 안에 포함되어 있습니다.

### 입출력 예

---

| seoul           | return              |
| --------------- | ------------------- |
| ["Jane", "Kim"] | "김서방은 1에 있다" |

### 풀이

---

```jsx
function solution(seoul) {
  const findIndex = seoul.findIndex((item) => item === 'Kim');
  const answer = `김서방은 ${findIndex}에 있다`;
  return answer;
}
```

### 느낀점

---

문제를 보고 아! Kim이라는 문자열이 있는 index를 찾는거구나라는 생각을 바로해 findIndex메서드를 적용해 값을 구해냈다. 그런데 indexOf를 이용해서도 인덱스를 구해낼 수 있어서 대부분의 사람들은 indexOf를 사용한거 같았다.
