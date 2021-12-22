import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../actions/types";

const toDosReducer = (state = [{ id: "1", title: "New Item" }], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Math.random().toString(),
          title: action.payload ? action.payload : "New Item",
        },
      ];
    case UPDATE_TODO:
      return state.map((obj) =>
        obj.id === action.payload.id
          ? { ...obj, title: action.payload.title }
          : obj
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default toDosReducer;
