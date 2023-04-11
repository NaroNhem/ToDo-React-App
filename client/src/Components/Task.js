export default function Task(props) {
  const { title, isComplete, id } = props.task;
  const { index, toggleCompletion, removeTask } = props;
  return (
    <>
      <li className={isComplete && "lineThrough"}>
        <div className='imgContainer'>
          {isComplete ? (
            <img
              style={{ cursor: "pointer" }}
              src='images/icon-check.svg'
              alt='checkMark'
              onClick={() => toggleCompletion(index)}
            />
          ) : (
            <button
              className='markComplete'
              onClick={() => toggleCompletion(index)}
            ></button>
          )}
        </div>
        <p className='opac'>{title}</p>
        <div className='crossContainer'>
          <button className='removeTask' onClick={() => removeTask(index)}>
            <img src='images/icon-cross.svg' alt='cross' />
          </button>
        </div>
      </li>
    </>
  );
}
