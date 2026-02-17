import { useEffect, useContext } from "react";
import Column from "../Column/Column.jsx";
import {
  SMain,
  SMain__block,
  SMain__content,
  SMain__description,
} from "./Main.styled.js";
import { GlobalStyle, SContainer } from "../../index.styled.js";
import { TaskContext } from "../../context/TaskContext.js";

function Main() {
  const { error, updateTasks } = useContext(TaskContext);

  useEffect(() => {
    updateTasks();
  }, [updateTasks]);

  return (
    <>
      <GlobalStyle />
      <SMain>
        <SContainer>
          <SMain__description>{error}</SMain__description>
          <SMain__block>
            <SMain__content>
              <Column>Без статуса</Column>
              <Column>Нужно сделать</Column>
              <Column>В работе</Column>
              <Column>Тестирование</Column>
              <Column>Готово</Column>
            </SMain__content>
          </SMain__block>
        </SContainer>
      </SMain>
    </>
  );
}

export default Main;
