import React, { Component } from "react";
import classes from "./Face.module.css";
import portait from "./portait.jpg";

class Face extends Component {
  render() {
    return (
      <div>
        <span className={classes.Title}>Hi i'm Adrien!</span>
        <p>
          I am a Software Engineering student currently studying at Concordia
          University, Montreal, Canada
        </p>
        <p>
          I am passionate about web development, app development, operating
          systems, and softare engineering
        </p>
        <p>
          This is my personal webiste I made using the React framework. On this
          site you can navigate to my Blog and view my Resume.
        </p>

        <img className={classes.Portrait} src={portait} alt="my face"></img>
      </div>
    );
  }
}

export default Face;
