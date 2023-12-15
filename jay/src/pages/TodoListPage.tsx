import React, { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  deleteAllTodos,
} from "../services/api";
import TodoForm from "../components/TodoForm";
import Button from "../components/Button";

interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
}

const TodoListPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData: Todo[] = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error("할 일 목록을 불러오는 중 오류 발생:", error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (newTodo: string) => {
    try {
      const createdTodo: Todo = await createTodo(newTodo);
      setTodos((prevTodos) => [...prevTodos, createdTodo]);
    } catch (error) {
      console.error("할 일을 추가하는 중 오류 발생:", error);
    }
  };

  const updateTodoItem = async (id: number, updatedTodo: Todo) => {
    try {
      await updateTodo(id, updatedTodo.todo, updatedTodo.isCompleted);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, ...updatedTodo } : todo
        )
      );
    } catch (error) {
      console.error("할 일을 수정하는 중 오류 발생:", error);
    }
  };

  const deleteTodoItem = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("할 일을 삭제하는 중 오류 발생:", error);
    }
  };

  const deleteAllTodosHandler = async () => {
    try {
      await deleteAllTodos();
      setTodos([]);
    } catch (error) {
      console.error("모든 할 일을 삭제하는 중 오류 발생:", error);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto mt-8">
      <h1 className="mb-4 text-xl font-bold">To-Do List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onUpdateTodo={updateTodoItem}
        onDeleteTodo={deleteTodoItem}
      />
      <Button className="mt-4" onClick={deleteAllTodosHandler}>
        모든 할 일 삭제
      </Button>
      {/* <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={deleteAllTodosHandler}
      >
        모든 할 일 삭제
      </button> */}
    </div>
  );
};

export default TodoListPage;
