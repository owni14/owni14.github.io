---
layout: post
title: '[node] package란?'
subtitle: '[node] package?'
category: dev
tags: node
image:
  path: /assets/img/development/2022-09-27/package.json_capture.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## npm init 이용해서 package.json 생성

---

<!-- prettier-ignore -->
아무파일이 없는 상태에서 vsCode의 Terminal에 `npm init`를 이용해 설치하게 되면 package.json이라는 파일이 생겨난다.
따로 설정할게 없다면 `npm init`명령어 입력 후 계속 enter를 눌러 넘어간 다음 마지막에 `yes`를 입력해주면 된다.  
현재 나는 인프런에서 강의를 들으면서 여러개의 모듈들을 추가해서 공부하고 있기에 여러개 파일이 많이 보일 것이다. 제일 위에 있는 name부터 하나씩 살펴보도록 하자.

## name

- 프로젝트의 이름을 의미한다.
- 214글자보다 같거나 짧아야한다.
- 점(.)이나 밑줄(\)로 시작할 수 없다.
- 새로운 패키지들의 이름은 이름 안에 대문자를 가질 수 없다.
- 이름에는 안전하지 않거나 없는 URL을 사용해서는 안된다.

## version

- 프로젝트의 버전을 의미한다.

## description

- 프로젝트에 대한 설명을 작성한다.
- `npm search`로 리스트되어 보여지기 때문에 사람들이 패키지를 찾는데 도움이 될 수 있다.

## main

- 프로젝트를 최초로 실행할 부분을 의미한다.
- 따로 설정하지 않으면 package root folder안에 있는 `index.js`로 기본적으로 설정된다.

## script

- 패키지안에서 자주 사용되는 명령어를 적어두는 곳이다.
- `npm` 명령어로 실행이 가능하다.
- `script`안에 `"start:" "node index.js`라고 적혀있는 부분은 `npm run start`명령어를 이용해 node를 시작할때 **index.js**에서 시작한다는 의미이다.

## author

- 프로젝트의 작성자 정보를 기입하는 곳이다.
- 한 사람만 작성 가능하다.
- 이름과 더불어 url, email을 선택적으로 작성 가능하다.

## license

- 다른사람들이 어떻게 승인되어져서 사용하는지 알기 위해서 패키기에 구체적인 라이센스가 필요하다.
- 내가 `npm install을` 했을때 기본적으로 ISC가 적혀 있었던거 같다.

## dependencies

- 프로젝트의 의존성을 관리하는 부분이다.
- 여러개의 많은 확장 모듈들이 설치되어 질 것이다.
- 예를 들어 `npm install express --save`를 이용한다면 `express`모듈의 의존성이 dependencies에 작성되어 진다.
- `--save`를 이용하여 의존성에 추가시킨다.

## devDependencies

- 개발환경에 대해서만 의존성을 관리하는 부분이다.

## 정리

node.js에 있는 package.json이라는 파일은 프로젝트에서 사용하는 모듈들을 담아서 관리하는 곳이라고 생각할 수 있고, `JSON`형식으로 저장되어 진다.

## Reference

- [https://velog.io/@leyuri/Node.js-package.json-%ED%8C%8C%EC%9D%BC%EC%9D%B4%EB%9E%80](https://velog.io/@leyuri/Node.js-package.json-%ED%8C%8C%EC%9D%BC%EC%9D%B4%EB%9E%80)
- [https://docs.npmjs.com/cli/v8/configuring-npm/package-json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
