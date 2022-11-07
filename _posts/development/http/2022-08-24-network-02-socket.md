---
layout: post
title: '[Network / Http] HTTP통신과 SOCKET통신'
subtitle: '[Network / Http] HTTP통신과 SOCKET통신'
category: dev
tags: network
image:
  path: /assets/img/http.jpeg
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## HTTP 통신

---

1. HTTP 통신  
   HTML(Hyper Text Transfer Protocol)은 파일을 전송하는 프로토콜이라고 표현할 수 있으며 Json이나 Image파일도 전송이 가능하다.

2. 통신방식

![client_server](/assets/img/development/2022/08/24/client_server.png)

- 클라이언트가 서버로 요청을 보내면 서버가 요청한 정보에 따른 결과를 다시 클라이언트에게 돌려주는 형식으로 통신이 이루어진다.
- **단방향 통신**으로 이루어지며, 클라이언트가 요청을 해야 응답이 이루어진다.

## SOCKET 통신

---

서버와 클라이언트가 특정 포트를 통해 실시간으로 양방향 통신 하는 방식으로 이루어진다.

- 서버와 클라이언트가 계속 연결을 유지하는 양방향 프로그래밍 방식
- 서버와 클라이언트가 실시간으로 데이터를 주고받는 상황이 필요한 경우 사용
- 실시간 동영상 스트리밍이나 온라인 게임 등에 자주 사용

## Reference

---

- [https://kotlinworld.com/75?category=999308](https://kotlinworld.com/75?category=999308)
- [https://www.zehye.kr/network/2021/10/23/Network_socket_http/](https://www.zehye.kr/network/2021/10/23/Network_socket_http/)
