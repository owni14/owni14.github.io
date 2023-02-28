---
layout: post
title: "[프로그래머스 / lv0] 자릿수 더하기"
subtitle: "[프로그래머스 / lv0] 자릿수 더하기"
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

정수 `n`이 매개변수로 주어질 때 `n`의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

### 제한사항

---

- 0 ≤ `n` ≤ 1,000,000

### 입출력 예

---

### 입출력 예 설명

---

입출력 예 #1

- 1 + 2 + 3 + 4 = 10을 return합니다.

입출력 예 #2

- 9 + 3 + 0 + 2 + 1 + 1 = 16을 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 21m 12s
- 풀이

```jsx
function solution(n) {
  let stringNum = n.toString();
  let answer = 0;

  for (let i = 0; i < stringNum.length; i++) {
    const num = parseInt(stringNum.slice(i, i + 1));
    answer += num;
  }

  return answer;
}
```

## 느낀 점

---

문자열인줄 알고 접근했더니 숫자여서 length가 나오지 않았다. 그래서 숫자형을 문자열로 바꾸고 다시 숫자형으로 바꿔서 계산을 진행하였다. 내 계산이 가독성면에서 그렇게 좋지 않다고 느껴졌지만 내가 문제를 읽고 접근할 수 있는 방법이 최선이었던거 같다. 그래서 채점 후 다른 사람의 결과를 보니 reduce를 사용한 경우도 있어서 신기했다. 나는 아직 reduce를 사용하는 것이 미숙한거 같아 한번 다시 찾아보고 공부해야겠다는 생각이 들었다.
