import cardList from "../../../data.js";
import Card from "../Card/Card.jsx";
import { GlobalStyle } from "../../App.jsx";
import { SMain__column, SColumn__title, SCards } from "./Column.styled.js";

function Column({ children }) {
  const cards = cardList.filter((data) => data.status === children);
  return (
    <>
      <GlobalStyle />
      <SMain__column>
        <SColumn__title>
          <p>{children}</p>
        </SColumn__title>
        <SCards>
          {cards.map((card) => (
            <Card id={card.id} key={card.id} />
          ))}
        </SCards>
      </SMain__column>
    </>
  );
}

export default Column;
