import TodoList from "./components/TodoList";
import AddItemInput from "./components/AddItemInput";
import TodosCount from "./components/TodosCount";
import RecentPanel from "./components/RecentPanel";
import "./styles.scss";

const App = () => (
  <>
    <h3>TodoApp</h3>
    <small>Stack: ReactJS &amp; RecoilJS.</small>
    <TodosCount />
    <AddItemInput />
    <TodoList />
    <RecentPanel />
  </>
);

export default App;
