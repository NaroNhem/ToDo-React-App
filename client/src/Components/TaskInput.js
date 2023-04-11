import { useState } from "react";

export default function TaskInput(props) {
  const [newTask, setNewTask] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    newTask != "" ? props.addTask(newTask) : alert("Please add a title");
    setNewTask("");
  };

  return (
    <div className='taskInputBox'>
      <button className='addTask' onClick={(e) => onSubmitHandler(e)}>
        <span>+</span>
      </button>
      <form className='form' onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type='text'
          placeholder='Create a new todo...'
          className='newTask'
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
      </form>
    </div>
  );
}
