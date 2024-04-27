---
layout: post
title: '[LeetCode] Timeout Cancellation'
subtitle: '[LeetCode] Timeout Cancellation'
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

Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

> setTimeout(cancelFn, cancelTimeMs)

Initially, the execution of the function fn should be delayed by t milliseconds.

If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

### **Example**

---

Example 1:

> Input: fn = (x) => x _ 5, args = [2], t = 20  
> Output: [{"time": 20, "returned": 10}]  
> Explanation:  
> const cancelTimeMs = 50;  
> const cancelFn = cancellable((x) => x _ 5, [2], 20);  
> setTimeout(cancelFn, cancelTimeMs);

> The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.

Example 2:

> Input: fn = (x) => x**2, args = [2], t = 100  
> Output: []  
> Explanation:  
> const cancelTimeMs = 50;  
> const cancelFn = cancellable((x) => x**2, [2], 100);  
> setTimeout(cancelFn, cancelTimeMs);

> The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.

Example 3:

> Input: fn = (x1, x2) => x1 _ x2, args = [2,4], t = 30  
> Output: [{"time": 30, "returned": 8}]  
> Explanation:  
> const cancelTimeMs = 100;  
> const cancelFn = cancellable((x1, x2) => x1 _ x2, [2,4], 30);  
> setTimeout(cancelFn, cancelTimeMs);

> The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.

### **Constraints**

---

- fn is a function
- args is a valid JSON array
- 1 <= args.length <= 10
- 20 <= t <= 1000
- 10 <= cancelTimeMs <= 1000

### Solution

---

- Runtime: 58ms
- Memory: 49.49MB

```
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    const timer = setTimeout(() => {
        fn(...args)
    }, t)

    return ()=> {
        clearTimeout(timer)
    }
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
```

### Retrospect

---

이번 문제는 솔직히 오로지 나 혼자만의 힘으로 푼게 아니다.. 구글링을 통해 setTimeout과 clearTimeout을 검색해서 헷갈리거나 자세하게 알지 못했던 내용을 이해하고 문제를 풀었다. **setTimeout**, **clearTimeout** 간단하게 요약하자면 **setTimeout**같은 경우 **일정 시간이 지난 후에 실행**되는 함수이고, **clearTimeout**은 s**etTimeout함수를 취소하고 싶을때** 사용하는 함수이다.

먼저, 문제의 설명을 살펴보면 `cancellable`함수는 파라미터로 받는 `t`만큼 시간 지연을 두고 `fn`함수를 실행해야하는 함수이다. 그러나 `cancellable`외부에서는 `setTimeou`함수를 통해 `cancelTimeMs`만큼 시간 지연을 하게 되는데, 만약 `cancellable`함수로 넘겨준 `t`보다 `cancelTimeMs`가 작을 경우 `fn`함수는 실행하면 안되고 `t`가 `cancelTimeMs`보다 더 크게 될 경우 `fn`함수를 실행시키면 된다. 설명이 좀 어렵다고 느껴질 수 있는데 차근차근 풀이를 살펴보도록 하자.

`cancellable`함수에서는 `t`만큼의 시간 지연이 필요하니 무조건 `setTimeout`함수를 사용해야한다. `setTimeout`함수 **timerId**를 반환하게 되는데 `setTimeout`을 취소 하고 싶을때 필요하기 때문에 timer라는 변수로 따로 선언해두었다. 반환 값으로는 `clearTimeout`함수를 사용했는데, 외부에서 `setTimeout`함수를 실행할때 `t`보다 `cancelTimeMs`가 작을 경우 내부의 `setTimeout`을 실행시키면 안되기 때문에 실행되기 전에 `clearTimeout`을 통해 실행되지 않게 했다.

이번은 좀 더 깊게 생각하고 문제에 접근하는 계기가 된거 같다. 난이도는 **easy**로 표시되어 있었으나 나는 그렇게 쉬운 문제였던게 아니었다. js 개념이나 동작원리에 대한 이해도가 낮구나라는 생각을 많이해서 조금씩 쌓아가면 개발해야겠다고 생각을 많이 하게되었다.
