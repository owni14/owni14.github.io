---
layout: post
title: '[TIL] localStorage를 이용해 로그인 유지'
subtitle: '[TIL] localStorage를 이용해 로그인 유지'
category: til
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## localStorage란?

---

localStorage의 브라우저 세션에 값을 저장하고 가져와서 읽을 수 있는 기능을 한다. 하지만 localStorage는 유효기간이 없으며 페이지가 닫히면 저장된 값도 없어지게 된다.

## localStorage 사용 예시

---

로그인버튼을 누를 경우 localStorage에 값을 저장하게끔 하였다.

![login](/assets/img/development/2022/11/22/login.png)

다음 코드는 로그인 버튼을 클릭하였을 경우 실행되는 loginHandler이며 localStorage를 이용해 **key와 value형식**으로 값을 저장한다.

```
const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };
```

웹에서 개발자 도구를 열어 Storage -> Local Storage에 들어가보면 Key, Value값으로 각각 코드에서 지정한 isLoggedIn과 1이 들어가 있는 것을 확인할 수 있다.

![local_storage](/assets/img/development/2022/11/22/local_storage.png)

useEffect를 사용하여 브라우저에 있는 `isLoggedIn`으로 저장된 키값을 가져와 해당 키 값이 1이면 setIsLoggedIn을 `true`로 하여 로그인을 유지하도록 하였다.

```
useEffect(() => {
    const storedUser = localStorage.getItem('isLoggedIn');

    if (storedUser === '1') {
      setIsLoggedIn(true);
    }
}, []);
```

## Reference

---

[https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
