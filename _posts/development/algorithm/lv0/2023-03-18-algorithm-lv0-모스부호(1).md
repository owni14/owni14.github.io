---
layout: post
title: "[프로그래머스 / lv0] 모스부호(1)"
subtitle: "[프로그래머스 / lv0] 모스부호(1)"
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

머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다. 그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다. 문자열 `letter`가 매개변수로 주어질 때, `letter`를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.모스부호는 다음과 같습니다.

`morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}`

### 제한사항

---

- 1 ≤ `letter`의 길이 ≤ 1,000
- return값은 소문자입니다.
- `letter`의 모스부호는 공백으로 나누어져 있습니다.
- `letter`에 공백은 연속으로 두 개 이상 존재하지 않습니다.
- 해독할 수 없는 편지는 주어지지 않습니다.
- 편지의 시작과 끝에는 공백이 없습니다.

### 입출력 예

---

| letter                    | result   |
| ------------------------- | -------- |
| ".... . .-.. .-.. ---"    | "hello"  |
| ".--. -.-- - .... --- -." | "python" |

### 입출력 예 설명

---

입출력 예 #1

- .... = h
- . = e
- .-.. = l
- .-.. = l
- -- = o
- 따라서 "hello"를 return 합니다.

입출력 예 #2

- .--. = p
- .-- = y
- = t
- .... = h
- -- = o
- . = n
- 따라서 "python"을 return 합니다.
- a ~ z에 해당하는 모스부호가 순서대로 담긴 배열입니다.
- `{".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."}`

## 풀이 & 걸린시간

---

- 걸린시간: 15m 31s
- 풀이

```jsx
function solution(letter) {
  const arrLetter = letter.split(" ");
  let result = "";

  for (const word of arrLetter) {
    if (word === ".-") result += "a";
    if (word === "-...") result += "b";
    if (word === "-.-.") result += "c";
    if (word === "-..") result += "d";
    if (word === ".") result += "e";
    if (word === "..-.") result += "f";
    if (word === "--.") result += "g";
    if (word === "....") result += "h";
    if (word === "..") result += "i";
    if (word === ".---") result += "j";
    if (word === "-.-") result += "k";
    if (word === ".-..") result += "l";
    if (word === "--") result += "m";
    if (word === "-.") result += "n";
    if (word === "---") result += "o";
    if (word === ".--.") result += "p";
    if (word === "--.-") result += "q";
    if (word === ".-.") result += "r";
    if (word === "...") result += "s";
    if (word === "-") result += "t";
    if (word === "..-") result += "u";
    if (word === "...-") result += "v";
    if (word === ".--") result += "w";
    if (word === "-..-") result += "x";
    if (word === "-.--") result += "y";
    if (word === "--..") result += "z";
  }

  return result;
}
```

## 느낀 점

---

난 정말 쓸데없이 길게 작성하였는데 다른 사람들의 풀이를 보니 되게 간단하였다. 그래도 다행인 점은 문제를 풀고 다른사람의 풀이를 보니 이번에 내가 새롭게 배운게 하나 있다는 점이었다. 난 보통 객체에 접근할때 .을 찍고 접근하는 방법을 사용했는데 []로 접근하는 방법이 있었고 나는 잘 사용지 않아서 []는 잘 모르고 있었다.
