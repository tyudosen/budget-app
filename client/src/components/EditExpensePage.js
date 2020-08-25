import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { editExpense } from "../actions/expenses";

const EditExpensePage = (props) => (
  <div>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push("/");
      }}
    />
    <button
      onClick={(e) => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push("/");
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

export default connect(mapStateToProps)(EditExpensePage);
