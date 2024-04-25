---
layout: post
title: '[LeetCode] Memoize'
subtitle: '[LeetCode] Memoize'
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

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

- sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.

- fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.

- factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) \* n otherwise.

### **Example**

---

Example 1:

> Input:  
> fnName = "sum"  
> actions = ["call","call","getCallCount","call","getCallCount"]  
> values = [[2,2],[2,2],[],[1,2],[]]  
> Output: [4,4,1,3,2]  
> Explanation:  
> const sum = (a, b) => a + b;  
> const memoizedSum = memoize(sum);  
> memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.  
> memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.  
> // "getCallCount" - total call count: 1  
> memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.  
> // "getCallCount" - total call count: 2

Example 2:

<!-- prettier-ignore -->
> Input:  
> fnName = "factorial"  
> actions = ["call","call","call","getCallCount","call","getCallCount"]  
> values = [[2],[3],[2],[],[3],[]]  
> Output: [2,6,2,2,6,2]  
> Explanation:  
> const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));  
> const memoFactorial = memoize(factorial);  
> memoFactorial(2); // "call" - returns 2.  
> memoFactorial(3); // "call" - returns 6.  
> memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.  
> // "getCallCount" - total call count: 2  
> memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.  
> // "getCallCount" - total call count: 2

Example 3:

> Input:  
> fnName = "fib"  
> actions = ["call","getCallCount"]  
> values = [[5],[]]  
> Output: [8,1]  
> Explanation:  
> fib(5) = 8 // "call"  
> // "getCallCount" - total call count: 1

### **Constraints**

---

- 0 <= a, b <= 105
- 1 <= n <= 10
- 0 <= actions.length <= 105
- actions.length === values.length
- actions[i] is one of "call" and "getCallCount"
- fnName is one of "sum", "factorial" and "fib"

### Solution

---

- Runtime: 366ms
- Memory: 85.91MB

```
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}
    return function (...args) {
        if(args in cache) {
            return cache[args]
        }
        const getValue = fn(...args)
        cache[args] = getValue
        return getValue
    }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
```

### Retrospect

---

문제의 설명은 `memozie`함수가 아닌 inner함수(`return function(...arge){}`)를 여러번 호출하게 될 경우 동일한 파라미터를 넘겨주게 되면 `memoize`함수를 실행하지 않는 것이었고, 이전에 들어왔던 **동일한 값**을 캐싱하고 있다가 반환해주는 것이었다. 그래서 나는 outer함수인 `memozie`함수에 `cache`라는 변수를 하나 선언해두고 해당 변수에 값을 캐싱하여 동일한 값이 들어오면 캐싱 된 값을 반환을 했다.

if 조건문을 통해 `cache`의 속성에 파라미터로 넘어온 args가 존재하게 되면, 캐싱된 값을 리턴하게 했다. 그게 아니라면 `memozie`함수를 호출하여 값을 얻은 값을 cache에 args가 키를 가지도록 해서 넣어주었고, 함수 실행을 통해 얻은 값을 반환했다.

이번 문제는 생각보다 시간이 오래걸렸는데 자꾸 실행을하니 getCallCount가 자꾸 함수를 실행한만큼 나오는 것이었다. 나는 함수를 실행시키고 추출해서 나온 동일한 값에 대해서만 조건을 주고 캐싱된 값을 반환하고 있었는데 문제를 다시 읽어보니, **A memoized function is a function that will never be called twice with the same inputs**라는 문구가 눈에 띄었다.

실제로 함수를 메모이제이션해서 호출되지 않게끔 해야했었다. `useMemo`, `useCallBack`과 동일한 개념이 사용되었다. 이렇게 메모이제이션해서 사용하게 되면 메모리가 절약되기 때문에 성능상 유리한 측면이 있다고 생각된다.
