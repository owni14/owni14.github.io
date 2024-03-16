---
layout: post
title: '[프로그래머스 / lv1] 가운데 글자 가져오기'
subtitle: '[프로그래머스 / lv1] 가운데 글자 가져오기'
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

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

### 재한사항

---

- s는 길이가 1 이상, 100이하인 스트링입니다.

### 입출력 예

---

| s       | return |
| ------- | ------ |
| "abcde" | "c"    |
| "qwer"  | "we"   |

### 풀이

---

```jsx
function solution(s) {
  const isInteger = Number.isInteger(s.length / 2);
  const centerIdx = Math.floor(s.length / 2);

  return isInteger ? `${s[centerIdx - 1]}${s[centerIdx]}` : s[centerIdx];
}
```

### 느낀점

---

가운데 글자를 전체 문자열의 길이에서 2로 나눴을떼 나머지가 0을 이용해서 문제를 구하려고 접근하였다. 나머지가 0이 되면 중간 글자는 무조건 두개가 출력이 되어야하고 나머지가 있으면 중간 글자는 하나가 되기 때문에 `Number.isInteger` 를 이용해 나머지가 있는지 여부를 판단하였다. 그런데 다른 사람의 풀이를 보니 굳이 저렇게 변수를 선언하지 않아도 `s.length % 2 === 0` 바로 조건문을 적용해서 하는 것도 괜찮은 방법이라고 생각한다.
