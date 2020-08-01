import React, { Component } from "react";
// import classes from "./Face.module.css";
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
          operating systems, to anything computer science.
        </p>
        <p>I'm also an avid runner, reader, and singer.</p>
        <p>See my</p>

        <IconButton
          href="https://github.com/adrientremblay"
          icon={["fab", "github"]}
        />
        <IconButton
          href="https://www.linkedin.com/in/adrientremblay/"
          icon={["fab", "linkedin"]}
        />
        <IconButton href="mailto:adrien@adrientremblay.com" icon="at" />
      </div>
    );
  }
}

export default Face;
