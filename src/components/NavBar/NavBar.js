import React from "react";
import MyNavLink from "./MyNavLink/MyNavLink";
import classes from "./NavBar.module.css";

const navBar = (props) => {
  return (
    <header className={classes.NavBar}>
      <nav>
        <MyNavLink name="Home" to="/" />
        <MyNavLink name="Blog" to="/blog" />
        <MyNavLink name="Skills" to="/skills" />
        <MyNavLink name="Resume" to="/resume" />
        <MyNavLink name="Contact" to="/contact" />
      </nav>
    </header>
  );
};

export default navBar;
