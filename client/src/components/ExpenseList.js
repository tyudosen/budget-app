import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem.js";
import selectExpense from "../selectors/expenses";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <ExpenseListFilters />
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpense(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
