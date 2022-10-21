---
layout: post
title: '[Http] HTTP 프로토콜의 정의 및 특징'
subtitle: '[Http] HTTP 프로토콜의 정의 및 특징'
category: dev
tags: http
published: true
image:
  path: /assets/img/http.jpeg
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## HTTP란?

---

> HTTP(HyperText Transfer Protocol, 문화어: 초본문전송규약, 하이퍼본문전송규약)는 W3 상에서 정보를 주고받을 수 있는 프로토콜이다. 주로 HTML 문서를 주고받는 데에 쓰인다. 주로 TCP를 사용하고 HTTP/3부터는 UDP를 사용하며, 80번 포트를 사용한다. 1996년 버전 1.0, 그리고 1999년 1.1이 각각 발표되었다.
> HTTP는 클라이언트와 서버 사이에 이루어지는 요청/응답(request/response) 프로토콜이다. 예를 들면, 클라이언트인 웹 브라우저가 HTTP를 통하여 서버로부터 웹페이지(HTML)나 그림 정보를 요청하면, 서버는 이 요청에 응답하여 필요한 정보를 해당 사용자에게 전달하게 된다. 이 정보가 모니터와 같은 출력 장치를 통해 사용자에게 나타나는 것이다.
> HTTP를 통해 전달되는 자료는 http:로 시작하는 URL(인터넷 주소)로 조회할 수 있다.  
> 출처 : 위키피디아

쉽게 설명하자면, HTTP(Hypertext Transfer Protocol)는 인터넷상에서 데이터를 주고 받기 위해 서버와 클라이언트 모델을 따르는 **통신규약**을 말한다.

## HTTP 특징

---

### 1. 클라이언트 - 서버 구조

클라이언트가 서버에 요청을 보내면 서버는 요청에 대한 응답을 보내는 구조로 이루어져있다. 클라이언트 요청시 서버가 응답하는 **단방향 통신**이다.

- Request Response 구조
- 클라이언트는 서버에 요청을 보내고 응답을 대기
- 서버가 요청에 대한 결과를 만들어 응답

![client-server](/assets/img/development/2022/10/20/client-server.png)

### 2. 무상태 (Stateless) 와 상태 유지(Stateful)

**무상태**라는 것은 서버가 클라이언트의 상태를 **보존하지 않는 것**이다. 이 말이 가지는 의미는 클라이언트가 보낸 이전 요청이 무엇인지에 따라 반응이 달라지지 않는다는 것이다.  
무상태의 반대가 **상태 유지(Stateful)**인데 이 상태에서는 클라이언트에서 보낸 정보를 서버에서 **기억하고 있다.**

- 상태 유지 (Stateful)

  - 서버에서는 클라이언트에서 보낸 정보을 기억하고 있기 때문에 항상 **같은 서버에서 응답**해야한다.
  - 서버에 장애 발생시, 항상 같은 서버에서 응답을 하고 있었기에 기억하고 있는 정보가 다 날아가 처음부터 서버에 **다시 요청**해야한다.

- 무상태 (Stateless)

  - 클라이언트가 필요한 정보를 다 담아서 보내기 때문에 **아무 서버나 호출**이 가능하다.
  - 서버에 장애가 발생하더라도 다른 서버에서 요청에 대한 응답을 하면 되기 때문에 **다시 요청할 필요가 없다.**
  - 응답 서버를 자유롭게 바꿀 수 있기 때문에 서버 증설이 가능하다.

### 3. 비 연결성 (Connectionless)

## Reference

---

[https://hanamon.kr/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-http-http%EB%9E%80-%ED%8A%B9%EC%A7%95-%EB%AC%B4%EC%83%81%ED%83%9C-%EB%B9%84%EC%97%B0%EA%B2%B0%EC%84%B1/](https://hanamon.kr/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-http-http%EB%9E%80-%ED%8A%B9%EC%A7%95-%EB%AC%B4%EC%83%81%ED%83%9C-%EB%B9%84%EC%97%B0%EA%B2%B0%EC%84%B1/)

[https://kotlinworld.com/97](https://kotlinworld.com/97)
