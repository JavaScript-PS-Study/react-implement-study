import { TodoType } from '@/types/todo';
import SingleTodo from '../singletodo/SingleTodo';

interface ListProps {
  todoList: TodoType;
}
const List = ({ todoList }: ListProps) => {
  return (
    <ul>
      {todoList[0].map((todo) => {
        return <SingleTodo key={todo.id} id={todo.id} content={todo.todo} />;
      })}
    </ul>
  );
};

export default List;
