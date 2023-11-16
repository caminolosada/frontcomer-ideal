import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import "@fontsource/montserrat";
import { store } from "./store";
import { Router } from "../src/router/WebRouter.routes";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>
);
