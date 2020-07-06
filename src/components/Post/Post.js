import React from "react";
import classes from "./Post.module.css";

const post = (props) => {
  return (
    <div className={classes.Post}>
      <h4>{props.title}</h4>
      <div className={classes.info}>
        <ul>
          <li>Author: {props.author}</li>
          <li>Date: {props.date}</li>
          <li>Description: {props.desc}</li>
        </ul>
      </div>
    </div>
  );
};

export default post;
