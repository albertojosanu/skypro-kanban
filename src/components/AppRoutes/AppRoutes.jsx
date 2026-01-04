import { useState, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage.jsx";
import SignInPage from "../../pages/SignIn.jsx";
import SignUpPage from "../../pages/SignUp.jsx";
import SignOutPage from "../../pages/SignOut.jsx";
import NewTaskPage from "../../pages/NewTask.jsx";
import ViewTaskPage from "../../pages/ViewTask.jsx";
import NotFoundPage from "../../pages/NotFound.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import { getTasks } from "../../services/api.js";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("userInfo"));
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const updateTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getTasks({
        token: JSON.parse(localStorage.getItem("userInfo")).token,
      });
      if (data) setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);



  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route
          path="/"
          element={<MainPage loading={loading} tasks={tasks} error={error} updateTasks={updateTasks} />}
        >
          <Route path="/card/add" element={<NewTaskPage />} />
          <Route path="/card/:id" element={<ViewTaskPage tasks={tasks} />} />
          <Route
            path="/exit"
            element={
              <SignOutPage
                setIsAuth={setIsAuth}
                setTasks={setTasks}
                setError={setError}
              />
            }
          />
        </Route>
      </Route>
      <Route path="/login" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
