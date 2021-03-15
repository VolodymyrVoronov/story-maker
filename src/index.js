import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./redux/store";

import App from "./components/App/App";

import GlobalStyles from "./styles/globalStyles";

ReactDOM.render(
  <React.Fragment>
    <HashRouter>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.Fragment>,
  document.getElementById("root")
);
