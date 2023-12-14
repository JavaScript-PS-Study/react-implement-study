import SingleTodo from '../singletodo/SingleTodo';

interface ListProps {
  // tuple
  todoList: [Array<{ id: number; todo: string; isCompleted: boolean }>, number];
}
const List = ({ todoList }: ListProps) => {
  return (
    <ul>
      {todoList[0].map((todo) => {
        return <SingleTodo id={todo.id} content={todo.todo} />;
      })}
    </ul>
  );
};

export default List;
