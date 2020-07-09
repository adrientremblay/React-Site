import React, { Component } from "react";
import classes from "./Face.module.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import IconButton from "../../components/IconButton/IconButton";

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

        <IconButton
          href="https://github.com/adrientremblay"
          icon={faGithub}
        ></IconButton>
      </div>
    );
  }
}

export default Face;
