import { Link } from "react-router-dom";
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
                <SPopExit__exitYes
                  as="button"
                  id="exitYes"
                  onClick={() => {
                    localStorage.setItem("auth", false);
                  }}
                >
                  <Link to="/login">Да, выйти</Link>{" "}
                </SPopExit__exitYes>
                <SPopExit__exitNo as="button" id="exitNo">
                  <Link to="/">Нет, остаться</Link>{" "}
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
