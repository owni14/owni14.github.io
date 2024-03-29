---
layout: post
title: '[프로그래머스 / lv1] 하샤드 수'
subtitle: '[프로그래머스 / lv1] 하샤드 수'
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

양의 정수 `x`가 하샤드 수이려면 `x`의 자릿수의 합으로 `x`가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 `x`를 입력받아 `x`가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

### 제한 조건

---

- `x`는 1 이상, 10000 이하인 정수입니다.

### 입출력 예

---

| x   | return |
| --- | ------ |
| 10  | true   |
| 12  | true   |
| 11  | false  |
| 13  | false  |

### 입출력 예 설명

---

**입출력 예 #1**

10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

**입출력 예 #2**

12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

**입출력 예 #3**

11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

**입출력 예 #4**

13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.

### 풀이

---

```jsx
function solution(x) {
  const sum = Array.from(x.toString()).reduce(
    (acc, cur) => (acc += Number(cur)),
    0
  );
  return x % sum === 0;
}
```

### 느낀점

---

처음에 문제를 보고 하샤드 수라는 말을 듣고 조금 어려울꺼 같은데라고 생각을 했는데 생각보다 그렇게 어렵지 않았던거 같다. 정수를 문자열로 바꾸고 다시 배열로 바꿔 reduce를 사용해 각자리 수의 합을 추출해서 제일 처음 들어온 정수의 합으로 나눈 결과를 반환했다.
