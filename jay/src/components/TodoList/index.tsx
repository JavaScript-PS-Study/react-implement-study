// src/components/TodoList/index.tsx
import React from "react";
import TodoItem from "../TodoItem";
import { Todo } from "../../services/todo";

interface TodoListProps {
  todos: Todo[];
  onUpdateTodo: (id: number, updateTodo: Todo) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onUpdateTodo,
  onDeleteTodo,
}) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdateTodo={(updatedTodo: Todo) =>
            onUpdateTodo(todo.id, updatedTodo)
          }
          onDeleteTodo={() => onDeleteTodo(todo.id)}
        />
      ))}
    </>
  );
};

export default TodoList;
