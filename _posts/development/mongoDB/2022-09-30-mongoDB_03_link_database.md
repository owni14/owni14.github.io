---
layout: post
title: '[mongoDB] 데이터베이스 연동'
subtitle: '[mongoDB] 데이터베이스 연동'
category: dev
tags: mongo
image:
  path: /assets/img/development/2022-09-28/mongoDB_database.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## npm install 이용한 mongoDB 의존성 설치

mongoDB를 연결하기 위해서는 vsCode의 Terminal에서 `npm install mongoose --save`를 이용해서 몽고DB의 의존성을 설치해줘야한다.  
![add_mongoose](/assets/img/development/2022-09-30/add_mongoose.png)

## 데이터베이스 연동

무료로 만든 test라는 데이터베이스에서 Connect라는 글자를 클릭하면 무슨방법으로 데이터베이스를 연동할지 나오게 된다.  
나는 application code를 이용해서 mongoDB를 연결할꺼기 때문에 **Connect your application**을 선택했다.
![connect_method](/assets/img/development/2022-09-30/connect_method.png)

이후 각자 자신에게 맞는 Driver와 Version을 선택하고 두번째의 application code를 복사한다.  
![connect_to_applicaton](/assets/img/development/2022-09-30/connect_to_application.png)

node가 제일먼저 실행될 index.js로 와서 `require('mongoose')`를 이용해서 mongoDB의 의존성을 가져와야 한다.  
그 다음 connect를 이용해서 application code를 복사 붙여넣기 해서 연동을 실행해야한다. `<password>`가 적혀있는 부분을 지우고 자신이 데이터베이스를 만들때 사용했던 비밀번호를 적어주면 되고, 아래 이미지와 같은 형태로 작성해주자.

![connect_mongoDB](/assets/img/development/2022-09-30/connect_mongoDB.png)

## 데이터베이스 연동 확인

데이터베이스가 제대로 연동되어 있는지 확인을 하기 위해 Terminal에서 `npm run start` 명령어를 통해 index.js파일을 실행시켜보자.  
다음과 같이 맨 아래에 MongoDB Connected..가 나오면 정상적으로 연동이 완료 된 것이다.  
![check_connection](/assets/img/development/2022-09-30/check_connection.png)

## Reference

[https://www.youtube.com/watch?v=fgoMqmNKE18&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T](https://www.youtube.com/watch?v=fgoMqmNKE18&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T)
