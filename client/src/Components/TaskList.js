import Task from "./Task";

export default function TaskList(props) {
  const taskItems = (todos) => {
    return todos.map((task, index) => {
      return (
        <Task
          task={task}
          key={index}
          index={index}
          markComplete={props.markComplete}
          removeTask={props.removeTask}
        />
      );
    });
  };

  const itemsLeft = (todos) => {
    let completed = 0;
    todos.forEach((element) => {
      if (element.isCompleted === false);
      completed += 1;
    });
    return completed;
  };

  return (
    <div className="taskList">
      <ul className="listContainer">{taskItems(props.todos)}</ul>
      <div className="taskData">
        <div className="itemsLeft">{itemsLeft(props.todos)} items left</div>
        <div className="btnContainer">
          <input type="button" value="All" className="status" />
          <button
            className="status"
            onClick={() => {
              props.statusActive(props.todos);
              console.log(props.todos);
            }}
          >
            Active
          </button>
          <button
            className="status"
            onClick={() => {
              props.statusCompleted(props.todos);
            }}
          >
            Completed
          </button>
        </div>
        <button
          className="clear"
          onClick={() => {
            props.clearCompleted(props.todos);
          }}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}
