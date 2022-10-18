---
layout: post
title: '[Node] 파일 업로드 시 사용되는 Multer'
subtitle: '[Node] 파일 업로드 시 사용되는 Multer'
category: dev
tags: node
published: false
image:
  path: /assets/img/node.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## Muler란?

---

> Multer는 파일 업로드를 위해 사용되는 multipart/form-data 를 다루기 위한 node.js 의 미들웨어 입니다.

Multer는 파일을 받아 request에 file이나 files를 추가하여 넘겨주는 역할을 하며, multipart (multipart/form-data)가 아닌 폼에서는 동작하지 않는다.

**multipart/form-data**는 HTTP Header에 Content-type의 MIME 타입으로 파일이나 이미지를 전송할때 주로 사용하는 형식이다. Content-Type이나 MIME이 무엇인지 잘 모르겠다면 [Content-Type]()을 한번 참고해 보길 바란다. **미들웨어**는 클라이언트와 서버 양 쪽에서 데이터를 주고 받을 수 있도록 중간에서 매개 역할을 하는 소프트웨어이다.

## Reference

---

[https://github.com/expressjs/multer](https://github.com/expressjs/multer)
[https://ko.wikipedia.org/wiki/%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4](https://ko.wikipedia.org/wiki/%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4)
