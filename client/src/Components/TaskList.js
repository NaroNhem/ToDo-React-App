import Task from "./Task";

export default function TaskList(props) {
  const taskItems = (todos) => {
    return todos.map((task, index) => {
      return (
        <Task
          task={task}
          key={index}
          index={index}
          toggleCompletion={props.toggleCompletion}
          removeTask={props.removeTask}
        />
      );
    });
  };

  const itemsLeft = (todos) => {
    return todos.reduce((acc, todo) => {
      return !todo.isComplete ? acc + 1 : acc + 0;
    }, 0);
  };

  return (
    <div className='taskList'>
      <ul className='listContainer'>{taskItems(props.todos)}</ul>
      <div className='taskData'>
        <div className='itemsLeft'>{itemsLeft(props.todos)} items left</div>
        <div className='btnContainer'>
          <input type='button' value='All' className='status' />
          <button
            className='status'
            onClick={() => {
              props.statusActive(props.todos);
            }}
          >
            Active
          </button>
          <button
            className='status'
            onClick={() => {
              props.statusCompleted(props.todos);
            }}
          >
            Completed
          </button>
        </div>
        <button
          className='clear'
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
