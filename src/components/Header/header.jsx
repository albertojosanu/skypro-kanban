import "../../App.css";
import { useState } from "react";

function Header() {
  const [window, setWindow] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__block">
            <div className="header__logo _show _light">
              <a href="" target="_self">
                <img src="../images/logo.png" alt="logo" />
              </a>
            </div>
            <div className="header__logo _dark">
              <a href="" target="_self">
                <img src="../images/logo_dark.png" alt="logo" />
              </a>
            </div>
            <nav className="header__nav">
              <button className="header__btn-main-new _hover01" id="btnMainNew">
                <a href="#popNewCard">Создать новую задачу</a>
              </button>
              {window === false ? (
                // <a href="#user-set-target" onClick={() => setWindow(true)} className="header__user _hover02">
                <a href="#user-set-target" onClick={() => {document.querySelector(".header__pop-user-set").style.display = "block"; setWindow(true)}} className="header__user _hover02">
                  Ivan Ivanov
                </a>
              ) : (
                // <a href="#" onClick={() => setWindow(false)} className="header__user _hover02">
                <a href="#user-set-target" onClick={() => {document.querySelector(".header__pop-user-set").style.display = "none"; setWindow(false)}} className="header__user _hover02">
                  Ivan Ivanov
                </a>
              )}
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
                data-
              >
                {/* <a href="">x</a> */}
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
