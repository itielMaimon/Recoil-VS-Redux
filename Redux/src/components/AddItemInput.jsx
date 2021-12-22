import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const AddItemInput = () => {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addTodo(todoValue));
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
