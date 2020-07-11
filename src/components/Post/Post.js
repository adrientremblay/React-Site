import React from "react";
import classes from "./Post.module.css";
import TerminalBar from "./TerminalBar/TerminalBar";
import Draggable from "react-draggable";

const post = (props) => {
  return (
    <Draggable>
      <div className={classes.Post}>
        <TerminalBar username={props.author} />
        <span className={classes.Title}>{props.title}</span>
        <div className={classes.info}>
          <ul>
            <li>Date: {props.date}</li>
            <li>Description: {props.desc}...</li>
          </ul>
        </div>
      </div>
    </Draggable>
  );
};

export default post;
