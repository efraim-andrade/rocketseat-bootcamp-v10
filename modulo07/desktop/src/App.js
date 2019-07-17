import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./config/ReactotronConfig";
import history from "./services/history";

import store from "./store";
import Routes from "./router";
import Header from "./components/Header";
import GlobalStyles from "./styles/global";

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />

        <Header />

        <Routes />

        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}
