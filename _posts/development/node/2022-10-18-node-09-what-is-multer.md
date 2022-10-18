---
layout: post
title: '[Node] 파일 업로드 시 사용되는 Multer'
subtitle: '[Node] 파일 업로드 시 사용되는 Multer'
category: dev
tags: node
published: true
image:
  path: /assets/img/node.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## Multer란?

---

> Multer는 파일 업로드를 위해 사용되는 multipart/form-data 를 다루기 위한 node.js 의 미들웨어 입니다.

Multer는 파일을 받아 request에 file이나 files를 추가하여 넘겨주는 역할을 하며, multipart (multipart/form-data)가 아닌 폼에서는 동작하지 않는다.

**multipart/form-data**는 HTTP Header에 Content-type의 MIME 타입으로 파일이나 이미지를 전송할때 주로 사용하는 형식이다. Content-Type이나 MIME이 무엇인지 잘 모르겠다면 [Content-Type](https://owni14.github.io/dev/http-01-content-type.html)을 한번 참고해 보길 바란다. **미들웨어**는 클라이언트와 서버 양 쪽에서 데이터를 주고 받을 수 있도록 중간에서 매개 역할을 하는 소프트웨어이다.

## Multer module 설치

---

Terminal에서 `npm install --save multer`를 이용해서 설치가 가능하며, package.json의 dependencies에서 설치된 버전을 확인할 수 있다.

## Multer로 전달 가능한 옵션 객체

---

multer는 가장 기본적인 옵션 객체로 dest를 가지는데, 만약 옵션 객체를 생략하게 되면 파일은 디스크가 아니라 **메모리**에 저장된다.

| 키                  | 설명                                          |
| ------------------- | :-------------------------------------------- |
| dest **or** storage | 파일이 저장될 위치                            |
| fileFilter          | 어떤 파일을 허용할지 제어하는 함수            |
| limits              | 업로드 된 데이터의 한도                       |
| preservePath        | 파일의 base name 대신 보존할 파일의 전체 경로 |

## Multer 사용 예제

---

```
var storage = multer.diskStorage({  // 저장한공간 정보 : 하드디스크에 저장
  destination: function (req, file, cb) { // 저장 위치
    cb(null, 'uploads/'); // uploads라는 폴더 안에 저장
  },
  filename: function (req, file, cb) {  // 파일명을 어떤 이름으로 올릴지
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ storage: storage }).single('file');
```

## Reference

---

[https://github.com/expressjs/multer](https://github.com/expressjs/multer)
[https://github.com/expressjs/multer/blob/master/doc/README-ko.md](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)
[https://ko.wikipedia.org/wiki/%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4](https://ko.wikipedia.org/wiki/%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4)
[https://study-ihl.tistory.com/m/129](https://study-ihl.tistory.com/m/129)
