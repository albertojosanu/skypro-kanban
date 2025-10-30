import "../../App.css";
import Card from "../Card/cards__item.jsx";

function Column() {
  return (
    <>
      <div className="main__column">
        <div className="column__title">
          <p>Без статуса</p>
        </div>
        <div className="cards">
          <Card />
        </div>
      </div>
    </>
  );
}

export default Column;
