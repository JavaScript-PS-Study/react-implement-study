import DeleteTodo from '@/components/core/buttons/deletetodo/DeleteTodo';
import { useDeleteTodo } from '@/hooks/quries/todo';
import React from 'react';

interface SingleTodoProps {
  id: number;
  content: string;
}
const SingleTodo = ({ id, content }: SingleTodoProps) => {
  const { mutate: deleteMutate } = useDeleteTodo(id);
  return (
    <li key={id}>
      {content}
      <DeleteTodo text="완료" _onClick={deleteMutate} />
    </li>
  );
};

export default SingleTodo;
