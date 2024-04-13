---
layout: post
title: '[Js] Number vs parseInt'
subtitle: '[Js] Number vs parseInt'
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

현업에서 문자열을 숫자로 변환하는데 있어 대부분 Number를 사용하지만 최근 프로그래머스 문제를 풀면서 parseInt도 숫자로 변환해준다는 것을 알게 되었고 둘의 차이점이 궁금해서 포스팅을 작성한다.

## Number이란

---

문자열을 숫자로 바꿔주는 메서드 중 하나로 숫자 문자열을 숫자로만 바꿔준다. 만약 문자열에 문자가 포함되어 있으면 NaN이 출력되게 된다.

### Example

---

```
const successCase = Number("1111") // 1111
const errorCase = Number("1원") // NaN
const decimalCase = Number("11.1111") // 11.1111
```

## parseInt란

---

Number과 동일하게 숫자 문자열을 숫자로 바꿔주는 메서드이긴 하나 조금의 차이가 존재한다. Number의 경우에는 문자가 들어가게 되면 NaN을 반환했지만 parseInt에서는 첫 글자가 숫자로 시작하고 중간에 문자가 나오게 되면 **숫자가 끝나는 지점**까지만 숫자로 표현된다. 그리고 소수점을 변환하게 되면 정수 부분만 추출해서 보여주게 된다.  
아래 예시를 한번 참고해보면 좋을꺼 같다.

### Example

---

```
const successCase = parseInt("1111") // 1111
const stringToNumberSuccessCase = parseInt("111원") // 111
const stringToNumberErrorCase = parseInt("원111") // NaN
const decimalCase = parseInt("11.1111") // 11
```

## Reference

---

- [https://overcome-the-limits.tistory.com/264](https://overcome-the-limits.tistory.com/264)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
