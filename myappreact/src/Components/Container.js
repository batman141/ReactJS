import FlexComp from "./FlexComp";
import React, { useState } from "react";
import "./Container.css";

function Container() {
  const [bgColor, setBgColor] = useState("#fff");
  let bgColorHandler = () => {
    setBgColor(
      "rgb(" +
        [
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256),
          Math.floor(Math.random() * 256),
        ].join(",") +
        ")"
    );
  };

  const data = [
    { id: 1, name: "Multi-Page Responsive Website" },
    { id: 2, name: "Existing Website Template" },
    { id: 3, name: "Small Javascript Game" },
    { id: 4, name: "Small Website" },
  ];

  const listItems = data.map((d) => <FlexComp id={d.id} message={d.name} />);

  return (
    <div
      className="element"
      onClick={bgColorHandler}
      style={{ backgroundColor: bgColor }}
    >
      {listItems}
    </div>
  );
}

export default Container;
