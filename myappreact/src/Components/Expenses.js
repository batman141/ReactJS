import "./Expenses.css";

function Card() {
  const newdate = new Date(2022, 11, 25);
  const newprice = 799.45;
  const newitem = "New TV";
  return (
    <div className="container">
      <div className="date">{newdate.toString()}</div>
      <div className="container--2">
        <h2>{newitem}</h2>
        <div className="price">${newprice}</div>
      </div>
    </div>
  );
}
export default Card;
