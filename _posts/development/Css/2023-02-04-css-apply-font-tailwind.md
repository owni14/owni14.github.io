---
layout: post
title: '[Css] Tailwind에서 폰트 적용하기'
subtitle: '[Css] Tailwind에서 폰트 적용하기'
category: dev
tags: css
published: true
image:
  path: /assets/img/css_logo.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## 폰트 적용 종류

---

폰트 적용하는 종류는 크게 두 가지로 나눌수가 있다. 첫번재로는 폰트를 **직접**다운받아서 fonts폴더를 만든 후 다운받은 파일들을 넣어서 적용하는 방법이있고 두 번째는 **url**로 폰트를 가져와서 사용하는 방법이 있다. 이번 포스트에서는 후자를 이용한 방법을 설명하려고 한다.

## 폰트 적용 방법

---

나는 **styles > global.css**폴더 안에 Tailwind에 대한 전역적 선언을 해놓았다. 그래서 사용하기 위해서는 아래와 같이 global.css에 본인이 사용하고 싶은 폰트의 주소를 가져와서 선언해준다.

```
/* /styles/globals.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

/** Bold */
@font-face {
  font-family: 'San-Francisco-Bold'; // 이름은 자기가 하고 싶은 이름으로 지정해도 상관 X
  font-weight: 700; // 폰트 굵기 지정
  src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff'); // 폰트 url 지정
}
```

global.css에 선언을 해주었다면 이제 좀 편하게 사용하기 위해 커스텀으로 작성해주도록 하자. 그러기 위해서는 먼저 **tailwind.config.js**파일로 들어간다. 파일을 보면 theme으로 지정된 객체 안에 extends라는 객체가 들어있는데 여기서 fontFamily 객체를 생성해준다.

그런 다음 해당 객체에 키 값으로 사용할 이름을 하고 싶은 걸로 작성해준 다음 아까 url로 가져왔던 파일에서 font-family로 지정한 이름을 **['font-family로 지정한 이름']**으로 작성해주면 된다. 이해가 좀 어렵다면 아래 코드 예시를 참고하면 이해하기 좀 더 쉬울꺼 같다.

```
/* tailwind.config.js */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
    fontFamily: {
      appleBold: ['San-Francisco-Bold'],
    },
  },
  plugins: [],
};
```

## Reference

---

- [https://velog.io/@hanbok159/tailwindcss-%ED%8F%B0%ED%8A%B8%EC%A0%81%EC%9A%A9](https://velog.io/@hanbok159/tailwindcss-%ED%8F%B0%ED%8A%B8%EC%A0%81%EC%9A%A9)
- [https://gist.github.com/mfd/614e2e80a22b878bde63cb471cbe677e](https://gist.github.com/mfd/614e2e80a22b878bde63cb471cbe677e)
