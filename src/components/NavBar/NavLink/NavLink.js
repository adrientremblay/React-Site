import React from "react";
import classes from "./NavLink.module.css";
import { Link } from "react-router-dom";

const navLink = (props) => {
  return (
    <div className={classes.NavLink}>
      <Link className={classes.Link} to={props.to}>
        {props.children}
      </Link>
    </div>
  );
};

export default navLink;
