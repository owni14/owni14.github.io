---
layout: post
title: '[Dev] REST, RESTFUL API에 대하여'
subtitle: '[Dev] REST, RESTFUL API에 대하여'
category: dev
tags: etc
image:
  path: /assets/img/development/2022-10-10/api.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## API란?

> API(application programming interface 애플리케이션 프로그래밍 인터페이스, 응용 프로그램 프로그래밍 인터페이스)는 컴퓨터나 컴퓨터 프로그램 사이의 연결이다. 일종의 소프트웨어 인터페이스이며 다른 종류의 소프트웨어에 서비스를 제공한다.

위키백과에 적힌 API의 정의를 가지고 왔는데 이해하기가 어려웠다. API라는 말을 개발을 하면서 정말 많이 듣게 되는데 과연 API라는게 정확히 어떤 의미인지 궁금했다.  
API란 특정 사이트에서 특정 데이터를 공유할 경우 어떠한 방식으로 정보를 요청해야 하는지, 그리고 어떠한 데이터를 제공 받을 수 있을지에 대한 내용을 이야기한다.

쉽게 레스토랑에 빗대어 표현하자면 손님, **점원**, 요리사가 있는데 손님으로부터 메뉴를 주문받고 **점원**이 요리사한테 갖다주면 요리사는 음식을 다시 **점원**을 통해 손님으로 전달한다.
여기서 **점원**의 역할을 하는게 API인 것이다. 즉, 다시말해 서로 상호작용하는 것을 도와주는 매개체라고 생각하면 좋을꺼 같다.

## REST란?

- "Representational State Transfer”의 약자로써 자원을 이름(자원의 표현)으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미한다. 즉, 자원의 표현에 의한 전달이다.

- 자원의 표현

  - 자원 : 해당 소프트웨어가 관리하는 모든 것을 의미 ex) 문서, 그림, 데이터, 해당 소프트웨어 자체 등
  - 자원의 표현 : 그 자원을 표현하기 위한 이름 ex) DB의 학생 정보가 자원일 때, ‘students’를 자원의 표현

- 상태(정보) 전달

  - 데이터가 요청되어지는 시점에서 자원의 상태(정보)를 전달한다.
  - JSON 혹은 XML를 통해 데이터를 주고 받는 것이 일반적이다.

- REST는 네트워크상에서 Client와 Server 사이의 통신 방식 중 하나이다.

## REST의 구체적인 개념

- HTTP URL(Uniform Resource Identifier)을 통해 자원(Resource)을 명시하고, HTTP Method(POST, GET, PUT, DELETE)를 통해 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미한다.
- REST는 자원 기반의 구조(ROA, Resource Oriented Architecture) 설계의 중심에 Resource가 있고 HTTP Method를 통해 Resource를 처리하도록 설계된 아키텍처를 의미한다.
- 웹 사이트의 이미지, 텍스트, DB 내용 등의 모든 자원에 고유한 ID인 HTTP URL를 부여한다.
- CRUD Operation
  - Create : 생성(POST)
  - Read : 조회(GET)
  - Update : 수정(PUT)
  - Delete : 삭제(DELETE)
  - HEAD : header 정보 조회(HEAD)

## Reference

[https://ko.wikipedia.org/wiki/API](https://ko.wikipedia.org/wiki/API)

[https://blog.wishket.com/api%EB%9E%80-%EC%89%BD%EA%B2%8C-%EC%84%A4%EB%AA%85-%EA%B7%B8%EB%A6%B0%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8/](https://blog.wishket.com/api%EB%9E%80-%EC%89%BD%EA%B2%8C-%EC%84%A4%EB%AA%85-%EA%B7%B8%EB%A6%B0%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8/)

[https://dev-dain.tistory.com/50](https://dev-dain.tistory.com/50)

[https://shinetech.tistory.com/16](https://shinetech.tistory.com/16)

[https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html](https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html)
