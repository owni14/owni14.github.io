---
layout: post
title: '[프로그래머스 / lv0] 두 수의 나눗셈'
subtitle: '[프로그래머스 / lv0] 두 수의 나눗셈'
category: dev
tag: algorithm
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## 문제

---

### **문제 설명**

---

정수 `num1`과 `num2`가 매개변수로 주어질 때, `num1`을 `num2`로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

### **제한사항**

---

- 0 < `num1` ≤ 100
- 0 < `num2` ≤ 100

### **입출력 예**

---

| num1 | num2 | result |
| ---- | ---- | ------ |
| 3    | 2    | 1500   |
| 7    | 3    | 2333   |
| 1    | 16   | 62     |

### **입출력 예 설명**

---

입출력 예 #1

- `num1`이 3, `num2`가 2이므로 3 / 2 = 1.5에 1,000을 곱하면 1500이 됩니다.

입출력 예 #2

- `num1`이 7, `num2`가 3이므로 7 / 3 = 2.33333...에 1,000을 곱하면 2333.3333.... 이 되며, 정수 부분은 2333입니다.

입출력 예 #3

- `num1`이 1, `num2`가 16이므로 1 / 16 = 0.0625에 1,000을 곱하면 62.5가 되며, 정수 부분은 62입니다.

## 풀이 & 걸린시간

---

- 걸린시간 : 3m 22s

- 풀이

```jsx
function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}
```
