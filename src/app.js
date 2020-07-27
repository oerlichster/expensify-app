import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selector/expenses";
const store = configureStore();

console.log(store.getState());

const expense1 = store.dispatch(
  addExpense({ note: "rent", amount: 5000, createdAt: 10000, description: "Rent" })
);
const expense2 = store.dispatch(
  addExpense({ note: "coffee", amount: 200, createdAt: -1000 })
);
const expense3 = store.dispatch(
  addExpense({
    note: "",
    amount: 100,
    createdAt: 1000,
    description: "Gas Bill",
  })
);


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
