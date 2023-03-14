export default function TaskInput() {
  return (
    <div className="taskInputBox">
      <img src="/images/Circle_-_black_simple.svg" />
      <form>
        <label>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="newTask"
          />
        </label>
      </form>
    </div>
  );
}
