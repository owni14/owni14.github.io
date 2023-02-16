---
layout: post
title: "[프로그래머스 / lv0] 배열 뒤집기"
subtitle: "[프로그래머스 / lv0] 배열 뒤집기"
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

정수가 들어 있는 배열 `num_list`가 매개변수로 주어집니다. `num_list`의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- 1 ≤ `num_list`의 길이 ≤ 1,000
- 0 ≤ `num_list`의 원소 ≤ 1,000

### 입출력 예

---

### 입출력 예 설명

---

입출력 예 #1

- `num_list`가 [1, 2, 3, 4, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 4, 3, 2, 1]을 return합니다.

입출력 예 #2

- `num_list`가 [1, 1, 1, 1, 1, 2]이므로 순서를 거꾸로 뒤집은 배열 [2, 1, 1, 1, 1, 1]을 return합니다.

입출력 예 #3

- `num_list`가 [1, 0, 1, 1, 1, 3, 5]이므로 순서를 거꾸로 뒤집은 배열 [5, 3, 1, 1, 1, 0, 1]을 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 6m 53s
- 풀이

```jsx
ffunction solution(num_list) {
    let answer = [];
    for (let i = (num_list.length - 1); i >= 0; i--) {
        answer = [...answer, num_list[i]]
    }
    return answer;
}
```

## 느낀 점

---

어제 코딩테스트했던 문자열 뒤집기와 사뭇 비슷하다고 느껴저 for문으로 접근하였다. 근데 코드 실행을 하는데 계속해서 실행이 돌아가기만 하고 성공했다는 값과 실패했다는 값이 전혀 나오지 않았다. 그 이유를 찾아보니 for문의 증감식을 i++로 계속 하고 있어서 그랬던 것이었다. 그리고 다시 실행시켜보니 결과값이 배열의 첫번째 수가 계속 나왔는데 그 이유가 `answer = num_list[i]` 형식으로 작성해서 값이 제대로 나오지 않는 것이었다.

내가 까먹고 있었던게 answer값을 spread operator를 이용해서 값을 넣어줘야하는 것이었는데 그 부분을 하지 못하였다. 그래도 생각해서 값을 넣으니까 통과가 되었고 기분이 좋았던거 같다.
