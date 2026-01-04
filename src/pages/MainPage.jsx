import { Outlet } from "react-router-dom";
import Main from "../components/Main/Main.jsx";
import Header from "../components/Header/Header.jsx";
import { SWrapper } from "../index.styled.js";

const MainPage = ({ loading, tasks, error, updateTasks }) => {
  return (
    <>
      <SWrapper>
        <Header />
        <Main loading={loading} tasks={tasks} error={error} updateTasks={updateTasks} />
        <Outlet />
      </SWrapper>
    </>
  );
};

export default MainPage;
