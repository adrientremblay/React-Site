import React, { Component } from "react";
import Terminal from "react-console-emulator";
import axios from "axios";
import draftToHtml from "draftjs-to-html";

class BlogTerminal extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.terminal = React.createRef();
  }

  componentDidMount() {
    axios.get("/api/posts").then((request) => {
      const posts = request.data;
      this.setState({ posts: posts });
    });
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
      description: "List all posts.",
      usage: "ls",
      fn: () => {
        // TODO: get rid of this terminal crap and just use '/n's
        const terminal = this.terminal.current;
        let { posts } = this.state;
        let count = 0;
        posts.forEach((post) => {
          terminal.pushToStdout(`[${count}] ${post.title}.txt`);
          count++;
        });
      },
    },
    open: {
      description: "Open a post by number.",
      usage: "open <int>",
      fn: (postNum) => {
        let { posts } = this.state;

        if (!postNum || isNaN(postNum)) return "Please enter a number.";
        if (Number.parseInt(postNum) >= posts.length)
          return "Please enter a valid number.";

        const post = posts[Number.parseInt(postNum)];
        const html = draftToHtml(JSON.parse(post.description));
        return html;
      },
    },
  };

  render() {
    return (
      <Terminal
        ref={this.terminal}
        commands={this.commands}
        // welcomeMessage={"Welcome to the React terminal!"}
        promptLabel={"user@adriensblog:~$"}
        dangerMode={true}
      />
    );
  }
}

export default BlogTerminal;
