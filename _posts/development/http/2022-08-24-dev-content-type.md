---
layout: post
title: '[Dev] Content-Type'
subtitle: '[Dev] ontent-Type'
category: dev
image: 
    path: /assets/img/http.png
---
* this ordered seed list will be replaced by the toc 
{:toc}

## Content-Type이란?
---
  - HTTP 통신에서 전송되는 데이터 타입을 나타내는 **header정보**를 의미한다.  
  - 데이터를 받는 쪽은 **브라우저(Request)**나 **웹서버(Response)**가 되며  Content-Type으로  
    응답하는 데이터가 어떤 타입인지 확인이 가능하다.  
  - 일반적인 문자 : `text/plain`타입으로 전송되어 진다.

## Content-Type의 특징
---
  - Header에 데이터가 아무것도 없다면 단순 텍스트 데이터로 받게 된다.
  - HTTP GET Method는 형식이 value=text으로 보내지기 때문에 Content-Type을 따로 지정해줄 필요가 없다.
  - HTTP POST / PUT Method는 데이터를 Body에 data를 담아 보내게 될 경우에는 Content-Type이 필요
  - axios를 이용해 클라이언트 → 서버로 API 요청 할 경우 application/json형식으로 지정  
**json** : 자바스크립트 객체를 만들기 위한 표현식으로서 Key, Value로 구성되어 있다.

## MIME이란?
--- 
MIME의 정의는 Multipurpose Internet Mail Extensions의 약자로 파일 변환을 의미한다.  
인코딩할 경우 바이너리 파일 > 텍스트 파일로 디코딩할 경우 텍스트 파일 > 바이너리 파일로 변환한다.  
MIME으로 인코딩한 파일은 Content-type정보를 앞부분에 담으며, MIME은 공백, 대/소문자를 구분하지 않고 대부분 소문자로 쓰인다.

## MIME파일 형식 
---
MIME 형식 : 파일종류 / 파일 포맷  
image파일 같은 경우 파일 종류는 image가 되고 파일 포맷은 png, jpg, gif와 같이 확장자 명이 된다.

## MIME Type
---
- 문자
    - `text/plain`
    - 텍스트파일에 대한 기본값을 전송하는 타입
- 이미지
    - `image/png, Jpeg, gif, webp`
- 폼 데이터
    - multipart/form-data
    - <form>태그를 사용해 클라이언트와 서버간 파일을 업로드 하기 위한 타입

## Reference
  - [https://pygmalion0220.tistory.com/entry/HTTP-Content-Type](https://pygmalion0220.tistory.com/entry/HTTP-Content-Type)