---
layout: post
title: '[LeetCode] Return Length of Arguments Passed'
subtitle: '[LeetCode] Return Length of Arguments Passed'
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

Write a function argumentsLength that returns the count of arguments passed to it.

### **Example**

Example 1:

> Input: args = [5]  
> Output: 1  
> Explanation:  
> argumentsLength(5); // 1  
> One value was passed to the function so it should return 1.

Example 2:

> Input: args = [{}, null, "3"]  
> Output: 3  
> Explanation:  
> argumentsLength({}, null, "3"); // 3  
> Three values were passed to the function so it should return 3.

Example 3:

> Input: functions = [], x = 42  
> Output: 42  
> Explanation:  
> The composition of zero functions is the identity function

### **Constraints**

---

- args is a valid JSON array
- 0 <= args.length <= 100

### Solution

---

- Runtime: 52ms
- Memory: 48.28MB

```
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
```

### Retrospect

---

이번 문제를 파라미터로 들어온 배열의 길이를 구하는 문제여서 정말 쉽게 문제를 풀었던거 같다.
