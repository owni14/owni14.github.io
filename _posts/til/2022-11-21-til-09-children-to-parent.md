---
layout: post
title: '[TIL] 자식 -> 부모, 부모 -> 자식 컴포넌트로 값 전달'
subtitle: '[TIL] 자식 -> 부모, 부모 -> 자식 컴포넌트로 값 전달'
category: til
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## 부모 -> 자식 컴포넌트로 값 전달

---

다음과 같이 `DUMMY_DATA`를 자식 컴포넌트로 넘겨줘서 출력을 하려고 한다.

```
# app.js

const DUMMY_DATA = [
  { id: 'e1', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e3',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

return (
    <div>
      <ExpensesList items={DUMMY_DATA} /> // 자식 컴포넌트로 items라는 이름을 이용해 DUMMY_DATA값 전달
    </div>
  );
```

```
# ExpensesList.js

const ExpensesList = (props) => { // 부모 컴포넌트로부터 값을 받을 파라미터

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => ( // 부모 컴포넌트에서 지정해준 이름인 items에 접근해 map메서드 이용
        <ExpenseItem // ExpenseItem이라는 자식 컴포넌트로 key, title, amount, date 이름으로 값 전달
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
```

```
#. ExpenseItem.js

const ExpenseItem = (props) => { // 부모 컴포넌트로부터 값을 받을 파라미터
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} /> // ExpenseDate라는 자식 컴포넌트로 date라는 이름으로 값 전달
        <div className='expense-item__description'>
          <h2>{props.title}</h2> // 부모 컴포넌트에서 받아온 title 값 출력
          <div className='expense-item__price'>${props.amount}</div> // 부모 컴포넌트에서 받아온 amount 값 출력
        </div>
      </Card>
    </li>
  );
};
```

### 출력 화면

![show_result](/assets/img/development/2022/11/21/show_result.png)

### 전체적인 흐름

1. 자식 컴포넌트를 반환 할 때, **이름**을 지정해서 자식 컴포넌트로 전달해준다.
2. 자식 컴포넌트는 **props**라는 파라미터를 이용해서 부모 컴포넌트에서 전달해준 값을 받을 수 있게 된다.
3. **props를 이용**해 부모 컴포넌트에서 지정한 이름으로 접근하여 값을 받는다.

## 자식 -> 부모 컴포넌트로 값 전달

---

다음과 같이 Title, Amount, Date를 입력받고 상위 컴포넌트로 값을 전달하는 방법을 얘기해보려고 한다.

![is_editing_true](/assets/img/development/2022/11/21/is_editing_true.png)

```
# NewExpense.js

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => { // 전달받은 파라미터를 enteredExpenseData 라고 지정
    const expenseData = { // 받아온 데이터를 새로운 객체로 생성
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData); // 상위 컴포넌트에 한번 더 값을 전달해준다.
  };

return (
    <div className='new-expense'>
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler} // Title, Amount, Date를 입력할 수 있는 컴포넌트에 NewExpense에서 실행할 함수를 전달해준다.
      />
    </div>
  );
```

전체 폼에 onSubmit이벤트를 달아서 submitHandler함수로 제어하게 하였다.

```
# ExpenseForm.js

const submitHandler = (event) => {
    event.preventDefault(); // submit이 되지 않게 제어해주는 역할

    const expenseData = { // title, amount, date를 expenseData라는 새로운 객체 생성
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); 상위 컴포넌트에서 onSaveExpenseData라는 이름으로 내려준 props에 expenseData전달
  };
```

### 전체적인 흐름

1. `NewExpense.js` -> `onSaveExpenseData`라는 이름으로 `ExpenseForm.js`에 props를 전달
2. `ExpenseForm.js`에서는 내려준 props를 이용해 상위 컴포넌트에서 정한 이름인 `onSaveExpenseData`에 접근하여 함수(`saveExpenseDataHandler`)를 실행

## Reference

---
