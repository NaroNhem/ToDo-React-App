import Task from "./Task";

export default function TaskList(props) {
  const taskItems = (todos) => {
    return todos.map((element, index) => {
      return <Task title={element.title} key={index} />;
    });
  };

  return (
    <div className="taskList">
      <ul className="listContainer">{taskItems(props.todos)}</ul>
      <div className="taskData">
        <div>{props.todos.length} items left</div>
        <div>
          <input type="button" value="All" className="status" />
          <input type="button" value="Active" className="status" />
          <input type="button" value="Completed" className="status" />
        </div>
        <div>Clear Completed</div>
      </div>
    </div>
  );
}
