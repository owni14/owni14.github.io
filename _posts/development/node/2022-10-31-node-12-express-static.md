---
layout: post
title: '[Node] Express의 static 메서드'
subtitle: '[Node] Express의 static 메서드'
category: dev
tags: node
published: true
image:
  path: /assets/img/express.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## static 메서드란?

---

- static은 웹에 **정적파일을 서비스 제공** 하기 위해서 static메서드를 이용
- 정적 파일의 대표적 예) js, css, image등과 같이 값이나 **데이터가 변하지 않는 파일**을 의미
- static 미들웨어는 express에서 제공하는 기본 미들웨어이며 express 객체 안에서 꺼내 바로 사용 가능

## static 메서드 예시

---

```
app.use(express.static(`${__dirname}/src/public`));
```

app.use를 이용해서 express의 static메서드를 미들웨어로 등록해준다. `${__dirname}` 은 node.js의 `현재의 절대 경로`를 나타내는 상수를 의미하며, `src/public`에 있는 폴더에서 정적파일을 이용할 수 있게 해준다.

다음은 `src/views/home/login.ejs`의 코드이다.

```
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="/js/home/login.js " defer></script>
    <title>Document</title>
  </head>
  <body>
    <input id="id" type="text" placeholder="아이디" /><br />
    <input id="password" type="text" placeholder="비밀번호" /><br />
    <button>로그인</button>
  </body>
</html>
```

login.js는 `/src/public/js/home/login`의 경로로 이루어져 있다. 그러나 express static을 이용하여 정적 파일로 등록해주었기 때문에 login.ejs파일에서 src 경로를 `/js/home/login.js`로 작성이 가능하고, 웹에서 js 경로로 접근을 할 수 있게 된다.

## Reference

---

[https://askforyou.tistory.com/6](https://askforyou.tistory.com/6)  
[https://inpa.tistory.com/entry/EXPRESS-%F0%9F%93%9A-static-%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4](https://inpa.tistory.com/entry/EXPRESS-%F0%9F%93%9A-static-%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4)
