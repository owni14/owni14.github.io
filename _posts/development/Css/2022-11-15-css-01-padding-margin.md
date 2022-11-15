---
layout: post
title: '[Css] margin과 padding의 차이'
subtitle: '[Css] margin과 padding의 차이'
category: dev
tags: css
image:
  path: /assets/img/css_logo.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## margin

---

- 밖의 여백을 의미
- margin: 10px -> 상하좌우 모두 10px 적용
- margin: 10px 20px -> 상하 10px, 좌우 20px 적용
- margin: 10px 20px 30px 40px -> 상: 10px, 우: 20px, 하: 30px, 좌: 40px 적용
- margin: 10px 20px 30px -> 상: 10px, 좌우: 20px, 하: 30px

## padding

---

- 안쪽 여백을 의미

## margin과 padding의 예시

---

기본적인 설정은 다음과 같이하고 box1과 box2에 대해 margin과 padding값을 주면서 변화를 살펴보려고 한다.

```
# test.js
<div className={classes.box1}>
  <div className={classes.box2}>TEXT</div>
</div>

```

```
# test.module.css
.box1 {
  width: 500px;
  height: 200px;
  border: 3px solid;
  background-color: gray;
}
.box2 {
  width: 100px;
  height: 100px;
  border: 3px solid;
  color: red;
}
```

- 기본 배치 상태

  ![basic_setting](/assets/img/development/2022/11/15/basic_setting.png)

- box2에 margin 50px 적용 ->

  ![box2_margin](/assets/img/development/2022/11/15/box2_margin.png)

- box2에 margin 50px, padding 10px 적용

  ![box2_padding](/assets/img/development/2022/11/15/box2_padding.png)

## Reference

---

[https://ofcourse.kr/css-course/margin-padding-속성](https://ofcourse.kr/css-course/margin-padding-속성)
