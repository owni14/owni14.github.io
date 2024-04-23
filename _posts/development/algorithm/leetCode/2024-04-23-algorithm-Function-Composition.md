---
layout: post
title: '[LeetCode] Function Composition'
subtitle: '[LeetCode] Function Composition'
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

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

### **Example**

Example 1:

<!-- prettier-ignore -->
> Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4  
> Output: 65  
> Explanation:  
> Evaluating from right to left ...  
> Starting with x = 4.  
> 2 * (4) = 8  
> (8) * (8) = 64  
> (64) + 1 = 65

Example 2:

<!-- prettier-ignore -->
> Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1  
> Output: 1000  
> Explanation:  
> Evaluating from right to left ...  
> 10 * (1) = 10  
> 10 * (10) = 100  
> 10 * (100) = 1000

Example 3:

> Input: functions = [], x = 42  
> Output: 42  
> Explanation:  
> The composition of zero functions is the identity function

### **Constraints**

---

- -1000 <= x <= 1000
- 0 <= functions.length <= 1000
- all functions accept and return a single integer

### Solution

---

- Runtime: 57ms
- Memory: 50.03MB

```
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {

    return function(x) {
        return functions.length ? functions.reverse().reduce((acc, cur, idx) => cur(acc), x) : x
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
```

### Retrospect

---

이제 함수 내용으로 들어왔고 뭔가 문제를 풀기 위해서는 js의 클로저나 렉시컬환경 실행컨텍스트등 핵심적이고 중요한 내용을 알고 있어야 문제의 답이 어떻게 나왔는지 알 수 있는거 같다.

함수를 호출하는 첫번째 파라미터로는 함수 배열이 들어가고 두번째 파라미터로는 숫자가 들어간다. 두번재 파라미터의 숫자를 가지고 함수 배열에 있는 제일 마지막 인덱스 함수에 값을 전달에 실행하게 되고 그 다음에 마지막 인덱스-1의 함수를 마지막 인덱스에서 실행한 함수의 값을 파라미터로 넣어서 실행시키는 방식으로 이어진다.

마지막 인덱스부터 첫번째 인덱스까지 계속해서 반복해서 함수를 실행시키며 함수 리턴 값을 앞으로 전달시키는 방법이라고 생각하면 좋을꺼 같다. 나는 함수를 마지막부터 시작하기 위해서 `reverse`메서드를 이용했고, `reduce`를 이용해서 값을 계속 누적해서 더해나가며 원하는 값을 리턴했다.

아직도 헷갈리는 내용이 많고 정확히 내가 모든 내용을 다 안다고 설명할 수는 없지만 이렇게 코딩테스트를 통해 js의 동작원리는 조금이나마 더 이해하고 찾아볼 수 있게 되고, 조금씩 정리해 나가는게 좋은거 같다.
