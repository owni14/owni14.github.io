---
layout: post
title: '[Node] Express.js의 핵심 미들웨어'
subtitle: '[Node] Express.js의 핵심 미들웨어'
category: dev
tags: node
published: true
image:
  path: /assets/img/express.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## 미들웨어란?

---

Express.js는 node.js를 사용하여 **서버**를 **좀 더 쉽게** 구성할 수 있게 해주는 프레임워크라고 이전에 [포스트](https://owni14.github.io/dev/node-04-express.html) 했었다. 그런데 이 Express.js는 기본적으로 일련의 **미들웨어 함수 호출**인 것이다.

- 미들웨어 함수란?
  > 미들웨어 함수는 요청 오브젝트(req), 응답 오브젝트 (res), 그리고 애플리케이션의 요청-응답 주기 중 그 다음의 미들웨어 함수 대한 액세스 권한을 갖는 함수입니다. 그 다음의 미들웨어 함수는 일반적으로 next라는 이름의 변수로 표시됩니다.
  > 출처 : 위키백과

미들웨어를 쉽게 풀어서 설명하자면 클라이언트로부터 요청이 들어오고 응답하는 과정 중간에서 **목적에 맞게 처리하는 함수**들이라고 보면 된다.

## 미들웨어의 작업

---

- 모든 코드를 실행
- 요청 및 응답 오브젝트에 대한 변경을 실행
- 요청-응답 주기를 종료
- 스택 내의 그 다음 미들웨어 함수를 호출

미들웨어 함수가 요청-응답 주기를 종료하지 않는 경우에는 `next()`를 호출하여 그 다음 미들웨어 함수에 제어를 전달해야한다. 전달해주지 않을 경우 요청은 멈춰있게 된다. **next**라는 말에서 알 수 있듯이 미들웨어는 순차적으로 이루어진다.

## 미들웨어 작성법

---

내가 강의를 듣고 있는 곳에서 미들웨어를 사용한 부분이 있어 코드를 일부 가져왔다.

```
let auth = (req, res, next) => {
  let token = req.cookies.w_auth; // HTTP 요청으로 들어온 값으로 token이라는 객체 생성

  User.findByToken(token, (err, user) => { // MongoDB를 이용해서 데이터 베이스에서 HTTP요청과 일치하는 token을 찾는다.
    if (err) throw err;
    if (!user) // token과 일치하는 회원이 아닐 경우
      return res.json({
        isAuth: false,
        error: true,
      });

    // token과 user에 대한 정보를 HTTP요청의 req객체에 변경하여 넣어준다.
    req.token = token;
    req.user = user;
    next(); // 다음 미들웨어를 실행
  });
};
```

- **req**, **res**, **next**를 가진 함수를 작성하면 미들웨어가 된다.
- **req** : HTTP 요청을 처리하는 객체
- **res** : HTTP 응답을 처리하는 객체
- **next** : 다음 미들웨어를 실행하는 함수
- next()함수가 호출되지 않으면 다음 요청을 실행하지 않기 때문에 주의가 필요

## 미들웨어 유형

---

### 애플리케이션 레벨 미들웨어

앱이 요청을 수신할 때마다 실행되는 미들웨어

```
var app = express();

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
```

/user/:id 경로에 대한 모든 유형의 HTTP 요청에 대해 실행되는 미들웨어

```
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});
```

하나의 경로를 통해 일련의 미들웨어 함수를 하나의 마운트 위치에 로드하는 예시로 위의 미들웨어가 먼저 실행 된 뒤에 다음, 미들웨어가 이어 받는다.

```
app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id);
  next();
}, function (req, res, next) {
  res.send('User Info');
});
```

- app.use() 및 app.METHOD() 함수를 이용해 미들웨어를 연결할 수 있다.
- 미들웨어를 모든 요청에 공통적으로 적용하기 위한 방법
- http요청이 들어온후 순서대로 동작

### 라우터 레벨 미들웨어

라우터 레벨 미들웨어는 express.Router() 인스턴스에 바인드된다는 점을 제외하면 어플리케이션 레벨 미들웨어와 동일한 방식으로 작동한다. `var router = express.Router()`로 Router객체생성한 후 객체를 이용해 `router.use()` 및 `router.METHOD()` 함수를 사용하여 라우터 레벨 미들웨어를 로드할 수 있다.

`app.use()`에서 지정한 경로와 같은 것이 들어오게 되면 모두 적용되 중복될 가능성이 존재한다. 예를 들자면 app.use('/test')가 있다면 /test, /test/product, /test/user등이 모두 적용되어 버리게 되는 것이다. 그래서 router를 사용하여 각 url를 구분하여 **기능이나 로직별로 나누어서 관리**할 수 있다.

### 오류 처리 미들웨어

다른 미들웨어 함수와 동일반 방법으로 다음과 같이 오류 처리 미들웨어 함수를 정의할 수 있지만, 오류 처리 함수는 3개가 아닌 4개의 인수, 구체적으로 말하면 (err, req, res, next) 시그니처를 갖는다는 점이 다르다.

오류 처리 미들웨어는 다른 app.use() 및 라우트 호출을 정의한 후에 마지막으로 정의해야한다. 예를 들면 다음과 같다.

```
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser());
app.use(methodOverride());
app.use(function(err, req, res, next) {
  // logic
});
```

### 써드파티 미들웨어

express app에 미들웨어를 추가하기 위해 서드 파티 미들웨어 사용을 사용하면 된다. Node.js 모듈을 사용하고 싶다면 application 레벨이든 router 레벨이든 로드해서 사용하면 된다.

express 미들웨어 모듈 대표적 예시 : body-parser, multer

## Reference

---

[https://expressjs.com/ko/guide/using-middleware.html](https://expressjs.com/ko/guide/using-middleware.html)  
[https://psyhm.tistory.com/8](https://psyhm.tistory.com/8)  
[https://lakelouise.tistory.com/211](https://lakelouise.tistory.com/211)
