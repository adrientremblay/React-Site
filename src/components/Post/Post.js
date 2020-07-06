import React from "react";
import classes from "./Post.module.css";

const post = (props) => {
  return (
    <div className={classes.Post}>
      <span className={classes.Title}>{props.title}</span>
      <div className={classes.info}>
        <ul>
          <li>Date: {props.date}</li>
          <li>Description: {props.desc}</li>
        </ul>
      </div>
    </div>
  );
};

export default post;
