import { useState } from "react";

export default function TaskInput(props) {
  const [newTask, setNewTask] = useState("");

  return (
    <div className="taskInputBox">
      <div className="inputImg">
        <button
          className="addTask"
          onClick={() => {
            newTask != "" && props.addTask(newTask);
            setNewTask("");
          }}
        >
          <span>+</span>
        </button>
      </div>
      <form className="form">
        <input
          type="text"
          placeholder="Create a new todo..."
          className="newTask"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
      </form>
    </div>
  );
}
