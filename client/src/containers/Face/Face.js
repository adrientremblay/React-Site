import React, { Component } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import classes from "./Face.module.css";
import IconButton from "../../components/IconButton/IconButton";
import Title from "../../components/Title/Title";

class Face extends Component {
  render() {
    return (
      <div>
        <Typist>
          <Title>Hi i'm Adrien</Title>
          I am a Software Engineering student currently studying at Concordia
          University, Montreal, Canada
          <br />
          <br />
          My interests range from web development, to game development, to
          operating systems, to anything computer science. I'm also an avid
          runner, reader, and singer. See my
          <hr />
          <IconButton
            href="https://github.com/adrientremblay"
            icon={["fab", "github"]}
          />
          <IconButton
            href="https://www.linkedin.com/in/adrientremblay/"
            icon={["fab", "linkedin"]}
          />
          <IconButton href="mailto:adrien@adrientremblay.com" icon="at" />
        </Typist>
      </div>
    );
  }
}

export default Face;
