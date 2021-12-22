import { selector } from "recoil";
import { todoItemIds, todoItemFamily } from "../atoms";

// derived state
export const todoItemsCount = selector({
  key: "todoItemsCount",
  get: ({ get }) => {
    const todoList = get(todoItemIds);
    return todoList.length;
  },
});

export const firstTodoItem = selector({
  key: "firstTodoItem",
  get: ({ get }) => {
    const todoList = get(todoItemIds);
    return todoList[0];
  },
});

export const createNewTodoItem = selector({
  key: "createNewTodoItem",
  get: ({ get }) => {},
  set: ({ set, get }, title) => {
    const id = Math.random().toString();
    const todoItemIdsState = get(todoItemIds);
    set(todoItemIds, [...todoItemIdsState, id]);
    set(todoItemFamily(id), title ? title : "New Item");
  },
});
