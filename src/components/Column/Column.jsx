import "../../App.css";
import Card from "../Card/Card.jsx";
import cardList from "../../../data.js";

function Column({ children }) {
  const cards = cardList.filter((data) => data.status === children);
  return (
    <>
      <div className="main__column">
        <div className="column__title">
          <p>{children}</p>
        </div>
        <div className="cards">
          {cards.map((card) => (
            <Card id={card.id} key={card.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Column;
