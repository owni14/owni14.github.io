---
layout: post
title: '[Node] Mac에 Python 및 Django 설치 방법'
subtitle: '[Node] Mac에 Python 및 Django 설치 방법'
category: dev
tags: python
image:
  path: /assets/img/python_logo.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## Mac에 Python 설치 방법

---

기본적으로 Mac에는 파이썬 2.7 버전이 깔려있을 것이다. 그러나 실제 개발에서는 파이썬3.n 버전이 주로 사용되니 3.n버전으로 설치해보자. 터미널에서 다음과 같은 명령어로 파이썬 설치가 가능하다.

### brew를 이용한 Python 설치

```
$ brew install python
```

### Python 버전확인

![python_version](/assets/img/development/2022/11/14/python_version.png)  
만약 **command not found: python**이라는 명령어가 나올 경우에는 다음과 같이 따로 설정을 해줘야한다.

```
# 터미널 (bashrc or bash_aliases)
vim ~/.bashrc

# bashrc (python3나 원하는 python 버전)
alias python=python3

# 터미널
source ~/.bashrc
```

### Python경로 추가

설치한 python 경로에 path를 확인하고 없으면 추가해준다.

```
$ vi ~/.zshrc
export PATH="/Library/Frameworks/Python.framework/Versions/3.9/bin:${PATH}"

$ source ~/.zshrc
```

## Django 설치

---

터미널을 열어서 먼저 pip를 업데이트 해주고 파이썬 장고를 설치한다.

```
$ python -m pip install --upgrade pip
$ pip3 install django
```

### Django 버전확인

```
$ python -m django --version
```

## Reference

---

[https://devocean.sk.com/blog/techBoardDetail.do?ID=163634](https://devocean.sk.com/blog/techBoardDetail.do?ID=163634)  
[https://jerryjerryjerry.tistory.com/90](https://jerryjerryjerry.tistory.com/90)  
[https://yay-z.com/94](https://yay-z.com/94)
