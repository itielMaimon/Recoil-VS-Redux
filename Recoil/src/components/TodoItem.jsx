import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoItemIds, todoItemFamily } from "../atoms";

const TodoItem = ({ id }) => {
  // local state
  const [inputText, setInputText] = useState("");
  // recoil state read-write
  const [todoList, setTodoList] = useRecoilState([todoItemIds]);
  const [todoItem, setTodoItem] = useRecoilState(todoItemFamily(id)); //useRecoilState(itemWithId(id)); - before atom family

  const deleteTodoItem = () => {
    const newTodoList = todoList.filter((itemID) => itemID !== id);
    setTodoList(newTodoList);
  };

  const updateTodoItem = () => {
    setTodoItem(inputText);
    setInputText("");
  };

  const handleTitleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <li>
      <span>{todoItem}</span>
      <input type="text" value={inputText} onChange={handleTitleChange} />
      <button onClick={updateTodoItem}> Update </button>
      <button onClick={deleteTodoItem}> Delete </button>
    </li>
  );
};

export default TodoItem;
