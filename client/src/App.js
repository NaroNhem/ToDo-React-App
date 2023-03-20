import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import { useState } from "react";

function App() {
  const [todos, setToDos] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: 1,
      title: taskName,
      isComplete: false,
    };
    const updatedTodos = [...todos];
    updatedTodos.push(newTask);
    setToDos(updatedTodos);
  };
  return (
    <div className="App">
      <h1 className="Title">T O D O</h1>
      <TaskInput todos={todos} addTask={addTask} />
      <TaskList todos={todos} />
    </div>
  );
}
export default App;
