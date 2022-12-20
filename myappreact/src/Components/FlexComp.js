import logo from "./logo1.svg";
import "./FlexComp.css";
import React, { useState } from "react";

function FlexComp(props) {
  const [val, setVal] = useState(props.id);
  const [val2, setVal2] = useState(props.message);
  let clickHandler1 = () => {
    setVal2(400);
  };
  let clickHandler2 = () => {
    setVal(val + 1);
  };

  return (
    <div className="container">
      <div className="num" onClick={clickHandler1}>
        {val}
      </div>
      <div className="container2" onClick={clickHandler2}>
        <div className="desc">{val2}</div>
        <img src={logo} className="icon" alt="logo" />
      </div>
    </div>
  );
}
export default FlexComp;
