import React from "react";
import NavLink from "./NavLink/NavLink";
import classes from "./NavBar.module.css";

const navBar = (props) => {
  return (
    <header className={classes.NavBar}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </nav>
    </header>
  );
};

export default navBar;
