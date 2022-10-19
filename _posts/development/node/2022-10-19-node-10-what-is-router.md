---
layout: post
title: '[Node] 코드의 가독성을 높이는 Router'
subtitle: '[Node] 코드의 가독성을 높이는 Router'
category: dev
tags: node
published: true
image:
  path: /assets/img/node.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## Router란?

---

> Routing refers to how an application’s endpoints (URIs) respond to client requests  
> resource : Express document

라우터는 엔드포인트가 클라이언트 요청에 응답하는 방법을 결정하는 것을 의미한다. 쉽게 설명하자면, 클라이언트와 서버를 이어주는 연결장치라고 보면 편할꺼 같다. 모든 router를 하나의 `.js`파일에 넣어버리게 되면 코드가 길어지고 **가독성이 떨어지게 된다.** 그래서 router를 잘 사용하기 위해서는 필요 기능에 따라 `.js`파일을 만들고 원하는 코드를 짜서 router를 **분리**를 해줘야한다.

## Router 사용 예시

---

나는 `index.js`파일에서 다음과 같이 `/api/users`와 `/api/product`로 엔드포인트를 작성하고 routes폴더안에 있는 users와 produdct.js파일을 불러왔다. 이렇게 `index.js`에 라우터 바로 사용하지 않은 이유는 코드의 가독성을 위해 각 기능에 따라 **라우터를 분리**하였기 때문이다.

### index.js

```
const app = express();

app.use('/api/users', require('./routes/users'));
app.use('/api/product', require('./routes/product'));
```

![router_folder](/assets/img/development/2022/10/19/router_folder.png)

일단, 라우터를 사용하기 위해서는 `express.Router()`을 통해 router를 불러와야한다. 나는 mongoDB를 이용하여 회원가입과 제품을 등록하는 작업을 해보았다.  
users.js에서 엔드포인트를 작성함으로써 `/api/users/register`이라는 URI로 요청이 들어오게 된다. product.js에서는 엔드포인트로 `/`를 작성함으로써 `/api/product`경로로 URI요청이 들어온다.

클라이언트에서 요청이 들어오면 index.js를 한번 거쳐 URI경로를 확인 후 user.js나 product.js 둘중 하나로 가게 된다.

![diagram](/assets/img/development/2022/10/19/diagram.png)

### users.js

```
const router = express.Router();
const { User } = require('../models/User');

router.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
```

### product.js

```
const { Product } = require('../models/Product');

router.post('/', (req, res) => {
  const product = new Product(req.body);
  product.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});
```

## Reference

---

[https://expressjs.com/en/starter/basic-routing.html](https://expressjs.com/en/starter/basic-routing.html)
[https://velog.io/@over/Node.js-Router-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0](https://velog.io/@over/Node.js-Router-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0)
