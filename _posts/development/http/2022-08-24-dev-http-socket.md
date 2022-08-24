---
layout: post
title: '[Dev] HTTP통신과 SOCKET통신'
subtitle: '[Dev] HTTP통신과 SOCKET통신'
category: dev http
image: 
    path: /assets/img/http.png
---

* this ordered seed list will be replaced by the toc 
{:toc}

## HTTP 통신
---
1. HTTP 정의
>HTTP(HyperText Transfer Protocol, 문화어: 초본문전송규약, 하이퍼본문전송규약)는 W3 상에서 정보를 주고받을 수 있는 프로토콜이다. 주로 HTML 문서를 주고받는 데에 쓰인다. 주로 TCP를 사용하고 HTTP/3부터는 UDP를 사용하며, 80번 포트를 사용한다. 1996년 버전 1.0, 그리고 1999년 1.1이 각각 발표되었다.
>HTTP는 클라이언트와 서버 사이에 이루어지는 요청/응답(request/response) 프로토콜이다. 예를 들면, 클라이언트인 웹 브라우저가 HTTP를 통하여 서버로부터 웹페이지(HTML)나 그림 정보를 요청하면, 서버는 이 요청에 응답하여 필요한 정보를 해당 사용자에게 전달하게 된다. 이 정보가 모니터와 같은 출력 장치를 통해 사용자에게 나타나는 것이다.
>HTTP를 통해 전달되는 자료는 http:로 시작하는 URL(인터넷 주소)로 조회할 수 있다.  
> -위키피디아- 

2. HTTP 통신  
HTML(Hyper Text Transfer Protocol)은 파일을 전송하는 프로토콜이라고 표현할 수 있으며 Json이나 Image파일도 전송이 가능하다.  

3. 통신방식  
  - 클라이언트가 서버로 요청을 보내면 서버가 요청한 정보에 따른 결과를 다시 클라이언트에게 돌려주는 형식으로 통신이 이루어진다.
  - **단방향 통신**으로 이루어지며, 클라이언트가 요청을 해야 응답이 이루어진다.

## SOCKET 통신
---
소켓통신은 클라이언트와 서버간 **양방향** 연결이 이루어지는 통신으로 메세지 같이 서로 데이터를 주고 받아야하는 것이  
소캣통신의 대표적 예가 될 수 있다.

## Reference
---
  - [https://kotlinworld.com/75?category=999308](https://kotlinworld.com/75?category=999308)