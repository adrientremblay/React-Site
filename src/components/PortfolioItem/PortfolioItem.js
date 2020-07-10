import React from "react";
import classes from "./PortfolioItem.module.css";

const portfolioItem = (props) => {
  return (
    <div className={classes.Item}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img
        className={classes.Image}
        src={require("../../../public/images/" + props.imgName)}
      ></img>
      <div className={classes.Skills}>
        <ul>
          {props.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default portfolioItem;
