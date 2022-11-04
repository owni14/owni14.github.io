---
layout: post
title: '[Js] ES6 배열 메서드'
subtitle: '[Js] ES6 배열 메서드'
category: dev
tags: js
published: true
image:
  path: /assets/img/js.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## 배열 메서드

---

### forEach

- 주어진 함수를 **배열 요소 각각에 대해 실행**합니다.
- 예시

  ```
    const array1 = ['a', 'b', 'c'];

    // 배열 요소를 element라는 변수로 하나씩 파라미터로 전달
    array1.forEach(element => console.log(element));
  ```

### map

- 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 **새로운 배열을 반환**
- return이 요소가 없으면 `undefined`처리
- 예시

  ```
  const array1 = [1, 4, 9, 16];

  // 전달된 함수의 return값인 x * 2로 처리되어 새로운 배열 생성
  const map1 = array1.map(x => x * 2);

  console.log(map1); // [2, 8, 18, 32]
  ```

### filter

- 주어진 함수의 **테스트를 통과하는 모든 요소**를 모아 **새로운 배열로 반환**
- 예시

  ```
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

  // 배열 요소를 word라는 변수로 받아서 word의 문자열 길이가 6이상인 것에 대해서만 반환
  const result = words.filter(word => word.length > 6);

  console.log(result); // ["exuberant", "destruction", "present"]
  ```

### find

- 주어진 함수를 만족하는 **첫 번째 요소의 값을 반환**합니다. 그런 요소가 없다면 undefined를 반환
- 예시

  ```
  const array1 = [5, 12, 8, 130, 44];

  // 배열 요소를 element라는 변수로 하나씩 파라미터로 전달하는데 10이상인 값들 중 첫 번째 요소의 값을 반환
  const found = array1.find(element => element > 10);

  console.log(found); // 12
  ```

### every

- 배열 안의 **모든 요소가 주어진 함수를 통과하는지 테스트**
- **Boolean 값을 반환**
- 모두 테스트 통과 시 true, 아니면 false return
- 예시

  ```
  const example_array = [0,1,2,3,4,5,6,7,8,9,10];

  // 배열 요소를 element라는 변수로 하나씩 파라미터로 전달
  // el이 5이하인 것이 하나라도 있으면 false 반환
  let result = example_array.every((element)=>element>5);
  console.log(result); // false

  // 배열 요소를 element라는 변수로 하나씩 파라미터로 전달
  // el이 10보다 큰 것이 하나라도 있으면 false 반환
  result = example_array.every((element)=>element<=10);
  console.log(result); // true

  ```

### some

- 배열 안의 **적어도 하나의 요소라도 주어진 함수의 테스트 조건을 통과**하는지
- **Boolean 값을 반환**
- 테스트 통과하는 요소 하나 이상 존재 시 true, 아니면 false return
- 예시

  ```
  const array = [1, 2, 3, 4, 5];

  // element가 2로 나누었을때 나머지가 0이 하나라도 있으면 true 반환
  const even = (element) => element % 2 === 0;

  console.log(array.some(even)); // true
  ```

## Reference

---

[https://share-factory.tistory.com/24?category=981504](https://share-factory.tistory.com/24?category=981504)  
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)  
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)  
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)  
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)  
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every)  
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
