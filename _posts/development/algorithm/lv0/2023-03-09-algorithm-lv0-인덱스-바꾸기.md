---
layout: post
title: "[프로그래머스 / lv0] 인덱스 바꾸기"
subtitle: "[프로그래머스 / lv0] 인덱스 바꾸기"
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

문자열 `my_string`과 정수 `num1`, `num2`가 매개변수로 주어질 때, `my_string`에서 인덱스 `num1`과 인덱스 `num2`에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

---

- 1 < `my_string`의 길이 < 100
- 0 ≤ `num1`, `num2` < `my_string`의 길이
- `my_string`은 소문자로 이루어져 있습니다.
- `num1` ≠ `num2`

### 입출력 예

---

| my_string    | num1 | num2 | result       |
| ------------ | ---- | ---- | ------------ |
| "hello"      | 1    | 2    | "hlelo"      |
| "I love you" | 3    | 6    | "I l veoyou" |

### 입출력 예 설명

---

입출력 예 #1

- "hello"의 1번째 인덱스인 "e"와 2번째 인덱스인 "l"을 바꾸면 "hlelo"입니다.

입출력 예 #2

- "I love you"의 3번째 인덱스 "o"와 " "(공백)을 바꾸면 "I l veoyou"입니다.

## 풀이 & 걸린시간

---

- 걸린시간: 11m 06s
- 풀이

```jsx
function solution(my_string, num1, num2) {
  const arrayStr = [...my_string];
  const num1Str = arrayStr[num1];
  const num2Str = arrayStr[num2];

  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (num1 === i) {
      answer += num2Str;
    } else if (num2 === i) {
      answer += num1Str;
    } else {
      answer += my_string[i];
    }
  }
  return answer;
}
```

## 느낀 점

---

문자열을 어떻게 바꿀지 생각하는데 되게 오래걸린거 같다. 문자열을 for문 돌려서 해보고 slice로 잘라도 보고 replace를 사용해보고 이런저런 방법을 다 써봤지만 테스트 통과를 하지 못하였다.

문제를 다 풀고 다른 사람의 풀이를 보고 느낀게 정말 많았다. 내가 엄~청 돌아서 풀고 풀었다라는 생각이 들었고 아직 JS개념이 확실하지 않구나라는 생각을 하게 되었다. 나는 spread operator을 이용해서 배열을 만들어서 문제를 풀었는데 다른 사람들은 그냥 `string.split(’’)`을 사용하는 것이었다. 쉽게 갈 수 있었는데 굳이 가독성이 떨어지게 쓴게 아닌가 싶다.

그리고 다른 사람은 비구조화 할당으로 정말 편하게 썼는데 나는 for문을 돌리면서 어렵고 어렵게 푼거 같다는 생각이 들었다. 그래도 이번에 학습한 string.split(’’)과 비구조화 할당은 좀 확실하게 알고 가는거 같다.
