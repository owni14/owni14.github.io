---
layout: post
title: "[프로그래머스 / lv0] 암호 해독"
subtitle: "[프로그래머스 / lv0] 암호 해독"
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

군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

- 암호화된 문자열 `cipher`를 주고받습니다.
- 그 문자열에서 `code`의 배수 번째 글자만 진짜 암호입니다.

문자열 `cipher`와 정수 `code`가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `cipher`의 길이 ≤ 1,000
- 1 ≤ `code` ≤ `cipher`의 길이
- `cipher`는 소문자와 공백으로만 구성되어 있습니다.
- 공백도 하나의 문자로 취급합니다.

### 입출력 예

---

| cipher                     | code | result     |
| -------------------------- | ---- | ---------- |
| "dfjardstddetckdaccccdegk" | 4    | "attack"   |
| "pfqallllabwaoclk"         | 2    | "fallback" |

### 입출력 예 설명

---

입출력 예 #1

- "dfjardstddetckdaccccdegk" 의 4번째, 8번째, 12번째, 16번째, 20번째, 24번째 글자를 합친 "attack"을 return합니다.

입출력 예 #2

- "pfqallllabwaoclk" 의 2번째, 4번째, 6번째, 8번째, 10번째, 12번째, 14번째, 16번째 글자를 합친 "fallback"을 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 3m 35s
- 풀이

```jsx
function solution(cipher, code) {
  let answer = "";
  for (let i = code; i <= cipher.length; i += code) {
    answer += cipher[i - 1];
  }
  return answer;
}
```

## 느낀 점

---

문제를 처음 읽자마자 for문을 사용하면 어떻게 풀 수 있을꺼 같다고 생각하였고 초기값 및 증감식을 조금 바꾸어서 코드를 작성하니 나름 쉽게 문제가 풀린거 같다.
