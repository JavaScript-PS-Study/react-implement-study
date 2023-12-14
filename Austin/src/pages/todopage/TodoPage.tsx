import { todoApi } from '@/apis/todo';
import { EmptyList } from '@/components/widget/emptylist';
import { List } from '@/components/widget/list';
import { useGetTodos, usePostTodo } from '@/hooks/quries/todo';
import React, { useEffect } from 'react';

import * as Styles from './TodoPage.styled';
import DeleteAllTodo from '@/components/core/buttons/deletetodo/DeleteTodo';

const TodoPage = () => {
  const { data: todoList = null, isLoading, isError } = useGetTodos();
  const { mutate: todoPostMutate } = usePostTodo();

  const loginSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const todoContent = formData.get('todo') as string;
    todoPostMutate(todoContent);
  };

  console.log(todoList);

  if (todoList === null || !todoList.length) {
    return <EmptyList />;
  }
  return (
    <Styles.TodoPageWrapper>
      {todoList.length && (
        <>
          <List todoList={todoList} />
        </>
      )}

      <div>
        <form onSubmit={loginSubmitHandler}>
          <label>
            TODO:
            <input type="text" name="todo" />
          </label>
          <button type="submit" value="Submit">
            submit
          </button>
        </form>
      </div>
    </Styles.TodoPageWrapper>
  );
};

export default TodoPage;
