import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div>
      <NavLink exact={true} activeClassName="is-active" to="/">
        Dashboard
      </NavLink>
      <NavLink exact={true} activeClassName="is-active" to="/create">
        Create Expense
      </NavLink>
      <NavLink exact={true} activeClassName="is-active" to="/help">
        Help
      </NavLink>
    </div>
  </header>
);

export default Header;
