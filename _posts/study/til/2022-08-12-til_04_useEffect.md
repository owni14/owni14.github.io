---
layout: post
title: '[til] useEffect'
subtitle: '[til] useEffect'
category: study
tags: til
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## useEffect

---

useEffect란? React component가 **렌더링** 될 때마다 특정 작업을 **실행**할 수 있도록 하는 리액트 Hook

- 함수 불러오는 방법 : `import React, { useEffect } from "react";`
- 문법
  ```
    useEffect(() => {
      console.log("value값이 업데이트 될 때만 실행");
    }, [deps]) //
  ```
- deps에 `[]`처럼 빈 배열 넣게되면 한번만 실행

## Reference

---

- [useEffect](https://cocoon1787.tistory.com/796)
