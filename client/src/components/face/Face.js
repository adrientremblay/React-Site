import React, { Component } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import IconButton from "./IconButton";
import Title from "../Title";

class Face extends Component {
  state = {
    showIcons: false,
  };

  render() {
    return (
      <div>
        <Title>Hi i'm Adrien</Title>
        <Typist
          onTypingDone={() => {
            this.setState({ showIcons: true });
          }}
        >
          <br />
          <br />
          <Typist.Delay ms={3000} />
          I am a Software Engineering student currently studying at Concordia
          University, Montreal, Canada
          <br />
          <br />
          My interests range from web development, to game development, to
          operating systems, to anything computer science. I'm also an avid
          runner, reader, and singer. See my
          <hr />
        </Typist>

        {this.state.showIcons ? (
          <div>
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
        ) : null}
      </div>
    );
  }
}

export default Face;
