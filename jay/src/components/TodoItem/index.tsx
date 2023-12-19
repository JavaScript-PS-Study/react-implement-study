// src/components/TodoItem/index.tsx
import React, { useState } from "react";
import { Todo } from "../../services/todo";

interface TodoItemProps {
  todo: Todo;
  onUpdateTodo: (updatedTodo: Todo) => void;
  onDeleteTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onUpdateTodo,
  onDeleteTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const handleUpdateTodo = () => {
    onUpdateTodo(updatedTodo);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTodo.todo}
            onChange={(e) =>
              setUpdatedTodo({ ...updatedTodo, todo: e.target.value })
            }
          />
          <button onClick={handleUpdateTodo}>수정 완료</button>
          <button onClick={() => setIsEditing(false)}>취소</button>
        </div>
      ) : (
        <div>
          <span
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {todo.todo}
          </span>
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={onDeleteTodo}>삭제</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
