import React from "react";
import classes from "./PortfolioItem.module.css";

const portfolioItem = (props) => {
  return (
    <div className={classes.Item}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <img
        className={classes.Image}
        src={require("../../../public/images/" + props.imgName)}
      ></img>
      <div className={classes.Skills}>
        <ul>
          <h3>Technologies Used</h3>
          {props.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default portfolioItem;
