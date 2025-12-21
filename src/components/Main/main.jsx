import { useState, useEffect } from "react";
import Column from "../Column/Column.jsx";
import { GlobalStyle } from "../../App.jsx";
import { SLoad, SMain, SMain__block, SMain__content } from "./Main.styled.js";
import { SContainer } from "../../index.styled.js";

function Main() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
