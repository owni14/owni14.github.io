---
layout: post
title: "[프로그래머스 / lv0] 문자열 뒤집기"
subtitle: "[프로그래머스 / lv0] 문자열 뒤집기"
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

문자열 `my_string`이 매개변수로 주어집니다. `my_string`을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `my_string`의 길이 ≤ 1,000

### 입출력 예

---

| my_string | return  |
| --------- | ------- |
| "jaron"   | "noraj" |
| "bread"   | "daerb" |

### 입출력 예 설명

---

입출력 예 #1

- `my_string`이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.

입출력 예 #2

- `my_string`이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 2m 40s
- 풀이

```jsx
function solution(my_string) {
  let answer = "";
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }
  return answer;
}
```

## 느낀 점

---

보통 for문을 0부터 시작하여 증가하는 식으로 이루어지는데 my_string의 길이보다 하나 작은 값으로 시작하면 배열의 마지막문자부터 나오니까 i를 감소하는 형식으로 진행하였다. 채점 후 다른 사람의 풀이를 보니 reverse와 join을 사용하는 사람들이 좀 있어 기초적인 것을 공부해야겠다고 많이 생각했다.
