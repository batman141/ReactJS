import logo from "./logo1.svg";
import "./FlexComp.css";

function FlexComp(props) {
  return (
    <div className="container">
      <div className="num">{props.id}</div>
      <div className="container2">
        <div className="desc">{props.message}</div>
        <img src={logo} className="icon" alt="logo" />
      </div>
    </div>
  );
}
export default FlexComp;
