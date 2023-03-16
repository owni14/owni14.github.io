---
layout: post
title: "[프로그래머스 / lv0] 중복된 문자 제거"
subtitle: "[프로그래머스 / lv0] 중복된 문자 제거"
category: dev
tag: algorithm
image:
  path: /assets/img/algorithm.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## 문제

---

### **문제 설명**

---

문자열 `my_string`이 매개변수로 주어집니다. `my_string`에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `my_string` ≤ 110
- `my_string`은 대문자, 소문자, 공백으로 구성되어 있습니다.
- 대문자와 소문자를 구분합니다.
- 공백(" ")도 하나의 문자로 구분합니다.
- 중복된 문자 중 가장 앞에 있는 문자를 남깁니다.

### 입출력 예

---

| my_string          | result        |
| ------------------ | ------------- |
| "people"           | "peol"        |
| "We are the world" | "We arthwold" |

---

### 입출력 예 설명

---

입출력 예 #1

- "people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.

입출력 예 #2

- "We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 14m 04s
- 풀이

```jsx
function solution(my_string) {
  let arrStr = my_string.split("");

  for (let i = 0; i < arrStr.length; i++) {
    const duplWord = arrStr[i];
    for (let j = i + 1; j < arrStr.length; j++) {
      if (duplWord === arrStr[j]) {
        arrStr[j] = "";
      }
    }
  }

  const result = arrStr.join("");

  return result;
}
```

## 느낀 점

---

가면 갈수록 문제가 점점 더 어려워지고 생각할게 많아진다.. 이번 문제도 생각하는데 되게 오랜시간이 걸린거 같다. replace를 사용할까 했는데 그렇게 되면 모든 문자가 바뀌기도하고 어떤식으로 사용해야할지 잘 몰라서 반복문을 사용했다. 다른 사람은 set을 이용해서 풀었는데 되게 신기했다.
