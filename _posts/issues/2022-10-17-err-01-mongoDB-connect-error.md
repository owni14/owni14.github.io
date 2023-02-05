---
layout: post
title: '[Issues] 아이피변경에 따른 MongoDB연결 에러'
subtitle: '[Issues] 아이피변경에 따른 MongoDB연결 에러'
category: issues
image:
  path: /assets/img/issues.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc
{:toc}

## 에러 내용

---

현재 나는 인프런에서 [따라하며 배우는 노드, 리액트 시리즈 - 쇼핑몰 사이트 만들기](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%87%BC%ED%95%91%EB%AA%B0/dashboard) 강의를 들으면서 리액트와 노드에 대해서 공부하는 중이다.

데이터베이스와 연동하여 데이터베이스에 있는 이미지를 가져오는 작업을 하고 있었다. 그래서 axois를 사용했는데 아무 반응이 나타나지 않았다. 회원가입도, 로그인도, 이미지 불러오는 것도.. 꺼림직해서 콘솔창을 확인하여 보니 mongoDB랑 연결이 되면 `MongoDB connected..`가 콘솔창에 나와야하는데 그렇지 않았고, 이미지 파일을 가져올때 mongoDB에러가 나고 있었다.

![error1](/assets/img/development/2022/10/17/error1.png)

![error2](/assets/img/development/2022/10/17/error2.png)

## 해결 방법

---

외출을 길게 할 일이 있어 전원 플러그를 뽑고 외출을 했고 집에 나중에 집에 와서 다시 공유기를 키고 강의를 들으면서 코딩을 하고 있었다. 그런데 공유기를 껐다가 다시 킨게 나의 IP를 바꾸게 된 결정적인 계기였고, mongoDB 사이트의 프로젝트에서 Network Access를 누르고 Edit를 누른다음 ADD CURRENT IP ADDRESS를 누르니 새로운 아이피로 바뀌었다. 그 후 이미지를 불러오고 회원가입, 로그인 등 mongoDB를 이용한게 모두 정상적으로 작동하였다.

혼자 코딩을 하니 별거 아닌 문제에도 상당한 시간을 낭비하는거 같다. 이번 에러를 해결 하려고 1시간 넘게 구글링을 하였고 많은 자료를 찾아보았지만 결국 코딩 실수가 아닌 IP를 다르게 설정한 실수여서 좀 황당했다. 혹시 나처럼 로컬환경에서 개발하고 똑같은 에러가 발생한다면, mongoDB에 있는 IP를 한번 확인해보길 바란다.

![mongoDB_Cluster](/assets/img/development/2022/10/17/mongoDB_Cluster.png)

![change_ip](/assets/img/development/2022/10/17/change_ip.png)
