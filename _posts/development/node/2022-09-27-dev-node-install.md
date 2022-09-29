---
layout: post
title: '[node] node 설치'
subtitle: '[node] node 설치'
category: dev
tags: node
image:
  path: /assets/img/node.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## node 설치

node를 사용하기 위해서는 먼저 설치를 진행해줘야 한다. [노드 홈페이지](https://nodejs.org/en/download/)에 접속하게 되면 LTS 버전과 Current버전 두개가 나오게 된다.

LTS는 **Long Term Support**의 약자로 오랫동안 지원되고 있어 <u>안정적</u>이고 <u>신뢰성</u>이 높고, **Current**는 말 그대로 현재 버전이라는 의미안데 최신 기능이 들어가 있어 안정성이 떨어질 수 있다. node에서는 대부분의 사용자들에게 LTS버전을 추천하고 있다.

자신의 운영체제에 맞는 버전을 선택해서 설치를 진행해주면 된다. 나는 Mac OS의 LTS버전을 다운로드 해주었다.  
node가 제대로 설치되었는지나 어떤 버전이 설치되었는지 궁금하면, Terminal에서 `node -v`명령어를 이용해서 node 버전을 확인할 수 있다.

![check_node_version](/assets/img/development/2022-09-27/check_node_version.png)
