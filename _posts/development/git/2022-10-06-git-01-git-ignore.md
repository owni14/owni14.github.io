---
layout: post
title: '[Git] git ignore로 필요없는 파일 및 폴더 제거'
subtitle: '[Git] git ignore로 필요없는 파일 및 폴더 제거'
category: dev
tags: git
image:
  path: /assets/img/gitlogo.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## git ignore이란?

gitignore은 원격저장소인 Git에 필요없는 파일들은 무시해서 올리지 않게 해주는 것입니다.
예를 들어 node_modules과 라이브러리같은 파일들은 git저장소에 올리지 않아도 된다. 그리고 비밀번호와 인증과 같은 파일 역시 보안에 민감하기 때문에 git저장소에 올리면 안된다.

## .git ignore파일 생성

gitignore을 사용하기 위해서는 .gitignore파일을 생성해야한다.  
아래와 같이 .gitignore파일을 생성하고 자신이 올리면 안되는 파일이나 폴더를 작성해주면 된다.
![gitignore](/assets/img/development/2022-10-06/gitignore.png)

## Reference

[https://www.youtube.com/watch?v=wMJ7hQ2FKfQ&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T&index=5](https://www.youtube.com/watch?v=wMJ7hQ2FKfQ&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T&index=5)
