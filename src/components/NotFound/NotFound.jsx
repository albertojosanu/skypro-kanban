import { GlobalStyle } from "../../App.jsx";
import { SNotFound } from "./NotFound.styled.js";
import { SContainer } from "../../index.styled.js";

const NotFoundPage = () => {
  return (
    <>
      <GlobalStyle />
      <SContainer>
        <SNotFound>Страница не найдена</SNotFound>
      </SContainer>
    </>
  );
};

export default NotFoundPage;
