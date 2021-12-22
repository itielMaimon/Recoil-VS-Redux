import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "./types";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

export const updateTodo = (id, title) => {
  return {
    type: UPDATE_TODO,
    payload: { id, title },
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};
