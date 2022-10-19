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

Terminal에서 `npm install --save multer`를 이용해서 설치가 가능하며, package.json의 dependencies에서 의존성이 제대로 추가 되었는지와 설치된 버전을 확인할 수 있다.

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
    cb(null, `${Date.now()}_${file.originalname}`); // 날짜_파일이름으로 저장
  },
});

var upload = multer({ storage: storage }).single('file');

router.post('/image', (req, res) => {
  upload((req, res, err) => { // 가져온 이미지를 저장
    if (err) {
      return req.json({ success: false, err }); // 이미지 저장 실패시 success: false와 에러내용 출력
    }
    return res.json({ // 성공시 success: true와 파일경로, 이름을 출력
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});
```

![uploads_folder](/assets/img/development/2022/10/18/uploads_folder.png)

![image_in_uploads_folder](/assets/img/development/2022/10/18/image_in_uploads_folder.png)

uploads의 폴더에 내가 multer를 이용해 업로드된 파일을 확인 할 수 있다.

- **DiskStorage** : 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공하는데 **destination**과 **filename** 두 가지 옵션 사용이 가능
  - **destination** : 어느 폴더로 업로드 한 파일을 저장할지 결정. 만약 사용하지 않을 경우 운영체제 시스템에서 임시 파일을 저장하는 기본 디렉토리 사용
  - **filename** : 파일명을 결정. 만약 사용하지 않을 경우 각각의 파일은 파일 확장자를 제외한 랜덤한 이름으로 생성
- **single(fieldname)** : fieldname 인자에 명시된 이름의 단수 파일을 전달받고 req.file에 저장

## Reference

---

[https://github.com/expressjs/multer](https://github.com/expressjs/multer)
[https://github.com/expressjs/multer/blob/master/doc/README-ko.md](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)
[https://ko.wikipedia.org/wiki/%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4](https://ko.wikipedia.org/wiki/%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4)
[https://study-ihl.tistory.com/m/129](https://study-ihl.tistory.com/m/129)
