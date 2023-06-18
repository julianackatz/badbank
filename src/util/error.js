export default function Error(props) {
  return (
    <div
      style={{ textAlign: "center" }}
      className="alert alert-danger"
      role="alert"
    >
      {props.message}
    </div>
  );
}