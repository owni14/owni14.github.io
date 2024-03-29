---
layout: post
title: "[프로그래머스 / lv0] 개미 군단"
subtitle: "[프로그래머스 / lv0] 개미 군단"
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

개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 `hp`가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

### 제한사항

---

- `hp`는 자연수입니다.
- 0 ≤ `hp` ≤ 1000

### 입출력 예

---

| hp  | result |
| --- | ------ |
| 23  | 5      |
| 24  | 6      |
| 999 | 201    |

### 입출력 예 설명

---

입출력 예 #1

- `hp`가 23이므로, 장군개미 네마리와 병정개미 한마리로 사냥할 수 있습니다. 따라서 5를 return합니다.

입출력 예 #2

- `hp`가 24이므로, 장군개미 네마리 병정개미 한마리 일개미 한마리로 사냥할 수 있습니다. 따라서 6을 return합니다.

입출력 예 #3

- `hp`가 999이므로, 장군개미 199 마리 병정개미 한마리 일개미 한마리로 사냥할 수 있습니다. 따라서 201을 return합니다.

## 풀이 & 걸린시간

---

- 걸린시간: 28m 42s
- 풀이

```jsx
function solution(hp) {
  let answer = 0;
  let resHp = 0;

  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      answer += Math.floor(hp / 5);
      resHp = hp % 5;
    }

    if (i == 1) {
      answer += Math.floor(resHp / 3);
      resHp = resHp % 3;
    }

    if (i == 2) {
      answer += Math.floor(resHp / 1);
      resHp = resHp % 1;
    }
  }

  return answer;
}
```

## 느낀 점

---

장군개미와 병정개미, 일개미가 몇명인지 구하기 위해 for문을 사용해서 한번씩 다 돌아야한다고 생각하고 접근했다. 처음에는 값이 계속 이상하게 나와서 당황하기도 했지만 어디서부터 잘못됐는지 확인하면서 코딩을 하였다. 나는 resHp 즉, 남은 hp값을 제일 처음에 변수에 저장하지 않고 진행하였기 때문에 값이 이상하게 나왔었다. 그래서 resHp를 변수로 선언하고 값을 저장하여서 진행하였다.

문제를 다 푼 후 다른 사람들은 한 줄 혹은 몇 줄 안되게 코딩을 하였는데 나는 여러 줄로 코딩을 하니 내가 짠 코드가 가독성이 떨어진다고 생각이 들었다. 그리고 새로 알게된 사실이 있는데 Math.floor를 다른 사람은 **~~**로 표시하기도 하여 신기하였다.
