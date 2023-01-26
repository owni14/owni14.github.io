---
layout: post
title: '[TIL] MIME, Text-transform, Filter, Optional-Chaining'
subtitle: '[TIL] MIME, Text-transform, Filter, Optional-Chaining'
category: til
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## MIME

---

1. MIME이란?

- Multipurpose Internet Mail Extensions의 약자로 파일 변환을 의미
- 인코딩 : 바이너리 파일 > 텍스트 파일 변환
- 디코딩 : 텍스트 파일 > 바이너리 파일 변환
- MIME으로 인코딩한 파일은 Content-type정보를 앞부분에 담는다.
- MIME은 공백, 대/소문자를 구분하지 않으며, 대부분 소문자로 쓰인다.
  > MIME파일 형식  
  > 파일 이름 확장자명 : .png  
  > MIME 형식 : image/png [파일종류 / 파일 포맷]

2. MIME Type

- multipart/form-data : Form형태로 클라이언트와 서버간 파일을 업로드 하기 위한 타입
- text/plain - 텍스트파일에 대한 기본값을 전송하는 타입
- image/jpeg - 이미지가 jpeg파일을 전송할 수 타입

## Text-transform

---

1. text-transform이란?

- 대문자 또는 소문자로 바꾸어주는 속성

2. Syntax
   > text-transform: none / capitalize / uppercase / lowercase / initial / inherit

- none : 입력받은 **그대로** 출력
- capitalize: 첫번째 글자 **대문자**로 변경
- uppercase: 모든 글자 **대문자**로 변경
- lowercase: 모든 글자 **소문자**로 변경
- initial: **기본값**으로 설정
- inherit: **부모 요소**로 부터 상속 받는다.

## Filter

- 배열값 중 조건이 true인 값들을 새로운 배열로 만들어준다.
- 넘겨 줄 파라미터 객체가 하나 밖에 없으면 그냥 item처럼 적어줘도 된다.
- `() => {}` 에서 `{}` 안에 `return value;`를 안적고 바로 `{}`를 없애고 바로 value라고 적어줘도 된다.

```
  const data = [3, 5, 1, 64, 26, 21]
  const res = data.filter (item => data !== 3); // 3이 아닌 값들을 true로 return하여 새로운 배열을 만들어 준다.
  console.log(res); // [5, 1, 64, 26, 21] 3을 제외한 새로운 배열 생성
```

## Optional Chaining

- 옵셔널 체이닝은 `?.`을 사용하여 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있다.
- `?.`은 `?.'`앞’의 평가 대상이 `undefined`나 `null`이면 `undefined`를 반환

## Reference

---

- [MIME](https://server-talk.tistory.com/183)
- [Text-transform](https://www.codingfactory.net/10656)
- [Optional Chaining](https://ko.javascript.info/optional-chaining)
