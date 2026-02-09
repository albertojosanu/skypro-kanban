import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SHeader,
  SHeader__block,
  SHeader__logo,
  SShow,
  SLight,
  SDark,
  SHeader__nav,
  SHeader__btnMainNew,
  SHeader__user,
  SHeader__popUserSet,
  SPopUserSet,
  SPopUserSet__name,
  SPopUserSet__mail,
  SPopUserSet__theme,
  SCheckbox,
} from "./Header.styled.js";
import { GlobalStyle, SContainer, S_hover03 } from "../../index.styled.js";
import { AuthContext } from "../../context/AuthContext.js";
import { TaskContext } from "../../context/TaskContext.js";

function Header() {
  const { user } = useContext(AuthContext);
  const { setDate } = useContext(TaskContext);
  const [window, setWindow] = useState(false);

  const navigate = useNavigate();
  const handleNewTask = (e) => {
    e.preventDefault();
    setDate(new Date());
    navigate("/card/add");
  };
  const handleExit = (e) => {
    e.preventDefault();
    navigate("/exit");
  };

  return (
    <>
      <GlobalStyle />
      <SHeader>
        <SContainer>
          <SHeader__block>
            <SHeader__logo>
              <SShow>
                <SLight>
                  <Link to="/">
                    <img src="../images/logo.png" alt="logo" />
                  </Link>
                </SLight>
              </SShow>
            </SHeader__logo>
            <SHeader__logo>
              <SDark>
                <Link to="/">
                  <img src="../images/logo_dark.png" alt="logo" />
                </Link>
              </SDark>
            </SHeader__logo>
            <SHeader__nav>
              <SHeader__btnMainNew
                as="button"
                id="btnMainNew"
                onClick={handleNewTask}
              >
                Создать новую задачу
              </SHeader__btnMainNew>
              {window === false ? (
                <SHeader__user
                  onClick={() => {
                    setWindow(true);
                  }}
                >
                  {user?.name}
                </SHeader__user>
              ) : (
                <SHeader__user
                  onClick={() => {
                    setWindow(false);
                  }}
                >
                  {user?.name}
                </SHeader__user>
              )}
              <SHeader__popUserSet $type={window} id="user-set-target" data->
                <SPopUserSet>
                  {/* <a href="">x</a> */}
                  <SPopUserSet__name>{user?.name}</SPopUserSet__name>
                  <SPopUserSet__mail>{user?.login}</SPopUserSet__mail>
                  <SPopUserSet__theme>
                    <p>Темная тема</p>
                    <SCheckbox type="checkbox" name="checkbox" />
                  </SPopUserSet__theme>
                  <S_hover03 as="button" type="button" onClick={handleExit}>
                    Выйти
                  </S_hover03>
                </SPopUserSet>
              </SHeader__popUserSet>
            </SHeader__nav>
          </SHeader__block>
        </SContainer>
      </SHeader>
    </>
  );
}

export default Header;
