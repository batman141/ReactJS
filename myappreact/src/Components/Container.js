import FlexComp from "./FlexComp";
import "./Container.css";
import { useState } from "react";

function Container() {
  const [backgroundClr, setBackgroundColor] = useState("white");
  const colorChangeHandler = (color) => {
    setBackgroundColor(
      color
      // "rgb(" +
      //   [
      //     Math.floor(Math.random() * 256),
      //     Math.floor(Math.random() * 256),
      //     Math.floor(Math.random() * 256),
      //   ].join(",") +
      //   ")"
    );
  };
  const data = [
    { id: 1, name: "Multi-Page Responsive Website" },
    { id: 2, name: "Existing Website Template" },
    { id: 3, name: "Small Javascript Game" },
    { id: 4, name: "Small Website" },
  ];

  const listItems = data.map((d) => (
    <FlexComp
      id={d.id}
      message={d.name}
      colorsChangeHandler={colorChangeHandler}
    />
  ));

  return (
    <div className="element" style={{ backgroundColor: backgroundClr }}>
      {listItems}
    </div>
  );
}

export default Container;
