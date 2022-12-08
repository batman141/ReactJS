import FlexComp from "./FlexComp";
import "./Container.css";

function Container() {
  const data = [
    { id: 1, name: "Multi-Page Responsive Website" },
    { id: 2, name: "Existing Website Template" },
    { id: 3, name: "Small Javascript Game" },
    { id: 4, name: "Small Website" },
  ];

  const listItems = data.map((d) => <FlexComp id={d.id} message={d.name} />);

  return <div className="element">{listItems}</div>;
}

export default Container;
