import { useState } from "react";
import { Link } from "react-router-dom";
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

function Header() {
  const [window, setWindow] = useState(false);

  return (
    <>
      <GlobalStyle />
      <SHeader>
        <SContainer>
          <SHeader__block>
            <SHeader__logo>
              <SShow>
                <SLight>
                  <Link to="/" target="_self">
                    <img src="../images/logo.png" alt="logo" />
                  </Link>
                </SLight>
              </SShow>
            </SHeader__logo>
            <SHeader__logo>
              <SDark>
                <Link to="/" target="_self">
                  <img src="../images/logo_dark.png" alt="logo" />
                </Link>
              </SDark>
            </SHeader__logo>
            <SHeader__nav>
              <Link to="/card/add">
                <SHeader__btnMainNew as="button" id="btnMainNew">
                  Создать новую задачу
                </SHeader__btnMainNew>
              </Link>
              {window === false ? (
                <SHeader__user
                  onClick={() => {
                    setWindow(true);
                  }}
                >
                  Ivan Ivanov
                </SHeader__user>
              ) : (
                <SHeader__user
                  onClick={() => {
                    setWindow(false);
                  }}
                >
                  Ivan Ivanov
                </SHeader__user>
              )}
              <SHeader__popUserSet $type={window} id="user-set-target" data->
                <SPopUserSet>
                  {/* <a href="">x</a> */}
                  <SPopUserSet__name>Ivan Ivanov</SPopUserSet__name>
                  <SPopUserSet__mail>ivan.ivanov@gmail.com</SPopUserSet__mail>
                  <SPopUserSet__theme>
                    <p>Темная тема</p>
                    <SCheckbox type="checkbox" name="checkbox" />
                  </SPopUserSet__theme>
                  <Link to="/exit">
                    <S_hover03 as="button" type="button">
                      Выйти
                    </S_hover03>
                  </Link>
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
