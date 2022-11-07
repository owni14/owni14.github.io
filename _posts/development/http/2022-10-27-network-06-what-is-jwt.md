---
layout: post
title: '[Network / Http] JWT란?'
subtitle: '[Network / Http] JWT란?'
category: dev
tags: network
published: true
image:
  path: /assets/img/http.jpeg
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## JWT란?

---

- JWT란 JSON Web Token의 줄임말로 선택적 서명 및 선택적 암호화를 사용하여 데이터를 만들기 위한 **인터넷 표준**
- JWT를 이용하여 인증에 필요한 정보들을 Token에 담아 **암호화시켜 사용**하는 **서명된 토큰**
  - Token이란 서버가 클라이언트를 누군지 정확히 구별할 수 있도록 유니크한 정보를 담은 **암호화 데이터**
- JWT 구조 때문에 인증 정보들을 안전하게 인증을 시도

## JWT의 구조

---

JWT는 **Header**, **Payload**, **Signature**로 나누어져 있으며 각 구성요소는 점(.)으로 구분되어 있다.
`xxxxx.yyyyy.zzzzz`과 같은 형식으로 이루어져 있다.

### Header

헤더 부분은 보통 **토큰의 타입**과 HMAC SHA256 or RSA 알고리즘을 사용한 **서명 알고리즘**으로 구성되어 있다. HMAC은 해싱기법을 이용해서 메시지의 위변조가 있었는지 체크하는 기법이고, SHA- 시리즈들은 Secure Hash Algorithm 이라는 이름으로 해시 알고리즘의 종류를 말한다. RSA은 공개키 암호 알고리즘 중 하나이며 세계적으로 표준이라고 할 수 있다. 이 내용에 대해서는 추후 자세하게 다루기로 해보자.

Header 예시

```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Payload

페이로드는 **Claim이라는 정보**를 담는데, Claim이라는 말은 토큰에서 사용할 정보를 얘기한다. Claim안에는 어떤 값을 넣을지는 개발자의 마음이지만 JWT 표준 스펙에 대해서 알아보자.

- iss (Issuer) : 토큰 발급자
- sub (Subject) : 토큰 제목
- aud (Audience) : 토큰 대상자
- exp (Expiration Time) : 토큰 만료 시간
- nbf (Not Before) : 토큰 활성 날짜
- iat (Issued At) : 토큰 발급 시간
- jti (JWT Id) : JWT 토큰 식별자

표준 스펙 외 개발자가 필요하다고 생각하는 부분이 있으면 추가적으로 작성해도 문제가 없다. 하지만 payload와 header부분에는 암호화 되지 않는 한 비밀 정보정보같은 것을 담으면 안된다. 다른사람이 jwt를 가지고 디코딩을 하게 되면 header 및 payload에 담긴 값을 알 수 있기 때문이다. JWT에서는 header와 payload는 base64를 인코딩한다.

Payload 예시

```
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

### Signature

서명은 토큰을 안전하게 확인해준다. Base64url 인코딩을 이용하여 헤더와 페이로드를 인코딩하고 이 둘을 점(.) 구분자로 함께 연결시킨다. 이후 서버가 가지고 있는 개인키를 암호화한다.

Signature 예시

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

### JWT 디코딩

![jwt](/assets/img/development/2022/10/27/jwt.png)

### 인증 과정

1. JWT 토큰을 클라이언트가 서버로 요청과 동시에 전달
2. 서버가 가지고 있는 개인키를 가지고 Signature를 복호화
3. base64UrlEncode(header)와 base64UrlEncode(payload)가 JWT header 및 payload가 일치한 지 확인 후 일치하면 인증 허용

## Reference

---

[https://ko.wikipedia.org/wiki/JSON*%EC%9B%B9*%ED%86%A0%ED%81%B0](https://ko.wikipedia.org/wiki/JSON_%EC%9B%B9_%ED%86%A0%ED%81%B0)  
[https://brunch.co.kr/@jinyoungchoi95/1](https://brunch.co.kr/@jinyoungchoi95/1)  
[https://jwt.io/introduction/](https://jwt.io/introduction/)  
[https://defineall.tistory.com/861](https://defineall.tistory.com/861)  
[https://juneyr.dev/2019-06-10/spring-hmac](https://juneyr.dev/2019-06-10/spring-hmac)  
[https://ko.wikipedia.org/wiki/RSA\_%EC%95%94%ED%98%B8](https://ko.wikipedia.org/wiki/RSA_%EC%95%94%ED%98%B8)
