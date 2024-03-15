---
layout: post
title: '[프로그래머스 / lv1] 핸드폰 번호 가리기'
subtitle: '[프로그래머스 / lv1] 핸드폰 번호 가리기'
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

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.

전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 `*`으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

### 제한 조건

---

- phone_number는 길이 4 이상, 20이하인 문자열입니다.

### 입출력 예

---

| phone_number  | return           |
| ------------- | ---------------- |
| "01033334444" | "**\*\*\***4444" |
| "027778888"   | "**\***8888"     |

### 풀이

---

```jsx
function solution(phone_number) {
  const endMaskingIdx = phone_number.length - 5;
  const answer = phone_number
    .split('')
    .map((num, idx) => (idx > endMaskingIdx ? num : '*'))
    .join('');
  return answer;
}
```

### 느낀점

---

나는 마스킹할 인덱스를 찾아서 문제를 풀었지만 다른 사람의 풀이중 가장 인상 깊었던 풀이가 repeat를 사용하여 “\*”를 반복하고 slice(-4)를 통해 보여질 마지막 4자리 숫자를 구하는 풀이가 좋았던거 같다. 뭔가 풀이가 간결하다고 느껴졌고 repeat와 slice에 대해서 조금 더 알게 되었다. slice를 음수로 시작하면 뒤에서부터 반대로 숫자를 세고 마지막 인덱스까지 보여지는것을 한번 더 알게 되었다.
