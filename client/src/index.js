import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import * as serviceWorker from "./serviceWorker";
import storeConfig from "./store/storeConfig";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = storeConfig();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
