import { useRecoilValue } from "recoil";
import { firstTodoItem } from "../selectors";
import TodoItem from "./TodoItem";

const RecentPanel = () => {
  const id = useRecoilValue(firstTodoItem);
  return (
    <div className="active-item">
      <p>Recent Todos:</p>
      {id ? <TodoItem id={id} /> : "No todos exist"}
    </div>
  );
};

export default RecentPanel;
