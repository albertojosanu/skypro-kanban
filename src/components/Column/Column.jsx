import { useContext } from "react";
import Card from "../Card/Card.jsx";
import { GlobalStyle } from "../../index.styled.js";
import { SMain__column, SColumn__title, SCards } from "./Column.styled.js";
import { TaskContext } from "../../context/TaskContext.js";
import { cardList } from "../../../data.js";

function Column({ children }) {
  const { tasks, loading } = useContext(TaskContext);
  const cards = tasks.filter((data) => data.status === children);
  const example = cardList.filter((data) => data.status === children);
  
  return (
    <>
      <GlobalStyle />
      <SMain__column>
        <SColumn__title>
          <p>{children}</p>
        </SColumn__title>
        <SCards>
          {loading ? (
          example.map((data) => (
            <Card cards={example} id={data._id} key={data.id} />
          ))) : (cards.map((data) => (
            <Card cards={cards} id={data._id} key={data._id} />
          )))
        }
        </SCards>
      </SMain__column>
    </>
  );
}

export default Column;
