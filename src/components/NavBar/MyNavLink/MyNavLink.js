import React from "react";
import classes from "./MyNavLink.module.css";
import { NavLink } from "react-router-dom";

const myNavLink = (props) => {
  return (
    <NavLink
      style={{ textDecoration: "none" }}
      exact
      activeClassName={classes.Active}
      to={props.to}
    >
      <div className={classes.LinkBox}>{props.name}</div>
    </NavLink>
  );
};

export default myNavLink;
