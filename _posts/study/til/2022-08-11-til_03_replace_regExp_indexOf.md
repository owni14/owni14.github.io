---
layout: post
title: '[til] replace, 정규표현식, indexOf'
subtitle: '[til] replace, 정규표현식, indexOf'
category: study
tags: til
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## replace() 함수

---

- 어떤 특정 문자로 바꾸어 주는 함수
- 문법
  - value.replace('찾을 문자열', '변경할 문자열')

## 정규표현식

---

- 정해진 규칙을 사용해 문자를 변경하는 표현식
- `/`표시 안에 넣는 텍스트는 따옴표 없어야 한다.
- gi의 의미
  - g : 전체 모든 문자열 변경
  - i : 영문 대/소문자 무시, 모두 일치하는 패턴 검색
- 특수 기호를 처음 적을 경우 `\`이 정규식 맨 앞에 위치

## 정규표현식 문자 의미

---

- `[a-z]` : a ~ z 사이 문자 찾는다.
- `[abc]` : a, b, c 중 하나 찾음
- `[^abc]` : a, b, c 를 제외한 문자 찾음

## 정규표현식 활용한 특정 문자 제거 방법

---

- `.replace(' ','')` : 첫번째 공백 제거
- `.replace(/\-/g,'')`  : 특정문자 제거1(-)
- `.replace(/,/g,'')` : 특정문자 제거2(,)
- `.replace(/^\s+/,'')` : 앞의 공백 제거
- `.replace(/\s+$/,'')` : 뒤의 공백 제거
- `.replace(/^\s+|\s+$/g,'')` : 앞뒤 공백 제거
- `.replace(/\s/g,'')` : 문자열 내의 모든 공백 제거
- `.replace(/\n/g,'')` : n개행 제거
- `.replace(/\r/g,'')` : 엔터 제거

## indexOf()

---

- 문법 : string.indexOf(value, start)
- value: 필수, start 선택 요소, start 입력하지 않으면 처음부터 검색
- 대소문자 구분하고 찾는 문자열 없으면 -1을 반환
- indexOf() !== -1
  - -1을 확인값으로 사용, 특정 문자열을 찾았다면 그 문자열은 if문에서 -1이 절대 될 수 없는 0 이상의 양수 이기 때문에 없다는 의미가 된다.

## Reference

---

- [replace](https://ninearies.tistory.com/177)
- [indexOf](https://www.codingfactory.net/10402)
