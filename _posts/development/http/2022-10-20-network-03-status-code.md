---
layout: post
title: '[Network / Http] HTTP 상태 코드'
subtitle: '[Network / Http] HTTP 상태 코드'
category: dev
tags: network
image:
  path: /assets/img/http.jpeg
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## HTTP 상태 코드(Status Code)란?

---

클라이언트가 보낸 요청에 대한 서버의 응답 코드로, 상태 코드에 따라 요청이 성공적으로 **완료되었는지 여부**를 알려준다.  
모든 HTTP 응답코드는 5개의 분류로 구분되어 있으며, 첫 번째 숫자는 **응답의 클래스**를 정의한다. 응답 클래스는 다음과 같다.

- 1xx(정보) : 요청을 받았으며 프로세스를 계속한다.
- 2xx(성공) : 요청을 성공적으로 받았다.
- 3xx(리다이렉션) : 요청 완료를 위해 추가 작업 조치가 필요하다.
- 4xx(클라이언트 오류) : 요청의 문법이 잘못되었거나 요청을 처리할 수 없다.
- 5xx(서버 오류) : 서버가 명백히 유효한 요청에 대해 충족을 실패했다.

## 1xx(정보)

---

- 100(계속): 지금까지의 상태가 괜찮으며 클라이언트가 계속해서 요청을 하거나 이미 요청을 완료한 경우에는 무시해도 되는 것을 알려준다.
- 101(프로토콜 전환): 요청자가 서버에 프로토콜 전환을 요청했으며 서버는 이를 승인하는 중이다.

## 2xx(성공)

---

- **200(성공) : 서버가 요청을 제대로 처리했다는 뜻이다. 이는 주로 서버가 요청한 페이지를 제공했다는 의미로 쓰인다.**
- 201(작성됨) : 요청이 성공적이었으며 그 결과로 새로운 리소스가 생성한다.
- 202(허용됨): 서버가 요청을 접수했지만 아직 처리하지 않았다.
- 203(신뢰할 수 없는 정보): 서버가 요청을 성공적으로 처리했지만 다른 소스에서 수신된 정보를 제공하고 있다.
- 204(콘텐츠 없음): 서버가 요청을 성공적으로 처리했지만 콘텐츠를 제공하지 않는다. 헤더는 의미있을 수 있다.
- 205(콘텐츠 재설정): 이 응답 코드는 요청을 완수한 이후에 사용자 에이전트에게 이 요청을 보낸 문서 뷰를 리셋하라고 알려준다.
- 206(일부 콘텐츠): 서버가 GET 요청의 일부만 성공적으로 처리했다.

## 3xx(리다이렉션)

---

- 300(여러 선택항목): 서버가 요청에 따라 여러 조치를 선택할 수 있다. 서버가 사용자 에이전트에 따라 수행할 작업을 선택하거나, 요청자가 선택할 수 있는 작업 목록을 제공한다.
- 301(영구 이동): 요청한 페이지를 새 위치로 영구적으로 이동했다. GET 또는 HEAD 요청에 대한 응답으로 이 응답을 표시하면 요청자가 자동으로 새 위치로 전달된다.
- 302(임시 이동): 현재 서버가 다른 위치의 페이지로 요청에 응답하고 있지만 요청자는 향후 요청 시 원래 위치를 계속 사용해야 한다.
- 303(기타 위치 보기): 요청자가 다른 위치에 별도의 GET 요청을 하여 응답을 검색할 경우 서버는 이 코드를 표시한다. HEAD 요청 이외의 모든 요청을 다른 위치로 자동으로 전달한다.
- 304(수정되지 않음): 마지막 요청 이후 요청한 페이지는 수정되지 않았다. 서버가 이 응답을 표시하면 페이지의 콘텐츠를 표시하지 않는다. 요청자가 마지막으로 페이지를 요청한 후 페이지가 변경되지 않으면 이 응답(If-Modified-Since HTTP 헤더라고 함)을 표시하도록 서버를 구성해야 한다.
- 305(프록시 사용): 요청자는 프록시를 사용하여 요청한 페이지만 액세스할 수 있다. 서버가 이 응답을 표시하면 요청자가 사용할 프록시를 가리키는 것이기도 하다.
- 307(임시 리다이렉션): 현재 서버가 다른 위치의 페이지로 요청에 응답하고 있지만 요청자는 향후 요청 시 원래 위치를 계속 사용해야 한다.
- 308(영구 리다이렉션) : 리소스가 이제 HTTP 응답 헤더의 위치에 명시된 영구히 다른 URI에 위치하고 있음을 의미한다.

## 4xx(클라이언트 오류)

---

- 400(잘못된 요청): 서버가 요청의 구문을 인식하지 못했다.
- 401(권한 없음): 이 요청은 인증이 필요하다. 서버는 로그인이 필요한 페이지에 대해 이 요청을 제공할 수 있다. 상태 코드 이름이 권한 없음(Unauthorized)으로 되어 있지만 실제 뜻은 인증 안됨(Unauthenticated)에 더 가깝다.[2]
- 402(결제 필요): 이 요청은 결제가 필요합니다.
- **403(Forbidden, 금지됨): 서버가 요청을 거부하고 있다. 예를 들자면, 사용자가 리소스에 대한 필요 권한을 갖고 있지 않다. (401은 인증 실패, 403은 인가 실패라고 볼 수 있음)**
- **404(Not Found, 찾을 수 없음): 서버가 요청한 페이지(Resource)를 찾을 수 없다. 예를 들어 서버에 존재하지 않는 페이지에 대한 요청이 있을 경우 서버는 이 코드를 제공한다.**
- 405(허용되지 않는 메소드): 요청에 지정된 방법을 사용할 수 없다. 예를 들어 POST 방식으로 요청을 받는 서버에 GET 요청을 보내는 경우, 또는 읽기 전용 리소스에 PUT 요청을 보내는 경우에 이 코드를 제공한다.
- 406(허용되지 않음): 요청한 페이지가 요청한 콘텐츠 특성으로 응답할 수 없다.
- 407(프록시 인증 필요): 이 상태 코드는 401(권한 없음)과 비슷하지만 요청자가 프록시를 사용하여 인증해야 한다. 서버가 이 응답을 표시하면 요청자가 사용할 프록시를 가리키는 것이기도 한다.
- 408(요청 시간초과): 서버의 요청 대기가 시간을 초과하였다.
- 409(충돌): 서버가 요청을 수행하는 중에 충돌이 발생했다. 서버는 응답할 때 충돌에 대한 정보를 포함해야 한다. 서버는 PUT 요청과 충돌하는 PUT 요청에 대한 응답으로 이 코드를 요청 간 차이점 목록과 함께 표시해야 한다.

## 5xx(서버 오류)

---

- **500(내부 서버 오류): 서버에 오류가 발생하여 요청을 수행할 수 없다.**
- 501(구현되지 않음): 서버에 요청을 수행할 수 있는 기능이 없다. 예를 들어 서버가 요청 메소드를 인식하지 못할 때 이 코드를 표시한다.
- 502 (Bad Gateway, 불량 게이트웨이): 서버가 게이트웨이나 프록시 역할을 하고 있거나 또는 업스트림 서버에서 잘못된 응답을 받았다.
- 503(서비스를 사용할 수 없음): 서버가 오버로드되었거나 유지관리를 위해 다운되었기 때문에 현재 서버를 사용할 수 없다. 이는 대개 일시적인 상태이다.
- **504(게이트웨이 시간초과): 서버가 게이트웨이나 프록시 역할을 하고 있거나 또는 업스트림 서버에서 제때 요청을 받지 못했다.**
- 505(HTTP 버전이 지원되지 않음): 서버가 요청에 사용된 HTTP 프로토콜 버전을 지원하지 않는다.
- 506(Variant Also Negotiates, RFC 2295)
- 507(용량 부족, WebDAV; RFC 4918)
- 508(루프 감지됨, WebDAV; RFC 5842)
- 509(대역폭 제한 초과, Apache bw/limited extension)
- 510(확장되지 않음, RFC 2774)
- 511(네트워크 인증 필요, RFC 6585)
- 520(Unknown Error, 알 수 없음)
- 598(네트워크 읽기 시간초과 오류, 알 수 없음)
- 599(네트워크 연결 시간초과 오류, 알 수 없음)

## Reference

---

[https://ko.wikipedia.org/wiki/HTTP*%EC%83%81%ED%83%9C*%EC%BD%94%EB%93%9C](https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C)
[https://developer.mozilla.org/ko/docs/Web/HTTP/Status](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)