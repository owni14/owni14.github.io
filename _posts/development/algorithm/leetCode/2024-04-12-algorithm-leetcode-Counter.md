---
layout: post
title: '[LeetCode] Counter'
subtitle: '[LeetCode] Counter'
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

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

### **Example**

---

Example 1:

> Input:  
> n = 10  
> ["call","call","call"]  
> Output: [10,11,12]  
> Explanation:  
> counter() = 10 // The first time counter() is called, it returns n.  
> counter() = 11 // Returns 1 more than the previous time.  
> counter() = 12 // Returns 1 more than the previous time.

Example 2:

> Input:  
> n = -2  
> ["call","call","call","call","call"]  
> Output: [-2,-1,0,1,2]  
> Explanation: counter() initially returns -2. Then increases after each sebsequent call.

### **Constraints**

---

- -1000 <= n <= 1000
- 0 <= calls.length <= 1000
- calls[i] === "call"

### Solution

---

- Runtime: 35ms
- Memory: 48.80MB

```
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let calledTime = 0
    return function() {
        return n + calledTime++
    };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```

### Retrospect

---

함수안에 함수를 선언하고 반환을 하는데 클로저와 렉시컬 환경에 대한 개념을 알고 있어야 문제를 정확히 풀 수 있다고 생각한다.  
문제를 그냥 n++를 해도 문제를 해결할 수 있었으나, let으로 변수를 선언하고 calledTime을 후순위로 증가시키는 로직을 추가하니 Runtime이 22초나 줄어들었고, 메모리 역시 0.02MB나 줄어든걸 확인할 수 있었다. 왜 Runtime과 메모리가 줄어들었는지 좀 더 찾아봐야할꺼 같다.
