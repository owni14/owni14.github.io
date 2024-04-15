---
layout: post
title: '[LeetCode] Apply Transform Over Each Element in Array'
subtitle: '[LeetCode] Apply Transform Over Each Element in Array'
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

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

### **Example**

Example 1:

> Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }  
> Output: [2,3,4]  
> Explanation:  
> const newArray = map(arr, plusone); // [2,3,4]  
> The function increases each value in the array by one.

Example 2:

> Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }  
> Output: [1,3,5]  
> Explanation: The function increases each value by the index it resides in.

Example 3:

> Input: arr = [10,20,30], fn = function constant() { return 42; }  
> Output: [42,42,42]  
> Explanation: The function always returns 42.

### **Constraints**

---

- 0 <= arr.length <= 1000
- -109 <= arr[i] <= 109
- fn returns a number

### Solution

---

- Runtime: 43ms
- Memory: 48.86MB

```
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const result = arr.reduce((acc, cur, idx) => {
        acc.push(fn(cur, idx))
        return acc
    }, [])
    return result
};
```

### Retrospect

---

처음에 문제를 읽고 plusone함수, plusI함수 같이 함수를 따로 만들어서 해야하는줄 알았다. 그런데 다시 자세하게 읽어보니, **map**이라는 이름을 가진 함수는 인자로 받는 arr과 fn을 조합해서 값을 리턴만 해주면 됐었다. 결국 제어권은 map함수를 호출하는쪽에 있었고 어쩌면 결과 값을 만들어주는 fn이라는 함수에 있다고 생각이 들었다.

보통 현업에서 배열이 나오면 나는 map를 가장 많이 쓰는거 같은데 여기에서는 map을 사용하지 말고 풀라고 명시되어 있었기 때문에 for나 reduce를 생각했다. 그래도 reduce가 나한테는 더 편하고 많이 쓰기 때문에 reduce를 이용한 풀이를 작성하였다.

처음에는 아래와 같이 문제를 풀었는데 런타임과 Memory가 `arr.push`를 한 것보다 더 높게 나오는 것이었다. 그래서 나는 생각한게 배열에서 **spread operator**를 사용해서 값을 누적하는거보다 **push**를 이용해서 값을 누적하는게 메모리와 런타임이 더 적게 걸린다는 것을 발견하였다. 해당 부분에 대해서는 좀 더 깊게 찾아보고 정리를 해야할꺼 같다.

```
arr.reduce((acc, cur, idx) => [...acc, fn(cur, idx)], [])
```
