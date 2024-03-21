---
layout: post
title: '[프로그래머스 / lv1] 직사각형 별찍기'
subtitle: '[프로그래머스 / lv1] 직사각형 별찍기'
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

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.

별(\*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

### 제한 조건

---

- n과 m은 각각 1000 이하인 자연수입니다.

### 예시

---

입력

`5 3`

출력

```jsx
*****
*****
*****
```

### 풀이

---

```jsx
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  for (let i = 0; i < Number(n[1]); i++) {
    let star = '';
    for (let j = 0; j < Number(n[0]); j++) {
      star += '*';
    }
    console.log(star);
  }
});
```

### 느낀점

---

막상 금방 풀었는데 다른 사람의 풀이를 보니 정말 쉬웠구나 라는 생각이 들었다. 그 이유가 다른 사람은 repeat함수를 사용하여 정말 간결하게 문제를 풀었는데 나는 풀다보니 지저분해 진거 같다고 생각 들었기 때문이다. 조금 더 간결하게 생각할 필요가 있을꺼 같고 많은 메서드를 알아야 적재적소에 활용하겠구나라는 생각이 들었다.
