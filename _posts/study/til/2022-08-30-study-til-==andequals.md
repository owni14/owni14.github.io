---
layout: post
title: "[til] == Operator Vs equals Method"
subtitle: "[til] Operator Vs equals Method"
category: study
tags: til
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
  {:toc}

## String 변수 생성시 주소

String변수 생성시 **리터럴 방식**으로 생성하는지 **`new`**라는 키워드를 사용해서 생성하는지에 따라 저장되는 영역이 달라진다.  
리터럴 사용의 경우에는 **heap영역**안에 **string constant pool**이라는 영역에 생성된다. 그렇지만 `new`키워드를 사용해서 생성하게 될 경우 그냥 **heap**영역에 저장되게 된다.

```
String str1 = "hello"; // 리터럴 방식
String str2 = new String("hello"); // new연산자 방식
```

## == Operator vs equals Method

== 연산자와 equals 메서드는 모두 boolean값이 `true`나 `false`중 하나를 return하게 된다.

먼저 **== 연산자**는 <u>객체의 메모리 주소를 서로 비교</u>하고 **equals 메서드**는 <u>문자열 비교</u>한다. 그래서 같은 이름을 갖는 객체일지라도 string의 문자열을 비교 하고 싶으면 equals 메서드를 사용하는게 더 효과적이라고 생각된다. 나 역시 두개의 차이점을 잘 인지하지 못해 많은 고생을 한 기억이 있다.

int형, char형등은 Call by Value로 복사본을 참고하기 때문에 주소값을 가지지 않는 형태로 사용하지만 string은 클래스이기 때문에 Call by Reference로 주소값을 직접 참조하기 때문에 == 연산자를 사용할 경우 값이 다르게 나올 수 있으므로 **주의**하자.

```
String str1 = "hello";
String str2 = new String("hello");
console.log(str1 == str2); // false
console.log(str1.equals(str2)) // true
```

## Reference

[https://coding-factory.tistory.com/536](https://coding-factory.tistory.com/536)
