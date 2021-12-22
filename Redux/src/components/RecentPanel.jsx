import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const RecentPanel = () => {
  const todoList = useSelector((state) => state.toDos);

  return (
    <div className="active-item">
      <p>Recent Todos:</p>
      {todoList[0].id ? (
        <TodoItem id={todoList[0].id} title={todoList[0].title} />
      ) : (
        "No todos exist"
      )}
    </div>
  );
};

export default RecentPanel;
