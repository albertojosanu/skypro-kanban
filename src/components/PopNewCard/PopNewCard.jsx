import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar.jsx";
import { GlobalStyle } from "../../index.styled.js";
import { TaskContext } from "../../context/TaskContext.js";

function PopNewCard() {
  const { addNewTask, date, setDate, loading, setError } = useContext(TaskContext);

  useEffect(() => {
    setDate(new Date());
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    text: "",
  });

  const [topic, setTopic] = useState("Web Design");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let message = "Введите";

  const navigate = useNavigate();
  const handleCreate = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.text) {
      if (!formData.name) {
        message = message + " название";
      }

      if (!formData.text) {
        if (!formData.name) {
          message = message + " и";
        }
        message = message + " описание";
      }

      message = message + " задачи";
      setError(message);
      message = "Введите";
      return;
    }

    addNewTask({
      title: formData.name,
      topic,
      status: "Без статуса",
      description: formData.text,
      date,
    });
    setError("")
    setDate(null);
    navigate("/");
  };

  return (
    !loading && (
      <>
        <GlobalStyle />
        <div className="pop-new-card" id="popNewCard">
          <div className="pop-new-card__container">
            <div className="pop-new-card__block">
              <div className="pop-new-card__content">
                <h3 className="pop-new-card__ttl">Создание задачи</h3>
                <Link to="/" className="pop-new-card__close" onClick={() => setError("")}>
                  &#10006;
                </Link>
                <div className="pop-new-card__wrap">
                  <form
                    className="pop-new-card__form form-new"
                    id="formNewCard"
                    action="#"
                  >
                    <div className="form-new__block">
                      <label htmlFor="formTitle" className="subttl">
                        Название задачи
                      </label>
                      <input
                        className="form-new__input"
                        type="text"
                        name="name"
                        id="formTitle"
                        placeholder="Введите название задачи..."
                        autoFocus
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-new__block">
                      <label htmlFor="textArea" className="subttl">
                        Описание задачи
                      </label>
                      <textarea
                        className="form-new__area"
                        name="text"
                        id="textArea"
                        placeholder="Введите описание задачи..."
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </form>
                  <div className="pop-new-card__calendar">
                    <Calendar />
                  </div>
                </div>
                <div className="pop-new-card__categories categories">
                  <p className="categories__p subttl">Категория</p>
                  <div className="categories__themes">
                    <div
                      className={`categories__theme _orange ${topic === "Web Design" && " _active-category"}`}
                      onClick={() => setTopic("Web Design")}
                    >
                      <p className="_orange">Web Design</p>
                    </div>
                    <div
                      className={`categories__theme _green ${topic === "Research" && " _active-category"}`}
                      onClick={() => setTopic("Research")}
                    >
                      <p className="_green">Research</p>
                    </div>
                    <div
                      className={`categories__theme _purple ${topic === "Copywriting" && " _active-category"}`}
                      onClick={() => setTopic("Copywriting")}
                    >
                      <p className="_purple">Copywriting</p>
                    </div>
                  </div>
                </div>
                <button
                  className="form-new__create _hover01"
                  id="btnCreate"
                  onClick={handleCreate}
                >
                  Создать задачу
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default PopNewCard;
