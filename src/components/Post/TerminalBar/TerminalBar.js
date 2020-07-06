import React from "react";
import classes from "./TerminalBar.module.css";

const terminalBar = (props) => {
  return (
    <div className={classes.Bar}>
      <div className={classes.Buttons}></div>

      <div className={classes.Title}></div>
    </div>
  );
};

export default terminalBar;
