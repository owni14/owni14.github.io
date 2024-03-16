---
layout: post
title: '[프로그래머스 / lv1] 수박수박수박수박수박수?'
subtitle: '[프로그래머스 / lv1] 수박수박수박수박수박수?'
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

길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

### 제한 조건

---

- n은 길이 10,000이하인 자연수입니다.

### 입출력 예

---

| n   | return     |
| --- | ---------- |
| 3   | "수박수"   |
| 4   | "수박수박" |

### 풀이

---

```jsx
function solution(n) {
  let answer = '';
  for (let i = 0; i < n; i++) {
    answer += i % 2 === 0 ? '수' : '박';
  }
  return answer;
}
```

### 느낀점

---

문제를 보고 for문을 이용하겠다고 생각을 했고 처음에는 `if(i % 2 ===0) else` 이런식으로 작성했었는데 answer += “” 을 두번이나 사용해야 되니까 그냥 answer안에서 해결할 수 있을꺼 같아서 조금 더 간결하게 풀이를 작성하였다. `answer += i % 2 === 0 ? "수" : "박"`
