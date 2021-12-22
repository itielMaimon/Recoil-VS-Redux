import { useRecoilValue } from "recoil";
import { todoItemsCount } from "../selectors";

const TodosCount = () => {
  const count = useRecoilValue(todoItemsCount);

  return <p>Todos count: {count}</p>;
};

export default TodosCount;
