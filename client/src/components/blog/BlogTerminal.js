import React, { Component } from "react";
import Terminal from "react-console-emulator";
import axios from "axios";

class BlogTerminal extends Component {
  constructor(props) {
    super(props);
    this.terminal = React.createRef();
  }

  commands = {
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: function () {
        return `${Array.from(arguments).join(" ")}`;
      },
    },
    ls: {
      description: "List all posts",
      usage: "ls",
      fn: () => {
        const terminal = this.terminal.current;
        axios.get("/api/posts").then((request) => {
          const posts = request.data;
          terminal.pushToStdout("foo");
          terminal.pushToStdout("bar");
        });

        return "waiting for results";
      },
    },
  };

  render() {
    return (
      <Terminal
        ref={this.terminal}
        commands={this.commands}
        welcomeMessage={"Welcome to the React terminal!"}
        promptLabel={"user@adriensblog:~$"}
      />
    );
  }
}

export default BlogTerminal;
