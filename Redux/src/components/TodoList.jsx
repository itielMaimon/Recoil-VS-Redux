import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useSelector((state) => state.toDos);

  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </ul>
  );
};

export default TodoList;
