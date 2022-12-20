import logo from "./logo1.svg";
import "./FlexComp.css";
import { useState } from "react";

function FlexComp(props) {
  const [value, setValue] = useState(100);
  const [divValue, setDivValue] = useState({
    yellowValue: props.id,
    blueValue: props.message,
  });

  const yellowHandler = () => {
    const newColor = Math.floor(Math.random() * 101);
    props.colorsChangeHandler(newColor >= 50 ? "green" : "red");
    setDivValue((prev) => {
      return { ...prev, yellowValue: newColor };
    });
  };

  const blueHandler = () => {
    setDivValue((prev) => {
      return { ...prev, blueValue: Math.floor(Math.random() * 100) };
    });
  };
  return (
    <div
      className="container"
      onClick={() => {
        setValue(200);
        console.log("i am clicked");
      }}
    >
      <div className="num" onClick={yellowHandler}>
        {divValue.yellowValue}
      </div>
      <div className="container2" onClick={blueHandler}>
        <div className="desc">{divValue.blueValue}</div>
        <img src={logo} className="icon" alt="logo" />
      </div>
    </div>
  );
}
export default FlexComp;
