import { atom, atomFamily } from "recoil";
import { memoize } from "../utils";

// atom with an array of ids
export const todoItemIds = atom({
  key: "todoItemIds",
  default: ["1"],
});

// atom family pattern
export const todoItemFamily = atomFamily({
  key: "TodoItem",
  default: "New Item",
});

// not optimized for performance - Redux/Context classic way
// export const items = atom({
//   key: "items",
//   default: [{ id: 1, title: "New Item" }],
// });

// atom factory pattern
// export const itemWithId = memoize((id) =>
//   atom({
//     key: `item${id}`,
//     default: "New Item",
//   })
// );
