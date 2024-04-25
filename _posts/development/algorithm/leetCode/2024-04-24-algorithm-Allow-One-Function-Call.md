---
layout: post
title: '[LeetCode] Allow One Function Call'
subtitle: '[LeetCode] Allow One Function Call'
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

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

- The first time the returned function is called, it should return the same result as fn.
- Every subsequent time it is called, it should return undefined.

### **Example**

---

Example 1:

> Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]  
> Output: [{"calls":1,"value":6}]  
> Explanation:  
> const onceFn = once(fn);  
> onceFn(1, 2, 3); // 6  
> onceFn(2, 3, 6); // undefined, fn was not called

Example 2:

<!-- prettier-ignore -->
> Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]  
> Output: [{"calls":1,"value":140}]  
> Explanation:  
> const onceFn = once(fn);  
> onceFn(5, 7, 4); // 140  
> onceFn(2, 3, 6); // undefined, fn was not called  
> onceFn(4, 6, 8); // undefined, fn was not called

### **Constraints**

---

- calls is a valid JSON array
- 1 <= calls.length <= 10
- 1 <= calls[i].length <= 100
- 2 <= JSON.stringify(calls).length <= 1000

### Solution

---

- Runtime: 39ms
- Memory: 48.32MB

```
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let isFirstCall = true
    return function(...args) {
        if(isFirstCall) {
            isFirstCall = false
            return fn(...args)
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
```

### Retrospect

---

문제의 설명은 `once`라는 함수가 여러번 호출되게 될 경우 처음만 호출되고 나머지 호출이 되지 않아야한다라고 나와있다. 나는 `once`함수를 제일 처음 생성했을때 `isFirstCall`라는 변수 명을 하나 같이 선언해주었는데 이렇게 해준 이유는 `once`함수를 처음 호출했는지 확인하기 위해서이다.

`onceFn(1,2,3)`을 호출하게 되면 `isFirstCall`은 true가 되니 조건문 안쪽으로 들어가겠고, 함수에 파라미터를 전달해 원하는 값을 추추할 수 있게 된다. 여기서 이제 `isFristCall`변수를 false로 바꿔 처음 함수 호출이 끝났다고 알려주면 다음에 호출할때는 `onceFn`함수가 호출되지 않을꺼고 문제에서 원하는 답을 찾을 수 있게 될 것이다.

`onceFn`함수 내에서 `isFirstCall`을 생성하게되면 `isFirstCall`이라는 변수는 `onceFn`의 렉시컬 환경에 대한 참조를 저장하게 된다. 안쪽 함수에서는 `isFirstCall`을 사용할 수 있게 되고 상태가 바뀌게 되면 바뀐 상태 값도 참조할 수 있게 되는 것이다. 만약 안쪽 함수에서 `isFirstCall`을 선언하고 return 전에 값을 true로 바꾸게 된다면, `onceFn` 다시 호출될 때 `isFirstCall`은 초기값인 false로 바껴있을 것이다.

실질적으로 호출되는 부분은 `function(..args)`인데 해당 함수를 호출하게 되면 렉시컬환경이 계속 새롭게 생성되어질 것이고, 값은 초기화가 될 것이다. 그래서 렉시컬스코프에 의해 상위 스코프에 변수를 선언해서 사용하면 상태 변화를 알 수 있을 것이다.
