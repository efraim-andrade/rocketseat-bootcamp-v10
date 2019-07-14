import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./config/ReactotronConfig";

import store from "./store";
import Routes from "./router";
import Header from "./components/Header";
import GlobalStyles from "./styles/global";

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />

      <BrowserRouter>
        <Header />

        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
