import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../actions";

const TodoItem = ({ id, title }) => {
  // local state
  const [todoTitleValue, setTodoTitleValue] = useState("");
  const dispatch = useDispatch();

  const deleteTodoItem = () => {
    dispatch(removeTodo(id));
  };

  const updateTodoItem = () => {
    dispatch(updateTodo(id, todoTitleValue));
    setTodoTitleValue("");
  };

  const handleTitleChange = (event) => {
    setTodoTitleValue(event.target.value);
  };

  return (
    <li>
      <span>{title}</span>
      <input type="text" value={todoTitleValue} onChange={handleTitleChange} />
      <button onClick={updateTodoItem}> Update </button>
      <button onClick={deleteTodoItem}> Delete </button>
    </li>
  );
};

export default TodoItem;
