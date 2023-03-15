---
layout: post
title: "[프로그래머스 / lv0] 문자열 정렬하기(2)"
subtitle: "[프로그래머스 / lv0] 문자열 정렬하기(2)"
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

영어 대소문자로 이루어진 문자열 `my_string`이 매개변수로 주어질 때, `my_string`을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

---

- 0 < `my_string` 길이 < 100

### 입출력 예

---

| my_string | result   |
| --------- | -------- |
| "Bcad"    | "abcd"   |
| "heLLo"   | "ehllo"  |
| "Python"  | "hnopty" |

### 입출력 예 설명

---

입출력 예 #1

- "Bcad"를 모두 소문자로 바꾸면 "bcad"이고 이를 알파벳 순으로 정렬하면 "abcd"입니다.

입출력 예 #2

- "heLLo"를 모두 소문자로 바꾸면 "hello"이고 이를 알파벳 순으로 정렬하면 "ehllo"입니다.

입출력 예 #3

- "Python"를 모두 소문자로 바꾸면 "python"이고 이를 알파벳 순으로 정렬하면 "hnopty"입니다.

## 풀이 & 걸린시간

---

- 걸린시간: 13m 43s
- 풀이

```jsx
function solution(my_string) {
  let answer = my_string
    .toLowerCase()
    .split("")
    .sort((a, b) => {
      if (a < b) return -1;
    })
    .join("");
  return answer;
}
```

## 느낀 점

---

제일 처음에 정규표현식을 사용해서 대문자를 replace를 사용해서 소문자로 바꾸어주려고 했다. 근데 가만히 생각해보니 toLowerCase()라는 것이 있는데 굳이 돌아가야하나라는 생각이 들어 toLowerCase()로 바꾸어 주었다. 그 다음 배열 형식으로 바꿔서 정렬한 다음 다시 문자열로 바꾸어 주었다. 초반에 자꾸 정규표현식을 쓰려고해서 생각보다 오래걸렸던거 같다.
