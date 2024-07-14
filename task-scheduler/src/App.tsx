import TodoList from "./Components/TodoList/TodoList";
import Scheduler from "./Components/Scheduler/Scheduler";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="todo-list-container">
        <TodoList />
      </div>
      <div className="scheduler-container">
        <Scheduler />
      </div>
    </div>
  );
};

export default App;
