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
//import { getTasks } from "../../services/api.js";

function Main({ loading, tasks, error, updateTasks }) {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

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
