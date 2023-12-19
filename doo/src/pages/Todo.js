import React from "react";
import { useDispatch } from "react-redux";
// to-do 의 목록과 완료 여부
// todo 의 Create , Read, Update, Delete
export default function Todo() {
  const dispatch = useDispatch();

  const onChangeInputTodo = (e) => {};
  const onClickInputTodo = () => {};

  return (
    <>
      <input
        type="text"
        name="input_todo"
        id="input_todo"
        onChange={onChangeInputTodo}
      ></input>
      <button type="button" onClick={onClickInputTodo}>
        추가
      </button>
      <ul>
        <li>
          <input type="checkbox" name="todo1" id="todo1"></input>
          <label htmlFor="todo1">기본1</label>
          <button type="button">수정</button>
          <button type="button">삭제</button>
        </li>
        <li>
          <input type="checkbox" name="todo2" id="todo2"></input>
          <label htmlFor="todo2">기본2</label>
          <button type="button">수정</button>
          <button type="button">삭제</button>
        </li>
      </ul>
    </>
  );
}
