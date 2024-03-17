---
layout: post
title: '[MongoDB] 모델과 스키마'
subtitle: '[MongoDB] 모델과 스키마'
category: dev
tags: mongoDB
image:
  path: /assets/img/mongoDB.png
  published: false
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## 스키마란?

---

데이터베이스를 구성할때 각각의 컬렉션에 어떤 타입이 들어가고 하는지 정해줘야 하는지 이러한 것을 스키마라고 한다.  
예를 들어 내가 회원가입을 할 경우, 데이터베이스에 작성자는 누구인지, 타입은 어떤지, 길이는 어떤지와 같이 하나하나의 정보들을 지정해주는 것을 의미한다.

```
const userSchema = mongoose.Schema({
   // 이름 형식
  name: {
    type: String, // string 타입으로 구성
    maxlength: 50, // 이름은 최대 50자까지만
  },
  // 아이디 형식
  id: {
    type: String, // string 타입으로 구성
    maxlength: 50, // 아이디는 최대 50자까지만
  },
  // 비밀번호 형식
  password: {
    type: String, // string 타입으로 구성
    minlength: 5, // 비밀번호는 최소 5자리 이상
  },
  // 이메일 형식
  email: {
    type: String, // string 타입으로 구성
    trim: true, // 공백을 허용
  },
});
```

## 모델이란?

---

모델은 스키마를 감싸는 역할을 한다. 즉, 스키마를 통해서 만드는 인스턴스이다.

```
const User = mongoose.model('User', userSchema);
```

`User`을 통해 데이터베이스에서 정보를 추가, 수정, 삭제, 조회를 할 수 있다.

## Reference

---

[https://www.youtube.com/watch?v=c92IF8Dtu0o&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T&index=4](https://www.youtube.com/watch?v=c92IF8Dtu0o&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T&index=4)
[https://backend-intro.vlpt.us/2/03.html](https://backend-intro.vlpt.us/2/03.html)
