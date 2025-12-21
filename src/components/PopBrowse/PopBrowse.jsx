import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import cardList from "../../../data.js";
import Calendar from "../Calendar/Calendar.jsx";
import { GlobalStyle } from "../../App.jsx";

function PopBrowse() {
  const { id } = useParams();
  const card = useMemo(
    () => cardList.find((data) => data.id === Number(id)),
    [id]
  );

  const colors = {
    "Web Design": ["#ffe4c2", "#ff6d00", "_orange"],
    Research: ["#b4fdd1", "#06b16e", "_green"],
    Copywriting: ["#e9d4ff", "#9a48f1", "_purple"],
    Unknown: ["#94a6be", "#ffffff", "_gray"],
  };

  return (
    <>
      <GlobalStyle />
      <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div className="pop-browse__content">
              <div className="pop-browse__top-block">
                <h3 className="pop-browse__ttl">{card.title}</h3>
                <div className={"categories__theme theme-top " + colors[card.topic][2] + " _active-category"}>
                  <p className={colors[card.topic][2]}>{card.topic}</p>
                </div>
              </div>
              <div className="pop-browse__status status">
                <p className="status__p subttl">{card.status}</p>
                <div className="status__themes">
                  <div className="status__theme _gray">
                    <p className="_gray">{card.status}</p>
                  </div>
                </div>
              </div>
              <div className="pop-browse__wrap">
                <form
                  className="pop-browse__form form-browse"
                  id="formBrowseCard"
                  action="#"
                >
                  <div className="form-browse__block">
                    <label htmlFor="textArea01" className="subttl">
                      Описание задачи
                    </label>
                    <textarea
                      className="form-browse__area"
                      name="text"
                      id="textArea01"
                      readOnly
                      placeholder="Введите описание задачи..."
                    ></textarea>
                  </div>
                </form>
                <div className="pop-new-card__calendar">
                  <Calendar />
                </div>
              </div>
              <div className="theme-down__categories theme-down">
                <p className="categories__p subttl">Категория</p>
                <div
                  className={
                    "categories__theme " +
                    colors[card.topic][2] +
                    " _active-category"
                  }
                >
                  <p className={colors[card.topic][2]}>{card.topic}</p>
                </div>
              </div>
              <div className="pop-browse__btn-browse ">
                <div className="btn-group">
                  <button className="btn-browse__edit _btn-bor _hover03">
                    <a href="#">Редактировать задачу</a>
                  </button>
                  <button className="btn-browse__delete _btn-bor _hover03">
                    <a href="#">Удалить задачу</a>
                  </button>
                </div>
                <button className="btn-browse__close _btn-bg _hover01">
                  <Link to="/">Закрыть</Link>
                </button>
              </div>
              <div className="pop-browse__btn-edit _hide">
                <div className="btn-group">
                  <button className="btn-edit__edit _btn-bg _hover01">
                    <a href="#">Сохранить</a>
                  </button>
                  <button className="btn-edit__edit _btn-bor _hover03">
                    <a href="#">Отменить</a>
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                  >
                    <a href="#">Удалить задачу</a>
                  </button>
                </div>
                <button className="btn-edit__close _btn-bg _hover01">
                  <Link to="/">Закрыть</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopBrowse;
