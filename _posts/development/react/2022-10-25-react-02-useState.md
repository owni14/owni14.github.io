---
layout: post
title: '[React] useState란?'
subtitle: '[React] useState란?'
category: dev
tags: react
image:
  path: /assets/img/react.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## useState란?

---

useState란 쉽게 **변수**라고 생각하면 되고 변수의 값을 가져오는 getter의 기능과 setter의 기능이 들어가 있는 함수이다. 보통 우리는 변수를 선언 할 때 `let value = 10;`이런식으로 선언해주었다. 그런데 react는 값이 변하게 될 경우 컴포넌트들이 다시 렌더링을 하며 화면이 바뀌게 되는데 state는 일반 변수와 다르게 **동적으로 상태 관리**를 해준다.

## useState 사용법

---

```
const [state, setState] = useState(초기값)
```

다음과 같이 선언을 하며 상단에 `import react, { useState } from 'react'`를 통해 react package에서 useState를 가지고 와서 사용해야한다. state는 **변수를 의미**, setState는 **state를 변경시켜주는 함수**, useState 괄호안의 값은 **상태의 초기 값**을 나타낸다.

## useState 사용예시

---

```
import React, { useState } from 'react';

function Test() {
  const [Count, setCount] = useState(0);

  const onIncreaseHandler = (preCnt) => {
    setCount((preCnt) => preCnt + 1);
  };

  const onDecreaseHandler = (preCnt) => {
    setCount((preCnt) => preCnt - 1);
  };

  return (
    <div>
      <div>{Count}</div>
      <button onClick={onIncreaseHandler}>Up</button>
      <button onClick={onDecreaseHandler}>Down</button>
    </div>
  );
}

export default Test;
```

![useState_example](/assets/img/development/2022/10/25/useState_example.png)
![useState_up](/assets/img/development/2022/10/25/useState_up.png)
![useState_down](/assets/img/development/2022/10/25/useState_down.png)

숫자를 증가시키고 감소시키는 것을 useState를 이용해서 작성해보았는데 `onIncreaseHandler`와 `onDecreaseHandler`를 함수를 선언하고 `setCount()`를 이용하여 값을 변경 하였다.

```
import React, { useState } from 'react';

function Test() {
  const [Text, setText] = useState('');

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div>
        <h1>Text : {Text}</h1>
      </div>
      <input onChange={onChangeHandler} value={Text} />
    </div>
  );
}

export default Test;
```

![useState_text](/assets/img/development/2022/10/25/useState_text.png)
![useState_text_change](/assets/img/development/2022/10/25/useState_text_change.png)

다음은 텍스트를 입력받고 출력하는 것을 작성해보았는데 `onChangeHandler`리스너를 작성해주지 않으면 input태그에 아무리 글을 작성해도 입력된 값이 출력되지 않는다. `onChangeHandler`안에 `e`라는 파라미터를 받아서 `e.target.value`를 통해 현재 입력된 값을 받아 `setText()`를 이용해 값이 변경 되도록 하였다.

## Reference

---

[https://xiubindev.tistory.com/97](https://xiubindev.tistory.com/97)  
[https://codiving.kr/21](https://codiving.kr/21)
