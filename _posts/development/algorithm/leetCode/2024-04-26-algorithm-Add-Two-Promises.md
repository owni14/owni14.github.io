---
layout: post
title: '[LeetCode] Add Two Promises'
subtitle: '[LeetCode] Add Two Promises'
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

Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

### **Example**

---

Example 1:

> Input:  
> promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),  
> promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))  
> Output: 7  
> Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

Example 2:

> Input:  
> promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),  
> promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))  
> Output: -2  
> Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.

### **Constraints**

---

- promise1 and promise2 are promises that resolve with a number

### Solution

---

- Runtime: 68ms
- Memory: 49.57MB

```
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function(promise1, promise2) {
    const firstNum = await promise1
    const secondNum = await promise2
    return firstNum + secondNum
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
```

### Retrospect

---

비동기함수로 이제 들어왔다 많이 써보지는 않았지만 개념은 알고 있는 `async` `await` `promise`에 대한 것들이 나왔다. 처음에 문제를 봤을때 Promise 객체로 받으니까 각 Promise에 대해 await를 걸어줘 Promise를 기다렸다가 숫자를 받아오게끔 처리했다. 그 후 각 받아온 값에 대해 반환을 하여 정답을 구했다.

이번문제는 비동기에 대한 정말 기초적인 개념에 대해서 알려주고 있는거 같다. `async`를 사용하게 되면 항상 Promise객체를 반환하게 되고 안쪽에서 API를 받아와서 반환하는 로직이 많이 작성되는거 같다.
