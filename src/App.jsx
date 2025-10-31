import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";
import PopExit from "./components/PopUser/PopUser.jsx";

function App() {
  return (
    <>
      <div className="wrapper">
        {/* pop-up start */}

        <PopExit />
        <PopNewCard />
        <PopBrowse />

        {/* pop-up end */}

        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
