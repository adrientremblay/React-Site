import React, { Component } from "react";
import Posts from "./Posts";
import Title from "../Title";
import PostEditor from "./PostEditor";
import BlogTerminal from "./BlogTerminal";

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <Title>Adrien's Blog</Title>
        <p>
          You're gonna have to figure out this <i>weird terminal thing</i> to
          see my posts...
        </p>
        {/* <Posts /> */}
        {/* <PostEditor></PostEditor> */}
        <BlogTerminal />
      </div>
    );
  }
}

export default Blog;
