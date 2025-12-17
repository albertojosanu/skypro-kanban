import "../../App.css";
import { useState } from "react";
import { GlobalStyle } from "../../App.jsx";
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
import { SContainer, S_hover01, S_hover03 } from "../../index.styled.js";

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
                  <a href="" target="_self">
                    <img src="../images/logo.png" alt="logo" />
                  </a>
                </SLight>
              </SShow>
            </SHeader__logo>
            <SHeader__logo>
              <SDark>
                <a href="" target="_self">
                  <img src="../images/logo_dark.png" alt="logo" />
                </a>
              </SDark>
            </SHeader__logo>
            <SHeader__nav>
              <SHeader__btnMainNew as="button" id="btnMainNew">
                  <a href="#popNewCard">Создать новую задачу</a>
              </SHeader__btnMainNew>
              {window === false ? (
                <SHeader__user
                  href="#user-set-target"
                  onClick={() => {
                    setWindow(true);
                  }}
                >
                  Ivan Ivanov
                </SHeader__user>
              ) : (
                <SHeader__user
                  href="#user-set-target"
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
                  <S_hover03 as="button" type="button">
                    <a href="#popExit">Выйти</a>
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
