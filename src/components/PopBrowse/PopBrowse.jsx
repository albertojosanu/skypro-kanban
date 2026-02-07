import { useMemo, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar.jsx";
import { GlobalStyle } from "../../index.styled.js";
import { TaskContext } from "../../context/TaskContext.js";
import { colors } from "../../App.jsx";

function PopBrowse() {
  const { tasks } = useContext(TaskContext);
  const { updateTask } = useContext(TaskContext);
  const { removeTask } = useContext(TaskContext);
  const { id } = useParams();
  const card = useMemo(() => tasks.find((data) => data._id === id), [id]);
  const [mode, setMode] = useState("browse");
  const [status, setStatus] = useState(card?.status);
  let description = card?.description;
  const { date } = useContext(TaskContext);
  const { setDate } = useContext(TaskContext);

  const navigate = useNavigate();
  const handleClose = (e) => {
    e.preventDefault();
    setDate(null);
    navigate("/");
  };

  return (
    <>
      <GlobalStyle />
      <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
          <div className="pop-browse__block">
            <div className="pop-browse__content">
              <div className="pop-browse__top-block">
                <h3 className="pop-browse__ttl">
                  {card?.title + " (id: " + card?._id + ")"}
                </h3>
                <div
                  className={
                    "categories__theme theme-top " +
                    colors[card?.topic]?.[2] +
                    " _active-category"
                  }
                >
                  <p className={colors[card?.topic]?.[2]}>{card?.topic}</p>
                </div>
              </div>
              <div className="pop-browse__status status">
                <p className="status__p subttl">Статус</p>
                <div className="status__themes">
                  <div
                    className={`status__theme ${mode === "browse" ? (status !== "Без статуса" ? " _hide" : " _gray") : status === "Без статуса" && " _gray"}`}
                    onClick={() => setStatus("Без статуса")}
                  >
                    <p
                      className={status === "Без статуса" ? "_gray" : undefined}
                    >
                      Без статуса
                    </p>
                  </div>
                  <div
                    className={`status__theme ${mode === "browse" ? (status !== "Нужно сделать" ? " _hide" : " _gray") : status === "Нужно сделать" && " _gray"}`}
                    onClick={() => setStatus("Нужно сделать")}
                  >
                    <p
                      className={
                        status === "Нужно сделать" ? "_gray" : undefined
                      }
                    >
                      Нужно сделать
                    </p>
                  </div>
                  <div
                    className={`status__theme ${mode === "browse" ? (status !== "В работе" ? " _hide" : " _gray") : status === "В работе" && " _gray"}`}
                    onClick={() => setStatus("В работе")}
                  >
                    <p className={status === "В работе" ? "_gray" : undefined}>
                      В работе
                    </p>
                  </div>
                  <div
                    className={`status__theme ${mode === "browse" ? (status !== "Тестирование" ? " _hide" : " _gray") : status === "Тестирование" && " _gray"}`}
                    onClick={() => setStatus("Тестирование")}
                  >
                    <p
                      className={
                        status === "Тестирование" ? "_gray" : undefined
                      }
                    >
                      Тестирование
                    </p>
                  </div>
                  <div
                    className={`status__theme ${mode === "browse" ? (status !== "Готово" ? " _hide" : " _gray") : status === "Готово" && " _gray"}`}
                    onClick={() => setStatus("Готово")}
                  >
                    <p className={status === "Готово" ? "_gray" : undefined}>
                      Готово
                    </p>
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
                    {mode === "browse" ? (
                      <textarea
                        className="form-browse__area"
                        name="text"
                        id="textArea01"
                        readOnly
                        placeholder="Введите описание задачи..."
                        value={card?.description}
                      ></textarea>
                    ) : (
                      <textarea
                        className="form-new__area"
                        name="text"
                        id="textArea01"
                        placeholder="Введите описание задачи..."
                        onChange={(e) => {
                          description = e.target.value;
                        }}
                      ></textarea>
                    )}
                  </div>
                </form>
                <div className="pop-new-card__calendar">
                  <Calendar mode={mode} />
                </div>
              </div>
              <div className="theme-down__categories theme-down">
                <p className="categories__p subttl">Категория</p>
                <div
                  className={
                    "categories__theme " +
                    colors[card?.topic]?.[2] +
                    " _active-category"
                  }
                >
                  <p className={colors[card?.topic]?.[2]}>{card?.topic}</p>
                </div>
              </div>
              <div
                className={`pop-browse__btn-browse ${mode !== "browse" && "_hide"}`}
              >
                <div className="btn-group">
                  <button
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={() => setMode("edit")}
                  >
                    Редактировать задачу
                  </button>
                  <button
                    className="btn-browse__delete _btn-bor _hover03"
                    onClick={() => {
                      removeTask(card?._id);
                      setDate(null);
                      navigate("/");
                    }}
                  >
                    Удалить задачу
                  </button>
                </div>
                <button
                  className="btn-browse__close _btn-bg _hover01"
                  onClick={handleClose}
                >
                  Закрыть
                </button>
              </div>
              <div
                className={`pop-browse__btn-edit ${mode !== "edit" && "_hide"}`}
              >
                <div className="btn-group">
                  <button
                    className="btn-edit__edit _btn-bg _hover01"
                    onClick={() => {
                      const dt = new Date();
                      updateTask(
                        {
                          title: card?.title,
                          topic: card?.topic,
                          status,
                          description,
                          date,
                        },
                        card._id,
                      );
                      setDate(null);
                      navigate("/");
                    }}
                  >
                    Сохранить
                  </button>
                  <button
                    className="btn-edit__edit _btn-bor _hover03"
                    onClick={() => {
                      setMode("browse");
                      setStatus(card?.status);
                    }}
                  >
                    Отменить
                  </button>
                  <button
                    className="btn-edit__delete _btn-bor _hover03"
                    id="btnDelete"
                    onClick={() => {
                      removeTask(card?._id);
                      setDate(null);
                      navigate("/");
                    }}
                  >
                    Удалить задачу
                  </button>
                </div>
                <button
                  className="btn-edit__close _btn-bg _hover01"
                  onClick={handleClose}
                >
                  Закрыть
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
