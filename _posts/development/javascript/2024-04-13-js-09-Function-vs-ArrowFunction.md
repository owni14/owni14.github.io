---
layout: post
title: '[Js] Function vs Arrow Function'
subtitle: '[Js] Function vs Arrow Function'
category: dev
tags: js
published: true
image:
  path: /assets/img/js.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## Intro

---

최근에 **LeetCode**를 하루 한 문제씩 풀고 있는데 문제를 풀고 끝이 아니라 세부적인 풀이 내용을 바라보게 되니 Js의 동작 원리를 좀 더 자세히 알 수 있게 되어 따로 정리하여 포스팅하기 위해 이렇게 글을 적는다. 이번에는 Javscript의 기본인 **Function**과 **Arrow Function**에 대해서 살펴보려고 한다.

## Function

---

### Basic Syntax

```
function f(a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)); // 7
```

기본적으로 함수는 위와 같이 사용할 수 있다. **function**이라는 키워드를 통해 함수라는 것을 선언할 수 있으며, `f`는 **함수 명**, a,b는 함수를 통해 **넘겨주는 인자**가 된다. 중괄호 안은 자유롭게 로직을 작성해도 상관 없고 결과는 `return`을 통해 반환되어진다. 만약 아무것도 return하지 않게 되면 `undefined`이 반환 될 것이다.

### Anonymous Function

`function f(){}`와 같이 바로 함수명을 선언해도 되지만 함수 명을 빼고 사용해도 된다. 아래와 같이 사용하게 되면 **변수명 f**를 통해 함수를 호출하고 사용할 수 있게 된다. 여기서 `f`가 함수명이 되어진다.

```
var f = function(a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)); // 7
```

### Immediately Invoked Function Expression (IIFE)

함수 선언과 동시에 인자를 선언해주는 방법도 가능하다. 아래와 같이 사용하면 **변수 명 result**를 통해 바로 함수를 호출하고 사용할 수 있게 된다.

```
const result = (function(a, b) {
    const sum = a + b;
    return sum;
})(3, 4);
console.log(result); // 7
```

이런 방법으로 사용하는 이유가 개발자들이 함수를 캡슐화하는 것을 가능하게 해주기 때문이다. 다른 개발자들은 return이 되는 `sum`을 아무곳에서나 사용할 수 없다는 것을 바로 알 수 있게 된다라고 설명이 나와 있지만 나는 함수 선언과 동시에 인자를 넘겨주는 방식은 거의 본적이 없어서 실제 현업에서 사용하게 되면 내용을 좀 더 추가해서 적도록 하겠다.

### Functions Within Functions

함수안에 함수를 사용해서 중첩되게 사용할 수도 있다. 이런 방법은 자바스크립트의 강력한 기능이라고 말하고 있다.

```
function createFunction() {
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createFunction();
console.log(f(3, 4)); // 7
```

f라는 변수명으로 **createFunction**을 사용하도록 선언한 다음 console.log를 통해 평소 사용하던 함수와 같이 인자를 넘겨줘서 사용할 수 있다. 함수안에 함수를 사용하는 방법은 리액트에서 사용하는 방법으로 알고 있고 클로저와 렉시컬 환경등 여러 핵심내용들이 들어가므로 내용을 정리한 다음 포스팅하도록 하겠다.

## Arrow Functiokn

---

### Basic Syntax

```
const f = (a, b) => {
    const sum = a + b;
    return sum;
};
console.log(f(3, 4)); // 7
```

위와 같이 화살표함수를 많은 프로젝트에서 사용하고 있고 선호한다고 알려져 있다. 일반 함수와 선언하는 것은 조금 다르지만 좀 더 쉽게 사용할 수 있고 간결하다고 생각이 든다. `f`가 **함수 명**이 되고 괄호 안에 있는 a,b가 **넘겨주는 인자**가 된다. 일반 함수와 동일하게 `f`를 호출하여 함수를 사용할 수 있게 된다.

그런데 화살표 함수는 return을 적지 않고 더 간결하게 사용할 수 있는데 아래와 같이 `return`을 사용하지 않고 바로 반환시켜버리는 방법을 선택할 수 있다.

```
const f = (a, b) => a + b;
console.log(f(3, 4)); // 7
```

그리고 함수를 넘겨주는 인자가 a, b가 아니라 그냥 a하나일 경우 **( )를 생략**하여 아래 예시처럼 사용할 수도 있다.

```
const f = a => a + a;
console.log(f(3)); // 6
```

## Function vs Arrow Function

---

### More minimalistic syntax.

화살표 함수는 일반 함수보다 간결하게 사용할 수 있다.

### No automatic hoisting.

호이스팅이라는 것은 변수나 함수가 스코프 최상단으로 끌어올려지는 자바스크립트 메커니즘이다. 일반함수와 달리 화살표 함수는 자동적으로 함수 선언부터 최상단으로 끌어올려지지 않고 함수가 선언 된 후에 함수를 사용할 수 있게 된다. 일반적으로 가독성 측면에서 유리하다고 볼 수 있다.

### Can't be bound to **this**, **super**, and **arguments** or be used as a **constructor**.

화살표 함수는 일반 함수와 달리 this나, super, 생성자를 사용할 수 없다.

## Reference

---

- [https://leetcode.com/problems/create-hello-world-function/editorial/?envType=study-plan-v2&envId=30-days-of-javascript](https://leetcode.com/problems/create-hello-world-function/editorial/?envType=study-plan-v2&envId=30-days-of-javascript)
