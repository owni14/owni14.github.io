---
layout: post
title: '[프로그래머스 / lv1] 평균 구하기'
subtitle: '[프로그래머스 / lv1] 평균 구하기'
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

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

### **제한사항**

---

- arr은 길이 1 이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

### **입출력 예**

---

### 풀이

---

```jsx
function solution(arr) {
  const total = arr.reduce((acc, cur) => {
    return (acc += cur);
  });
  return total / arr.length;
}
```

### 느낀점

---

reduce 메서드를 활용해 이전값과 현재 값을 누적해서 더해서 전체 합을 추출 한 다음 배열의 전체 길이로 나눠 평균을 구하였다.
