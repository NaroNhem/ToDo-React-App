export default function Task(props) {
  const { title, isComplete, id } = props.task;
  const { index, markComplete, removeTask } = props;
  return (
    <div>
      {isComplete === true ? (
        <li className="lineThrough">
          <div className="imgContainer">
            <img src="images/icon-check.svg" alt="checkMark"></img>
          </div>
          <p className="opac">{title}</p>
          <div className="crossContainer">
            <button className="removeTask" onClick={() => removeTask(index)}>
              <img src="images/icon-cross.svg" alt="cross"></img>
            </button>
          </div>
        </li>
      ) : (
        <li>
          <div className="inputImg">
            <button
              className="markComplete"
              onClick={() => {
                markComplete(index);
              }}
            />
          </div>
          <p className="titleContainer">{title}</p>
          <div className="crossContainer">
            <button className="removeTask" onClick={() => removeTask(index)}>
              <img src="images/icon-cross.svg" alt="cross"></img>
            </button>
          </div>
        </li>
      )}
    </div>
  );
}
