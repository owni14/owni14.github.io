---
layout: post
title: '[LeetCode] Counter II'
subtitle: '[LeetCode] Counter II'
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

Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

- increment() increases the current value by 1 and then returns it.
- decrement() reduces the current value by 1 and then returns it.
- reset() sets the current value to init and then returns it.

### **Example**

---

Example 1:

> Input: init = 5, calls = ["increment","reset","decrement"]  
> Output: [6,5,4]  
> Explanation:  
> const counter = createCounter(5);  
> counter.increment(); // 6  
> counter.reset(); // 5  
> counter.decrement(); // 4

Example 2:

> Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]  
> Output: [1,2,1,0,0]  
> Explanation:  
> const counter = createCounter(0);  
> counter.increment(); // 1  
> counter.increment(); // 2  
> counter.decrement(); // 1  
> counter.reset(); // 0  
> counter.reset(); // 0

### Solution

---

- Runtime: 56ms
- Memory: 52.64MB

```
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current = init

    const increment = () => ++current
    const decrement = () => --current
    const reset = () => {
        current = init
        return init
    }
    return {increment, decrement, reset}
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
```

### Retrospect

---

createCounter이 호출되면 새로운 렉시컬 환경이 생성되고 그 후 안쪽에 선언된 함수 및 변수들은 init과 내가 정의한 current변수가 참조할 수 있게 된다. 처음에 나는 초기화 함수인 **reset**을 `const reset () => init`으로 함수를 만들고 실행했는데 reset을 먼저 실행하고 decrement를 실행하게 되면 원하는 결과에 맞지 않게 자꾸 나타나는 것이었다.

어쩌면 당연한 결과일 수도 있다고 생각이 든다. 왜냐하면 내가 선언한 decrement와 increment는 current 값을 참조하여 전위연산을 수행해 결과 값을 반환하게 되는데 reset을 실행시키게 되면, current값은 init값이 할당된게 아니기 때문에 내가 증감한 값을 그대로 가지고 있을 것이다.

내가 풀이한 결과 밑에 주석을 정의된 내용을 보면 conter라는 변수를 만들어서 먼저 증가시키고 초기화, 감소순으로 실행시키는 예시 코드가 있다. 먼저 **increment()**를 통해 값을 증가 시키게 되면 current변수에 전위연산을 통해 값이 하나 증가되어 6이 될 것이다. 그 후 초기화를 실행시키게 되면 reset은 처음 렉시컬 환경이 생성됨과 동시에 가지고 있는 init값을 반환하게 될 것이고 그 값을 current변수에 할당해줌으로써 current값도 이제 초기값으로 돌아가게 된다. 이제 마지막으로 **decrement()**를 하게 되면 초기화된 current값에 전위연산을 통해 하나 감소시켜 원하는 값을 반환할 수 있다. 초기화를 하지 않으면 계속 current값을 참조하여 증감을 수행하면 되고 초기화가 되면 current도 초기화를 통해 다음 작업을 계속 수행하면 된다.

함수가 렉시컬 환경이 생성되고 값을 참고하는 등 내부적으로 어떻게 동작하는지 좀 더 알게 된 계기가 되었기 때문에 이번 문제는 나에게 꽤나 도움이 되었다.
