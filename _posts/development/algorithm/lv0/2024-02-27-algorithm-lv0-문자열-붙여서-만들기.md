---
layout: post
title: '[프로그래머스 / lv0] 문자열 붙여서 출력하기'
subtitle: '[프로그래머스 / lv0] 문자열 붙여서 출력하기'
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

두 개의 문자열 `str1`, `str2`가 공백으로 구분되어 입력으로 주어집니다.

입출력 예와 같이 `str1`과 `str2`을 이어서 출력하는 코드를 작성해 보세요.

### 제한사항

---

- 1 ≤ `str1`, `str2`의 길이 ≤ 10

### 입출력 예

---

입력 #1

`apple pen`

출력 #1

`applepen`

입력 #2

`Hello World!`

출력 #2

`HelloWorld!`

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
  str1 = input[0];
  str2 = input[1];
  console.log(str1.concat(str2));
});
```

### 느낀점

---

처음에 문제를 보고 무슨소리인가 싶었고 나는 계속 return을 하고 있었다. 그런데 문제를 다시 읽어보기 반환하는게 아닌 출력을 하는 문제였고 나는 console.log로 값을 다시 바꾸어 출력했다. 그리고 자바스크립트에서 대해 나는 모르는게 많다고 생각이 들었다.
문자열을 나는 concat로 붙였는데 funciton(lin)에서 split(””)으로 나눈 후 join(””)으로 붙인 다른 사람의 풀이도 있었다. 어쩌면 concat보다 좀 더 빨리 채점이 되었고 확장성으로 봤을때 좋았다고 생각이 든다.
