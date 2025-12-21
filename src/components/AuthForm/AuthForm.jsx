import { Link } from "react-router-dom";
import {
  GlobalStyle,
  SWrapper,
  SContainer,
  SModal,
  SModal__block,
  SModal__ttl,
  SModal__formLogin,
  SModal__input,
  SModal__btnEnter,
  SModal__formGroup,
} from "./AuthForm.styled.js";

const AuthForm = ({ isSignUp }) => {
  return (
    <>
      <GlobalStyle />
      <SWrapper>
        <SContainer>
          <SModal>
            <SModal__block>
              <SModal__ttl>
                <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
              </SModal__ttl>
              <SModal__formLogin id="formLog" action="#">
                {isSignUp && (
                  <SModal__input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="Имя"
                    autoComplete="on"
                  />
                )}
                <SModal__input
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                  autoComplete="on"
                />
                <SModal__input
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                  autoComplete="on"
                />
                <SModal__btnEnter
                  as="button"
                  id="btnEnter"
                  onClick={() => {
                    !isSignUp && localStorage.setItem('auth', true);
                  }}
                >
                  {isSignUp ? (
                    <Link to="/login">Зарегистрироваться</Link>
                  ) : (
                    <Link to="/">Войти</Link>
                  )}
                </SModal__btnEnter>
                {!isSignUp ? (
                  <SModal__formGroup>
                    <p>Нужно зарегистрироваться?</p>
                    <Link to="/register">Регистрируйтесь здесь</Link>
                  </SModal__formGroup>
                ) : (
                  <SModal__formGroup>
                    <p>Уже есть аккаунт? </p>
                    <Link to="/login">Войдите здесь</Link>
                  </SModal__formGroup>
                )}
              </SModal__formLogin>
            </SModal__block>
          </SModal>
        </SContainer>
      </SWrapper>
    </>
  );
};

export default AuthForm;
