import React, { Component } from "react";
import classes from "./Face.module.css";

class Face extends Component {
  render() {
    return (
      <div>
        <span className={classes.Title}>Hi my name is Adrien Tremblay</span>
      </div>
    );
  }
}

export default Face;
