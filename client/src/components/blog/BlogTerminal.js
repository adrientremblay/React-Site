import React, { Component } from "react";
import Terminal from "react-console-emulator";

const commands = {
  echo: {
    description: "Echo a passed string.",
    usage: "echo <string>",
    fn: function () {
      return `${Array.from(arguments).join(" ")}`;
    },
  },
};

class BlogTerminal extends Component {
  render() {
    return (
      <Terminal
        commands={commands}
        welcomeMessage={"Welcome to the React terminal!"}
        promptLabel={"user@adriensblog:~$"}
      />
    );
  }
}

export default BlogTerminal;
