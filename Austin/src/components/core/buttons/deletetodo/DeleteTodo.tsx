import React from 'react';

const DeleteTodo = ({ text, _onClick }: any) => {
  return <button onClick={_onClick}>{text}</button>;
};

export default DeleteTodo;
