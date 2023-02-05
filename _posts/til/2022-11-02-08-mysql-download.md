---
layout: post
title: '[TIL] Mac에 MySql설치'
subtitle: '[TIL] Mac에 MySql설치'
category: til
image:
  path: /assets/img/til.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## Mac에 MySql설치방법

---

node 기초강의를 들으면서 MySql을 이용해 작업을 하려고하는데 터미널에서 `mysql`이라고 입력하게 될 경우 `zsh: command not found: mysql`이라고 나왔다. mysql설치는 [MySql 다운로드](https://dev.mysql.com/downloads/mysql/)에 들어가서 자신에게 맞는 운영체제 선택 후 다운로드 하는 방법과 터미널은 이용한 방법이 있다.

나는 터미널을 이용해서 MySql을 다운로드 받았다. 옛날에 윈도우 사용환경에서는 사이트 들어가서 다운로드 하는게 편했는데 요즘은 터미널에서 다운하는게 편하다고 느낀다. 먼저 터미널을 열어 `brew install mysql-client`를 입력해주면 MySql이 다운로드 된다.

다운로드 끝에 보면 **If you need to have mysql-client first in your PATH run: echo 'export PATH="/usr/local/opt/mysql-client/bin:$PATH"' >> ~/.zshrc** 라고 나오는데 echo부터 zshrc내용까지 복사한 다음 터미널에 붙여넣기 한다. 추가하지 않으면 터미널에서 `/usr/local/mysql/bin`에 접속하여 `./mysql`이라는 명령어로 실행해야할 것이다. 저 부분을 추가해줌으로써 터미널에서 바로 mysql명령어를 실행할 수 있게 된다. 붙여넣기를 완료하였으면 `source ~/.zshrc`로 `.zshrc`파일을 컴파일 해주면 모든 설치가 완료 된다.

## 요약

---

1. 터미널 실행
2. `brew install mysql-client`입력
3. `export PATH="/usr/local/opt/mysql-client/bin:$PATH"' >> ~/.zshrc`입력
4. `source ~/.zshrc`입력

## Reference

---

[https://rat2.tistory.com/13](https://rat2.tistory.com/13)  
[https://ryean.tistory.com/5](https://ryean.tistory.com/5)
