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

  const statusCompleted = (todoList) => {
    console.log(todoList);
    const filteredTodos = [...todoList].filter((element) => {
      console.log(element);
      return element.isComplete;
    });
    console.log(filteredTodos);
    setToDos(filteredTodos);
  };

  const statusActive = (todoList) => {
    const filteredTodos = [...todoList].filter((element) => {
      return element.isComplete != true ? element : false;
    });
    setToDos(filteredTodos);
  };

  const markComplete = (index) => {
    const filteredTodos = [...todos];
    let todo = filteredTodos[index];
    todo.isComplete = true;
    setToDos(filteredTodos);
  };

  return (
    <div className="App">
      <h1 className="Title">T O D O</h1>
      <TaskInput todos={todos} addTask={addTask} />
      <TaskList
        todos={todos}
        statusCompleted={statusCompleted}
        statusActive={statusActive}
        markComplete={markComplete}
      />
    </div>
  );
}
export default App;
