export default function TaskInput() {
  return (
    <div className="taskInputBox">
      <div className="inputImg">
        <img src="/images/Circle_-_black_simple.svg" />
      </div>
      <form className="form">
        <input
          type="text"
          placeholder="Create a new todo..."
          className="newTask"
        />
      </form>
    </div>
  );
}
