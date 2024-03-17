---
layout: post
title: '[React] TDD를 활용한 Todo list 만들기(컴포넌트 설계)'
subtitle: '[React] TDD를 활용한 Todo list 만들기(컴포넌트 설계)'
category: dev
tags: react
published: true
image:
  path: /assets/img/react.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## App.tsx

```
import TodoListHeader from "./components/TodoListHeader";
import TodoListForm from "./components/TodoListForm";
import "./app.scss";
import { useState } from "react";
import { ITodoList } from "./type";
import TodoListItems from "./components/TodoListItems";

function App() {
    const [todoList, setTodoList] = useState<ITodoList[]>([]);

    return (
        <div id="appContainer">
            <div className="todo-list-wrapper">
                <TodoListHeader todoList={todoList} />
                <section className="todo-list-section-wrapper">
                    <TodoListForm setTodoList={setTodoList} />
                    <TodoListItems todoList={todoList} setTodoList={setTodoList} />
                </section>
            </div>
        </div>
    );
}

export default App;
```

todoList의 컴포넌트의 부모컴포넌트에서 위 코드와 같이 상태선언을 해주고 값이 변하면 자식 컴포넌트로 내려주었다.

## TodoListHeader.tsx

---

```
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { BiBookmarks } from "react-icons/bi";
import { ITodoListHeader } from "../type";

const TodoListHeader = ({ todoList }: ITodoListHeader) => {
    dayjs.extend(advancedFormat);
    const today = dayjs().format("MMMM, Do");

    return (
        <div className="todo-list-top">
            <div className="top-wrapper">
                <div className="date-wrapper">
                    <p data-testid="today">{today}</p>
                    <p data-testid="active-tasks">{todoList.length} Active Tasks</p>
                </div>
                <p className="title">To Do List</p>
                <div className="svg-wrapper">
                    <BiBookmarks />
                </div>
            </div>
        </div>
    );
};

export default TodoListHeader;

```

먼저 헤더 부분은 반환은 위와 같이 하였고 dayJs라이브러리를 이용해 오늘 날짜를 today라는 변수에 선언하여 가져왔다. 그리고 부모 컴포넌트에서 todoList라는 상태를 하나 선언했는데 타입은 `Array<{no: number;todo: string;}>`와 같이 선언되어 있다. 할 일을 하나씩 등록할때마다 todoList의 length는 늘어나게 될 것이고 이로 인해 `{todoList.length} Active Tasks`에 있는 길이도 현재 리스트의 개수대로 보여지게 될 것이다.

## TodoListForm.tsx

---

```
import { useState } from "react";
import { ITodoListForm } from "../type";

const TodoListForm = ({ setTodoList }: ITodoListForm) => {
    const [inputValue, setInputValue] = useState<string>("");

    const onClickButton = () => {
        setTodoList(prev => [...prev, { no: prev.length + 1, todo: inputValue }]);
        setInputValue("");
    };

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
    };

    return (
        <div className="input-wrapper">
            <input
                type="text"
                name="todo"
                value={inputValue}
                placeholder={"Please enter your todo list"}
                onChange={onChangeInput}
            />
            <button onClick={onClickButton} disabled={!inputValue}>
                Add
            </button>
        </div>
    );
};

export default TodoListForm;
```

inputValue라는 변수를 타입이 `string`으로 정하여 상태로 하나 선언해두었다. input에서 change가 일어나면, setInputValue에 입력된 값을 넣었다. 버튼이 클릭 될때 onClickButton함수가 호출되어 setTodoList에 값 세팅이 되는데 no가 하나씩 늘어나야 하므로 이전 값의 길이에서 하나 증가시켜 값을 저장하고 inputValue는 다시 원래 초기상태로 세팅이 된다.

## TodoListItems.tsx

---

```
import { BiSolidTrash } from "react-icons/bi";
import { ITodoList, ITodoListItems } from "../type";
import cx from "classnames";

const TodoListItems = ({ todoList, setTodoList }: ITodoListItems) => {
    const onClickDelete = (delNo: number) => {
        setTodoList(prev =>
            prev.reduce((acc: ITodoList[], cur: ITodoList) => {
                const { no, todo } = cur;
                if (no !== delNo) {
                    if (no > delNo) {
                        return [...acc, { no: no - 1, todo }];
                    } else {
                        return [...acc, { no, todo }];
                    }
                }
                return acc;
            }, []),
        );
    };

    return (
        <main
            className={cx("list-wrapper", {
                hide: !todoList.length,
                scroll: todoList.length > 5,
            })}>
            {todoList.map(list => (
                <div className="detail-list-wrapper" key={list.no}>
                    <div
                        className={cx("detail-content", {
                            line: list.no !== 1,
                            "fade-in": list.no,
                        })}>
                        <div className="text-area">
                            <p data-testid="no">{`${list.no}.`}</p>
                            <p data-testid="text">{list.todo}</p>
                        </div>
                        <div className="icon-wrapper" data-testid="delete" onClick={() => onClickDelete(list.no)}>
                            <BiSolidTrash />
                        </div>
                    </div>
                </div>
            ))}
        </main>
    );
};

export default TodoListItems;

```

items 컴포넌트는 조금 복잡하다고 생각 들 수도 있을꺼 같은데 차근차근 하나씩 살펴보자.  
리스트가 없을 때는 hide클래스명을 이용하여 화면에서 숨길꺼기 때문에 classNames 라이브러리를 이용해서 조건으로 스타일을 지정했다. 또한, scroll 클래스명을 사용해 todoList가 6개 이상부터는 스크롤이 생기도록 구현하였다. 그리고 todoList.map을 이용하여 순서와 할 일에 대해서 리스트를 하나씩 보여줬다.

삭제 버튼을 클릭할 경우에는 reduce를 이용하여 값 세팅을 해줬는데, 먼저 반복문을 돌면서 삭제 리스트의 no이면 리스트 배열에 남아있으면 안되기 때문에 이전 값을 반환하였고 삭제 리스트의 no보다 큰 경우에는 no값을 하나씩 줄여서 순서를 다시 맞춰주었다.
