import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage.jsx";
import SignInPage from "../../pages/SignIn.jsx";
import SignUpPage from "../../pages/SignUp.jsx";
import SignOutPage from "../../pages/SignOut.jsx";
import NewTaskPage from "../../pages/NewTask.jsx";
import ViewTaskPage from "../../pages/ViewTask.jsx";
import NotFoundPage from "../../pages/NotFound.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={Boolean(localStorage.getItem('auth'))} />}>   
        <Route path="/" element={<MainPage />}>
          <Route path="/card/add" element={<NewTaskPage />} />
          <Route path="/card/:id" element={<ViewTaskPage />} />
          <Route path="/exit" element={<SignOutPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<SignInPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
