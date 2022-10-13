---
layout: post
title: '[node] 비밀정보 보호'
subtitle: '[node] 비밀정보 보호'
category: dev
tags: node
image:
  path: /assets/img/node.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## 비밀정보 보호란?

---

비밀정보라고 하면 mongoDB에서 가져온 application code같은 것들이 있을 수 있는데, 이와 같은 정보들이 외부로 노출되게되면 다른사람들이 손쉽게 데이터를 조작할 수 있다.  
그래서 비밀정보들은 보호해 주어야 하는데 로컬환경, 배포환경에 따라서 달라질 수 있다. 로컬환경은 말 그대로 우리 서버에서 실행하는 환경을 의미하고 배포환경이라고 하면 AWS, Azure, Heroku서버등이 있을 수 있다.

## config폴더 생성

---

![config_file](/assets/img/development/2022-10-06/config_file.png)  
다음과 같이 나는 config폴더를 생성하고 mongoDB와 로컬에서 연결을 하는 `dev.js`, 배포환경에서 연결하는 `prod.js` 로컬이나 배포환경이냐에 따라 분기처리를 해주는 `key.js`파일을 생성하였다.

- dev.js (로컬환경)

```
module.exports = {
  mongoURI: 'mongodb+srv://minwoo:<password>@boiler-plate.eprevbl.mongodb.net/?retryWrites=true&w=majority'
}
```

로컬환경에서는 mongoDB와 연결한 내용을 mongoURI라는 이름으로 export해주었다.

- prod.js (배포환경)

```
module.exports = {
    mongoURI: process.env.MONGO_URI
}
```

Node.js에서 환경 변수에 접근할 때는 process.env라는 내장 자바스크립트 객체를 사용하며, process는 전역 객체여서 별도로 임포트해야하는 모듈이 없으며 애플리케이션 어디에서든지 접근이 가능하다.  
배포서버는 heroku라는 서버를 이용할건데, 서버의 config를 MONGO_URI라는 이름으로 설정해 놓았기 때문에 `process.env.MONGO_URI`로 mongoDB와 연결한다. MONGO_URI뒤에 있는 부분은 자신의 mongoDB 로컬환경연결에서 사용하는 application code를 넣어주면 된다.
![heroku_server_config](/assets/img/development/2022-10-06/heroku_server_config.png)

- key.js (로컬 or 배포환경 분기처리)

```
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}
```

`process.env.NODE_ENV === 'production'`를 통해 배포환경이면 `prod.js`에서 export하는 것이고, 배포환경이 아닐 경우에는 `dev.js`파일에서 export해 mongoDB와 연결한다.

다른 곳에서 배포할 경우 package.json에서 script부분을 다음과 같이 지정해줄 수 있다.

```
"script": {
  "dev": "NODE_ENV=development nodemon index.js",
  "prod": "NODE_ENV=production node index.js",
  "prod:compress": "NODE_ENV=production USE_COMPRESS=1 node index.js"
}
```

## Reference

---

[https://www.youtube.com/watch?v=0z1jV4rzaH0&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T&index=9](https://www.youtube.com/watch?v=0z1jV4rzaH0&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T&index=9)
[https://www.daleseo.com/js-node-process-env/](https://www.daleseo.com/js-node-process-env/)
[https://www.inflearn.com/questions/33800](https://www.inflearn.com/questions/33800)
