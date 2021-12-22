import { useSelector } from "react-redux";

const TodosCount = () => {
  const todoList = useSelector((state) => state.toDos);

  return <p>Todos count: {todoList.length}</p>;
};

export default TodosCount;
