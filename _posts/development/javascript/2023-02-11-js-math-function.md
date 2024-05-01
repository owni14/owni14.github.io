---
layout: post
title: '[Js] Math.floor(), Math.ceil(), Math.round()'
subtitle: '[Js] Math.floor(), Math.ceil(), Math.round()'
category: dev
tags: js
published: true
image:
  path: /assets/img/js.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## Math.floor(), Math.ceil(), Math.round()각 특징

---

- Math.floor() : 소수점이 존재할 경우 값을 내리는 함수
- Math.ceil() : 소수점이 존재할 경우 값을 올리는 함수
- Math.round() : 소수점 값에 따라 값을 올릴지 내릴지 결정하는 함수(0.5를 기준으로 0.5이상이면 올리고 낮으면 내림)

## Example

---

```
console.log(Math.floor(1.7)); // 1
console.log(Math.floor(1.3)); // 1
console.log(Math.ceil(1.7)); // 2
console.log(Math.ceil(1.3)); // 2
console.log(Math.round(1.7)); // 2
console.log(Math.round(1.3)); // 1
```

## Reference

---

- [https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=diceworld&logNo=220174711730](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=diceworld&logNo=220174711730)
