export default function Task(props) {
  return (
    <div>
      <li>
        <div className="inputImg">
          <img src="/images/Circle_-_black_simple.svg" />
        </div>
        {props.title}
      </li>
    </div>
  );
}
