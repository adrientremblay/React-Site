import React, { Component } from "react";
import classes from "./Face.module.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../../components/IconButton/IconButton";
import Title from "../../components/Title/Title";

class Face extends Component {
  render() {
    return (
      <div>
        <Title>Hi i'm Adrien</Title>
        <p>
          I am a Software Engineering student currently studying at Concordia
          University, Montreal, Canada
        </p>
        <p>
          My interests range from web development, to game development, to
          operating systems.
        </p>
        <p>See my:</p>

        <IconButton href="https://github.com/adrientremblay" icon={faGithub} />
        <IconButton
          href="https://www.linkedin.com/in/adrientremblay/"
          icon={faLinkedin}
        />
        <IconButton href="mailto:adrien@adrientremblay.com" icon={faAt} />
      </div>
    );
  }
}

export default Face;
