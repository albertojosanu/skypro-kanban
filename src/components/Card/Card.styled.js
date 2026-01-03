import styled from "styled-components";

const colors = {
  "Web Design": ["#ffe4c2", "#ff6d00"], //_orange
  Research: ["#b4fdd1", "#06b16e"], //green
  Copywriting: ["#e9d4ff", "#9a48f1"], //purple
  Unknown: ["#94a6be", "#ffffff"], //gray
};

export const SCards__item = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const SCards__card = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
`;

export const SCard = styled.div`
  width: 100%;
`;

export const SCard__group = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SCard__theme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $type }) => colors[$type][0]};
  color: ${({ $type }) => colors[$type][1]};
  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

// export const S_orange = styled.div`
//   background-color: #ffe4c2;
//   color: #ff6d00;
// `;

// export const S_green = styled.div`
//   background-color: #ffe4c2;
//   color: #ff6d00;
// `;

// export const S_purple = styled.div`
//   background-color: #ffe4c2;
//   color: #ff6d00;
// `;

export const SCard__btn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const SCard__content = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SCard__title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const SCard__date = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;
