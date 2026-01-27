import { useContext } from "react";
import Card from "../Card/Card.jsx";
import { GlobalStyle } from "../../index.styled.js";
import { SMain__column, SColumn__title, SCards } from "./Column.styled.js";
import { TaskContext } from "../../context/TaskContext.js";

function Column({ children }) {
  const { tasks } = useContext(TaskContext);
  const cards = tasks.filter((data) => data.status === children);
  return (
    <>
      <GlobalStyle />
      <SMain__column>
        <SColumn__title>
          <p>{children}</p>
        </SColumn__title>
        <SCards>
          {cards.map((data) => (
            <Card cards={cards} id={data._id} key={data._id} />
          ))}
        </SCards>
      </SMain__column>
    </>
  );
}

export default Column;
