import "../../App.css";
import { GlobalStyle } from "../../App.jsx";
import {
  SPopExit,
  SPopExit__container,
  SPopExit__block,
  SPopExit__ttl,
  SPopExit__form,
  SPopExit__formGroup,
  SPopExit__exitYes,
  SPopExit__exitNo,
} from "./PopUser.styled.js";
import { S_hover01, S_hover03 } from "../../index.styled.js";

function PopExit() {
  return (
    <>
      <GlobalStyle />
      <SPopExit id="popExit">
        <SPopExit__container>
          <SPopExit__block>
            <SPopExit__ttl>
              <h2>Выйти из аккаунта?</h2>
            </SPopExit__ttl>
            <SPopExit__form id="formExit" action="#">
              <SPopExit__formGroup>
                <SPopExit__exitYes id="exitYes">
                  <S_hover01>
                    <a href="modal/signin.html">Да, выйти</a>{" "}
                  </S_hover01>
                </SPopExit__exitYes>
                <SPopExit__exitNo id="exitNo">
                  <S_hover03>
                    <a href="main.html">Нет, остаться</a>{" "}
                  </S_hover03>
                </SPopExit__exitNo>
              </SPopExit__formGroup>
            </SPopExit__form>
          </SPopExit__block>
        </SPopExit__container>
      </SPopExit>
    </>
  );
}

export default PopExit;
