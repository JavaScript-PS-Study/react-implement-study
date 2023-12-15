import React, { useState } from "react";
import Button from "../Button";

interface TodoFormProps {
  onAddTodo: (newTodo: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      onAddTodo(newTodo.trim());
      setNewTodo("");
    }
  };

  return (
    <div className="mb-4 flex">
      <input
        type="text"
        placeholder="새로운 할 일을 입력하세요."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button className="ml-2" onClick={handleAddTodo}>
        추가
      </Button>
    </div>
  );
};

export default TodoForm;
