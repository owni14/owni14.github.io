---
layout: post
title: '[LeetCode](Linked List) Convert Binary Number in a Linked List to Integer'
subtitle: '[LeetCode](Linked List) Convert Binary Number in a Linked List to Integer'
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

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.

### **Example**

---

Example 1:

![linked-list](../../../assets/img/development/2024/04/29/linked-list.png)

> Input: head = [1,0,1]  
> Output: 5  
> Explanation: (101) in base 2 = (5) in base 10

Example 2:

> Input: head = [0]  
> Output: 0

### **Constraints**

---

- The Linked List is not empty.
- Number of nodes will not exceed 30.
- Each node's value is either 0 or 1.

### Solution

---

- Runtime: 58ms
- Memory: 51.54MB

```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// My Solution
function getDecimalValue(head: ListNode | null): number {
    let current: ListNode = head
    let sum = 0
    const valList = []

    while (current !== null) {
        valList.push(current.val)
        current = current.next
    }

    valList.reverse().map((val: number, idx: number) => {
        if(val === 1) {
            sum += 2 ** idx
        }
    })

    return sum
};

// Another Solution
function getDecimalValue(head: ListNode | null): number {
    let current: ListNode = head
    let binary = ""

    while (current !== null) {
        binary += current.val
        current = current.next
    }

    return parseInt(binary, 2)
};
```

### Retrospect

---

자료구조에 대해서 학습할 필요가 있을꺼 같아 이번에 Linked List에 대해서 문제를 풀었다. 내가 푼 문제는 Linked List중에 쉽고 정답률이 높은 편이었지만 나한테는 처음 접하는 Linked List의 알고리즘 문제였고 생각보다 어렵게만 다가왔었다. 그리고 Linked List의 Node, next등의 개념이 처음에는 잘 이해가 되지 않았다.

그렇지만 계속해서 이해할려고하고 보다보니 어느정도 이해는 된거 같다. 대략적으로 설명하자면, **head**라는 것은 Linked List에서 가장 처음 위치하는 노드를 가리키며 리스트 전체를 참조하는데 사용된다. **Node**라는 것은 데이터를 저장하는 데이터 필드와 다음 노드를 가리키는 링크 필드로 구성되어 있다. 문제에서 next라는 것이 다음 노드를 가리키는 링크 필드인 것이다.

문제의 내용을 살펴보면 [1, 0, 1]과 같이 데이터가 들어올때, 배열이 ListNode로 변환되어서 들어오는거 같은데 해당 부분은 좀 더 찾아봐야할꺼 같다. 하여튼 배열이 들어오게 되면 101을 이진수로 바꾸면 되는 문제였다. 여기서 제일 처음에 나는 101을 그냥 순서대로 2의 0승, 2의 1승으로 계산했었는데 알고 보니 반대로 뒤집어서 문제를 풀어야했다. 그래서 while문을 통해 무한 반복을 하는데 current를 current.next로 할당하면서 다음 노드로 자꾸 옮겨가게 했으며, valList라는 변수에 데이터를 누적해서 담아주었다.

그 후, reverse와 map을 이용해서 배열을 반대로 뒤집었고 반복을 했다. 반복문을 통해 1인 경우에 해당 인덱스를 2의 인덱스승수를 계속해서 sum에 누적해서 더해 나갔고 마지막엔 sum을 반환해 답을 찾아냈다.

문제를 다 풀고 난 후, 다른 사람의 풀이를 보니 각 노드를 순회하면서 binary라는 변수를 통해 값을 누적해서 더한 다음 parseInt를 통해 이진수로 정말 간단하게 변형하는 것이었다. 이번 기회를 통해 좀 더 쉽게 구하는 방법을 알아가는 계기가 되었다.
