---
layout: post
title: '[LeetCode] Filter Elements from Array'
subtitle: '[LeetCode] Filter Elements from Array'
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

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

- arr[i] - number from the arr
- i - index of arr[i]

filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

### **Example**

Example 1:

> Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
> Output: [20,30]
> Explanation:
> const newArray = filter(arr, fn); // [20, 30]
> The function filters out values that are not greater than 10

Example 2:

> Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
> Output: [1]
> Explanation:
> fn can also accept the index of each element
> In this case, the function removes elements not at index 0

Example 3:

> Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
> Output: [-2,0,1,2]
> Explanation:
> Falsey values such as 0 should be filtered out

### **Constraints**

---

- 0 <= arr.length <= 1000
- -109 <= arr[i] <= 109

### Solution

---

- Runtime: 55ms
- Memory: 51.05MB

```
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    return arr.reduce((acc, cur, idx) => fn(cur, idx) ? [...acc,cur] : acc, [])
};
```

### Retrospect

---

전에 풀었던 유형과 문제가 비슷하다고 생각했다. 파라미터로 받는 함수에 의해 참 거짓이 판별되고 **true**일때마다 값을 계속 누적해나갔다. filter를 사용하면 편하게 풀었을꺼 같지만 문제에서 사용하지 말라고 했기 때문에 reduce를 사용하였다.
