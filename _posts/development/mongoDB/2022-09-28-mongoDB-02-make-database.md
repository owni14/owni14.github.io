---
layout: post
title: '[MongoDB] 데이터베이스 생성'
subtitle: '[MongoDB] 데이터베이스 생성'
category: dev
tags: mongo
image:
  path: /assets/img/mongoDB.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## 클라우드 데이터 베이스 생성

---

1. 나 같은 경우 혼자서 몽고DB에 대해 연습을 할 계획이므로 무료로 이용할 수 있는 Shared를 클릭해서 데이터베이스를 생성해주었다.
   ![mongoDB_cloud_database](/assets/img/development/2022-09-28/mongoDB_cloud_database.png)

2. 클라우드 제공자와 지역을 선택할 수 있는데, 제일 대중적인 AWS를 선택하였고 지역은 서울을 선택하였다.  
   나머지 Cluster Tier나 Additional Settings에 대해서는 건드릴 부분이 없어서 따로 조작하지 않았고 마지막으로 cluster name만 자신이 원하는 이름으로 기입하면 된다.
   ![mongoDB_cloudProvider_Region](/assets/img/development/2022-09-28/cloudProvider_Region.png)
   ![mongoDB_cluster_name](/assets/img/development/2022-09-28/cluster_name.png)

3. 몽고DB를 연결할 인증방식과 어디서 연결할지 나오는데 먼저 자신이 사용할 username과 password를 작성 한 후 **Create User**를 클릭 해 계정을 만들어 주면되고, 어디서 연결할지에 대해서는 나 같은 경우 로컬에서만 실핼할 것이기 때문에 Add My Current IP Address를 클릭해주어 ip를 추가해주었다.
   ![mongoDB_username_password](/assets/img/development/2022-09-28/mongoDB_username_password.png)
   ![mongoDB_ip](/assets/img/development/2022-09-28/mongoDB_ip.png)

4. 데이터베이스를 다 만들고 나면 아래와 같이 현재 데이터베이스가 나오게 된다.
   ![mongoDB_database](/assets/img/development/2022-09-28/mongoDB_database.png)

## Reference

---

[https://www.youtube.com/watch?v=fgoMqmNKE18&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T](https://www.youtube.com/watch?v=fgoMqmNKE18&list=PL9a7QRYt5fqkZC9jc7jntD1WuAogjo_9T)
