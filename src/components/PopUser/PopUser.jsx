import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../index.styled.js";
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
import { AuthContext } from "../../context/AuthContext.js";
import { TaskContext } from "../../context/TaskContext.js";

function PopExit() {
  const { logout } = useContext(AuthContext);
  const { setTasks } = useContext(TaskContext);
  const { setError } = useContext(TaskContext);

  const navigate = useNavigate();
  const handleQuit = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const handleStay = (e) => {
    e.preventDefault();
    navigate("/");
  };

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
                    logout();
                    setTasks([]);
                    setError("");
                    handleQuit;
                  }}
                >
                  Да, выйти
                </SPopExit__exitYes>
                <SPopExit__exitNo as="button" id="exitNo" onClick={handleStay}>
                  Нет, остаться
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
