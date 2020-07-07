import React from "react";
import classes from "./TerminalBar.module.css";

const terminalBar = (props) => {
  return (
    <div className={classes.Bar}>
      <div className={classes.Buttons}>
        <span className={classes.Circle} />
        <span className={classes.Circle} />
        <span className={classes.Circle} />
      </div>

      <div className={classes.Title}>{props.username}@blog:~</div>
    </div>
  );
};

export default terminalBar;
