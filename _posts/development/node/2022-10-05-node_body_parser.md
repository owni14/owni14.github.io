---
layout: post
title: '[node] Body-parser란?'
subtitle: '[node] Body-parser란?'
category: dev
tags: node
image:
  path: /assets/img/node.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## Body-parser란?

클라이언트측에서 회원가입할때 입력하는 email, name을 정보들을 서버측으로 전송할때, 서버측에서 Body에 있는 데이터를 분석해서 출력해줘야 하는데 이러한 역할을 하는 것이 Body-parser이다.  
만약 Body-parser를 사용하지 않는다면 클라이언트측에서 body부분에 데이터를 실어서 보낼때 **undefined**이라는 오류가 발생하게 된다.

Body-parser은 Express 4.16.0 버전 이상부터 내장 모듈로 포함되어 있기 때문에 `npm install body-parser --save`와 같은 별도의 설치를 해줄 필요가 없다.  
자신의 package.json파일을 열어서 express 버전을 확인 후, 4.16이상이라면 아래와 같이 사용해야한다.

```
const express = require('express');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
```

## postman을 이용한 body데이터 확인

URL경로를 다음과 같이 `/test`로 작성해 두었다.

```
app.get('/test', (req, res) => {
  res.send('Test!!');
  console.log(req.body);
});
```

npm run start로 서버를 실행시킨 후, postman을 통해 body부분에 데이터를 담아 전송
![postman_sending](/assets/img/development/2022-10-05/postmant_sending.png)

console을 통한 body값 확인  
![request_body](/assets/img/development/2022-10-05/request_body.png)

postman을 통한 response값 확인
![response](/assets/img/development/2022-10-05/response.png)

## Reference

[https://www.youtube.com/watch?v=RVhOamEWyGs&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T&index=7](https://www.youtube.com/watch?v=RVhOamEWyGs&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T&index=7)
[https://jin2rang.tistory.com/entry/express-bodyparser-deprecated-bodyparser%EB%8A%94-%EB%8D%94%EC%9D%B4%EC%83%81-%EC%82%AC%EC%9A%A9%EB%90%98%EC%A7%80-%EC%95%8A%EC%8A%B5%EB%8B%88%EB%8B%A4-%EB%AC%B8%EC%A0%9C%ED%95%B4%EA%B2%B0](https://jin2rang.tistory.com/entry/express-bodyparser-deprecated-bodyparser%EB%8A%94-%EB%8D%94%EC%9D%B4%EC%83%81-%EC%82%AC%EC%9A%A9%EB%90%98%EC%A7%80-%EC%95%8A%EC%8A%B5%EB%8B%88%EB%8B%A4-%EB%AC%B8%EC%A0%9C%ED%95%B4%EA%B2%B0)
