---
layout: post
title: '[TIL] http로 서버로 띄우기'
subtitle: '[TIL] http로 서버 띄우기'
category: til
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## http로 서버 띄우기

---

```
const http = require('http');
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  if (req.url === '/') {
    res.end('Here is root page');
  } else if (req.url === '/login') {
    res.end('로그인 페이지');
  }
});

app.listen(8000, () => {
  console.log('start http server');
});
```

- http로 서버를 띄우기 위해서는 `require('http')`를 이용해 내장 모듈에 있는 http를 가져온다.
- http 서버는 express와 다르게 `http.createServer()`를 이용하여 요청에 대한 url을 처리
- `req.url === `로 해당 url로 들어오면 `res.end`로 화면에 출력. express 는 `res.send`로 출력 처리 하였다.
- 한글로 출력하게 될 경우 깨짐이 발생하여 `req.writeHead`를 이용하여 `charset=utf-8`로 맞춰준다.
- `req.writeHead`에 있는 200은 정상적인 url로 요청이 들어왔을 경우 실행한다는 의미

## Reference

---

[https://www.youtube.com/watch?v=7gF09WFGK4I&list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs&index=4](https://www.youtube.com/watch?v=7gF09WFGK4I&list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs&index=4)
