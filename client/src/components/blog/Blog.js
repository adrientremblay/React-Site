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
        {/* <Posts />
        <PostEditor></PostEditor> */}
        <BlogTerminal />
      </div>
    );
  }
}

export default Blog;
