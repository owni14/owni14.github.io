---
layout: post
title: '[Js] 모던 자바스크립트 Deep Dive(01-03)'
subtitle: '[Js] 모던 자바스크립트 Deep Dive(01-03)'
category: dev
tags: js
published: true
image:
  path: /assets/img/js.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## Intro

---

리액트를 이용해 개발만 하고 있는 나에게 최근에 클로저나 렉시컬환경등 자바스크립트에 기본 개념에 대해 알게 되었는데 내가 너무 부족하다고 생각이 들었다. 내가 구현한 코드가 정확히 어떻게 구현이 되어서 돌아가는지 정확하게 이해하지 못한채 나는 그냥 개발하고 있었던거 같다. 지금이라도 기본 개념원리를 차근차근 쌓아나갈 것이다.

나는 모던 자바스크립트 Deep Dive책을 구매하였으며, 챕터를 하나씩 읽어나가며 정리하고 블로그에 포스팅할 계획이다.

## 01장 프로그래밍

---

프로그래밍이란 컴퓨터에게 실행을 요구하는 일종의 **커뮤니케이션**이라고 적혀있다. 사람과 컴퓨터가 소통하기 위해서는 커뮤니케이션이 필요한데 프로그래밍을 통해 한다고 생각하면 좋을꺼 같다. 프로그래밍언어는 C, C++, Javascript, Java등 많은 언어가 있고 언어에따라 쓰임이 다르다. Javscript는 기본적으로 웹에서 많이 사용되는 언어이다.

그럼 사람이 컴퓨터에게 프로그래밍 언어로 코드를 작성하면 컴퓨터는 바로 알아들을 수 있을까? 정답은 아니다. 사람과 컴퓨터 사이에 번역을 할 수 있는 어떤 도구가 필요한데 이것은 **컴파일러** 혹은 **인터프리터**라고 부른다. 컴파일러나 인터프리터의 일종의 **번역기**라고 생각할 수 있다.

대부분의 프로그래밍 언어는 "변수와 값", "키워드", "연산자", "객체", "배열"등과 같은 문법을 제공하며, 이러한 문법을 적절히 사용하여 값을 저장하거나 연산하고 자료를 구조화한다. 결국 **프로그래밍은 요구사항의 집합을 분석해서 적절한 자료구조와 함수의 집합으로 변환한 수, 그 흐름을 제어하는 것**이다.

## 02장 자바스크립트란?

---

자바스크립트는 일반적으로 프로그래밍 언어로서 ECMAScript와 브라우저가 별도로 지원하는 Web API(DOM, XMLHttpRequest, Web Storage)등을 아우르는 개념이다. 또한 자바스크립트는 HTML, CSS와 함께 웹을 구성하는 요소 중 하나로 **웹 브라우저에서 동작하는 유일한 프로그밍언어**이다.

## 03장 자바스크립트 개발 환경과 실행 방법

---

모든 브라우저는 자바스크립트를 해석하고 실행할 수 있는 자바스크립트 엔진을 내장하고 있으며, Node.js도 자바스크립트 엔진을 내장하고 있다. 브라우저 환경에서는 Web API를 지원하지만 Node.js환경에서는 지원하지 않고 Node.js고유의 API를 지원한다.
