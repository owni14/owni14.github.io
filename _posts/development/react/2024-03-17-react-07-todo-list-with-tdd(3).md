---
layout: post
title: '[React] TDD를 활용한 Todo list 만들기(테스트 코드 작성)'
subtitle: '[React] TDD를 활용한 Todo list 만들기(테스트 코드 작성)'
category: dev
tags: react
published: true
image:
  path: /assets/img/react.png
---

<!-- prettier-ignore -->
* this ordered seed list will be replaced by the toc 
{:toc}

## Intro

---

처음 테스트 코드를 작성하기도 하였고 아직 많이 익숙하지 않아서 버벅거렸던거 같다. todoList UI와 기능은 하루도 안걸려서 다 만들었는데 테스트코드를 작성하고 테스트하는데 하루정도 걸린거 같다. 원래 나처럼 테스트코드를 짜는게 맞는지 의구심이 들지만 내가 작성한 테스트코드를 한번 얘기해보려고 한다.

## TodoListHeader.test.tsx

---

```
import { fireEvent, render, screen } from "@testing-library/react";
import TodoListHeader from "../components/TodoListHeader";
import { ITodoList } from "../type";
import "@testing-library/jest-dom";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import TodoListForm from "../components/TodoListForm";

describe("<TodoListHeader />", () => {
    const mockTodoList: ITodoList[] = [{ no: 1, todo: "first todo" }];
    const setMockTodoList: React.Dispatch<React.SetStateAction<ITodoList[]>> = jest.fn();
    const newTodo = "new todo";
    const addedMockTodoList = [...mockTodoList, { no: mockTodoList.length + 1, todo: newTodo }];

    test("check header text", () => {
        render(<TodoListHeader todoList={mockTodoList} />);
        dayjs.extend(advancedFormat);
        const today = dayjs().format("MMMM, Do");

        const title = screen.getByText("To Do List");
        const date = screen.getByTestId("today");

        expect(title).toBeInTheDocument();
        expect(date.textContent).toEqual(today);
    });

    test("click add button", () => {
        render(<TodoListForm setTodoList={setMockTodoList} />);
        const button: HTMLButtonElement = screen.getByRole("button");
        const inputValue: HTMLInputElement = screen.getByRole("textbox");

        fireEvent.change(inputValue, { target: { value: newTodo } });
        expect(inputValue).toHaveValue();

        fireEvent.click(button);
        expect(inputValue).not.toHaveValue();

        setMockTodoList(addedMockTodoList);
        expect(setMockTodoList).toHaveBeenCalledWith(addedMockTodoList);
    });

    test("increase todo list length", () => {
        render(<TodoListHeader todoList={addedMockTodoList} />);
        const activeTask = screen.getByTestId("active-tasks");

        expect(activeTask.textContent).toEqual(`${addedMockTodoList.length} Active Tasks`);
    });
});


```

텍스트 확인은 비교적 쉬웠던거 같은데 button을 클릭하고 setState를 설정해야하고 또 값이 업데이트 된 상태에서 테스트를 진행하려니까 뭔가 잘 되지 않았던거 같다. "check header text"는 그냥 단순 텍스트 있는지 여부랑 오늘 날짜가 맞는지 여부를 판단하여서 금방 테스트 통과가 되었다.

"click add button" 테스트에서 일단 input에 값이 있고 버튼이 클릭되면 input값이 사라지고 setMockTodoList가 업데이트가 되는지 확인을 할 필요가 있을꺼 같다고 생각이 들었다. 왜 header test인데 form테스트도 같이 진행하는지 의문이 들 수도 있겠지만 나는 일단 list가 증가하기 위해서는 input이 입력되고 버튼이 클릭되어야한다고 생각되어 해당 테스트 코드도 함께 작성을 했다.

그 후, "increase todo list length" 테스트에서 증가시긴 mockTodoList를 props로 넘겨줘서 값이 증가됐는지 여부를 확인하였다.

## TodoListForm.test.tsx

---

```
import { fireEvent, render, screen } from "@testing-library/react";
import TodoListForm from "../components/TodoListForm";
import "@testing-library/jest-dom";
import { ITodoList } from "../type";

describe("<TodoListForm />", () => {
    const mockTodoList: ITodoList[] = [{ no: 1, todo: "first todo" }];
    const setMockTodoList: React.Dispatch<React.SetStateAction<ITodoList[]>> = jest.fn();
    const newTodo: string = "new todo";
    const addedMockTodoList = [...mockTodoList, { no: mockTodoList.length + 1, todo: newTodo }];

    beforeEach(() => {
        render(<TodoListForm setTodoList={setMockTodoList} />);
    });

    test("if nothing is entered input value, button is disabled", () => {
        const button: HTMLButtonElement = screen.getByRole("button");
        const inputValue: HTMLInputElement = screen.getByRole("textbox");

        expect(inputValue).not.toHaveValue();
        expect(button).toHaveAttribute("disabled");
    });

    test("if anything is entered input value, button becomes activated.", () => {
        const button: HTMLButtonElement = screen.getByRole("button");
        const inputValue: HTMLInputElement = screen.getByRole("textbox");

        fireEvent.change(inputValue, { target: { value: newTodo } });

        expect(inputValue).toHaveValue();
        expect(button).not.toHaveAttribute("disabled");
    });

    test("when you press the button, the list will be added", () => {
        const button: HTMLButtonElement = screen.getByRole("button");
        const inputValue: HTMLInputElement = screen.getByRole("textbox");

        fireEvent.change(inputValue, { target: { value: newTodo } });
        expect(inputValue).toHaveValue();

        fireEvent.click(button);
        expect(inputValue).not.toHaveValue();
        setMockTodoList(addedMockTodoList);
        expect(setMockTodoList).toHaveBeenCalledWith(addedMockTodoList);
    });
});

```

코드를 다 작성하고 보니 각 테스트를 할때마다 render를 사용하고 있어서 다른 방법이 없나 찾아보다가, `beforeEach()`를 이용하면 테스트 함수들이 각각 실행될 때 마다 공통으로 사용할 수 있어서 해당 메서드를 활용하였다. 첫 테스트는 input 값이 없을 경우 버튼이 disable상태인지 여부를 확인하는 것이고 두번째 테스트는 input이 있을 경우 버튼의 disabled이 없어지는 여부를 테스트하였다.

마지막 테스트 같은 경우 값이 입력되면 값이 존재하는지 여부를 판단하였고 버튼이 클릭되면 값이 지워졌는지를 판단했다. 그 후, setMockTodoList에 값이 업데이트됐는지를 최종적으로 확인하였다.

## TodoListItems.test.tsx

---

```
import { render, screen, fireEvent } from "@testing-library/react";
import TodoListForm from "../components/TodoListForm";
import "@testing-library/jest-dom";
import { ITodoList } from "../type";
import TodoListItems from "../components/TodoListItems";

describe("<TodoListForm />", () => {
    const mockTodoList: ITodoList[] = [];
    const setMockTodoList: React.Dispatch<React.SetStateAction<ITodoList[]>> = jest.fn();
    const newTodo: string = "new todo";
    const addedMockTodoList = [...mockTodoList, { no: mockTodoList.length + 1, todo: newTodo }];
    const deletedMockTodoList: ITodoList[] = [];

    test("click the add button", () => {
        render(<TodoListForm setTodoList={setMockTodoList} />);
        const button: HTMLButtonElement = screen.getByRole("button");
        const inputField: HTMLInputElement = screen.getByRole("textbox");

        fireEvent.change(inputField, { target: { value: newTodo } });
        fireEvent.click(button);

        setMockTodoList(addedMockTodoList);
        expect(setMockTodoList).toHaveBeenCalledWith(addedMockTodoList);
    });

    test("added list, after click add button", () => {
        render(<TodoListItems setTodoList={setMockTodoList} todoList={addedMockTodoList} />);
        const listWrapper = screen.getByRole("main");
        const no = screen.getByTestId("no");
        const text = screen.getByTestId("text");

        expect(listWrapper).not.toHaveClass("hide");
        expect(no.textContent).toEqual("1.");
        expect(text.textContent).toEqual("new todo");
    });

    test("click the delete button", () => {
        render(<TodoListItems setTodoList={setMockTodoList} todoList={addedMockTodoList} />);
        const deletButton = screen.getByTestId("delete");

        fireEvent.click(deletButton);

        setMockTodoList([]);
        expect(setMockTodoList).toHaveBeenCalledWith(deletedMockTodoList);
    });

    test("deleted list, after click delte button", () => {
        render(<TodoListItems setTodoList={setMockTodoList} todoList={deletedMockTodoList} />);

        const listWrapper1 = screen.getByRole("main");

        expect(listWrapper1).toHaveClass("hide");
    });
});
```

처음 "click the add button"테스트에서는 TodoListForm 테스트와 동일하게 값이 입력되고 버튼이 클릭된 여부를 먼저 확인했고, 두번째 테스트에서는 setMockTodoList에 업데이트 된 값을 addedMockTodoList변수에 따로 설정해두고 render할때 내려줘서 해당 값이 제대로 업데이트 됐는지 여부를 확인하였다.

세번째테스트는 버튼을 삭제할때 setMockTodoList의 값을 하나 지워주었다. 초기 값이 addedMockTodoList에는 하나의 객체가 있었으니 지워주면 빈 배열이 되는 것이다. 네번째 테스트에서는 deleteMockTodoList를 props로 내려주었고, 리스트가 없을 경우 클래스 네임이 hide가 있는지 여부를 확인했다.

## Review

---

처음 TDD를 적용한 프로젝트였는데 생각보다 조금은 어려웠던거 같고 아직 테스트 코드를 어떻게 짜야하는지도 아직은 감이 안오는거 같다. 그리고 이렇게 블로그를 쓰면서 한번 더 코드를 돌아보고 잘못된 부분이나 수정할 부분을 살펴보는게 좋았던거 같다. todo list말고 정말 대형 프로젝트에서는 테스트 코드 짜는데 시간이 정말 많이 걸릴꺼 같다는 생각을 다시 한번 느낀다. 테스트코드에 대해서 아직 미숙한게 많을텐데 혹시 수정사항이나 충고할게 있으면 댓글 남겨주면 고마울꺼 같다..
