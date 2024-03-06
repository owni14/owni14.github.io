---
layout: post
title: '[프로그래머스 / lv0] 첫 번째로 나오는 음수'
subtitle: '[프로그래머스 / lv0] 첫 번째로 나오는 음수'
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

정수 리스트 `num_list`가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

### 제한사항

---

- 5 ≤ `num_list`의 길이 ≤ 100
- 10 ≤ `num_list`의 원소 ≤ 100

### 입출력 예

---

| num_list                    | result |
| --------------------------- | ------ |
| [12, 4, 15, 46, 38, -2, 15] | 5      |
| [13, 22, 53, 24, 15, 6]     | -1     |

### 입출력 예 설명

---

입출력 예 #1

- 5번 인덱스에서 음수가 처음 등장하므로 5를 return합니다.

입출력 예 #2

- 음수가 없으므로 -1을 return합니다.

### 풀이

---

```jsx
function solution(num_list) {
  const answer = num_list.reduce(
    (acc, cur, idx) => {
      if (cur < 0 && !acc.isNegative) {
        return (acc = { findIdx: idx, isNegative: true });
      }
      return acc;
    },
    { findIdx: -1, isNegative: false }
  );

  return answer.findIdx;
}
```

### 느낀점

---

생각보다 나는 시간이 많이 걸렸다. 무조건 reduce로 해결해야겠다고 생각을 해서 어떻게 하지 고민을 하다가 결국 초기 값을 만들어서 해결했으나 뭔가 빙빙 돌아서 푼거같다고 생각이 든다. javascript method중에 findIndex도 있었으나 나는 생각이 나지 않았다. 다음에는 사용할 수 있을꺼 같다고 생각을 한다.
