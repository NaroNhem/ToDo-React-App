import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import { useState, useEffect } from "react";

function App() {
  const [todos, setToDos] = useState([]);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
    const filteredTodos = [...todoList].filter((element) => {
      return element.isComplete;
    });
    setToDos(filteredTodos);
  };

  const statusActive = (todoList) => {
    const filteredTodos = [...todoList].filter((element) => {
      return element.isComplete != true ? element : false;
    });
    setToDos(filteredTodos);
  };

  const toggleCompletion = (index) => {
    const filteredTodos = [...todos];
    let todo = filteredTodos[index];
    todo.isComplete ? (todo.isComplete = false) : (todo.isComplete = true);
    console.log(todo);
    setToDos(filteredTodos);
  };

  const removeTask = (index) => {
    const filteredTodos = [...todos];
    filteredTodos.splice(index, 1);
    setToDos(filteredTodos);
  };

  const clearCompleted = (todoList) => {
    const filteredTodos = [...todoList].filter((task) => {
      return task.isComplete !== true;
    });
    setToDos(filteredTodos);
  };

  return (
    <div className={`App`} data-theme={theme}>
      <header>
        <h1 className='Title'>T O D O</h1>
        <button className='darkMode' onClick={toggleTheme}>
          {theme === "light" ? (
            <img className='moon' src='images/icon-moon.svg' />
          ) : (
            <img className='moon' src='images/icon-sun.svg' />
          )}
        </button>
      </header>
      <TaskInput todos={todos} addTask={addTask} />
      <TaskList
        todos={todos}
        statusCompleted={statusCompleted}
        statusActive={statusActive}
        toggleCompletion={toggleCompletion}
        clearCompleted={clearCompleted}
        removeTask={removeTask}
      />
    </div>
  );
}
export default App;
