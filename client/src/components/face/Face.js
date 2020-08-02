import React, { Component } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import { CSSTransition } from "react-transition-group";
import IconButton from "./IconButton";
import Title from "../Title";
import "./Face.css";

class Face extends Component {
  state = {
    showIcons: false,
  };

  turnIconsOn = () => {
    this.setState({ showIcons: true });
  };

  render() {
    return (
      <div>
        <Title>Hi i'm Adrien</Title>
        <Typist avgTypingDelay={40} onTypingDone={this.turnIconsOn}>
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

        <CSSTransition
          in={this.state.showIcons}
          timeout={1000}
          classNames="icons"
          unmountOnExit
        >
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
        </CSSTransition>
      </div>
    );
  }
}

export default Face;
