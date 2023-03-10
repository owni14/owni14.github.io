---
layout: post
title: "[프로그래머스 / lv0] 외계행성의 나이"
subtitle: "[프로그래머스 / lv0] 외계행성의 나이"
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

우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 `age`가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- `age`는 자연수입니다.
- `age` ≤ 1,000
- PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.

### 입출력 예

---

| age | result |
| --- | ------ |
| 23  | "cd"   |
| 51  | "fb"   |
| 100 | "baa"  |

### 입출력 예 설명

---

입출력 예 #1

- `age`가 23이므로 "cd"를 return합니다.

입출력 예 #2

- `age`가 51이므로 "fb"를 return합니다.

입출력 예 #3

- `age`가 100이므로 "baa"를 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 15m 14s
- 풀이

```jsx
function solution(age) {
  const ageStr = age.toString();
  const programmersAge = ageStr.replace(/[0-9]/g, (v) => {
    switch (v) {
      case "0":
        return "a";
      case "1":
        return "b";
      case "2":
        return "c";
      case "3":
        return "d";
      case "4":
        return "e";
      case "5":
        return "f";
      case "6":
        return "g";
      case "7":
        return "h";
      case "8":
        return "i";
      case "9":
        return "j";
    }
  });

  return programmersAge;
}
```

## 느낀 점

---

어떻게 풀지 고민을 많이 하다가 정규표현식을 사용해서 바꾸면 어떨까라는 생각을하여 해당 방식으로 접근하였다. 채점을 마친 후 다른사람의 풀이를 보니 배열을 만들어서 map을 돌리는데 `map((v) => "abcdefghij"[v])` 이런 식으로 map을 사용하는 것이었다. 문자열 자체도 인덱스가 있으니까 이렇게 하면 0~9까지 중 하나가 해당 문자에 맞게 바뀌어서 출력되는 것을 새로 알게 되었다.
