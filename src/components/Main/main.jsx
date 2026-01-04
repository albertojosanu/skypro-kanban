import { useEffect } from "react";
import Column from "../Column/Column.jsx";
import { GlobalStyle } from "../../App.jsx";
import {
  SLoad,
  SMain,
  SMain__block,
  SMain__content,
  SMain__description,
} from "./Main.styled.js";
import { SContainer } from "../../index.styled.js";

function Main({ loading, tasks, error, updateTasks }) {
  useEffect(() => {
    updateTasks();
  }, [updateTasks]);

  return loading ? (
    <>
      <GlobalStyle />
      <SLoad>Загрузка...</SLoad>
    </>
  ) : (
    <>
      <GlobalStyle />
      <SMain>
        <SContainer>
          <SMain__description>{error}</SMain__description>
          <SMain__block>
            <SMain__content>
              <Column tasks={tasks} error={error}>
                Без статуса
              </Column>
              <Column tasks={tasks} error={error}>
                Нужно сделать
              </Column>
              <Column tasks={tasks} error={error}>
                В работе
              </Column>
              <Column tasks={tasks} error={error}>
                Тестирование
              </Column>
              <Column tasks={tasks} error={error}>
                Готово
              </Column>
            </SMain__content>
          </SMain__block>
        </SContainer>
      </SMain>
    </>
  );
}

export default Main;
