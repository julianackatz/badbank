export default function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div id="Card" className={classes()} style={{ maxWidth: "30em" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="Card-title">{props.title}</h5>}
        {props.text && <p className="Card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="CreateStatus">{props.status}</div>}
      </div>
    </div>
  );
}