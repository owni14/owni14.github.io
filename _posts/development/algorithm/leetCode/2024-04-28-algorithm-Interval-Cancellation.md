---
layout: post
title: '[LeetCode] Interval Cancellation'
subtitle: '[LeetCode] Interval Cancellation'
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

Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

> setTimeout(cancelFn, cancelTimeMs)

The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

### **Example**

---

Example 1:

<!-- prettier-ignore -->
> Input: fn = (x) => x \_ 2, args = [4], t = 35  
> Output:  
> [
>
>  {"time": 0, "returned": 8},
>  {"time": 35, "returned": 8},
>  {"time": 70, "returned": 8},
>  { "time": 105, "returned": 8},
>  {"time": 140, "returned": 8},
>  {"time": 175, "returned": 8}
> ]  
>  Explanation:  
> const cancelTimeMs = 190;  
> const cancelFn = cancellable((x) => x \_ 2, [4], 35);  
> setTimeout(cancelFn, cancelTimeMs);

> Every 35ms, fn(4) is called. Until t=190ms, then it is cancelled.  
> 1st fn call is at 0ms. fn(4) returns 8.  
> 2nd fn call is at 35ms. fn(4) returns 8.  
> 3rd fn call is at 70ms. fn(4) returns 8.  
> 4th fn call is at 105ms. fn(4) returns 8.  
> 5th fn call is at 140ms. fn(4) returns 8.  
> 6th fn call is at 175ms. fn(4) returns 8.  
> Cancelled at 190ms

Example 2:

<!-- prettier-ignore -->
> Input: fn = (x1, x2) => (x1 \_ x2), args = [2, 5], t = 30  
> Output:  
> [
>
> {"time": 0, "returned": 10},
> {"time": 30, "returned": 10},
> {"time": 60, "returned": 10},
> {"time": 90, "returned": 10},
> {"time": 120, "returned": 10},
> {"time": 150, "returned": 10}
> ]  
> Explanation:  
> const cancelTimeMs = 165;  
> const cancelFn = cancellable((x1, x2) => (x1 \_ x2), [2, 5], 30)  
> setTimeout(cancelFn, cancelTimeMs)

> Every 30ms, fn(2, 5) is called. Until t=165ms, then it is cancelled.  
> 1st fn call is at 0ms  
> 2nd fn call is at 30ms  
> 3rd fn call is at 60ms  
> 4th fn call is at 90ms  
> 5th fn call is at 120ms  
> 6th fn call is at 150ms  
> Cancelled at 165ms

Example 3:

<!-- prettier-ignore -->
> Input: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50  
> Output:   
> [  
>  {"time": 0, "returned": 9},  
>  {"time": 50, "returned": 9},  
>  {"time": 100, "returned": 9},  
>  {"time": 150, "returned": 9}  
> ]  
> Explanation:   
> const cancelTimeMs = 180;  
> const cancelFn = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50)  
> setTimeout(cancelFn, cancelTimeMs)

> Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled.  
> 1st fn call is at 0ms  
> 2nd fn call is at 50ms  
> 3rd fn call is at 100ms  
> 4th fn call is at 150ms  
> Cancelled at 180ms

### **Constraints**

---

- fn is a function
- args is a valid JSON array
- 1 <= args.length <= 10
- 30 <= t <= 100
- 10 <= cancelTimeMs <= 500

### Solution

---

- Runtime: 63ms
- Memory: 49.82MB

```
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args);

    const timeout = setInterval(() => {
        fn(...args)
    }, t);

    return function cancel() {
        clearInterval(timeout);
    }
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
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
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)
 */
```

### Retrospect

---

이전에 풀었던 setTimeout이랑 비슷한 유형의 문제같다는 생각을 했다. setTimeout으로 `cancelTimeMs`변수의 시간이 끝난 후, `cancelFn`를 실행시키면 되는 문제였기 때문에 `cancelFn`안에서는 interval을 멈추는 함수를 실행해주었다.

제일 처음 `cancellable`함수에 값을 넘겨주면 `cancellable`안쪽에서는 `setInterval`함수를 호출해서 계속해서 interval을 하게끔 만들어주었다. 처음에 `cancellable`함수에 생설될때 time은 0이 될텐데 setInterval로만 실행하게 되면 time이 0일때는 실행이 안되어서 `fn(...args)`로 따로 빼서 한번 실행해주었다.

마지막 반환값으로는 interval을 멈추는 `clearInterval`함수를 호출하여 외부에서 setTimeout이 호출될때 interval을 중지시키므로써 문제에서 요구하는 답을 추출하게끔 했다.
