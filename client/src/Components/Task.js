export default function Task(props) {
  const { title, isComplete, id } = props.task;
  const { index, markComplete } = props;
  return (
    <div>
      {isComplete === true ? (
        <li className="lineThrough">
          <div className="imgContainer">
            <img src="images/icon-check.svg" alt="checkMark"></img>
          </div>
          <p className="opac">{title}</p>
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
          {title}
        </li>
      )}
    </div>
  );
}
