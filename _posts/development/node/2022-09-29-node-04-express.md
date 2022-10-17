---
layout: post
title: '[Node] node의 프레임워크 express'
subtitle: '[Node] node의 프레임워크 express'
category: dev
tags: node
image:
  path: /assets/img/express.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## express란?

---

> Express.js, 또는 간단히 익스프레스(Express)는 Node.js를 위한 웹 프레임워크의 하나로, MIT 허가서로 라이선스되는 자유-오픈 소스 소프트웨어로 출시되었다. 웹 애플리케이션, API 개발을 위해 설계되었다. Node.js의 사실상의 표준 서버 프레임워크로 불리고 있다.

위키백과에서 인용해온 문구인데 사실상 잘 이해가 되지 않는다. 그래서 자료들은 더 찾아보니, node.js 사용하여 **서버**를 **좀 더 쉽게** 구성할 수 있게 해주는 프레임워크인 것이다.

## express 설치

---

node 설치와 `npm init`을 함으로써 package.json파일이 생성된 상태에서 express 설치를 진행한다.  
node설치를 완료하지 않았으면 [node 설치](https://owni14.github.io/dev/dev-node-install.html), package.json파일이 생성되어있지 않은상태이면 [package.json 파일 생성](https://owni14.github.io/dev/dev-node-package.html)을 참고해서 기초 셋팅을 하고 오면 되겠다.

express를 사용하기 위해서는 Terminal에서 `npm install express --save`를 이용해서 설치를 해주어야 사용이 가능하다.
express뒤에 `--save`를 해주는 이유는 package.json의 dependencies에 추가하기 위해서인데 임시로 설치할 경우 `--save`를 생략해도 된다.

## package.json 확인

---

express 설치를 완료했으면 package.json파일의 dependencies에 `express`가 추가되어 있을 것이다.
![package.json_dependencies](/assets/img/development/2022/09/29/package.json_dependencies.png)

## Hello World 출력해보기

---

서버를 이용해 웹 페이지에 Hello World를 출력해보자!  
공식문서를 살펴보니 따로 `.js`파일을 생성해야한다고 적혀있는데 나는 index.js파일을 생성하였다.

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

생성한 index.js파일에 위의 코드를 붙여넣자.  
나는 현재 파일구조와 index.js파일이 이렇게 작성되어 있다.
![index.js](/assets/img/development/2022/09/29/index.png)

서버를 시작하기 위해 다시 package.json로 돌아와 **script**부분에 `"start": "node index.js"`를 작성해준다.  
`start`를 작성하고 뒤에 `node index.js`를 작성함으로써 node가 서버를 구동시킬때 index.js파일을 먼저 실행한다는 의미가 된다.
![script_start](/assets/img/development/2022/09/29/script_start.png)

이제 터미널에서 `npm run start`를 작성하고 엔터를 눌러보자.  
에러없이 정상적으로 서버가 구동됐다는 것을 터미널에서 확인할 수 있다.  
![npm_run_start](/assets/img/development/2022/09/29/npm_run_start.png)

index.js파일에 port를 3000으로 기본적 설정이 되어 있으므로 인터넷에서 localhost:3000을 입력하게 되면 다음 이미지와 같이 Hello World!가 출력될 것이다.  
![localhost_3000](/assets/img/development/2022/09/29/localhost_3000.png)

## Reference

---

- [https://ko.wikipedia.org/wiki/Express.js](https://ko.wikipedia.org/wiki/Express.js)
- [https://expressjs.com/ko/](https://expressjs.com/ko/)
