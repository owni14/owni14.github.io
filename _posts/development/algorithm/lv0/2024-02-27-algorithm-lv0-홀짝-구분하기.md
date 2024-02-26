---
layout: post
title: '[프로그래머스 / lv0] 홀짝 구분하기'
subtitle: '[프로그래머스 / lv0] 홀짝 구분하기'
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

자연수 `n`이 입력으로 주어졌을 때 만약 `n`이 짝수이면 "`n` is even"을, 홀수이면 "`n` is odd"를 출력하는 코드를 작성해 보세요.

### 제한사항

---

- 1 ≤ `n` ≤ 1,000

### 입출력 예

---

입력 #1

`100`

출력 #1

`100 is even`

입력 #2

`1`

출력 #2

`1 is odd`

※ 2023년 05월 15일 지문이 수정되었습니다.

### 풀이

---

```jsx
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  n = Number(input[0]);
  result = n % 2 === 0 ? `${n} is even` : `${n} is odd`;
  console.log(result);
});
```

### 느낀점

---

출력하는건 생각보다 쉬웠지만 아직까지 createInterface메서드라던지, rl.on이라는 메서드라던지 나한테 모르는게 좀 많아서 더 찾아봐야할꺼 같다
