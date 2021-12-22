import { useRecoilValue } from "recoil";
import { todoItemIds } from "../atoms";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // recoil state read-only
  const todoList = useRecoilValue(todoItemIds);

  return (
    <ul>
      {todoList.map((id) => (
        <TodoItem key={id} id={id} />
      ))}
    </ul>
  );
};

export default TodoList;
