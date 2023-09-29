import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
// import { store } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <AuthContextProvider>
    <ReduxProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ReduxProvider>
      </AuthContextProvider>
  </React.StrictMode>
);
