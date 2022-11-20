---
layout: post
title: '[Css] Flex(Flexible Box)란?'
subtitle: '[Css] Flex(Flexible Box)란?'
category: dev
tags: css
published: true
image:
  path: /assets/img/css_logo.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## Flex란?

---

Flex란 Flexible Box, Flexbox라고 부르기도 하는데 레이아웃 배치 전용 기능으로 고안되었다. Flex는 **Container**와 **Items** 두개로 나뉘어져 있으며, Container는 **Items를 감싸는 부모요소**의 역할을 하고 각 Items를 정렬하기 위해서는 **Container가 꼭 필요하다**.

Container와 Items에 적용하는 속성의 구분되어 있다. **Container**에는 `display`, `flex-flow`, `justify-content`등의 속성을 가지고 있고, **Items**는 `order`, `flex`, `align-self`등의 속성을 사용할 수 있다.

### 주 축(main-axis)과 교차 축(croess-axis)

Flex에 대한 내용을 본격적으로 들어가기 전에 주 축과 교차 축에 대한 내용을 먼저 알아야한다. Flex Container 방향을 수평으로 설정하게 되면 Container안쪽에 있는 Items들이 수평으로 배치되게 된다. 여기서 주 축이 수평축이 되고 수평과 교차하는 축이 수직축이 된다. 반대로 Container를 수직으로 설정하면 주 축은 수직, 교차 축은 수평이 된다. 즉, 방향이 수평이나 수직이냐에 따라 주 축과 교차 축이 달라지게 된다.

![flexbox_layout](/assets/img/development/2022/11/16/flexbox_layout.png)  
출처: MDN 공식문서

## Flex Container

---

| 속성            | 의미                                                  |
| --------------- | :---------------------------------------------------- |
| display         | Flex Container를 정의                                 |
| flex-flow       | flex-direction 과 flex-wrap의 단축 속성               |
| flex-direction  | Flex Items의 주 축(main-axis)설정                     |
| flex-wrap       | Flex Items의 주 축(main-axis)을 설정                  |
| justify-content | 주 축(main-axis)의 정렬 방법을 설정                   |
| align-content   | 교차 축(cross-axis)의 정렬 방법을 설정(2줄 이상)      |
| align-items     | 교차 축(cross-axis)에서 Items의 정렬 방법을 설정(1줄) |

### display

`display: flex`, `display: inline-flex`를 이용하여 Flex Container를 정의 할 수 있다.

- **flex** : `display:block`와 같은 성향을 가지고 있어 Flex Container가 **수직**으로 쌓인다.
- **inline-flex** : `display:inline`와 같은 서향을 가지고 있어 Flex Container가 **수평**으로 쌓인다.
- `display:flex`를 flex-box안 item들은 수평으로 배치

![basic_layout](/assets/img/development/2022/11/16/basic_layout.png)

![container](/assets/img/development/2022/11/16/container.png)

![item_layout](/assets/img/development/2022/11/16/item_layout.png)

### flex-flow

Flex Items의 주 축(main axis)를 설정하고 Items의 줄 바꿈도 설정 가능하다.

| 값             | 의미                          | 기본값 |
| -------------- | :---------------------------- | ------ |
| flex-direction | Items의 주 축(main axis) 설정 | row    |
| flex-wrap      | Items의 줄 바꿈 설정          | nowrap |

#### flex-direction

Items의 주 축(main axis) 설정

- **row** : Items를 수평축(왼->오)으로 표시
- **row-reverse** : Items를 row의 반대 축으로 표시
- **column** : Items를 수직축(위->아)로 표시
- **column-reverse** : Items를 column의 반대 축으로 표시

#### flex-wrap

Items의 줄 바꿈 설정

- **nowrap** : Items를 한 줄에 표시(줄 바꿈이 없으므로 잘릴 수 있다.)
- **wrap** : Items를 여러 줄로 묶음
- **wrap-reverse** : Items를 wrap의 역 방향으로 여러 줄로 묶음

### justify-content

주 축(main axis)의 정렬 방법 설정

| 값            | 의미                                                                                | 기본값     |
| ------------- | :---------------------------------------------------------------------------------- | ---------- |
| flex-start    | Items를 시작점으로 정렬                                                             | flex-start |
| flex-end      | Items를 끝점으로 정렬                                                               |            |
| center        | Items를 가운데 정렬                                                                 |            |
| space-between | 시작 Item은 시작점, 마지막 Item은 끝점에 정렬되고 나머지 Items는 사이에 고르게 정렬 |            |
| space-around  | Items를 균등한 여백을 포함하여 정렬                                                 |            |

### align-content

교차 축(cross-axis)의 정렬 방법을 설정하는데 여러 줄(2줄 이상)이고 여백이 있는 경우에만 사용이 가능하다.

| 값            | 의미                                                                                | 기본값  |
| ------------- | :---------------------------------------------------------------------------------- | ------- |
| stretch       | Container의 교차 축을 채우기 위해 Items를 늘림                                      | stretch |
| flex-start    | Items를 시작점으로 정렬                                                             |         |
| flex-end      | Items를 끝점으로 정렬                                                               |         |
| center        | Items를 가운데로 정렬                                                               |         |
| space-between | 시작 Item은 시작점, 마지막 Item은 끝점에 정렬되고 나머지 Items는 사이에 고르게 정렬 |         |
| space-aroud   | Items를 균등한 여백을 포함하여 정렬                                                 |         |

### align-items

교차 축(cross-axis)에서 Items의 정렬 방법을 설정하는데 보통 한 줄일 경우에 사용한다.

| 값         | 의미                                           | 기본값  |
| ---------- | :--------------------------------------------- | ------- |
| stretch    | Container의 교차 축을 채우기 위해 Items를 늘림 | stretch |
| flex-start | Items를 시작점으로 정렬                        |         |
| flex-end   | Items를 끝점으로 정렬                          |         |
| center     | Items를 가운데로 정렬                          |         |
| baseline   | Items를 문자 기준선에 정렬                     |         |

## Flex Items

---

| 속성        | 의미                                          |
| ----------- | :-------------------------------------------- |
| order       | Flex Items 순서 설정                          |
| flex        | flex-grow, flex-shrink, flex-basis 단축 속성  |
| flex-grow   | Flex Item의 증가 너비 비율 설정               |
| flex-shrink | Flex Item의 감소 너비 비율 설정               |
| flex-basis  | Flex Item의 기본 너비 설정                    |
| align-self  | 교차 축(cross-axis)에서 Item의 정렬 방법 설정 |

### order

- Flex Items 순서 설정
- Item에 숫자를 지정
- 숫자가 클수록 순서가 뒤로
- 음수 허용

### flex

Item 너비의 증가, 감소, 기본을 설정하는 단축 속성

| 값          | 의미                       | 기본값 |
| ----------- | :------------------------- | ------ |
| flex-grow   | Item의 증가 너비 비율 설정 | 0      |
| flex-shrink | Item의 감소 너비 비율 설정 | 1      |
| flex-basis  | Item의 기본 너비 설정      | auto   |

### align-self

교차 축(cross-axis)에서 Item의 정렬 방법 설정

| 값         | 의미                                        | 기본값 |
| ---------- | :------------------------------------------ | ------ |
| auto       | Container의 align-items 속성을 상속         | auto   |
| stretch    | Container의 교차 축을 채우기 위해 Item 늘림 |        |
| flex-start | Item을 각 줄의 시작점으로 정렬              |        |
| flex-end   | Item을 각 줄의 끝점으로 정렬                |        |
| center     | Item을 가운데 정렬                          |        |
| baseline   | Item을 문자 기준선에 정렬                   |        |

## Reference

---

[https://studiomeal.com/archives/197](https://studiomeal.com/archives/197)  
[https://heropy.blog/2018/11/24/css-flexible-box/](https://heropy.blog/2018/11/24/css-flexible-box/)  
[https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Flexbox](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Flexbox)  
[https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
