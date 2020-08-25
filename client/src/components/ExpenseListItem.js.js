import React from "react";
import { connect } from "react-redux";

import selectExpenses from "../selectors/expenses";
import moment from "moment";
import { Link } from "react-router-dom";

const ExpenseListItem = (props) => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <h4>{props.description}</h4>
    </Link>
    <p>
      Amount: {props.amount} - createdAt:{" "}
      {moment(props.createdAt).format("MMM Do yyyy")}
    </p>
  </div>
);

export default connect()(ExpenseListItem);
