---
layout: post
title: '[프로그래머스 / lv0] 글자 이어 붙여 문자열 만들기'
subtitle: '[프로그래머스 / lv0] 글자 이어 붙여 문자열 만들기'
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

문자열 `my_string`과 정수 배열 `index_list`가 매개변수로 주어집니다. `my_string`의 `index_list`의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

### 제한사항

---

- 1 ≤ `my_string`의 길이 ≤ 1,000
- `my_string`의 원소는 영소문자로 이루어져 있습니다.
- 1 ≤ `index_list`의 길이 ≤ 1,000
- 0 ≤ `index_list`의 원소 < `my_string`의 길이

### 입출력 예

---

| my_string            | index_list                               | result        |
| -------------------- | ---------------------------------------- | ------------- |
| "cvsgiorszzzmrpaqpe" | [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7] | "programmers" |
| "zpiaz"              | [1, 2, 0, 0, 3]                          | "pizza"       |

### 입출력 예 설명

---

입출력 예 #1

- 예제 1번의 `my_string`에서 인덱스 3, 5, 6, 11, 12, 14, 16, 17에 해당하는 글자는 각각 g, o, r, m, r, a, p, e이므로 `my_string`에서 `index_list`에 들어있는 원소에 해당하는 인덱스의 글자들은 각각 순서대로 p, r, o, g, r, a, m, m, e, r, s입니다. 따라서 "programmers"를 return 합니다.

입출력 예 #2

- 예제 2번의 `my_string`에서 인덱스 0, 1, 2, 3에 해당하는 글자는 각각 z, p, i, a이므로 `my_string`에서 `index_list`에 들어있는 원소에 해당하는 인덱스의 글자들은 각각 순서대로 p, i, z, z, a입니다. 따라서 "pizza"를 return 합니다.

### 풀이

---

```jsx
function solution(my_string, index_list) {
  const arrString = my_string.split('');
  const answer = index_list.reduce((acc, cur) => {
    acc.push(arrString.find((_, idx) => idx === cur));
    return acc;
  }, []);

  return answer.join('');
}
```

### 느낀점

---

문제를 보고 어떻게 풀어야할지 감이 안왔지만 차근차근 풀다보니 문제를 어떻게 풀이 해결법이 나온거 같다. 문자열을 변환하고 배열을 변환하고 많이 했지만 문제를 해결했고 추후에 다시 살펴보면서 더 나은 코드로 만들어야겠다.
