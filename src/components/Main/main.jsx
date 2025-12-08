import "../../App.css";
import Column from "../Column/Column.jsx";

function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              <Column>Без статуса</Column>
              <Column>Нужно сделать</Column>
              <Column>В работе</Column>
              <Column>Тестирование</Column>
              <Column>Готово</Column>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
