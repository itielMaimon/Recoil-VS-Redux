import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { createNewTodoItem } from "../selectors";

const AddItemInput = () => {
  const [todoValue, setTodoValue] = useState("");
  const setCreateNewItem = useSetRecoilState(createNewTodoItem);

  const addItem = () => {
    setCreateNewItem(todoValue);
    setTodoValue("");
  };

  const handleTodoValue = (event) => {
    setTodoValue(event.target.value);
  };

  return (
    <form>
      <input type="text" value={todoValue} onChange={handleTodoValue} />
      <button type="button" onClick={addItem}>
        Add
      </button>
    </form>
  );
};

export default AddItemInput;
