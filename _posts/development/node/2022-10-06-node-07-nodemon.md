---
layout: post
title: '[node] nodemon이란?'
subtitle: '[node] nodemon이란?'
category: dev
tags: node
image:
  path: /assets/img/node.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## nodemon이란?

---

우리가 서버에서 소스를 변경했을 경우 새로고침을 해도 변경된 내용을 볼 수가 없다. 서버를 키고 꺼야지만 변경한 내용을 확인 할 수 있는데 이러한 과정이 상당히 불편하다.  
그래서 nodemon이란게 나오게 되었는데 서버에서 소스변경이 감지되면 자동으로 서버를 재시작해주는 Tool이다.

## nodemon설치

---

일반적으로 이때까지 설치한 것과 비슷하게 `npm install`을 이용해서 설치해주면 된다. 그런데 nodemon은 로컬환경에서만 사용할 것이기 때문에 뒤에 `-dev`를 붙여주면 된다.

일반적으로 설치하게 될 경우 `dependencies`에 의존성이 추가 되지만 `-dev`를 하게 되면 `devDependencies`라는 새로운 내용이 `package.json`파일에 추가 되어지게 된다.

![devDependencies](/assets/img/development/2022-10-06/devDependencies.png)

`npm install nodemon --save-dev`로 설치를 마무리하고, `package.json`파일에 있는 `scripts`내용을 추가해줘야 한다. 우리는 nodemon을 이용해서 index.js를 실행해주기 위해 `"scripts": { "dev": "nodemon index.js" }`로 작성해줘야한다.  
그러면 이제 `npm run dev`를 이용해서 서버를 킬 수 있게 된다.
![nodemon](/assets/img/development/2022-10-06/nodemon.png)

## Reference

---

[https://www.youtube.com/watch?v=u2nACoz4Vjg&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T&index=8](https://www.youtube.com/watch?v=u2nACoz4Vjg&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T&index=8)
