---
layout: post
title: '[LeetCode] Sleep'
subtitle: '[LeetCode] Sleep'
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

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

### **Example**

---

Example 1:

> Input: millis = 100  
> Output: 100  
> Explanation: It should return a promise that resolves after 100ms.  
> let t = Date.now();  
> sleep(100).then(() => { console.log(Date.now() - t); // 100 });

Example 2:

> Input: millis = 200  
> Output: 200  
> Explanation: It should return a promise that resolves after 200ms.

### **Constraints**

---

- 1 <= millis <= 1000

### Solution

---

- Runtime: 51ms
- Memory: 49MB

```
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(millis)
        }, millis)
    })
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```

### Retrospect

---

양의 정수가 파라미터로 들어오면 들어온 파라미터만큼 뒤에 실행되는 Promise객체를 반환하면 되는 문제였고 반환 값은 어떤 것이든 상관 없었다. `new Promise`를 이용해서 Promise 객체를 생성한 후 setTimeout으로 파라미터로 들어온 양의 정수로 시간 간격을 두고 값을 반환해주었다.
