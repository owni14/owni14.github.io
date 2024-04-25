---
layout: post
title: '[LeetCode] Array Reduce Transformation'
subtitle: '[LeetCode] Array Reduce Transformation'
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

Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.

### **Example**

---

Example 1:

> Input:  
> nums = [1,2,3,4]  
> fn = function sum(accum, curr) { return accum + curr; }  
> init = 0  
> Output: 10  
> Explanation:  
> initially, the value is init=0.  
> (0) + nums[0] = 1  
> (1) + nums[1] = 3  
> (3) + nums[2] = 6  
> (6) + nums[3] = 10  
> The final answer is 10.

Example 2:

> Input:  
> nums = [1,2,3,4]  
> fn = function sum(accum, curr) { return accum + curr _ curr; }  
> init = 100  
> Output: 130  
> Explanation:  
> initially, the value is init=100.  
> (100) + nums[0] _ nums[0] = 101  
> (101) + nums[1] _ nums[1] = 105  
> (105) + nums[2] _ nums[2] = 114  
> (114) + nums[3] \* nums[3] = 130  
> The final answer is 130.

Example 3:

> Input:  
> nums = []  
> fn = function sum(accum, curr) { return 0; }  
> init = 25  
> Output: 25  
> Explanation: For empty arrays, the answer is always init.

### **Constraints**

---

- 0 <= nums.length <= 1000
- 0 <= nums[i] <= 1000
- 0 <= init <= 1000

### Solution

---

- Runtime: 45ms
- Memory: 50.12MB

```
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length === 0) {
        return init
    } else {
        let acc = 0;
        nums.map((item, idx) => {
            if(idx === 0) {
                acc = fn(init, item)
            } else {
                acc = fn(acc, item)
            }
        })
        return acc
    }
};
```

### Retrospect

---

처음 문제를 접근했을때 reduce함수안에서 `return nums.length === 0 ? init : acc`로 했지만 memory와 runtime이 오래 걸려 처음부터 분기를 구분하니 memory와 runtime이 많이 줄어들었다.  
마지막에서 return에서 분기를 하게 되면 nums의 length가 없는 상태에서 굳이 map을돌게 되고 그 후 다시 길이를 비교하게 되니 시간이나 메모리가 더 걸렸던거 같다.
