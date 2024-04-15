---
layout: post
title: '[LeetCode] To Be Or Not To Be'
subtitle: '[LeetCode] To Be Or Not To Be'
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

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

- toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
- notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

### **Example**

---

Example 1:

> Input: func = () => expect(5).toBe(5)  
> Output: {"value": true}  
> Explanation: 5 === 5 so this expression returns true.

Example 2:

> Input: func = () => expect(5).toBe(null)  
> Output: {"error": "Not Equal"}  
> Explanation: 5 !== null so this expression throw the error "Not Equal".

Example 3:

> Input: func = () => expect(5).notToBe(null)  
> Output: {"value": true}  
> Explanation: 5 !== null so this expression returns true.

### Solution

---

- Runtime: 55ms
- Memory: 48.71MB

```
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const toBe = (targetVal) => {
       if(val === targetVal){
        return true
       } else {
        throw Error("Not Equal")
       }
    }
    const notToBe = (targetVal) => {
        if(val !== targetVal) {
            return true
        } else {
            throw Error("Equal")
        }
    }
    return {toBe, notToBe}
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
```

### Retrospect

---

expect().toBe()는 React프로젝트를 할때 Jest로 테스트 코드를 작성할때 썼던 방법이다. 테스트코드의 내부를 내가 직접 작성해서 신기하기도 했다. 처음에 나는 `toBe()`에서 일치하지 않을 경우 에러를 던져야하는데 toBe함수에서 참 거짓만 판별해서 값을 return하고 있었다.  
그로 인해 값은 자꾸 `{value:"Not Equal"}`가 나오는 것이었다. 그래서 다시 문제를 찾아보니 에러를 던져줘야한다는 것을 깨닫고 다시 코드를 고쳐서 실행시켰다.
