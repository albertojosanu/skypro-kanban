import "./App.css";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";
import AuthProvider from "./context/AuthProvider.jsx";
import TaskProvider from "./context/TaskProvider.jsx";

export const colors = {
  "Web Design": ["#ffe4c2", "#ff6d00", "_orange"],
  Research: ["#b4fdd1", "#06b16e", "_green"],
  Copywriting: ["#e9d4ff", "#9a48f1", "_purple"],
  Unknown: ["#94a6be", "#ffffff", "_gray"],
};

function App() {
  function shouldForwardProp(propName, target) {
    if (typeof target === "string") {
      return isPropValid(propName);
    }
  }
  return (
    <>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <AuthProvider>
          <TaskProvider>
            <AppRoutes />
          </TaskProvider>
        </AuthProvider>
      </StyleSheetManager>
    </>
  );
}

export default App;
