---
layout: post
title: '[프로그래머스 / lv1] 문자열 내림차순으로 배치하기'
subtitle: '[프로그래머스 / lv1] 문자열 내림차순으로 배치하기'
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

문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.

s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

### 제한 사항

---

- str은 길이 1 이상인 문자열입니다.

### 입출력 예

### 풀이

---

```jsx
function solution(s) {
  const answer = s
    .split('')
    .sort((a, b) => (a < b ? 1 : -1))
    .join('');
  return answer;
}
```

### 느낀점

---

문제를 풀고 난 후 다른 사람의 풀이를 보니 정말 간결하게 풀어서 당황했다. 굳이 sort((a, b))를 할 필요 없이 `sort()` 를 하고 난 후 `reverse()` 메서드를 사용해서 문제를 푸는 사람이 있어서 대단했다.
