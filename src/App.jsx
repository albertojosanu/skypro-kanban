import "./App.css";
import Header from "./components/Header/header.jsx";
import Main from "./components/Main/main.jsx";
import PopNewCard from "./components/PopNewCard/pop-new-card.jsx";
import PopBrowse from "./components/PopBrowse/pop-browse.jsx";
import PopExit from "./components/PopUser/pop-exit.jsx";

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
