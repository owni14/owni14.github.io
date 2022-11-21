---
layout: post
title: '[Html] attribute와 property의 차이점'
subtitle: '[Html] attribute와 property의 차이점'
category: dev
tags: html
image:
  path: /assets/img/html_logo.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## attribute란?

---

attribute는 HTML element에 대한 정보를 전달하고 `이름="값"`형식으로 쌍을 이룬다. 예를 들어 `<div class="my-class"></div>`가 있으면 div 태그에 class는 값이 'my-class'인 attribute를 가진다.

## property란?

---

property는 attribute에 대한 HTML DOM tree안에서의 표현이다. 그래서 위에서 설명한 예시인 attribute는 property로 'className'을 가지고 값은 'my-class'를 가진다.

```
Our DIV node
 |- nodeName = "DIV"
 |- className = "my-class"
 |- style
   |- ...
 |- ...
```

## attribute와 property의 차이

---

attribute는 HTML text document/file안에 있는 것이고, property는 HTML DOM tree안에 있다. attribute는 항상 최초의 값(default)으로 전달하고 변경될 수 없다. 반면 property는 값이 변경 될 수 있다. 예를 들어 사용자가 checkbox를 체크하게 되거나, input에 텍스트를 입력 했거나, Javscript로 값을 변경하면 property의 값은 변한다.

### 시각적인 설명 :

![example1](/assets/img/development/2022/11/21/example1.png)

사용자가 input box에 'Joe'라고 입력했다고 가정해보면 아래 그림은 attribute와 property가 어떻게 변했는지 볼 수 있을 것이다.

![example2](/assets/img/development/2022/11/21/example2.png)

앞에서 얘기한 바와 같이, property가 DOM안에 있고 dynamicg하게 동작하기 때문에 property만 변경된 것을 확인 할 수 있다. 하지만 attribute는 HTML text안에 있기 때문에 값이 변경되지 않았음을 알 수 있다.

## Reference

---

[http://jquery-howto.blogspot.com/2011/06/html-difference-between-attribute-and.html](http://jquery-howto.blogspot.com/2011/06/html-difference-between-attribute-and.html)
