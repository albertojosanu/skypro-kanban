import { Link } from "react-router-dom";
import cardList from "../../../data.js";
import { GlobalStyle } from "../../App.jsx";
import { SCards__item, SCards__card, SCard, SCard__group, SCard__theme, SCard__btn, SCard__content, SCard__title, SCard__date } from "./Card.styled.js";

function Card({ id }) {
  const card = cardList.filter((data) => data.id === Number(id));
  return (
    <>
      <GlobalStyle />
      <SCards__item>
        <SCards__card>
          <SCard>
            <SCard__group>
              <SCard__theme $type={card[0].topic}>
                <p>{card[0].topic}</p>
              </SCard__theme>
              <Link to={"/card/" + id} target="_self">
                <SCard__btn>
                  <div></div>
                  <div></div>
                  <div></div>
                </SCard__btn>
              </Link>
            </SCard__group>
            <SCard__content>
              <a href="" target="_blank">
                <SCard__title>{card[0].title}</SCard__title>
              </a>
              <SCard__date>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1_415)">
                    <path
                      d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                      stroke="#94A6BE"
                      strokeWidth="0.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                      stroke="#94A6BE"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_415">
                      <rect width="13" height="13" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>{card[0].date}</p>
              </SCard__date>
            </SCard__content>
          </SCard>
        </SCards__card>
      </SCards__item>
    </>
  );
}

export default Card;
