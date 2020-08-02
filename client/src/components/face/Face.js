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
          I study Software Engineering at Concordia University in Montreal,
          Canada.
          <br />
          <br />
          I'm interested in web development
          <Typist.Backspace count={15} delay={500} />
          game development
          <Typist.Backspace count={16} delay={300} />
          operating systems
          <Typist.Backspace count={17} delay={300} />
          anything computer science :) I'm also an avid runner, reader, and
          singer. See my...
          <hr />
        </Typist>

        <CSSTransition
          in={this.state.showIcons}
          timeout={1000}
          classNames="icons"
          unmountOnExit
        >
          <div style={{ marginTop: "2rem" }}>
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
