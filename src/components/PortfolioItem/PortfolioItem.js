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
        alt={props.title}
      ></img>
      <div className={classes.Skills}>
        <h3 style={{ marginLeft: "20px" }}>Technologies Used</h3>
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
