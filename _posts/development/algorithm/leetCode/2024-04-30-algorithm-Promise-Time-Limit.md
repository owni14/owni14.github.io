---
layout: post
title: '[LeetCode] Promise Time Limit'
subtitle: '[LeetCode] Promise Time Limit'
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

Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

### **Example**

---

Example 1:

<!-- prettier-ignore -->
> Input:  
> fn = async (n) => {    
> await new Promise(res => setTimeout(res, 100));   
> return n * n;  
> }  
> inputs = [5]  
> t = 50  
> Output: {"rejected":"Time Limit Exceeded","time":50}  
> Explanation:  
> const limited = timeLimit(fn, t)  
> const start = performance.now()  
> let result;  
> try {  
> const res = await limited(...inputs)  
> result = {"resolved": res, "time": Math.floor(performance.now() - start)};  
> } catch (err) {  
> result = {"rejected": err, "time": Math.floor(performance.now() - start)};  
> }  
> console.log(result) // Output  
> The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.

Example 2:

<!-- prettier-ignore -->
> Input:  
> fn = async (n) => {  
> await new Promise(res => setTimeout(res, 100));  
> return n * n;  
> }  
> inputs = [5]  
> t = 150  
> Output: {"resolved":25,"time":100}  
> Explanation:  
> The function resolved 5 _ 5 = 25 at t=100ms. The time limit is never reached.

Example 3:

> Input:  
> fn = async (a, b) => {  
> await new Promise(res => setTimeout(res, 120));  
> return a + b;  
> }  
> inputs = [5,10]  
> t = 150  
> Output: {"resolved":15,"time":120}  
> Explanation:  
> ​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.

Example 4:

> Input:  
> fn = async () => {  
> throw "Error";  
> }  
> inputs = []  
> t = 1000  
> Output: {"rejected":"Error","time":0}  
> Explanation:  
> The function immediately throws an error.

### **Constraints**

---

- 0 <= inputs.length <= 10
- 0 <= t <= 1000
- fn returns a promise

### Solution

---

- Runtime: 54ms
- Memory: 49.05MB

```
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
 // Solution1
var timeLimit = function (fn, t) {
    return async function (...args) {

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => { reject('Time Limit Exceeded') }, t);
        })

        return Promise.race([fn(...args), timeoutPromise]);
    }
};
```

### Retrospect

---

이번 문제는 온전히 나의 힘으로 풀지 못했고 풀이에 의존해야했다. 문제를 해석하자면, fn함수에 있는 setTimeout의 시간보다 파라미터를 통해 넘겨준 t시간이 더 크면 setTimeout을 실행시킨 값을 반환하면 되고 아니면 에러를 반환하면 됐다. 일단 문제를 보면 resolve로 실행된 **Fn함수**와 reject로 **'Time Limit Exceeded'**를 반환하는 문제였기 때문에 new Promise를 새로 생성해서 **Promise**를 반환하자는 생각을 하였다.

그런데 나는 new Promise 안쪽에서 setTimeout를 선언하긴 했는데 setTimeout함수에 Fn함수를 같이 넣어서 자꾸 이상하게 문제를 푸는 것이었다. 계속 고민하다가 이 방법은 아닌거 같아서 풀이를 보니 new Promise안쪽에서 setTimeout은 Fn함수를 넣을게 아니라 그냥 reject로 에러를 넘겨주고 받아온 t밀리초 만큼 딜레이를 주면 되는 것이었다. fn함수는 그냥 Promise.race에 넘겨주면 끝이었다.

`Promise.race`란 **iterable 안에 있는 프로미스 중에 가장 먼저 완료된 것의 결과값으로 그대로 이행하거나 거부합니다.**라고 문서에 나와있다. 그 말은 즉, new Promise로 만들어준 setTimeout이 먼저 끝나면 reject가 반환 될 것이고 그게 아니라면 Fn함수에서 실행한 setTimeout이 Promise로 반환 될 것이다.

이번에 `Promise.race`라는 메서드를 처음 알게 되었는데 실제로 현업에서 나는 사용해본적이 없지만 되게 유용하게 사용할 수 있을꺼 같은 느낌이 든다.

### Reference

---

- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
