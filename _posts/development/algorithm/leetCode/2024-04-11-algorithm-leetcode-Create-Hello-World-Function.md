---
layout: post
title: '[LeetCode] Create Hello World Function'
subtitle: '[LeetCode] Create Hello World Function'
category: dev
tag: algorithm
image:
  path: /assets/img/algorithm.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## PROBLEM

### **Description**

---

Write a function createHelloWorld. It should return a new function that always returns "Hello World".

### **Example**

Example 1:

> Input: args = []  
> Output: "Hello World"  
> Explanation:  
> const f = createHelloWorld();  
> f(); // "Hello World"
>
> The function returned by createHelloWorld should always return "Hello World".

Example 2:

> Input: args = [{},null,42]  
> Output: "Hello World"  
> Explanation:  
> const f = createHelloWorld();  
> f({}, null, 42); // "Hello World"
>
> Any arguments could be passed to the function but it should still always return "Hello World".

---

### **Constraints**

---

- 0 <= args.length <= 10

### Solution

---

- Runtime: 58ms
- Memory: 48.93MB

```
/**
 * @return {Function}
 */
var createHelloWorld = function() {

    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
```

### Retrospect

---

문제를 읽고 푸는건 정말 쉽다고 생각했지만, 이 문제를 자세하게 들여다보면 자바스크립트의 기본과 원리를 알 수 있다. 함수에 기본적인 개념과 클로저 및 고차함수 그리고 호이스팅에 대한 개념까지 알 수 있었다. 매번 개발하기 급급했던 나에게 자바스크립트의 상세한 원리까지 알 수 있는 계기가 되어 JS의 원리에 대해 따로 정리하려고 한다.
