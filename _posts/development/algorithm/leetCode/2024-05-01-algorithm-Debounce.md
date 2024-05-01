---
layout: post
title: '[LeetCode] Debounce'
subtitle: '[LeetCode] Debounce'
category: dev
tag: algorithm
image:
  path: /assets/img/algorithm.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## PROBLEMS

### **Description**

---

Given a function fn and a time in milliseconds t, return a debounced version of that function.

A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms.

The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.

If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

![debounce](../../../assets/img/development/2024/05/01/debounce.png)
The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.

Please solve it without using lodash's `_.debounce()` function.

### **Example**

---

Example 1:

> Input:  
> t = 50  
> calls = [  
> {"t": 50, inputs: [1]},  
> {"t": 75, inputs: [2]}  
> ]  
> Output: [{"t": 125, inputs: [2]}]  
> Explanation:  
> let start = Date.now();  
> function log(...inputs) {  
> console.log([Date.now() - start, inputs ])  
> }  
> const dlog = debounce(log, 50);  
> setTimeout(() => dlog(1), 50);  
> setTimeout(() => dlog(2), 75);
>
> The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms  
> The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).

Example 2:

> Input:  
> t = 20  
> calls = [  
> {"t": 50, inputs: [1]},  
> {"t": 100, inputs: [2]}  
> ]  
> Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]  
> Explanation:
> The 1st call is delayed until 70ms. The inputs were (1).  
> The 2nd call is delayed until 120ms. The inputs were (2).

Example 3:

> Input:  
> t = 150  
> calls = [  
> {"t": 50, inputs: [1, 2]},  
> {"t": 300, inputs: [3, 4]},  
> {"t": 300, inputs: [5, 6]}  
> ]  
> Output: [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]  
> Explanation:  
> The 1st call is delayed by 150ms and ran at 200ms. The inputs were (1, 2).  
> The 2nd call is cancelled by the 3rd call  
> The 3rd call is delayed by 150ms and ran at 450ms. The inputs were (5, 6).

### **Constraints**

---

- 0 <= t <= 1000
- 1 <= calls.length <= 10
- 0 <= calls[i].t <= 1000
- 0 <= calls[i].inputs.length <= 10

### Solution

---

- Runtime: 56ms
- Memory: 49.04MB

```
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
    let timerId
    return function (...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => fn(...args), t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
```

### Retrospect

---

이번 문제는 debounce함수를 지속적으로 호출했을때, 파라미터로 받은 `t` 밀리초보다 먼저 호출하게 되면 값을 반환하지 않고 `t` 밀리초동안 아무 호출이 없을 경우 반환하는 함수를 만드는 것이었다. 한마디로 설명하자면 시간간격을 두고 호출하는 함수였다.

시간 간격을 두기 위해서라면 무조건 `setTimeout`메서드가 필요하다고 생각했다. 그리고 `timerId`는 전역에 선언해두었는데 이렇게 한 이유가 계속해서 debounce함수를 호출했을때, `t`밀리초 이전에 함수를 계속 호출하게 되면 반환하는 함수에서 바로 `clearTimeout`을 이용해 `setTimeout`를 취소하기 위해 사용했다.

`timerId`를 전역으로 선언하지 않고 내부에서 선언하고 return할때 clearTimeout을 사용하게 된다면, 호출할때마다 매 호출 건에 대해 `t` 밀리초 delay가 되서 출력이 될 것이기 때문이다.
