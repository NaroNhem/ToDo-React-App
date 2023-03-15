export default function TaskList() {
  return (
    <div className="taskList">
      <ul className="listContainer">
        <li>
          <div className="inputImg">
            <img src="/images/Circle_-_black_simple.svg" />
          </div>
          Create a new todo
        </li>
        <li>
          <div className="inputImg">
            <img src="/images/Circle_-_black_simple.svg" />
          </div>
          Create a new todo
        </li>
        <li>
          <div className="inputImg">
            <img src="/images/Circle_-_black_simple.svg" />
          </div>
          Create a new todo
        </li>
      </ul>
      <div className="taskData">
        <div>1 items left</div>
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
